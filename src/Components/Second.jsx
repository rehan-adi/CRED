import React from 'react'

function Second() {
  return (
    <>
    <div className='h-[100vh] flex items-start pl-40 flex-col justify-center bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg)] bg-cover bg-no-repeat w-full '>
      <h1 className='text-white font-bold text-[60px]'>feel special <br />
        more often.</h1>
        <p className='text-xl font-bold text-white'>exclusive rewards for paying your bills</p>
        <p className='text-white mt-16 text-[14px] font-semibold'>every time you pay your credit card bills on CRED, you receive CRED coins. <br /> you can use these to win exclusive rewards or get special access to curated <br /> products and experiences. on CRED, good begets good.</p>
        <button className='px-10 hover:bg-transparent border-2 hover:text-white py-2 mt-8 bg-white text-black font-semibold text-lg rounded-full'>Explor Reward</button>
    </div>
    <div className='bg-white flex flex-col justify-center items-center w-full h-[35vh]'>
           <div>
                <h1 className='text-[#212426] font-semibold text-xl pr-[890px] '>rewards from brands you love.</h1>
           </div>
           <div className='mt-14'>
               <img src="https://web-images.credcdn.in/_next/assets/images/home-page/brands-desktop.png" width={1200} alt="" />
           </div>
    </div>
    </>
  )
}

export default Second;