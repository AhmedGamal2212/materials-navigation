import { FC, useEffect } from "react";
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
  const setTheme = (color: string) => {
    document.documentElement.style.setProperty("--primary", color);
    document.documentElement.style.setProperty("--primary-hover", `${color}E6`);
    document.documentElement.style.setProperty(
      "--primary-focus",
      `${color}40`
    );
  };

  useEffect(() => {
    const storedColor = localStorage.getItem("primaryColor");
    if (storedColor) {
      setTheme(storedColor);
    }
  }, []);

  const handleColorChange = (color: string) => {
    setTheme(color);
    localStorage.setItem("primaryColor", color);
  };

  return (
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
  );
};

export default Colors;