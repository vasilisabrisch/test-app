import {useSelector} from 'react-redux'
import { selectUser } from "../../../store/user/userSlice"
import {Header , Footer} from "../../UI/organisms"
import './Home.scss'

const HomePage = () => {
    const user = useSelector(selectUser)

    return (
    <>
        <Header />
        <div className="main" > 
        <form className='sign-up_form'>
            <input placeholder='Введите номер телефона...' className='input'></input>
            <input placeholder='Введите email...' className='input'></input>
            <input placeholder='Введите пароль...' className='input'></input>
            <input placeholder='Повторите введенный пароль...' className='input'></input>
            <input className='submit-button' value="Зарегистрироваться" type="submit"></input>
        </form> 
        </div>
        <Footer/>
    </>
    )
}

export default HomePage