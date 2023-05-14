import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Layout } from './Layout';
import { HomePage } from './pages/Home';
import { useContext } from 'react';
import { WalletContext } from './context/Wallet';
import { WelcomePage } from './pages/Welcome';
import { Scanner } from './pages/Scanner';

function App() {

  const { provider } = useContext(WalletContext)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/scan",
          element: <Scanner />,
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
