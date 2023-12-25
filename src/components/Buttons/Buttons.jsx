import Button from '../Button/Button.jsx';
import styles from './Buttons.module.css'

const Buttons = ({sheets}) => {

    return (<>
        <section
            className={`${styles.gridContainer} ${sheets.length === 1 ? ` ${styles.gridContainerSingle}` : sheets.length === 2 ? ` ${styles.gridContainerDouble}` : `${styles.gridContainerMoreThanTwo}`}`}
        >
            {sheets.map(({gid, title}, index) => {
                return <Button text={title} gid={gid} key={index}/>
            })}
        </section>
    </>)
}

export default Buttons;