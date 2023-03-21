import { asyncHandler } from './../Middlewares/asyncHandler.js';
import ErrorHandler from '../Utils/errorHandler.js';
import openai from '../Utils/OpenAiConfiguration.js';
import fs from 'fs'
export const MSGChat = asyncHandler(async (req, res, next) => {
    const { msg } = req.body;
    if (!msg) {
        return next(new ErrorHandler('message required !', 400))
    }
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: msg }],
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        });
        return res.json(response.data);
    } catch (error) {
        if (error.response) {
            return next(new ErrorHandler(error.response.data.error.message))
        } else {
            return next(new ErrorHandler(error.message))
        }
    }
});

export const FixSpillingMistakes = asyncHandler(async (req, res, next) => {
    try {
        console.log('d')
        const response = await openai.createEdit({
            model: "text-davinci-edit-001",
            input: "What day of the wek is it?",
            instruction: "Fix the spelling mistakes",
          });
        return res.json(response);
    } catch (error) {
        if (error.response) {
            return next(new ErrorHandler(error.response.data.error.message))
        } else {
            return next(new ErrorHandler(error.message))
        }
    }
});

export const CreateImages = asyncHandler(async (req, res, next) => {
    try {
        const { msg } = req.query;
        if (!msg) {
            return next(new ErrorHandler('message required !', 400))
        }
        if (msg.length > 800) {
            return next(new ErrorHandler('too long imagination !', 400))
        }
        const response = await openai.createImage({
            prompt: msg,
            n: 4,
            size: "512x512",
        });
        return res.json(response.data.data);
    } catch (error) {
        if (error.response) {
            return next(new ErrorHandler(error.response.data.error.message))
        } else {
            return next(new ErrorHandler(error.message))
        }
    }
});
export const CreateImagesEdit = asyncHandler(async (req, res, next) => {
    try {
        const { filename } = req.file;
        if (!req.file) {
            return next(new ErrorHandler('Image required !', 400))
        }
        const response = await openai.createImageEdit(
            fs.createReadStream(`uploads/${filename}`),
            "A cute baby sea otter wearing a beret",
            2,
        );
        return res.json(response.data.data);
    } catch (error) {
        if (error.response) {
            return next(new ErrorHandler(error.response.data.error.message))
        } else {
            return next(new ErrorHandler(error.message))
        }
    }
});

export const makeVariations = asyncHandler(async (req, res, next) => {
    try {
        console.log(req.body)
        const { filename } = req.file;
        if (!req.file) {
            return next(new ErrorHandler('Image required !', 400))
        }
        const response = await openai.createImageVariation(
            fs.createReadStream(`uploads/${filename}`),
            2,
            "256x256",
        );
        return res.json(response.data.data);
    } catch (error) {
        if (error.response) {
            return next(new ErrorHandler(error.response.data.error.message))
        } else {
            return next(new ErrorHandler(error.message))
        }
    }
});

export const transcription = asyncHandler(async (req, res, next) => {
    try {
        const { filename } = req.file;
        if (!req.file) {
            return next(new ErrorHandler('Image required !', 400))
        }
        const response = await openai.createTranscription(
            fs.createReadStream(`uploads/${filename}`),
            "whisper-1"
        );
        return res.json(response.data.data);
    } catch (error) {
        if (error.response) {
            return next(new ErrorHandler(error.response.data.error.message))
        } else {
            return next(new ErrorHandler(error.message))
        }
    }
});

export const translate = asyncHandler(async (req, res, next) => {
    try {
        const { filename } = req.file;
        if (!req.file) {
            return next(new ErrorHandler('Image required !', 400))
        }
        const response = await openai.createTranslation(
            fs.createReadStream(`uploads/${filename}`),
            "whisper-1"
        );
        return res.json(response.data.data);
    } catch (error) {
        if (error.response) {
            return next(new ErrorHandler(error.response.data.error.message))
        } else {
            return next(new ErrorHandler(error.message))
        }
    }
});