import { useToast } from "@chakra-ui/react";
import { CustomPasswordInput, PrimaryInput } from "components";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resolveApiError } from "utilities";
import { LoginValidationSchema } from "validations";

import { setCredential } from "../../store/auth";
import { useLoginMutation } from "../../store/auth/api";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast({ position: "top-right" });
  const [request, { isLoading }] = useLoginMutation();
  const { values, errors, handleSubmit, setFieldValue } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginValidationSchema,
    onSubmit: () => initRequest(),
  });
    
    const initRequest = () => {
      const payload: any = {
        ...values,
      };
    };
  return (
    <div className="App">
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-7 col-lg-7 bg-image rounded-left"></div>
          <div className="col-md-5 col-lg-5 bg-white rounded-right">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row g-4">
                  <div className="col-md-9 col-lg-8">
                    <h3 className="login-heading fs-1 fw-bold mb-4">
                      Welcome Back!
                    </h3>
                  </div>
                  <PrimaryInput
                    name={"email"}
                    label={"Email or Username"}
                    placeholder={"Enter Email or Username"}
                    value={values.email}
                    error={Boolean(errors.email)}
                    bottomText={errors.email}
                    onChange={({ target }) =>
                      setFieldValue("email", target.value)
                    }
                    style={{
                      backgroundColor: "#ffff",
                      borderRadius: 0,
                      border: 0,
                    }}
                  />

                  <CustomPasswordInput
                    name={"password"}
                    label={"Password"}
                    placeholder={"Password"}
                    value={values.password}
                    error={Boolean(errors.password)}
                    bottomText={errors.password}
                    onChange={({ target }) =>
                      setFieldValue("password", target.value)
                    }
                    style={{
                      backgroundColor: "#ffff",
                      borderRadius: 0,
                      border: 0,
                    }}
                  />

                  <div className="col-md-9 col-lg-8">
                    <button className="btn btn-primary mb-3" type="submit">
                      Sign In
                    </button>
                    <p className="text-muted">
                      Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
