import Buttons from '../Buttons/Buttons.jsx';
import {priorityList, sheetDetails} from "../../data.js";
import styles from './Categories.module.css';

const Categories = () => {
    const sortedCategories = priorityList.sort((a, b) => {
        return a.priority - b.priority;
    });

    const sheetsByCategory = sortedCategories.map(({category}) => {
        return sheetDetails.filter((sheet) => {
            return sheet.category === category;
        })
    });

    const buttonsByCategory = sheetsByCategory.map((sheets, index) => {
        return <Buttons sheets={sheets} key={index}/>;
    });

    return (
        <>
            {buttonsByCategory.map((buttons, index) => {
                return (
                    <div key={index} className={styles.categoryContainer}>
                        <h2 className={styles.categoryHeader}>{sortedCategories[index].category}</h2>
                        {buttons}
                    </div>
                );
            })}
        </>
    )
}

export default Categories;