// import { AuthBoxedContainer, DashboardBaseViewContainer } from 'containers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen, LoginScreen } from 'screens';



export const RootNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/auth" >
          <Route index element={<LoginScreen />} />
          <Route path="login" element={<LoginScreen />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}