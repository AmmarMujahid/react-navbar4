import React from 'react'

export default function NavItems() {
  return (
    <>
        <div>
            <ul className='flex justify-end gap-8 mr-8 font-medium text-[#FCFAF9]'>
                <li><a href="#" className='hover:underline'>Home</a></li>
                <li><a href="#" className='hover:underline'>Blog</a></li>
                <li><a href="#" className='hover:underline'>About</a></li>
                <li><a href="#" className='hover:underline'>Contact</a></li>
            </ul>
        </div>
    </>
  )
}
