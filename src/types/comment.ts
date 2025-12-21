export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: number;
    nickname: string;
    image: string | null;
  };
};
