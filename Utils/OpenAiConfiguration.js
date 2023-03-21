import { OpenAIApi,Configuration } from "openai";
import config from "../config.js";

const configuration = new Configuration({
    apiKey:config.API_KEY,
  });
  const openai = new OpenAIApi(configuration);
export default openai