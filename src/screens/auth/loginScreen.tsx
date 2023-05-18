import { useToast } from "@chakra-ui/react";
import { CustomPasswordInput, PrimaryButton, PrimaryInput } from "components";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginValidationSchema } from "validations";
import logoImage from "../../assets/images/heifer nigeria.jpg";
import { resolveApiError } from "utilities";
import { setCredential, useLoginMutation } from "store/auth";

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast({ position: "top-right" });
    const [request, { isLoading }] = useLoginMutation();
    const { values, errors, handleSubmit, setFieldValue, touched } = useFormik({
        initialValues: { auth: "", password: "" },
        validationSchema: LoginValidationSchema,
        onSubmit: () => initRequest(),
    });

    const initRequest = () => {
        request(values).unwrap().then((res) => {
            dispatch(setCredential({ user: res.data.data, access_token: res.data.authorization.token }))

            toast({
                title: "Success",
                description: "Login Successful",
                status: "success",
                duration: 3000,
                isClosable: true,
            });

            navigate("/")
        }).catch((err) => {
            console.log(err)
            toast({
                title: "Error",
                description: resolveApiError(err),
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        });
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
                                        <img
                                            src={logoImage}
                                            alt="Logo"
                                            className="mb-4"
                                            style={{
                                                width: "100px",
                                            }}
                                        />
                                        <h3 className="login-heading fs-1 fw-bold mb-4">
                                            Welcome Back!
                                        </h3>
                                    </div>
                                    <PrimaryInput
                                        name={"auth"}
                                        label={"Email or Username"}
                                        placeholder={"Enter Email or Username"}
                                        value={values.auth}
                                        error={Boolean(errors.auth && touched.auth)}
                                        bottomText={errors.auth}
                                        onChange={({ target }) => setFieldValue("auth", target.value)}
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
                                        error={Boolean(errors.password && touched.password)}
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
                                        <PrimaryButton 
                                         className="btn btn-primary mb-3"
                                         type="submit"
                                         onClick={() => handleSubmit()}
                                         isLoading={isLoading}
                                        > Sign In</PrimaryButton>
                                       
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
