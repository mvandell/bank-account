import TransactionHistory from "./components/TransactionHistory";
import Transactions from "./components/Transactions";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./app.css";

// TODO: Import the Redux store and provide it to this component using <Provider>.
const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Bank Account</h1>
        <Transactions />
        <TransactionHistory />
      </main>
    </Provider>
  );
};

export default App;
