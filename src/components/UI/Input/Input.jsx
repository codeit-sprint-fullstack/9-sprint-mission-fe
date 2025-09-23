<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
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
<<<<<<< HEAD
}
=======
import styles from './Input.module.css'
import { Search } from 'lucide-react';
=======
>>>>>>> b606bca (Rename: 컨벤션 지키기)
import { useState } from 'react'
import { Search } from 'lucide-react';

import styles from './Input.module.css'

export function Input({ onSearch }) {
  const [keyword, setKeyword] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(keyword);
    }
  };

  const handleOnChange = (e) => {
    const value = e.target.value
    setKeyword(value)
  }

  return (
    <div className={styles.InputContainer}>
      <Search className={styles.InputIcon} width={24} height={24} />
      <input
        className={styles.ItemInput}
        placeholder="검색할 상품을 입력해주세요"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
<<<<<<< HEAD
}

export default Input;
>>>>>>> 397014c (Design: 이미지갯수,호버액션,최신순필터 디자인수정)
=======
}
>>>>>>> b606bca (Rename: 컨벤션 지키기)
=======
}
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
