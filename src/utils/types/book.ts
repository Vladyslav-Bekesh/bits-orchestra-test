export type TBook = {
  id: number;
  title: string;
  author: string;
  category: string;
  ISBN: string;
  created_at: string;
  updated_at: string | null | undefined;
  activated: false;
};

export type TBooks = TBook[];
