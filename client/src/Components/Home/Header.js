import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import useBreakpoint from '../../Hooks/useBreakpoints';

const Header = () => {
    const [isHeader, setIsHeader] = useState(false);
    const { MobileView } = useBreakpoint();
    const { dash, drDash, admindash } = useParams();

    return (
        <>
            {isHeader && <div onClick={() => setIsHeader(false)} className='fixed inset-0 z-10'></div>}
            <header className={`fixed z-10 container max-w-full !bg-transparent lg:bg-transparent top-0 duration-300 inset-x-0`}
            >
                <div className={`container border-b lg:border-none flex justify-between items-center p-3 whitespace-nowrap
                ${(dash || drDash || admindash) ? 'max-w-full' : ' max-w-[28rem] sm:max-w-[35rem] md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[80rem]'}`}>
                    <div className='flex gap-3'>
                        <Link to='/' className='flex gap-3'>
                            <img className='w-10 h-10 rounded-xl'
                                src='https://shreethemes.in/doctris/layouts/assets/images/logo-icon.png' alt='' />
                            <p className={`text-2xl text-gray-200 font-bold ${(dash || drDash) && 'text-black'}`}>Doctris</p>
                        </Link>
                    </div>
                    {!MobileView &&
                        <div className='list-none flex gap-5 text-lg text-gray-400 font-semibold uppercase'>
                            <Link to='/' className='hover:text-blue-600'>Home</Link>
                            <Link to='/varitions'>Variations</Link>
                            <Link to='/patient/dashboard'>Patients</Link>
                            <Link>Pharmacy</Link>
                            <Link to='/admin/admin-dashboard'>Admin</Link>
                        </div>
                    }
                </div>
                {isHeader &&
                    <div className='space-y-5 px-8 py-3 text-base text-gray-600 font-semibold uppercase z-20'>
                        <Link to='/' className='block hover:text-blue-600'>Home</Link>
                        <Link to='/doctor/doctor-dashboard' className='block'>Doctor</Link>
                        <Link to='/patient/dashboard' className='block'>Patients</Link>
                        <Link className='block'>Pharmacy</Link>
                        <Link className='block'>Pages</Link>
                    </div>
                }
            </header>
        </>
    )
}

export default Header