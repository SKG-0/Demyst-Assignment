import React from 'react'

interface Props extends React.AllHTMLAttributes<HTMLInputElement> {
  type:string,
  label: string,
  name: string,
  required: boolean,
  warning: string,
  isInvalid: boolean
}

const FormInput:React.FC<Props> = ({type, label, name, required, warning, isInvalid,  ...otherProps}:Props) => {
  return (
    <div className='relative w-full h-fit flex flex-col justify-center items-start my-2 pb-4'>
      <label htmlFor={name} className='text-sm flex items-center'>
        {label}
        {required && <span className='text-red-500'>*</span>}
      </label>
      <input type={type} name={name} {...otherProps} className={`bg-gray-200 w-full h-8 rounded-md text-secondaryLightBlue indent-2 text-sm ${isInvalid ? "outline-red-600" : "outline-none"}`}/>
      {isInvalid && <div className='text-sm text-red-600 absolute bottom-0 left-0'>{warning}</div>}
    </div>
  )
}

export default FormInput
