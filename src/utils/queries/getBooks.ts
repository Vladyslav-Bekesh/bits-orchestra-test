import { TGetBooks } from "../types";
import { BASE_URL } from "../../constants";

export const getBooks: TGetBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/books`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
