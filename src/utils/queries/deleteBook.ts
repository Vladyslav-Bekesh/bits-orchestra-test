import { TOnDelete } from "../types";
import { BASE_URL } from "../../constants/";

export const deleteBook: TOnDelete = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
