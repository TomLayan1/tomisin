import React from 'react'

const Footer:React.FC = () => {
  return (
    <section className='w-full py-14'>
      <div className='container w-[95%] mx-auto'>
        <div>
         <div>
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Contact/p>
         </div>

         <div>
          <FaGitHub size={25} />
          <FaLinkedIn size={25} />
         </div>
         <p>TOMISIN 2025</p>
        </div>
      </div>
    </section>
  )
}

export default Footer