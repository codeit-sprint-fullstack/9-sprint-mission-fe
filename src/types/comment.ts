export type Comment = {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    nickname: string;
    image: string | null;
  };
};

export type CommentRequest = {
  context: string;
};
