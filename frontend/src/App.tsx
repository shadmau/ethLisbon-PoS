import './App.css'
import { Layout } from './Layout';
import { useWeb3Auth } from './hooks/useWeb3Auth';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';

const clientId = import.meta.env.VITE_REACT_APP_WEB3_AUTH_CLIENT_ID

function App() {

  const {
    login,
    logout,
    safeAuthSignInResponse,
    provider,
    getPrivateKey,
  } = useWeb3Auth(clientId)

 

  async function renderAuthenticatedFlow() {
    const privateKey = await getPrivateKey()
    console.log('private key', privateKey)
    console.log(safeAuthSignInResponse)
    return <Layout>
      <HomePage
        handleLogout={logout}
      />
    </Layout >
  }

  if (provider) {
    return renderAuthenticatedFlow()
  }

  return <LoginPage clientId={clientId} handleLogin={login} />
}

export default App;
