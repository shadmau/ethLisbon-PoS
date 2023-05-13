import './App.css'
import { Layout } from './Layout';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';

const clientId = import.meta.env.VITE_REACT_APP_WEB3_AUTH_CLIENT_ID

function App() {

  return (
    <Layout>
      <HomePage />
    </Layout>

    // <LoginPage clientId={clientId} />
  );
}

export default App;
