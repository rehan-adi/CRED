import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function PhoneSection() {
   
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls1.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.4 } });
      controls2.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.4 } });
      controls3.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
      controls4.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.4 } });
      controls5.start({ y: 0, opacity: 1, transition: { duration: 1, delay: 0.4 } });
    }
  }, [inView, controls1, controls2, controls3, controls4, controls5]);
  

  return (
        <div ref={ref} className='flex bg-black lg:h-[100vh] md:h-[80vh] h-[65vh] relative w-full overflow-hidden items-end justify-center'>
            <motion.img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png" className='absolute lg:w-[265px] w-[95px] z-10 lg:bottom-[-75px] left-[265px] md:w-[200px] md:left-[130px] lg:left-[295px]'  
               initial={{ y: "30vh", opacity: 0 }}
               animate={controls1}
             />
            <motion.img src="	https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png" className='z-20 lg:w-[280px] w-[118px] absolute lg:bottom-[-48px] left-[200px] md:w-[235px] bottom-[-20px] lg:left-[450px]'
              initial={{y: "35vh", opacity: 0}} 
              animate={controls2} 
              />
            <motion.img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png"  className=' absolute lg:w-[300px] w-[125px] z-40 md:w-[255px] bottom-[-10px] lg:bottom-[-30px] ' 
              initial={{y: "50vh", opacity: 0}}
              animate={controls3}
            />
            <motion.img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png"   className='z-20 lg:w-[280px] w-[118px] absolute lg:bottom-[-48px] bottom-[-20px] md:w-[235px] right-[200px] lg:right-[450px]' 
             initial={{y: '35vh', opacity: 0}}
             animate={controls4}
             />
            <motion.img src="	https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png" className='absolute lg:w-[265px] w-[95px] z-10 lg:bottom-[-75px] right-[265px] md:right-[130px] md:w-[200px] lg:right-[295px]'
              initial={{y: '30vh', opacity: 0}}
              animate={controls5}
             />
        </div>
  )
}

export default PhoneSection