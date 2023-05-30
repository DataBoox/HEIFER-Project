import { PrimarySelect, PrimarySelectProp } from "components";

interface AgeCategorySelectProps extends PrimarySelectProp {}
export const AgeCategorySelect: React.FC<AgeCategorySelectProps> = ({
  ...rest
}) => {
  return (
    <PrimarySelect
      label="What is the farmer's age category?"
      placeholder="Select age category"
      {...rest}
    >
      <option value="15-17">15 - 17 years</option>
      <option value="18-24">18 - 24 years</option>
      <option value="25-35">25 - 35 years</option>
      <option value="36">Above 36 years</option>
    </PrimarySelect>
  );
};
