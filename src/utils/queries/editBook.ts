import { TOnEditBook } from "../types";
import { BASE_URL } from "../../constants";

export const editBook: TOnEditBook = async (id, body) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`, {
      method: "PATCH",
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
