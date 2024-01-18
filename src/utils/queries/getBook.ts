import { BASE_URL } from "../../constants";
import { TGetBook } from "../types";

export const getBook: TGetBook = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`);

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
