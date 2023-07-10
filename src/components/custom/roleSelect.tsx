import { PrimarySelect, PrimarySelectProp } from "components";

interface RoleSelectProps extends PrimarySelectProp {}
export const RoleSelect: React.FC<RoleSelectProps> = ({ ...rest }) => {
  return (
    <PrimarySelect label="Role" placeholder="Select role" {...rest}>
      <option value="project_manager">Project Manager </option>
      <option value="state_coordinator">State Coordinator </option>
      <option value="community_facilitator">Community Facilitator </option>
    </PrimarySelect>
  );
};
