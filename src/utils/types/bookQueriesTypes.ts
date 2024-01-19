import { TBooks, TBook } from "./";

export type TGetBooks = () => Promise<TBooks | []>;
export type TGetBook = (id: string | undefined) => Promise<TBook>;

export type TOnDelete = (
  id: number | string,
  activated: boolean
) => Promise<void | undefined>;

export type TOnEditBook = (
  id: number | string,
  book: TBook
) => Promise<void | undefined>;

export type TOnCreateBook = (book: TBook) => Promise<void | undefined>;

export type TOnChangeActivatedBook = (
  state: boolean,
  id: number | string
) => Promise<void | undefined>;
