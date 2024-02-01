import React from 'react'

function Third() {
    return (
        <div className=' lg:h-[100vh] h-[150vh] pl-40 flex flex-col items-start justify-center w-full bg-cover bg-no-repeat bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg)]'>
            <h1 className='text-white font-bold text-[60px]'>we take your money <br />
                matters seriously.</h1>
                <p className='text-xl font-bold text-white'>so that you don’t have to.</p>
                <p className='text-white  mt-16 text-[14px] font-semibold'>never miss a due date with reminders to help you pay your bills on time, <br /> instant settlements mean you never wait for your payments to go through <br /> and statement analysis lets you know where your money goes, always.</p>
                <button className='px-10 hover:bg-transparent border-2 hover:text-white py-2 mt-8 bg-white text-black font-semibold text-lg rounded-full'>Experience the upgrade</button>
        </div>
    )
}

export default Third