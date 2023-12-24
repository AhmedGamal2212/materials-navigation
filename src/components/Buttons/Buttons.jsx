import Button from '../Button/Button.jsx';
import {SHEET_IDS, SHEET_NAMES} from "../../data.js";
import styles from './Buttons.module.css'

const Buttons = () => {
    return (
        <>
            <section className={styles.gridContainer}>
                {
                    SHEET_IDS.map((gid, index) => {
                        return <Button text={SHEET_NAMES[index]} gid={gid} key={index}/>
                    })
                }
            </section>
        </>
    )
}

export default Buttons;