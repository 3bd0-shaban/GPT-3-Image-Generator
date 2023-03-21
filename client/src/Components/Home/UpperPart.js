import { FaTelegramPlane } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { DataAction } from './../../Redux/Slices/DataSlice';
import { useState } from 'react';
const UpperPart = () => {
    const [msg, setMSG] = useState('');
    const dispatch = useDispatch()
    const handlesubmit = (e) => {
        e.preventDefault()
        dispatch(DataAction.setMSG(msg))
    }


    return (
        <>
            <div className='h-[30rem] md:h-[35rem] duration-200 container max-w-full px-0 relative select-none'>
                <img draggable={false} className='h-full w-full object-cover'
                    src='https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092_960_720.jpg' alt='' />
                <div className="absolute inset-0 w-full h-full bg-[rgba(44,59,78,0.7)]"></div>
                <div className=''>
                    <div className='container max-w-xl '>
                        <div className='text-center duration-300 absolute inset-y-0 flex items-center text-white '>
                            <div className='space-y-5 font-bold'>
                                <h4 className='leading-relaxed text-4xl lg:text-5xl'>Boost Your Productivity<br /> with AI Technology! </h4>
                                <h5 className='leading-snug text-xl text-gray-400 font-normal'>Simplify your workflow with our all-in-one text-to-image, translation,
                                    <br />  and transcription tool.</h5>
                                <form onSubmit={handlesubmit} className='py-3 relative'>
                                    <input
                                        onChange={(e) => setMSG(e.target.value)}
                                        autoComplete='off'
                                        className='w-full py-4 bg-white pr-14 placeholder:text-gray-500 px-5 text-gray-700 placeholder:font-semibold  font-normal text-sm outline-none rounded-full'
                                        placeholder='type what you imagine ...'
                                    // rows='10'
                                    />
                                    <button className='text-blue-500  absolute inset-y-0 right-5 active:scale-90 duration-200'><FaTelegramPlane size={25} /></button>
                                </form>

                                {/* <h5 className='leading-snug text-xl text-gray-400 font-normal'>T&C apply. Please read Terms and Conditions </h5> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpperPart
