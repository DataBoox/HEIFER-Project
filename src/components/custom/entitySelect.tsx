import { PrimarySelect, PrimarySelectProp } from 'components';

interface EntitySelectProps extends PrimarySelectProp {

}
export const EntitySelect: React.FC<EntitySelectProps> = ({
    ...rest
}) => {
    return (
        <PrimarySelect
            {...rest}
        >
            <option value="savings">Savings</option>
            <option value="loans">Loans</option>
            <option value="no">No</option>
        </PrimarySelect>
    )
}