// import { AuthBoxedContainer, DashboardBaseViewContainer } from 'containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen, LoginScreen } from 'screens';
import {
  DashboardScreen,
  ProjectScreen,
  RegisterFarmers,
  UserScreen,
} from "screens/heiferScreens";



export const RootNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AuthBoxedContainer />}>
          <Route index element={<LoginScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="forgot" element={<ForgotScreen />} />
          <Route path="reset/:token" element={<PasswordScreen />} />
          <Route path="verify/email" element={<EmailVerification />} />
        </Route> */}

        <Route path="/auth">
          <Route index element={<LoginScreen />} />
          <Route path="login" element={<LoginScreen />} />
        </Route>

        <Route path="/" element={<HomeScreen />} >
          <Route index element={<DashboardScreen />} />
           <Route path="register" element={<RegisterFarmers />} />
           <Route path="projects" element={<ProjectScreen />} />
           <Route path="users" element={<UserScreen />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}