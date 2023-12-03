import { useState } from 'react';
import r from '../Auth/Register.module.scss'
import { Link } from 'react-router-dom';

export default function Register () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleSubmitFetch = (event) => {
      event.preventDefault();
      


    };

    return (
        
        <>

        <section className={r.section__register}>
            
            <div className={r.container}>

            <div className={r.register}>
                    
            <form onSubmit={handleSubmitFetch} className={r.register__form}>

            <div className={r.register__form__title}>
                
            <span className={r.logo}>ChatAi</span> - это мессенджер, который предлагает быстрый и удобный чат для пользователей. Он имеет простой и интуитивно понятный интерфейс, который позволяет пользователям легко общаться друг с другом.

            </div>

            <label className={r.register__form__label}>

              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className={r.register__form__label__inp}
                placeholder='Никнейм'
              />

            </label>

            <label className={r.register__form__label}>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={r.register__form__label__inp}
                placeholder='Придумайте пароль'
              />

            </label>

            <label className={r.register__form__label}>

              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className={r.register__form__label__inp}
                placeholder='Повторите пароль'
              />

            </label>

            <button type="submit" className={r.register__form__label__btn}>Зарегистрироваться</button>

            </form>

            </div>


            </div>

        </section>
        
        </>

    )
}