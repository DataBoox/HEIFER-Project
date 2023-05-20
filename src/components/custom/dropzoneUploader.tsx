import { Spinner, TagRightIcon, useToast } from "@chakra-ui/react";
import { BaseUpload, useAddUploadMutation, useDeleteUploadMutation } from "store/uploads";
import { resolveApiError } from "utilities";
import { PrimaryDropzone, PrimaryDropzoneProp, PrimaryDropzoneFile, PrimaryDropzoneItemProps, DropzoneFile } from "components/inputs"
import { useCallback, useEffect, useState } from "react";
import { MdUpload } from "react-icons/md";

export interface DropzoneBaseUpload extends BaseUpload {
    index: number;
    name: string;
    file: File;

}
export interface DropzoneUploaderItemProps extends PrimaryDropzoneItemProps {
    isUploaded?: boolean;
    onUpload?: (value: DropzoneBaseUpload) => void;
    uploadFolder?: string;
    setDeleting?: (status: boolean) => void,
    setUploading?: (status: boolean) => void,
}

export interface DropzoneUploaderProps extends PrimaryDropzoneProp {
    onUploadChange?: (value: DropzoneBaseUpload[]) => void;
    uploadFolder?: string;
}
export const DropzoneUploader: React.FC<DropzoneUploaderProps> = ({
    onUploadChange = () => { },
    uploadFolder,
    ...rest
}) => {
    const [uploaded, setUploaded] = useState<DropzoneBaseUpload[]>([]);

    useEffect(() => {
        onUploadChange(uploaded);
    }, [uploaded, onUploadChange])


    const onRemoveFile = (index: number, file: DropzoneFile, remove: (file: DropzoneFile) => void = () => { }) => {
        setUploaded(uploaded.filter((item) => item.index !== index));
        remove(file);
    }



    return (
        <PrimaryDropzone
            {...rest}
            canEditFileName={true}
            dropzoneUploadItem={(props) => (
                <DropzoneUploaderItem
                    {...props}
                    key={props.index}
                    uploadFolder={uploadFolder}
                    isUploaded={uploaded.some((item) => item.index === props.index)}
                    onUpload={(value) => setUploaded([...uploaded, value])}
                    onRemoveFile={(value) => onRemoveFile(props.index, value, props?.onRemoveFile)}
                />
            )}
        />
    )
}


export const DropzoneUploaderItem: React.FC<DropzoneUploaderItemProps> = ({
    index,
    file,
    isUploaded,
    uploadFolder,
    onUpload = () => { },
    onRemoveFile = () => { },
    onUpdateFile = () => { },
    setUploading = () => { },
    setDeleting = () => { },
    ...rest
}) => {
    const toast = useToast({ position: "top-right" });
    const [requestUpload, { isLoading: isUploading, error }] = useAddUploadMutation();
    const [requestDelete, { isLoading: isDeleting }] = useDeleteUploadMutation();

    const initUpload = useCallback(() => {
        const form = new FormData();
        form.append('folder', uploadFolder ?? '');
        form.append('uploads[]', file.data)

        requestUpload(form).unwrap().then((res) => {
            // console.log(res);
            onUpload({
                index,
                name: file.name,
                file: file.data,
                ...res.data[0]
            });
        }).catch((error) => {
            console.log(error);
            toast({
                title: "Request Failed",
                description: resolveApiError(error),
                status: "error"
            })
        });
    }, [file, index, onUpload, requestUpload, toast, uploadFolder]);

    const initDelete = () => {
        if (!isUploaded) return onRemoveFile(file);
        requestDelete({ uploads: [index] }).unwrap().catch((error) => {
            // console.log(error);
            toast({
                title: "Request Failed",
                description: resolveApiError(error),
                status: "error"
            })
        }).finally(() => {
            onRemoveFile(file);
        });
    }


    useEffect(() => {
        if (isUploaded || error) return;
        initUpload();
    }, [file, error, initUpload, isUploaded])

    useEffect(() => {
        onUpdateFile({ ...file, isUploading, isDeleting });
    }, [isUploading, isDeleting, file, onUpdateFile]);


    return (
        <PrimaryDropzoneFile
            {...rest}
            file={file}
            onRemoveFile={initDelete}
            canEditFileName={(!isUploading && !isDeleting) && rest.canEditFileName}
            closeButtonProps={{ as: (isDeleting) ? Spinner : undefined, isDisabled: isDeleting }}
            extraActionComponent={
                <>
                    {(!isUploaded) && (
                        <TagRightIcon
                            as={(isUploading) ? Spinner : MdUpload}
                            onClick={() => initUpload()}
                        />
                    )}
                </>
            }
        />
    )
}