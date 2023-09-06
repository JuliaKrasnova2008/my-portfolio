import React, { useEffect } from 'react'
import { useLocalStorage } from '../../utils/useLocalStorage';
import './LightDarkTheme.css'
import sun from '../../images/sun.svg'
import moon from '../../images/moon.svg'
import detectDarkMode from '../../utils/detectDarkMode';

export default function LightDarkTheme() {

    //'dark-theme' - имя ключа, пот которому будет храниться в localStorage, detectDarkMode - дефолное значение, зависит от того, какая тема установлена в системе у пользователя
    const [darkMode, setDarkMode] = useLocalStorage('dark-theme', detectDarkMode())

    //зависит от состояние darkMode
    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
            document.body.classList.add("light")

        }
    }, [darkMode])

    //сработает только 1 раз при рендере, прослушка изменения системных настроек
    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme);
            });
    }, [setDarkMode])


    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    const btnNormal = 'dark-mode-btn'
    const btnActive = 'dark-mode-btn dark-mode-btn--active'

    return (
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}
