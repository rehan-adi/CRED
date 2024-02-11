import React from 'react'

function Second() {
  return (
    <>
    <div className='lg:h-[100vh] h-[130vh] md:h-[85vh] flex items-start lg:pl-40 flex-col justify-center bg-[url(https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg)] bg-cover bg-no-repeat w-full '>
      <div className='w-[60vw] pl-8 lg:pl-0 '>
      <h1 className='text-white font-bold text-5xl md:text-7xl lg:text-7xl'>feel special <br />
        more often.</h1>
      </div>
        <div className='w-[85vw] mt-5 lg:mt-4 pl-8 lg:pl-0'>
        <p className='lg:text-xl md:text-xl text-base font-bold text-white'>exclusive rewards for paying your bills</p>
        </div>
        <div className='w-[80vw] lg:w-[35vw] pl-8 mt-16 lg:mt-0 lg:pl-0 '>
        <p className='text-white mt-16 lg:text-sm md:text-xl text-xs font-medium lg:font-semibold'>every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.</p>
        </div>
        <div className='pl-8 lg:pl-0'>
        <button className='lg:px-10 px-7 md:px-8 md:py-3 lg:py-2 hover:bg-transparent border-2 hover:text-white py-2 mt-8 bg-white text-black font-semibold text-base lg:text-lg rounded-full'>Explor Reward</button>
        </div>
    </div>
    <div className='flex flex-col justify-center text-black items-center w-full h-[60vh] lg:h-[35vh]'>
           <div className='mb-14'>
                <h1 className='text-[#212426] font-semibold text-base md:text-xl lg:text-xl lg:pr-[890px] '>rewards from brands you love.</h1>
           </div>
           <div className='mt-14 hidden lg:flex'>
               <img src="https://web-images.credcdn.in/_next/assets/images/home-page/brands-desktop.png" width={1200} alt="" />
           </div>
           <div className='w-auto h-[30vh] lg:hidden'>
               <img src="https://web-images.credcdn.in/_next/assets/images/home-page/brands-mobile.png" width={"310px"} alt="" />
           </div>
    </div>
    </>
  )
}

export default Second;