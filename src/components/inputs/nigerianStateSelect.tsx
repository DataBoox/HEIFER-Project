import { PrimarySelect, PrimarySelectProp } from "components";
interface NigerianStateType {
  name: string;
}

const nigerianStates: NigerianStateType[] = [
  { name: "Abia" },
  { name: "Adamawa" },
  { name: "Akwa Ibom" },
  { name: "Anambra" },
  { name: "Bauchi" },
  { name: "Bayelsa" },
  { name: "Benue" },
  { name: "Borno" },
  { name: "Cross River" },
  { name: "Delta" },
  { name: "Ebonyi" },
  { name: "Edo" },
  { name: "Ekiti" },
  { name: "Enugu" },
  { name: "Gombe" },
  { name: "Imo" },
  { name: "Jigawa" },
  { name: "Kaduna" },
  { name: "Kano" },
  { name: "Katsina" },
  { name: "Kebbi" },
  { name: "Kogi" },
  { name: "Kwara" },
  { name: "Lagos" },
  { name: "Nasarawa" },
  { name: "Niger" },
  { name: "Ogun" },
  { name: "Ondo" },
  { name: "Osun" },
  { name: "Oyo" },
  { name: "Plateau" },
  { name: "Rivers" },
  { name: "Sokoto" },
  { name: "Taraba" },
  { name: "Yobe" },
  { name: "Zamfara" },
];

interface NigerianStateSelectProps extends PrimarySelectProp {
  onChangeState?: (state: string) => void;
}

export const NigerianStateSelect: React.FC<NigerianStateSelectProps> = ({
  onChangeState = () => {},
  ...rest
}) => {
  return (
    <PrimarySelect
      label="State"
      placeholder="Select state"
      onChange={({ target }) => onChangeState(target.value)}
      {...rest}
    >
      {nigerianStates.map((item, index) => (
        <option value={item.name} key={index}>
          {item.name}
        </option>
      ))}
    </PrimarySelect>
  );
};
