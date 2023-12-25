import './App.css'
import Categories from "./components/Categories/Categories.jsx";
import styles from './App.module.css'
import {useState} from "react";

function App() {
    const [isDark, setIsDark] = useState(true);

    const handleTheme = () => {
        const root = document.documentElement;
        root.dataset.theme = isDark ? "light" : "dark";
        setIsDark(!isDark);
    }

    return (
        <div data-theme={isDark ? "dark" : "light"}>
            <h1 className={`${styles.mainHeader} ${isDark ? '' : styles.mainHeaderLight}`}>Current Categories</h1>
            <div className={styles.themeSwitcherWrapper}>
                {!isDark ? "🌞" : "🌚"}
                <input type={"checkbox"} role={"switch"} className={styles.themeSwitcher} onChange={() => handleTheme()}/>
            </div>
            <Categories isDark={isDark} />
        </div>
    )
}

export default App
