import { apiSlice } from '../ApiSlice';
export const OpenaiApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        MSGChat: builder.query({
            query: (data) => ({
                url: '/api/openai/start-chat',
                method: 'GET',
            }),
        }),
        FixSpillingMistakes: builder.query({
            query: (data) => ({
                url: 'api/openai/fix-mistakes',
                method: 'GET',
            }),
        }),
        CreateImages: builder.query({
            query: (msg) => ({
                url: `/api/openai/create-images?msg=${msg}`,
                method: 'GET',
            }),
        }),
        CreateMorwImages: builder.query({
            query: (msg) => ({
                url: `/api/openai/create-images?msg=${msg}`,
                method: 'GET',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {

                    const { data } = await queryFulfilled;

                    dispatch(
                        apiSlice.util.updateQueryData("CreateImages", args, (draft) => {
                            return [
                                ...draft,
                                ...data,
                            ];
                        })
                    );
                } catch (err) {
                    console.log(err)
                }
            },
        }),
        CreateImagesEdit: builder.query({
            query: (data) => ({
                url: '/api/openai/edit-image',
                method: 'GET',
            }),
        }),
        MakeVariations: builder.mutation({
            query: (data) => ({
                url: '/api/openai/variations-image',
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data;',
                  },
                body: data
            }),
        }),
        Transcription: builder.query({
            query: (data) => ({
                url: '/api/openai/transcription',
                method: 'GET',
            }),
        }),
        Translate: builder.query({
            query: (data) => ({
                url: '/api/openai/translate',
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useMSGChatQuery,
    useFixSpillingMistakesQuery,
    useCreateImagesQuery,
    useCreateImagesEditQuery,
    useMakeVariationsMutation,
    useTranscriptionQuery,
    useTranslateQuery,
} = OpenaiApi;
