import { Formik } from 'formik'
import './PersonalInfo.scss'

const PersonalInfo = () => {
    const initialValues = {
        firstName: '',
        lastName: ''
    }
    return (
        <div className="personal-info">
            <Formik initialValues={initialValues}>
                {({handleBlur, handleSubmit, handleChange, values, errors, touched}) => (
                    <form className='personal-info_form form' onSubmit={handleSubmit}>
                        <div className='input-container'> {/* !!! => Input component !!! */}
                            <label htmlFor='firstName' className='input-label'>Имя</label>
                            <input name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} placeholder='Введите ваше имя...' type={"text"} className='input' />
                            {(errors.firstName && touched.firstName) ? <span className='error'>{errors.firstName}</span> : null}
                        </div>
                        <div className='input-container'> {/* !!! => Input component !!! */}
                            <label htmlFor='lastName' className='input-label'>Фамилия</label>
                            <input name='lastName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} placeholder='Введите вашу фамилию...' type={"text"} className='input' />
                            {(errors.lastName && touched.lastName) ? <span className='error'>{errors.firstName}</span> : null}
                        </div>
                        <div className='input-container'> {/* !!! => Input component !!! */}
                            <label htmlFor='firstName' className='input-label'>Имя</label>
                            <input name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} placeholder='Введите имя...' type={"text"} className='input' />
                            {(errors.firstName && touched.firstName) ? <span className='error'>{errors.firstName}</span> : null}
                        </div>
                        
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default PersonalInfo