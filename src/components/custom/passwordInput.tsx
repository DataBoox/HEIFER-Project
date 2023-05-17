import { PrimaryInputProp } from "components/inputs";
import { useState } from "react";
import { PrimaryInput } from '../inputs/default';
import { HiEye, HiEyeSlash } from "react-icons/hi2";

export const CustomPasswordInput = ({
    ...rest
}: PrimaryInputProp) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <PrimaryInput
        type={showPassword ? "text" : "password"}
        rightComponent={
          <div onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <HiEyeSlash className="svg-dark" />
            ) : (
              <HiEye className="svg-dark" />
            )}
          </div>
        }
        {...rest}
      />
    );
}