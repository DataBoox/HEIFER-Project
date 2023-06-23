// import { AuthBoxedContainer, DashboardBaseViewContainer } from 'containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen, LoginScreen } from 'screens';
import {
  DashboardScreen,
  ProjectScreen,
  AddGroup,
  ShgRecordForm,
  RegisterFarmers,
  ViewFarmers,
  ViewGroups,
  ViewUsers,
  ViewInterventions,
  UserScreen,
  MapsScreen,
  GroupScreen,
  FarmerScreen,
  InterventionScreen,
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
          <Route path="projects" element={<ProjectScreen />} />
        </Route>

        <Route path="/" element={<HomeScreen />}>
          <Route index element={<DashboardScreen />} />
          <Route path="register" element={<RegisterFarmers />} />
          <Route path="groups/add" element={<AddGroup />} />
          <Route path="groups/form-1" element={<ShgRecordForm />} />
          <Route path="users" element={<UserScreen />} />
          <Route path="maps" element={<MapsScreen />} />
          <Route path="groups" element={<GroupScreen />} />
          <Route path="farmers" element={<FarmerScreen />} />
          <Route path="farmers/view" element={<ViewFarmers />} />
          <Route path="groups/view/:id" element={<ViewGroups />} />
          <Route path="users/view/:id" element={<ViewUsers />} />
          <Route path="interventions/view" element={<ViewInterventions />} />
          <Route path="interventions" element={<InterventionScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}