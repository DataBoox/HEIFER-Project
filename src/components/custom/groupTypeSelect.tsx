import { PrimarySelect, PrimarySelectProp } from "components";

interface GroupTypeSelectProps extends PrimarySelectProp {}
export const GroupTypeSelect: React.FC<GroupTypeSelectProps> = ({
  ...rest
}) => {
  return (
    <PrimarySelect
      label="What type of group?"
      placeholder="Select your answer..."
      {...rest}
    >
      <option value="Village Savings and loans association -VSLA">Village Savings and loans association -VSLA</option>
      <option value="Farmers Cooperative">Farmers Cooperative</option>
      <option value="Association">Association</option>
      <option value="Self Help Group">Self Help Group</option>
      <option value="CSO">CSO</option>
    </PrimarySelect>
  );
};
