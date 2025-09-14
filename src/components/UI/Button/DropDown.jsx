import { ArrowDownWideNarrow, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import styles from "./DropDown.module.css"

function DropDown({ deviceType }) {
  const [showPanel, setShowPanel] = useState(false);

  const handleOnClick = () => {
    setShowPanel(!showPanel);
  }

  return (
    <div className={styles.dropdownContainer}>
      {deviceType !== 'mobile' ? (
        <button
          className={`${styles.dropdownBtn} ${showPanel && styles.dropdownActive}`}
          onClick={handleOnClick}>
          최신순
          {showPanel
            ?
            <ChevronDown width={24} height={24} />
            :
            <ChevronUp width={24} height={24} />}
        </button>
      ) : (
        <button
          className={`${styles.dropdownBtn} ${showPanel && styles.dropdownActive}`}
          onClick={handleOnClick}>
            <ArrowDownWideNarrow width={24} height={24} />
        </button>
      )}

      {showPanel && (
        <ul className={styles.dropdownFilter}>
          {/** 두가지 클래스를 붙이려면 템플릿 리터럴 사용 */}
          <li className={`${styles.dropdownElement} ${styles.topElement}`}>최신순</li>
          <hr className={styles.dropdownHorizen} />
          <li className={styles.dropdownElement}>좋아요순</li>
        </ul>
      )}
    </div>
  )

}

export default DropDown;