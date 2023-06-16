import { PrimarySelect, PrimarySelectProp } from 'components';

interface YesNoSelectProps extends PrimarySelectProp {

}
export const YesNoSelect: React.FC<YesNoSelectProps> = ({
    ...rest
}) => {
    return (
        <PrimarySelect
            {...rest}
        >
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </PrimarySelect>
    )
}