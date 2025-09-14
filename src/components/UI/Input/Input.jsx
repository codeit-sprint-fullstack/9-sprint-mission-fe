import styles from './Input.module.css'
import { Search } from 'lucide-react';

function Input() {
  return (
    <div className={styles.InputContainer}>
      <Search className={styles.InputIcon}  width={24} height={24}/>
      <input className={styles.ItemInput} placeholder="검색할 상품을 입력해주세요" />
    </div>
  )
}

export default Input;