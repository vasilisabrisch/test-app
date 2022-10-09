import { HomePage } from "./components/pages";
import {Provider} from 'react-redux'
import store from "./store";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { router } from "./routes/main";

const App = () => (
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)

export default App;
