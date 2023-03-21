import Header from './Header';

const SelectImage = ({ setImage, submithandler }) => {



    return (
        <>
            <Header />
            <div className='h-[50rem] md:h-[35rem] duration-200 container max-w-full px-0 relative select-none'>
                <img draggable={false} className='h-full w-full object-cover'
                    src='https://cdn.pixabay.com/photo/2015/11/17/18/59/architecture-1048092_960_720.jpg' alt='' />
                <div className="absolute inset-0 w-full h-full bg-[rgba(44,59,78,0.7)]"></div>
                <div className='container px-5 sm:max-w-[50rem] md:max-w-[50rem] lg:max-w-[60rem] text-center xl:max-w-[80rem] left-[28%] duration-300 absolute inset-0 flex items-center text-white '>
                    <div className='space-y-5 font-bold'>
                        <h4 className='leading-relaxed text-4xl lg:text-5xl'>Boost Your Productivity<br /> with AI Technology! </h4>
                        <h5 className='leading-snug text-xl text-gray-400 font-normal'>Simplify your workflow with our all-in-one text-to-image, translation,
                            <br />  and transcription tool.</h5>
                        <form className='py-3 relative'>
                            <label className='relative my-5 flex justify-center items-center cursor-pointer'>
                                <div className='bg-blue-500 text-white p-3 px-8 rounded-xl absolute active:scale-90 duration-200 whitespace-nowrap'>Select image</div>
                                <input type='file' className='hidden' onChange={(e) => { setImage(e.target.files[0]); submithandler() }} accept='image/*' />
                            </label>
                        </form>
                        <h5 className='leading-snug text-xl text-gray-400 font-normal'>T&C apply. Please read Terms and Conditions </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectImage
