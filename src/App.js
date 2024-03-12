import { RouterProvider } from 'react-router-dom';
import AppLayout from "./components/AppLayout"
import { appRouter } from './components/AppLayout';
import { Provider } from 'react-redux';
import appStore from "./utils/store/appStore";

function App() {
  return (
    <Provider store={appStore}>
          <div>
              <RouterProvider router={appRouter}>
                  <AppLayout/>
              </RouterProvider>
          </div>
    </Provider>
    
  );
}

export default App;
