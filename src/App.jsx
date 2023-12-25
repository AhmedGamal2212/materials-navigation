import './App.css'
import Categories from "./components/Categories/Categories.jsx";
import styles from './App.module.css'

function App() {
    return (
        <>
            <h1 className={styles.mainHeader}>Current Categories</h1>
            <Categories />
        </>
    )
}

export default App
