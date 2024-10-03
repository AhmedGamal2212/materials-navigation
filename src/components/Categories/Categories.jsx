import Buttons from '../Buttons/Buttons.jsx';
import { PRIORITY_LIST } from '../../data.js';
import styles from './Categories.module.css';
import data from '../../data.json';

const Categories = ({ isDark }) => {
    const sortedCategories = PRIORITY_LIST.sort((a, b) => {
        return a.priority - b.priority;
    });

    const sheetsByCategory = sortedCategories.map(({ category }) => {
        return data.filter((sheet) => {
            return sheet.category === category;
        });
    });

    const buttonsByCategory = sheetsByCategory.map((sheets, index) => {
        return (
            <Buttons
                sheets={sheets}
                key={index}
                isDark={isDark}
            />
        );
    });

    return (
        <>
            {buttonsByCategory.map((buttons, index) => {
                return (
                    <div
                        key={index}
                        className={styles.categoryContainer}
                    >
                        <h2
                            className={`${styles.categoryHeader} 
                             ${
                                 !isDark
                                     ? styles.categoryHeaderLight
                                     : styles.categoryHeaderDark
                             }`}
                        >
                            {sortedCategories[index].category}
                        </h2>
                        {buttons}
                    </div>
                );
            })}
        </>
    );
};

export default Categories;
