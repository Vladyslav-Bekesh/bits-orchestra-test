import { TBooks, TBook } from "./";

export type TGetBooks = () => Promise<TBooks | []>;
export type TGetBook = (id: string | undefined) => Promise<TBook>;
export type TOnDelete = (id: number) => Promise<void | undefined>;
export type TOnChangeActivatedBook = (
  state: boolean,
  id: number
) => Promise<void | undefined>;
