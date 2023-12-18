import React from 'react'

function Footer() {
    return (
        <div className='bg-[#111] flex justify-evenly h-screen w-full text-[#FFFFFF]'>
            <div className='pt-20 pl-15'>
                <img className='mb-20' src="	https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png" width={130} alt="" />
                <img src="	https://web-images.credcdn.in/_next/assets/images/home-page/security-logos.png" width={330} alt="" />
                <p className='text-base font-semibold mt-5 '>complete security. no asterisks.</p>
                <p className='mt-6 text-sm opacity-70'>CRED encrypts all data and transactions to ensure a <br /> completely secure experience for our members.</p>
            </div>
            <div className=' pt-20 '>
                <div>
                    <h1 className='font-semibold opacity-100 text-sm'>Product</h1>
                    <p className='text-sm opacity-70 mt-4'>CRED pay</p>
                    <p className='text-sm opacity-70 mt-4'>credit score check</p>
                </div>
                <div className='mt-[110px]'>
                    <h1 className='font-semibold opacity-100 text-sm'>resources</h1>
                    <p className='text-sm opacity-70 mt-4'>articles</p>
                    <p className='text-sm opacity-70 mt-4'>tech blogs</p>
                    <p className='text-sm opacity-70 mt-4'>calculators</p>
                    <p className='text-sm opacity-70 mt-4'>credit card payment guide</p>
                    <p className='text-sm opacity-70 mt-4'>credit score guide</p>
                    <p className='text-sm opacity-70 mt-4'>Dreampurse (HipBar) wallet</p>
                    <p className='text-sm opacity-70 mt-4' >refund form</p>
                </div>
            </div>
            <div>
                <div className='pt-20 pr-36'>
                    <h1 className='font-semibold opacity-100 text-sm'>CRED</h1>
                    <p className='text-sm opacity-70 mt-4'>about</p>
                    <p className='text-sm opacity-70 mt-4'>creer</p>
                    <p className='text-sm opacity-70 mt-4'>IPL</p>
                    <p className='text-sm opacity-70 mt-4'>customar care</p>
                </div>
                <div>
                    <h1 className='font-semibold opacity-100 mt-10 text-sm'>policy</h1>
                    <p className='text-sm opacity-70 mt-4'>security</p>
                    <p className='text-sm opacity-70 mt-4'>investor relations</p>
                    <p className='text-sm opacity-70 mt-4'>transaction & user verification</p>
                    <p className='text-sm opacity-70 mt-4'>google API disclosure</p>
                    <p className='text-sm opacity-70 mt-4'> UPI faq & grievances</p>
                    <p className='text-sm opacity-70 mt-4'>equal opportunity policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer