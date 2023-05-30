import { PrimarySelect, PrimarySelectProp } from "components";

interface MaritalStatusSelectProps extends PrimarySelectProp {}
export const MaritalStatusSelect: React.FC<MaritalStatusSelectProps> = ({
  ...rest
}) => {
  return (
    <PrimarySelect
      label="What is your marital status?"
      placeholder="Select marital status"
      {...rest}
    >
      <option value="single">Single</option>
      <option value="married">Married</option>
      <option value="widowed">Widowed</option>
      <option value="divorced">Divorced</option>
      <option value="separated">Separated</option>
    </PrimarySelect>
  );
};
