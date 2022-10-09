import * as Yup from 'yup'

const phoneRegExp = new RegExp("^\\+375\\d{9}$")

export const signUpSchema = Yup.object({
    phone: Yup.string().required('Обязательное поле для заполнения').matches(phoneRegExp, {message: 'Введите корректный номер телефона'}),
    email: Yup.string().required('Обязательное поле для заполнения').email('Введен некорректный адрес эл. почты'),
    password: Yup.string().required('Обязательное поле для заполнения').min(8, 'Пароль слишком короткий').max(20, 'Пароль слишком короткий'),
    passwordRepeat: Yup.string().required('Обязательное поле для заполнения')
})