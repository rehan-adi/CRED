import React from 'react'

function Third() {
    return (
        <div className=' lg:h-[100vh] h-[150vh] pl-8 lg:pl-40 flex flex-col bg-img3 items-start justify-center w-full'>
            <div className='w-[70vw]'>
            <h1 className='text-white font-bold text-5xl lg:text-7xl'>we take your money <br />
                matters seriously.</h1>
            </div>
                <p className='lg:text-xl text-sm font-bold mt-4 lg:mt-2 text-white'>so that you don’t have to.</p>
                <div className='w-[75vw] mt-14 lg:mt-0 '>
                <p className='text-white mt-10 text-xs lg:text-sm font-normal lg:font-semibold'>never miss a due date with reminders to help you pay your bills on time, <br /> instant settlements mean you never wait for your payments to go through <br /> and statement analysis lets you know where your money goes, always.</p>
                </div>
                <button className='lg:px-10 px-7 hover:bg-transparent border-2 hover:text-white py-2 mt-8 bg-white text-black font-medium lg:font-semibold text-base lg:text-lg rounded-full'>Experience the upgrade</button>
        </div>
    )
}

export default Third