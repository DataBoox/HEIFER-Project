import { PrimarySelect, PrimarySelectProp } from 'components';

interface MeasurementUnitSelectProps extends PrimarySelectProp {

}
export const MeasurementUnitSelect: React.FC<MeasurementUnitSelectProps> = ({
    ...rest
}) => {
    return (
        <PrimarySelect
            {...rest}
        >
            <option value="Kg">Kg</option>
            <option value="Basin">Basin</option>
            <option value="Bag">Bag</option>
        </PrimarySelect>
    )
}