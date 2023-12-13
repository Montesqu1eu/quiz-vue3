import axios from "axios";
import { API_BASE_URL } from "@/config";

export async function loadQuestions(context) {
  await axios
    .get(API_BASE_URL + "/api/quiz/questions")
    .then((response) => {
      context.commit("updateQuestionsData", response.data);
    });
}
