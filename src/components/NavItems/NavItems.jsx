import React from 'react'

const NAV_ITEMS = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Blog",
    key: "blog",
  },
  {
    label: "About",
    key: "about",
  },
  {
    label: "Contact",
    key: "contact",
  },
]

export default function NavItems() {
  return (
    <>
        <div className='flex justify-end gap-8 mr-8 font-medium text-[#FCFAF9]'>
          {
            NAV_ITEMS.map((item) => (
              <a href="#" className='hover:underline'>{item.label}</a>
            ))
          }
            {/* <ul className='flex justify-end gap-8 mr-8 font-medium text-[#FCFAF9]'>
                <li><a href="#" className='hover:underline'>Home</a></li>
                <li><a href="#" className='hover:underline'>Blog</a></li>
                <li><a href="#" className='hover:underline'>About</a></li>
                <li><a href="#" className='hover:underline'>Contact</a></li>
            </ul> */}
        </div>
    </>
  )
}
