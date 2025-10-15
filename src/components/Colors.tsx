import { FC, useState } from "react";
import styles from "./Colors.module.css";

const COLORS = [
  { name: "Indigo", value: "#3f51b5" },
  { name: "Blue", value: "#2196f3" },
  { name: "Purple", value: "#9c27b0" },
  { name: "Pink", value: "#e91e63" },
  { name: "Deep Purple", value: "#673ab7" },
  { name: "Red", value: "#f44336" },
  { name: "Teal", value: "#009688" },
  { name: "Orange", value: "#ff9800" },
  { name: "Brown", value: "#795548" },
  { name: "Blue Grey", value: "#607d8b" },
];

const Colors: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleColorChange = (color: string) => {
    localStorage.setItem("primaryColor", color);
    const root = document.documentElement;
    root.style.setProperty("--primary", color);
    root.style.setProperty("--primary-hover", `${color}E6`);
    root.style.setProperty("--primary-focus", `${color}40`);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle color picker"
      >
        🎨
      </button>
      {isOpen && (
        <div className={styles.colors}>
          {COLORS.map(({ name, value }) => (
            <button
              key={name}
              aria-label={name}
              className={styles.color}
              style={{ backgroundColor: value }}
              onClick={() => handleColorChange(value)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Colors;