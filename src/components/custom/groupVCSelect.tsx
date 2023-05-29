import { PrimarySelect, PrimarySelectProp } from "components";

interface GroupVCSelectProps extends PrimarySelectProp {}
export const GroupVCSelect: React.FC<GroupVCSelectProps> = ({ ...rest }) => {
  return (
    <PrimarySelect
      label="Group Vice Chairman"
      placeholder="Select vice chairman"
      {...rest}
    >
      <option value="rice">Adeyemi Bourdillon</option>
      <option value="tomato">Adamu Ednut</option>
      <option value="poultry">Alani Coker</option>
      <option value="poultry">Dele Powell</option>
      <option value="poultry">Ajayi Townsend</option>
    </PrimarySelect>
  );
};
