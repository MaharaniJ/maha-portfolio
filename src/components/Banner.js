import React from 'react'
import Image from '../assets/avatar.png'
import { AiFillLinkedin,AiFillMail,AiFillGithub } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
function Banner() {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id="home">
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div 
          className='flex-1 text-center font-secondary lg:text-left mr-2'>
            <motion.h1 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'>MAHARANI 
            <span>JEYARAMAN</span>
            </motion.h1>
            <motion.div 
             variants={fadeIn('up',0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false, amount:0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a </span>
              {/* <TypeAnimation sequence={[ */}
                {/* // 'MERN Stack Developer',
                // 1000, */}

                <TypeAnimation
  sequence={[
    'M', // Types 'M'
    100, // Waits 1s
    'ME', // Deletes 'M' and types 'ME'
    100, // Waits 1s
    'MER', // Deletes 'ME' and types 'MER'
    100, // Waits 1s
    'MERN', // Deletes 'MER' and types 'MERN'
    100, // Waits 1s
    'MERN ', // Types ' ' without deleting 'MERN'
    100, // Waits 1s
    'MERN S', // Types 'S' without deleting 'MERN '
    100, // Waits 1s
    'MERN ST', // Types 'T' without deleting 'MERN S'
    100, // Waits 1s
    'MERN STA', // Types 'A' without deleting 'MERN ST'
    100, // Waits 1s
    'MERN STAC', // Types 'C' without deleting 'MERN STA'
    100, // Waits 1s
    'MERN STACK', // Types 'K' without deleting 'MERN STAC'
    100, // Waits 1s
    'MERN STACK ', // Types ' ' without deleting 'MERN STACK'
    100, // Waits 1s
    'MERN STACK D', // Types 'D' without deleting 'MERN STACK '
    100, // Waits 1s
    'MERN STACK DE', // Types 'E' without deleting 'MERN STACK D'
    100, // Waits 1s
    'MERN STACK DEV', // Types 'V' without deleting 'MERN STACK DE'
    100, // Waits 1s
    'MERN STACK DEVE', // Types 'E' without deleting 'MERN STACK DEV'
    100, // Waits 1s
    'MERN STACK DEVEL', // Types 'L' without deleting 'MERN STACK DEVE'
    100, // Waits 1s
    'MERN STACK DEVELO', // Types 'O' without deleting 'MERN STACK DEVEL'
    100, // Waits 1s
    'MERN STACK DEVELO', // Types 'P' without deleting 'MERN STACK DEVEL'
    100, // Waits 1s
    'MERN STACK DEVELOP', // Types 'E' without deleting 'MERN STACK DEVELO'
    100, // Waits 1s
    'MERN STACK DEVELOPE', // Types 'R' without deleting 'MERN STACK DEVELOP'
    100, // Waits 1s
    'MERN STACK DEVELOPER',
    100,
    () => {
      console.log('Sequence completed'); // Place optional callbacks anywhere in the array
    }
  ]} 
                   wrapper="span" className='text-accent' cursor={true} repeat={Infinity}
                   style={{  display: 'inline-block' }}/>
               </motion.div>
            <motion.p className='mb-8 max-w-lg mx-auto lg:mx-0'
             variants={fadeIn('up',0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false, amount:0.7}}>
           
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
            <motion.div 
             variants={fadeIn('up',0.3)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once:false, amount:0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link '>My Portfolio</a>
            </motion.div>
          
          <motion.div className='flex text-[20px] gap-x-6 max-w-max max-auto lg:mx-0'
           variants={fadeIn('up',0.7)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false, amount:0.7}}>
            <a href='#'><AiFillGithub /></a>
            <a href='#'><AiFillLinkedin /></a>
            <a href='#'><AiFillMail /></a>
           
          </motion.div>
          <motion.div 
          variants={fadeIn('up',0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className='hidden lg:flex flex-1 max-w[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' className='' />
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Banner