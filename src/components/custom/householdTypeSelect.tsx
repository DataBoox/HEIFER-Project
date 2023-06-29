import { PrimarySelect, PrimarySelectProp } from "components";

interface HouseholdTypeSelectProps extends PrimarySelectProp {}
export const HouseholdTypeSelect: React.FC<HouseholdTypeSelectProps> = ({
  ...rest
}) => {
  return (
    <PrimarySelect
      label="Type of Household"
      placeholder="Select household type"
      {...rest}
    >
      <option value="Original Group">Original Group</option>
      <option value="Passing On The Gift (POG)">Passing On The Gift (POG)</option>
      <option value="Direct Accelerate">Direct Accelerate</option>
      <option value="Unplanned">Unplanned</option>
    </PrimarySelect>
  );
};
