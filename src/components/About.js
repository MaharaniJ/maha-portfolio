import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

function About() {
  const [ref,inView] = useInView(
     {
      threshold: 0.5,
    })
 
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial='hidden'
          viewport={{once:false,amount:0.3}}
          whileInView={'show'}
          className='flex-1 bg-about bg-contain bg-norepeat h-[640px] mix-blend-lighten bg-top'>img</motion.div>
          <motion.div 
          variants={fadeIn('left',0.5)}
          initial='hidden'
          viewport={{once:false,amount:0.3}}
          whileInView={'show'}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Fullstack Developer(MERN)</h3>
            <p className='mb-6'>Lorem ipsum dolor did</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient'>
                 {
                 inView? <CountUp start={0} end={13} duration={3}/>:null
                 }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Task<br /> Compeleted</div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient'>
                 {inView? <CountUp start={0} end={13} duration={3}/>:null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Project<br /> Completion</div>
              </div>
              </div>
              <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a hred='#' className='text-gradient btn-link'>My Portfolio</a>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About






// import React from 'react';
// import CountUp from 'react-countup';
// import { useInView } from 'framer-motion';
// import { motion } from 'framer-motion';
// import { fadeIn } from '../variants';

// function About() {
//   const [ref, inView] = useInView({
//     threshold: 0.5
//   });

//   return (
//     <section className='section' id='about' ref={ref}>
//       <div className='container mx-auto'>
//         <div>
//            
//           <div>
//             <h2>About me</h2>
//             <h3>I'm a Fullstack Developer(MERN)</h3>
//             <p>lorem ipsumdolor sit, amet cfon</p>
//             <div className='flex'>
//               <div>
//                 <div className='text-[40px] font-tertiary text-gradient mb-2'>
//                   {/* {inView ? <CountUp start={0} end={13} duration={3} /> : null} */}
//                   <CountUp start={0} end={100} delay={0}>
//   {({ countUpRef }) => (
//     <div>
//       <span ref={countUpRef} />
//     </div>
//   )}
// </CountUp>
//                 </div>
//                 <div className='font-primary text-sm tracking-[2px]'>
//                   Years of <br />
//                   Experience
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;
