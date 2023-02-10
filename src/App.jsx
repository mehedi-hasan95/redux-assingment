import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./Redux/store";
import router from "./Router/Router";

function App() {
    return (
        <div>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
}

export default App;
