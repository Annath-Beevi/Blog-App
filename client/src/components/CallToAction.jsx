import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>Want to learn more about JavaScript</h2>
            <p className='text-gray-500 my-2'>Checkout these resources with 100 JavaScript Projects</p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.100jsprojects.com" target='__blank' rel='noopener noreferrer'>100 JavaScript Projects</a>
            </Button>
        </div>
        <div className="p-7 flex-2">
            <img src="https://softjourn.com/media/images/Articles/Advantages_and_Disadvantages_of_JavaScript/Pic_5_JS.png" alt="" height={700} width={700}/>
        </div>
    </div>
  )
}
