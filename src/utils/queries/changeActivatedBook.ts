import { TOnChangeActivatedBook } from "../types";
import { BASE_URL } from "../../constants";

export const changeActivatedBook: TOnChangeActivatedBook = async (
  state,
  id
) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ activated: !state }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
