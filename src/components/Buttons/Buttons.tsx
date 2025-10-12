import Button from '../Button/Button';
import styles from './Buttons.module.css';
import { FC } from 'react';

interface Sheet {
    title: string;
    category: string;
    gid: number;
}

interface ButtonsProps {
    sheets: Sheet[];
    isDark: boolean;
}

const Buttons: FC<ButtonsProps> = ({ sheets, isDark }) => {
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
