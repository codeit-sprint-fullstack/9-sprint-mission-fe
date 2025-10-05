import { useState } from "react";
import { ArrowDownWideNarrow, ChevronDown, ChevronUp } from "lucide-react";

import styles from "./DropDown.module.css";
import { useOutletContext } from "react-router-dom";

export function DropDown({ onChange, page }) {
  const { isMobile } = useOutletContext();
  const [showPanel, setShowPanel] = useState(false);
  const [filterTitle, setFilterTitle] = useState('최신순');

  const handleOnClick = () => {
    setShowPanel(!showPanel);
  };

  const handleOnChange = (value) => {
    onChange?.(value);
    if (value === 'recent') setFilterTitle('최신순');
    else if (value === 'favorite') setFilterTitle('좋아요순');
    setShowPanel(false);
    page(1);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={`${styles.dropdownBtn} ${showPanel && styles.dropdownActive}`} onClick={handleOnClick}>
        {!isMobile ? (
          <>
            {filterTitle}
            {showPanel ? <ChevronDown width={24} height={24} /> : <ChevronUp width={24} height={24} />}
          </>
        ) : (
          <ArrowDownWideNarrow width={24} height={24} />
        )}
      </button>

      {
        showPanel && (
          <ul className={styles.dropdownFilter}>
            <li className={`${styles.dropdownElement} ${styles.topElement}`}>
              <button onClick={() => handleOnChange('recent')}>최신순</button>
            </li>
            <hr className={styles.dropdownHorizon} />
            <li className={styles.dropdownElement}>
              <button onClick={() => handleOnChange('favorite')}>좋아요순</button>
            </li>
          </ul>
        )
      }
    </div >
  );
}
