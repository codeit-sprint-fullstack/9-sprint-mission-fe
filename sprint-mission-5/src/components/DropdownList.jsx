import React from "react";
import styles from "./DropdownList.module.css";

function DropdownList({ onSortSelection }) {
  return (
    <div className={styles.dropdownList}>
      <div className={styles.dropdownItem} onClick={() => onSortSelection("recent")}>
        최신순
      </div>
      <div className={styles.dropdownItem} onClick={() => onSortSelection("favorite")}>
        베스트순
      </div>
    </div>
  )
}

export default DropdownList;