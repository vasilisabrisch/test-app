import { Navigate, Outlet } from "react-router"
import { Footer, Header } from "../../UI/organisms"

const MainPage  = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}
export default MainPage