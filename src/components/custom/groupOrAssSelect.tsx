import { PrimarySelect, PrimarySelectProp } from "components";

interface GroupOrAssSelectProps extends PrimarySelectProp {}
export const GroupOrAssSelect: React.FC<GroupOrAssSelectProps> = ({
  ...rest
}) => {
  return (
    <PrimarySelect
      label="Do you belong to any group or cooperative or association?"
      placeholder="Select your answer..."
      {...rest}
    >
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </PrimarySelect>
  );
};
