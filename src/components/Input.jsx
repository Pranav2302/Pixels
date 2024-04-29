import React from 'react'
import { useId } from 'react'


//all contain is wrap in forwardRef ,this is use for to give reference to state as input are single .we are use same input and button for all and implementation and button both are in different files 
const Input=React.forwardRef(function Input(
    {label,
    type="text",
    className="",
    ...props
},ref){
        const id=useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 text-offwhite'
            htmlFor={id}>
           {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}   //imp to reference
            id={id}
            {...props}
            />
        </div>
    )
})

export default Input
