import React from 'react'

function Fourth() {
    return (
        <div className=' h-[100vh] flex items-center  justify-around w-full bg-black'>
            <div>
                <h1 className='text-white font-bold text-[68px]'>begin your <br />winning streak.</h1>
                <p className='text-white  mt-6 text-[14px] font-semibold'>use your CRED coins to participate in games and raffles to win the most <br /> exclusive rewards and cashbacks on CRED. good luck.</p>
            </div>
            <div className='flex justify-center mr-20 rounded-3xl ring p-2' style={{ boxShadow: 'inset 0px -5px 6px 0px rgba(250, 250, 255, 0.16), inset 4px 6px 11px 1px rgba(38, 37, 37, 0.24)' }} ring-offset-5 ring-6 ring-white>
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png" alt="" width={250} />
            </div>
        </div>
    )
}

export default Fourth;