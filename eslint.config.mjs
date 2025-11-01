import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHookPlugin from 'eslint-plugin-react-hooks';
// 파일/폴더명 정렬 플러그인
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
// 파일/폴더명 정렬 플러그인 - 캐밥케이스
import checkFilePlugin from 'eslint-plugin-check-file';
import globals from 'globals';

// 기본 설정 (모든 파일에 적용)
const baseConfig = [
  {
    files: ['**/**.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser, // window. document 브라우저 전역변수 허용
        ...globals.node, // process, require 노드.js 전역 변수
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    // var금지, const우선
    rules: {
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
];

// react, reactHooks setting
const reactConfig = {
  files: ['**/*.{jsx}'],
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHookPlugin,
  },
  // 플러그인 권장규칙으로
  rules: {
    ...reactPlugin.configs.recommended.rules,
    ...reactHookPlugin.configs.recommended.rules,
    'react/react-in-jsx-scope': 'off', // ! 최신버전에서 import React 필요 없음
  },
  // react 버전 감지
  settings: {
    react: { version: 'detect' },
  },
};

const ImportSortConfig = {
  plugins: {
    'simple-import-sort': simpleImportSortPlugin,
  },
  rules: {
    'simple-import-sort/imports': 'error', // import 순서 강제
    'simple-import-sort/exports': 'error', // export 순서 강제
  },
};

const fileNamingConventionConfig = {
  files: ['src/**/*'],
  plugins: {
    'check-file': checkFilePlugin,
  },
  rules: {
    // file-name
    'check-file/filename-naming-convention': [
      'error',
      { '**/*.{js,jsx}': 'KEBAB_CASE' },
      { ignoreMiddleExtensions: true }, // .module.css 같은 경우 예외로 중간 확장자를 무시하게
    ],
    // folder-name (next 라우팅 폴더명은 제외)
    'check-file/folder-naming-convention': [
      'error',
      { '!(src/app)/**/*': 'KEBAB_CASE' },
    ],
  },
};

const eslintConfig = defineConfig([
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/**',
    // 여기서 무시할 파일/폴더 추가
  ]),

  // config export
  ...baseConfig,
  ...nextVitals,
  reactConfig,
  ImportSortConfig,
  fileNamingConventionConfig,

  // Prettier와 충돌하는 모든 린팅 규칙을 비활성화
  prettierConfig,
]);

export default eslintConfig;
