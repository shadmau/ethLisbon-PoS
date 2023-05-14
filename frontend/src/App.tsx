import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Layout } from './Layout';
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';
import { useContext } from 'react';
import { WalletContext } from './context/Wallet';
import { WelcomePage } from './pages/Welcome';

function App() {

  const { provider, login } = useContext(WalletContext)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]);


  function renderAuthenticatedFlow() {
    return (<RouterProvider router={router} />)
  }

  if (provider) {
    return renderAuthenticatedFlow()
  }

  return <WelcomePage />
}

export default App;
