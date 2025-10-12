import Buttons from '../Buttons/Buttons';
import { PRIORITY_LIST } from '../../data';
import styles from './Categories.module.css';
import data from '../../data.json';
import { FC } from 'react';

interface Sheet {
    title: string;
    category: string;
    gid: number;
}

interface CategoriesProps {
    isDark: boolean;
}

const Categories: FC<CategoriesProps> = ({ isDark }) => {
    const sortedCategories = [...PRIORITY_LIST].sort((a, b) => {
        return a.priority - b.priority;
    });

    const sheetsByCategory: Sheet[][] = sortedCategories.map(({ category }) => {
        return data.filter((sheet: Sheet) => {
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
