import { OpenAIApi, Configuration } from "openai";
import express from "express";
import errorMiddleware from './Middlewares/error.js';
import OpenAiRouter from "./Routes/OpenAiRoutes.js";
import cors from 'cors'
import AllowedOrigins from "./Origins.js";
const port = 5000;
const app = express();

app.listen(port, () => {
    console.log(`Run successfully at port ${port}`)
});
app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/api/openai', OpenAiRouter);
app.use(errorMiddleware);

// const configuration = new Configuration({
//   apiKey:config.API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// // const response = await openai.listEngines();
// // console.log(response.data.data)
// try {
//     const completion = await openai.createCompletion({
//         model: "gpt-3.5-turbo",
//         prompt: "Hello world",
//       });
//       console.log(completion.data.choices[0].text);
// } catch (error) {
//     if (error.response) {
//         console.log(error.response.status);
//         console.log(error.response.data);
//       } else {
//         console.log(error.message);
//       }
// }