import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Layout } from './Layout';
import { useWeb3Auth } from './hooks/useWeb3Auth';
import { LoginPage } from './pages/Login';
import { Home } from '@mui/icons-material';
import { HomePage } from './pages/Home';

const clientId = import.meta.env.VITE_REACT_APP_WEB3_AUTH_CLIENT_ID

function App() {

  const {
    login,
    logout,
    provider,
  } = useWeb3Auth(clientId)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage handleLogout={logout} />,
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

  return <LoginPage clientId={clientId} handleLogin={login} />
}

export default App;
