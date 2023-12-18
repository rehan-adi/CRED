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
        <div ref={ref} className='flex bg-black h-[100vh] relative w-full overflow-hidden items-end justify-center'>
            <motion.img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png"  width={265}  className='absolute z-10 bottom-[-75px] left-[295px]'  
               initial={{ y: "30vh", opacity: 0 }}
               animate={controls1}
             />
            <motion.img src="	https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png" width={280} className='z-20 absolute bottom-[-48px] left-[450px]'
              initial={{y: "35vh", opacity: 0}} 
              animate={controls2} 
              />
            <motion.img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png"  width={300} className=' absolute z-40 bottom-[-30px] ' 
              initial={{y: "50vh", opacity: 0}}
              animate={controls3}
            />
            <motion.img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png"  width={280}  className='z-20 absolute bottom-[-48px] right-[450px]' 
             initial={{y: '35vh', opacity: 0}}
             animate={controls4}
             />
            <motion.img src="	https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png"  width={265} className='absolute z-10 bottom-[-75px] right-[295px]'
              initial={{y: '30vh', opacity: 0}}
              animate={controls5}
             />
        </div>
  )
}

export default PhoneSection