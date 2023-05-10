import { PrimarySelect, PrimarySelectProp } from 'components';
import { countries } from 'country-list-json';


interface DefaultCountryType {
    name: string;
    code: string
}
interface CountryListSelectProps extends PrimarySelectProp {
    onChangeCountry?: (country: string) => void;
    onChangeCode?: (code: string) => void;
}
export const CountryListSelect: React.FC<CountryListSelectProps> = ({
    onChangeCountry = () => {},
    onChangeCode = () => { },
    ...rest
}) => {

    const initOnChange = (c:string) => {
        const split = c.split('-');
        // console.log(split)
        if(split.length > 1){
            onChangeCode(split[0])
            onChangeCountry(split[1])
        }   
    }

    return (
        <PrimarySelect
            label="Country"
            placeholder="Select country"
            onChange={({ target }) => initOnChange(target.value)}
            {...rest}
        >
            {(countries as DefaultCountryType[]).map((item, index) => (
                <option value={`${item.code}-${item.name}`} key={index}>
                    {item.code} - {item.name}
                </option>
            ))}
        </PrimarySelect>
    )
}