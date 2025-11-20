
export const mockPosts = [
  {
    id: 1,
    title: "맥북 16인치 16GB 사양이면 웹 개발에 괜찮나요?",
    content: "맥북 16인치 16GB 사양이면 웹 개발 좋아요??",
    author: "사자",
    image: null,
    likeCount: 120,
    createdAt: new Date("2024-04-16"),
    updatedAt: new Date("2024-04-16"),
  },
  {
    id: 2,
    title: "추천해주세요",
    content: "부탁합니다",
    author: "에비씨",
    image: null,
    likeCount: 76,
    createdAt: new Date("2024-04-15"),
    updatedAt: new Date("2024-04-15"),
  },
  {
    id: 3,
    title: "웹개발 공부용?",
    content: "이게 pc사양입니다",
    author: "현자",
    image: null,
    likeCount: 99,
    createdAt: new Date("2024-04-14"),
    updatedAt: new Date("2024-04-14"),
  },
  {
    id: 4,
    title: "최저 사양 어떤게 되실될?",
    content: "최저 사양 어떤게 되실될?",
    author: "워터",
    image: null,
    likeCount: 34,
    createdAt: new Date("2024-04-13"),
    updatedAt: new Date("2024-04-13"),
  },
  {
    id: 5,
    title: "프론트엔드 공부용 추천 노트북",
    content: "가성비 좋은 노트북 추천 부탁드립니다",
    author: "소피아",
    image: "https://example.com/laptop.jpg",
    likeCount: 56,
    createdAt: new Date("2024-04-12"),
    updatedAt: new Date("2024-04-12"),
  },
  {
    id: 6,
    title: "React 프로젝트 질문",
    content: "컴포넌트 구조를 어떻게 잡는 게 좋을까요?",
    author: "제이슨",
    image: null,
    likeCount: 88,
    createdAt: new Date("2024-04-11"),
    updatedAt: new Date("2024-04-11"),
  },
];

export const mockComments = [
  // 게시글 1
  { id: 1, postId: 1, content: "맥북 좋네요!", author: "영희", createdAt: new Date("2024-04-16"), updatedAt: new Date("2024-04-16") },
  { id: 2, postId: 1, content: "저도 같은 모델 씁니다", author: "민수", createdAt: new Date("2024-04-15"), updatedAt: new Date("2024-04-15") },

  // 게시글 2
  { id: 3, postId: 2, content: "추천: M1 맥북", author: "철수", createdAt: new Date("2024-04-15"), updatedAt: new Date("2024-04-15") },
  
  // 게시글 3
  { id: 4, postId: 3, content: "웹개발용으로 충분해요", author: "하나", createdAt: new Date("2024-04-14"), updatedAt: new Date("2024-04-14") },
  
  // 게시글 4
  { id: 5, postId: 4, content: "최저 사양이면 안될 수도 있어요", author: "도윤", createdAt: new Date("2024-04-13"), updatedAt: new Date("2024-04-13") },

  // 게시글 5
  { id: 6, postId: 5, content: "저는 이 노트북 추천해요", author: "민지", createdAt: new Date("2024-04-12"), updatedAt: new Date("2024-04-12") },
  { id: 7, postId: 5, content: "가격 대비 성능 최고!", author: "태훈", createdAt: new Date("2024-04-12"), updatedAt: new Date("2024-04-12") },

  // 게시글 6
  { id: 8, postId: 6, content: "저는 이렇게 구조 잡아요", author: "수민", createdAt: new Date("2024-04-11"), updatedAt: new Date("2024-04-11") },
];

