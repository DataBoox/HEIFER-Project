import { PrimarySelect, PrimarySelectProp } from "components";

interface ProjectSelectProps extends PrimarySelectProp {}
export const ProjectSelect: React.FC<ProjectSelectProps> = ({ ...rest }) => {
  return (
    <PrimarySelect label="Project" placeholder="Select project" {...rest}>
      <option value="rice">Rice Value Chain</option>
      <option value="tomato">Tomato Value Chain</option>
      <option value="poultry">Poultry Value Chain</option>
    </PrimarySelect>
  );
};
