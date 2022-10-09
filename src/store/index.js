import rootReducer from "./reducer";

const { configureStore } = require("@reduxjs/toolkit");

const reducer = {}
const store = configureStore({
    reducer: rootReducer
})

export default store