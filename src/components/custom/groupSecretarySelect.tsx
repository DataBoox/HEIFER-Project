import { PrimarySelect, PrimarySelectProp } from "components";

interface GroupSecretarySelectProps extends PrimarySelectProp {}
export const GroupSecretarySelect: React.FC<GroupSecretarySelectProps> = ({ ...rest }) => {
  return (
    <PrimarySelect
      label="Group Secretary"
      placeholder="Select secretary"
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
