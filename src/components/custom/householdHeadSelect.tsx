import { PrimarySelect, PrimarySelectProp } from "components";

interface HouseholdHeadSelectProps extends PrimarySelectProp {}
export const HouseholdHeadSelect: React.FC<HouseholdHeadSelectProps> = ({
  ...rest
}) => {
  return (
    <PrimarySelect
      label="Are you the household head?"
      placeholder="Select your answer..."
      {...rest}
    >
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </PrimarySelect>
  );
};
