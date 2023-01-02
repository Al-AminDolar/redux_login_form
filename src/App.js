import "./App.css";
import routes from "./routes/routes";
import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
