import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Layout } from './Layout';
import { LoginPage } from './pages/Login';
import { HomePage } from './pages/Home';
import { useContext } from 'react';
import { WalletContext } from './context/Wallet';

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

  return <LoginPage handleLogin={login} />
}

export default App;
