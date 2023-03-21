import React from 'react'
import Nav from '../Home/Nav';
import SelectImage from './../Home/SelectImage';
import { DataAction } from './../../Redux/Slices/DataSlice';
import { useMakeVariationsMutation } from './../../Redux/APIs/OpenaiApi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsImages } from 'react-icons/bs';
const Variations = () => {
    const dispatch = useDispatch()
    const { ImageVariations } = useSelector(state => state.Data)
    const [MakeVariations, { isLoading, isError, error }] = useMakeVariationsMutation();
    const [image, setImage] = useState('');
    const formData = new FormData();
    console.log(formData.get('image'))
    if (image !== '') {
        formData.append("image", image)
        console.log('exist')
    }
    console.log(formData.get('image'))
    const submithandler = async () => {
        const data = formData
        await MakeVariations(data).unwrap()
            .then((data) => {
                dispatch(DataAction.setImageVariations(data))
                setImage('')
            })
            .catch(() => {
                setImage('')
            })
    }
    const FetchImages = () => {
        return (
            <div className='w-full h-96 rounded-lg bg-gray-300 text-gray-500 animate-pulse flex justify-center items-center'>
                <BsImages size={50} />
            </div>
        )
    }

    return (
        <div>
            <SelectImage setImage={setImage} submithandler={submithandler} />
            <Nav />
            <div className='container max-w- p-5 grid grid-cols-4 gap-5'>
                {isLoading ?
                    <>
                        <FetchImages />
                        <FetchImages />
                        <FetchImages />
                        <FetchImages />
                    </>
                    : isError ? <p className='text-lg font-medium text-red-500 col-span-4'>{error?.data?.msg}</p> :
                        ImageVariations?.map((image, index) => (
                            <img key={index} src={image.url} className='rounded-lg' alt='' />
                        ))}
            </div>
        </div>
    )
}

export default Variations
