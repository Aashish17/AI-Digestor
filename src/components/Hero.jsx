import React from 'react'
import { logo } from '../../public/assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className=' flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="summarizer_logo" 
          className='w-28 object-contain'
        />
        <button type='button'  className='black_btn' onClick={()=>window.open('https://www.linkedin.com/in/aashish-kanesh-484881159/')}>linkedin</button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Streamline your reading with AI Digestor by Aashish :), an open-source article summarizer that condenses lengthy articles into concise summaries.
      </h2>
    </header>
  )
}

export default Hero