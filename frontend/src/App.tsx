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
import { AddOn } from "./pages/AddOn";
import { AddOnDetail } from "./pages/AddOnDetail";
import { CreateQRCode } from "./pages/CreateQRCode";

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
          path: "/addon",
          element: <AddOn />,
        },
        {
          path: "/addon/detail",
          element: <AddOnDetail />,
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
        {
          path: "/create_qrcode",
          element: <CreateQRCode />,
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
