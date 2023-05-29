import { PrimarySelect, PrimarySelectProp } from "components";

interface RoleSelectProps extends PrimarySelectProp {}
export const RoleSelect: React.FC<RoleSelectProps> = ({ ...rest }) => {
  return (
    <PrimarySelect label="Role" placeholder="Select role" {...rest}>
      <option value="project manager">Project Manager </option>
      <option value="state coordinator">State Coordinator </option>
      <option value="community facilitator">Community Facilitator </option>
    </PrimarySelect>
  );
};
