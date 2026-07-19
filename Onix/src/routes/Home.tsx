import React, { ReactElement } from 'react'

const Home = (): ReactElement => {
  return (
    <div className='px-6'>
      <div className='text-center mb-10'>
        <h1 className='font-bold text-5xl dark:bg-[#6d6e68]/30 p-5 text-center shadow-2xl dark:border-zinc-200 border rounded-xl'>
          Onix - Portal de Aulas
        </h1>
      </div>
      <div className='grid grid-rows-2 gap-5'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quibusdam quod porro blanditiis reprehenderit distinctio illo tenetur officiis, nesciunt ipsum, earum possimus, rerum nemo cupiditate facilis amet cum quam sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni quae iure fuga officiis magnam eius eveniet facilis ipsum accusantium sed, animi quis explicabo consequatur nam soluta quidem doloremque non.
        </p>

      </div>
    </div>
  )
}

export default Home