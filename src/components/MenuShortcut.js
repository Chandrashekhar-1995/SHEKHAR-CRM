import React from 'react'

const MenuShortcut = () => {
  return (
    <div className=' w-2/4'>
        <div className=' m-2 p-2 bg-blue-600'>
            <div className='flex justify-between'>
                <p className=' text-white'>Quick info</p>
                <button className=' bg-yellow-200'> TODAY </button>
            </div>
            <div className='flex justify-between mt-16'>
                <div>
                    <p className=' text-white'>Gross Sale</p>
                    <p className=' text-white'>₹</p>
                </div>
                <div>
                    <p className=' text-white'>Amount Due</p>
                    <p className=' text-white'>₹</p>
                </div>
                <div>
                    <p className=' text-white'>Amount Recived</p>
                    <p className=' text-white'>₹</p>
                </div>
            </div>
        </div>

        <div className='flex'>
            <div className='m-2 p-2 bg-blue-600 hover:bg-blue-900 cursor-pointer font-bold text-white w-1/2'>Book Mobile</div>
            <div className='m-2 p-2 bg-blue-600 hover:bg-blue-900 cursor-pointer font-bold text-white w-1/2'>Repair Status</div>
        </div>
        <div className='flex'>
            <div className='m-2 p-2 bg-blue-600 hover:bg-blue-900 cursor-pointer font-bold text-white w-1/2'>Add Customer</div>
            <div className='m-2 p-2 bg-blue-600 hover:bg-blue-900 cursor-pointer font-bold text-white w-1/2'>Add Reminder</div>
        </div>
        <div className='flex'>
            <div className='m-2 p-2 bg-blue-600 hover:bg-blue-900 cursor-pointer font-bold text-white w-1/2'>Payment In</div>
            <div className='m-2 p-2 bg-blue-600 hover:bg-blue-900 cursor-pointer font-bold text-white w-1/2'>Payment Out</div>
        </div>
        
    </div>
  )
}

export default MenuShortcut;




            {/* <div className='flex justify-between m-2 p-2 bg-blue-600 hover:bg-blue-900 cursor-pointer'>
                    <p className=' text-white'>Quick info</p>
                    <button className=' bg-yellow-200'> TODAY </button>
            </div> */}