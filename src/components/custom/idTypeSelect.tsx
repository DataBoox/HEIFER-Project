import { PrimarySelect, PrimarySelectProp } from "components";

interface IdTypeSelectProps extends PrimarySelectProp {}
export const IdTypeSelect: React.FC<IdTypeSelectProps> = ({
  ...rest
}) => {
  return (
    <PrimarySelect
      label="What type of valid means of identification do you have?"
      placeholder="Select means of ID"
      {...rest}
    >
      <option value="voters card">Voters card</option>
      <option value="drivers license">Driver's License</option>
      <option value="national id card/slip">National ID card/Slip</option>
      <option value="international passport">International passport</option>
    </PrimarySelect>
  );
};
