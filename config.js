import dotenv from 'dotenv'
dotenv.config();

const config = {
    API_KEY:process.env.OPENAI_API_KEY
}
export default config