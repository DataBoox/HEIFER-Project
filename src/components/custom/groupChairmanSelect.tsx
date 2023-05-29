import { PrimarySelect, PrimarySelectProp } from "components";

interface GroupChairmanSelectProps extends PrimarySelectProp {}
export const GroupChairmanSelect: React.FC<GroupChairmanSelectProps> = ({ ...rest }) => {
  return (
    <PrimarySelect label="Group Chairman" placeholder="Select chairman" {...rest}>
      <option value="rice">Adeyemi Bourdillon</option>
      <option value="tomato">Adamu Ednut</option>
      <option value="poultry">Alani Coker</option>
      <option value="poultry">Dele Powell</option>
      <option value="poultry">Ajayi Townsend</option>
    </PrimarySelect>
  );
};
