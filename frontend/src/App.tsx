import './App.css'
import { LoginPage } from './pages/Login';

const clientId = import.meta.env.VITE_REACT_APP_WEB3_AUTH_CLIENT_ID

function App() {

  return (
    <LoginPage clientId={clientId} />
  );
}

export default App;
