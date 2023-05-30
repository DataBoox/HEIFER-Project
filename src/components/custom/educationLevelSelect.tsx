import { PrimarySelect, PrimarySelectProp } from "components";

interface EducationLevelSelectProps extends PrimarySelectProp {}
export const EducationLevelSelect: React.FC<EducationLevelSelectProps> = ({
  ...rest
}) => {
  return (
    <PrimarySelect
      label="What is the highest level of education of the household head?"
      placeholder="Select level of education"
      {...rest}
    >
      <option value="no formal education">No formal education</option>
      <option value="primary education">Primary education</option>
      <option value="secondary education">Secondary education</option>
      <option value="tertiary education">Tertiary education</option>
      <option value="qu'ranic education">Qu'ranic education</option>
      <option value="vocational education">Vocational education</option>
    </PrimarySelect>
  );
};
