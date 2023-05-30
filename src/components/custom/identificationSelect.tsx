import { PrimarySelect, PrimarySelectProp } from "components";

interface IdentificationSelectProps extends PrimarySelectProp {}
export const IdentificationSelect: React.FC<IdentificationSelectProps> = ({
  ...rest
}) => {
  return (
    <PrimarySelect
      label="Do you have a valid means of identification?"
      placeholder="Select your answer..."
      {...rest}
    >
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </PrimarySelect>
  );
};
