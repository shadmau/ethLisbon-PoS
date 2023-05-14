import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { useContext } from "react";
import { WalletContext } from "./context/Wallet";
import { Scanner } from "./pages/Scanner";
import { Payment } from "./pages/Payment";
import { SuccessTransactionForUser } from "./pages/SuccessTransactionForUser";
import { SuccessTransactionForMerchant } from "./pages/SuccessTransactionForMerchant";
import { Invoice } from "./pages/Invoice";
import { WelcomePage } from "./pages/Welcome";

function App() {
  const { provider } = useContext(WalletContext);

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
          path: "/scanner",
          element: <Scanner />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/invoice",
          element: <Invoice />,
        },
        {
          path: "/user/transaction_success",
          element: <SuccessTransactionForUser />,
        },
        {
          path: "/merchant/transaction_success",
          element: <SuccessTransactionForMerchant />,
        },
      ],
    },
  ]);

  function renderAuthenticatedFlow() {
    return <RouterProvider router={router} />;
  }

  if (provider) {
    return renderAuthenticatedFlow();
  }
  return <WelcomePage />;
}

export default App;
