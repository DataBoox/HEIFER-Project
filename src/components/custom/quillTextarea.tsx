import { PrimaryInputWrapper, PrimaryInputWrapperProp } from "components/inputs"
import { QuillOptionsStatic } from "quill";
import { useEffect } from "react";
import { useQuill } from "react-quilljs";

export interface CustomQuillTextareaProps extends PrimaryInputWrapperProp {
    minHeight?: string | number;
    value?: string;
    editorOptions?: QuillOptionsStatic,
    onChange?: (value: string) => void;
}

export const CustomQuillTextarea: React.FC<CustomQuillTextareaProps> = ({
    minHeight,
    value,
    editorOptions,
    onChange = () => { },
    ...rest
}) => {
    const { quill, quillRef } = useQuill({
        modules: {
            toolbar: [
                // I have removed the 'image' and 'video' options from the toolbar
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ direction: "rtl" }],
                [{ font: [] }],
                [{ clean: "removeFormat" }],
            ],
        },
        // You can also remove the image and video modules from the editor options
        formats: [
            "header",
            "bold",
            "italic",
            "underline",
            "strike",
            "list",
            "bullet",
            "indent",
            "align",
            "color",
            "background",
        ],
        ...editorOptions
    });

    useEffect(() => {
        // console.log(quill?.root?.innerHTML, quill?.root.innerHTML.replace(/<[^>]*>?/gm, '').length);
        if (value && quill && (!quill.root.innerHTML || !quill.root.innerHTML.replace(/<[^>]*>?/gm, '').length)) {
            quill.clipboard.dangerouslyPasteHTML(value);
        }
    }, [quill, value]);

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                // console.log('Text change!');
                // console.log(quill.getText()); // Get text only
                // console.log(quill.getContents()); // Get delta contents
                // console.log(quill.root.innerHTML); // Get innerHTML using quill
                // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
                onChange(quill.root.innerHTML);
            });
        }
    }, [quill, onChange]);

    return (
        <PrimaryInputWrapper {...rest}>
            <div style={{ height: 'auto', minHeight, marginBottom: '65px', width: "100%" }}>
                <div ref={quillRef}></div>
            </div>
        </PrimaryInputWrapper>
    )
}