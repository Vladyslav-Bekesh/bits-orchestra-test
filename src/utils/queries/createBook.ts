import { BASE_URL } from "../../constants";
import { TOnCreateBook } from "../types";

export const createBook: TOnCreateBook = async (body) => {
  try {
    const response = await fetch(`${BASE_URL}/books`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
