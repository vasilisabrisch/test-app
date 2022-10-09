import { createBrowserRouter } from "react-router-dom";
import { MainPage, PersonalInfo, SignUpInfo } from "../components/pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                path: 'signUp',
                element: <SignUpInfo />,
            },
            {
                path: 'personalInfo',
                element: <PersonalInfo/>
            }
        ]   
    },
])