import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    displayText:string
}

const FormButton:React.FC<Props> = ({displayText, ...otherProps}:Props) => {
    
  return (
    <button {...otherProps} className='w-full max-w-[250px] h-12 bg-primarySkiedBlue text-white font-semibold rounded-md border-2 border-solid border-transparent hover:bg-transparent hover:border-primarySkiedBlue transition-all duration-300 hover:text-primarySkiedBlue' >{displayText}</button>
  )
}

export default FormButton
