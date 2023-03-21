import express from 'express';
import {
    FixSpillingMistakes, MSGChat, CreateImages, CreateImagesEdit, transcription, translate, makeVariations
} from './../Controller/OpenAiCTRL.js';
import { upload } from '../Utils/multer.js';
const Router = express.Router();

Router.get('/start-chat', MSGChat);
Router.get('/fix-mistakes', FixSpillingMistakes);
Router.get('/create-images', CreateImages);
Router.get('/edit-image', upload.single('image'), CreateImagesEdit);
Router.post('/variations-image', upload.single('image'), makeVariations);
Router.get('/transcription', upload.single('image'), transcription);
Router.get('/translate', upload.single('image'), translate);
export default Router