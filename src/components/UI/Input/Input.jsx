<<<<<<< HEAD
import { useState } from 'react';
import { Search } from 'lucide-react';

import styles from './Input.module.css';

export function Input({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(keyword);
    }
  };

  return (
    <div className={styles.InputContainer}>
      <Search className={styles.InputIcon} width={24} height={24} />
      <input
        className={styles.ItemInput}
        placeholder="검색할 상품을 입력해주세요"
        onChange={(e) => setKeyword(e.target.value.trim())}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
=======
import styles from './Input.module.css'
import { Search } from 'lucide-react';
import { useState } from 'react'

function Input({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleKeyDown = (e) => {
    e.preventDefault()
    if (e.key === 'Enter') {
      onSearch(keyword);
    }
  };

  return (
    <div className={styles.InputContainer}>
      <Search className={styles.InputIcon} width={24} height={24} />
      <input
        className={styles.ItemInput}
        placeholder="검색할 상품을 입력해주세요"
        onChange={(e) => setKeyword(e.target.value.trim())}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default Input;
>>>>>>> 397014c (Design: 이미지갯수,호버액션,최신순필터 디자인수정)
