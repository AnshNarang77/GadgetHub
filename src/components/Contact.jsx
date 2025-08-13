import React from 'react'

function Contact() {
  const handleSubmit=(e)=>{
     e.preventDefault();
     alert("Form Submitted!")
  }
  return (
    <>

    <div className='text-white text-5xl font-semibold  text-center mb-15 mt-15  underline '>Feel free to contact us!</div>
  <div className=' pb-30 flex flex-col items-center p-5 sm:p-10 md:flex-row md:justify-between lg:justify-around '>

    <div className='bg-neutral-600 rounded-lg w-[100%] md:w-[50%] lg:w-[40%] xl:w-[30%] text-white'>
    <div className='p-5 '>
      <div className='flex items-center'>
        <img src="/images/call.svg" alt="" className='bg-black rounded-full p-3 border-yellow-600 border-8'/>
        <p className='text-2xl sm:text-3xl ml-3 font-semibold'>Call us at:</p></div>
      <div className='sm:text-lg font-semibold mt-3'>Phone : +91 934983456</div>
      <div className='sm:text-lg font-semibold'>We are available 24/7 to help you.</div>
    </div>

    <div className='h-[2px] bg-white w-full'></div>

    <div className='p-5'>
      <div className='flex items-center'>
        <img src="/images/mail.svg" alt="" className='bg-black rounded-full p-3 border-yellow-600 border-8'/>
        <p className='text-2xl sm:text-3xl ml-3 font-semibold'>Write to  us at:</p></div>
      <div className='sm:text-lg font-semibold mt-3'>Emails: customer@gadgethub.com</div>
      <div className='sm:text-lg font-semibold'>Support: support@gadgethub.com</div>
    </div>
    </div>

    <form className='bg-neutral-600  p-5 w-[100%] mt-15 md:mt-0 rounded-lg md:w-[40%]' onSubmit={handleSubmit}>
    <div className='mb-2 text-white text-3xl'>Register your complaints :</div>
    <div className='mb-3 '><input type="text" required name="" id="" className='bg-white p-3 text-lg w-[100%] rounded-lg' placeholder='Enter Your Name'/></div>
    <div className='mb-3'><input type="email" name="" required id="" className='bg-white p-3 text-lg w-[100%] rounded-lg' placeholder='Enter Your e-mail'/></div>
    <div><input type="tel" name="" id="" required className='bg-white p-3 text-lg w-[100%] rounded-lg' pattern="[0-9]{10}" placeholder='Enter Your Phone_Number'/></div>
    <div><textarea name="" id="" required className='bg-white p-3 w-[100%] h-[20vh] mt-3 text-lg rounded-lg' placeholder='Enter your message'></textarea></div>
    <div ><button type='submit' className='p-3 bg-black text-white font-semibold text-lg rounded-lg'>Send message</button></div>
    </form>
  </div>
    </>
  )
}

export default Contact
