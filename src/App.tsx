import 'react-toastify/dist/ReactToastify.css';
import  { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { initInterceptors } from 'utilities';
import { RootNavigator } from './navigations';
import { ChakraProviderLoader, GeneralAppProvider } from './providers';



function App() {
  useEffect(() => {
    // initialize axios intercepetor 
    initInterceptors()
  });

  return (
    <ChakraProviderLoader>
      <GeneralAppProvider>
            <RootNavigator />
            <ToastContainer />
      </GeneralAppProvider>
    </ChakraProviderLoader>
  );
}

export default App;