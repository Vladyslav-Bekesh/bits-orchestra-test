export type TBook = {
  id: number|string;
  title: string;
  author: string;
  category: string;
  ISBN: string;
  created_at: string;
  updated_at: string | null | undefined;
  activated: boolean;
};

export type TBooks = TBook[];
