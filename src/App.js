import { HomePage } from "./components/pages";
import {Provider} from 'react-redux'
import store from "./store";

const App = () => (
    <Provider store={store}>
        <HomePage />
    </Provider>
)

export default App;
