import React from 'react'

function Footer() {
    return (
        <div className='bg-[#111] md:h-[165vh] flex justify-evenly lg:flex-row flex-col pl-8 lg:pl-0 h-[200vh] lg:h-screen w-full text-[#FFFFFF]'>
            <div className='lg:pt-20 pt-5 pl-15'>
                <img className='lg:mb-20 mb-10 md:w-[150px] lg:w-[130px]' src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png" width={90} alt="" />
                <img src="	https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png" className='lg:w-[330px] md:w-[260px]' width={222} alt="" />
                <p className='text-lg left-fulltext-lg md:text-2xl font-semibold mt-5 '>complete security. no asterisks.</p>
                <div className='w-[70vw] lg:w-[25vw]'>
                <p className='mt-6 lg:text-sm md:text-lg text-xs opacity-70'>CRED encrypts all data and transactions to ensure a completely secure experience for our members.</p>
                </div>
            </div>
            <div className=' pt-5 lg:pt-20 '>
                <div>
                    <h1 className='font-semibold opacity-100 text-base md:text-2xl lg:text-sm'>Product</h1>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>CRED pay</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>credit score check</p>
                </div>
                <div className='lg:mt-[115px] mt-16'>
                    <h1 className='font-semibold opacity-100 text-base md:text-2xl lg:text-sm'>resources</h1>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>articles</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>tech blogs</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>calculators</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>credit card payment guide</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>credit score guide</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>Dreampurse (HipBar) wallet</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4' >refund form</p>
                </div>
            </div>
            <div>
                <div className='lg:pt-20 pt-1 pr-36'>
                    <h1 className='font-semibold opacity-100 text-base md:text-2xl lg:text-sm'>CRED</h1>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>about</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>creer</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>IPL</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>customar care</p>
                </div>
                <div className='lg:pt-0 pt-10'>
                    <h1 className='font-semibold opacity-100 mt-10 text-base md:text-2xl lg:text-sm'>policy</h1>
                    <p className=' text-xs lg:text-sm opacity-70 mt-4'>security</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>investor relations</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>transaction & user verification</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>google API disclosure</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'> UPI faq & grievances</p>
                    <p className=' text-xs lg:text-sm opacity-70 md:text-lg mt-4'>equal opportunity policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer