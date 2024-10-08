import Button from '../Button/Button.jsx';
import styles from './Buttons.module.css';

const Buttons = ({ sheets, isDark }) => {
    return (
        <>
            <section
                className={`${styles.gridContainer} ${
                    sheets.length === 0
                        ? ` ${styles.gridContainerSingle}`
                        : `${styles.gridContainerMoreThanTwo}`
                }`}
            >
                {(sheets.length &&
                    sheets.map(({ gid, title }, index) => {
                        return (
                            <Button
                                text={title}
                                gid={gid}
                                key={index}
                            />
                        );
                    })) || (
                    <p
                        className={styles.noSheets}
                        style={{
                            color: isDark ? 'white' : '#5e35b1',
                        }}
                    >
                        No sheets found
                    </p>
                )}
            </section>
        </>
    );
};

export default Buttons;
