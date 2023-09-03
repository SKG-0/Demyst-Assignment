import React from 'react'

interface Props {
    optionList: string[],
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>
}

const FormSelectMenu:React.FC<Props> = ({optionList, setSelectedOption}:Props) => {

    const handleOptionSelection = (option:string) => {
        setSelectedOption(option)
    }

  return (
    <div className='absolute top-[33px] left-0 w-full h-fit bg-gray-200 flex flex-col justify-center items-center z-10 rounded-md overflow-hidden'>
        {optionList.map((option, index) => {
            return <div key={index} className='w-full h-8 bg-gray-200 flex justify-start items-center pl-2 hover:bg-lightBlue-200 duration-300 transition-all' onClick={() => handleOptionSelection(option)}>{option}</div>
        })}
    </div>
  )
}

export default FormSelectMenu
