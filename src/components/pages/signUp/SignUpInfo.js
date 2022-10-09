import { Formik } from 'formik'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router'
import { selectUser, setUser } from "../../../store/user/userSlice"
import './SignUpInfo.scss'
import { signUpSchema } from './utils'

const SignUpInfo = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = {
        phone: '',
        email: '',
        password: '',
        passwordRepeat: '',
    }

    const handleFormSubmit = (values) => {
        const {email, phone, password} = values
        localStorage.setItem('password', password)
        dispatch(setUser({email, phone}))
        navigate('/personalInfo')
    }
    
    return (
        <div className="sign-up" > 
            <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={signUpSchema}>
                {({errors, values, handleChange, touched, handleBlur, handleSubmit}) => (
                    <form className='sign-up_form form' onSubmit={handleSubmit}>
                        <div className='input-container'> {/* !!! => Input component !!! */}
                            <label htmlFor='phone' className='input-label'>Номер телефона</label>
                            <input name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder='Введите номер телефона...' type={'tel'} className='input' />
                            {(errors.phone && touched.phone) ? <span className='error'>{errors.phone}</span> : null}
                        </div>
                        <div className='input-container'>
                            <label htmlFor='email' className='input-label'>Эл. почта</label>
                            <input name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Введите email...' type={"email"} className='input' />
                            {(errors.email && touched.email) ? <span className='error'>{errors.email}</span> : null}
                        </div>
                        <div className='input-container'> 
                            <label htmlFor='password' className='input-label'>Пароль</label>
                            <input name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder='Введите пароль...' type={"password"} className='input' />
                            {(errors.password && touched.password) ? <span className='error'>{errors.password}</span> : null}
                        </div>     
                        <div className='input-container'>
                            <label htmlFor='passwordRepeat' className='input-label'>Подтверждение пароля</label>
                            <input name='passwordRepeat' value={values.passwordRepeat}  onChange={handleChange} onBlur={handleBlur} placeholder='Повторите введенный пароль...' type={"password"} className='input' />
                            {(errors.passwordRepeat && touched.passwordRepeat) ? <span className='error'>{errors.passwordRepeat}</span> : (values.password !== values.passwordRepeat  && touched.passwordRepeat) ? <span className='error'>Пароли не совпадают</span> : null}
                        </div>
                        <input className='submit-button' value="Дальше" type="submit" />
                    </form> 
                )}
            </Formik>
        </div>
    )
}

export default SignUpInfo