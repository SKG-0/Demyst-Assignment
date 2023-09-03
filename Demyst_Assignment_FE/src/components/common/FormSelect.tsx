import React, {useState, useEffect} from 'react'
import FormSelectMenu from './FormSelectMenu'
import { ACCOUNTING_PROVIDERS } from '../../helper/constants'
import type { DataObjectType } from '../../helper/simulateBackendCall'

interface Props {
    label: string,
    name: string,
    required: boolean,
    setFormData: React.Dispatch<React.SetStateAction<DataObjectType>>,
    warning: string,
    isInvalid: boolean
}

const FormSelect:React.FC<Props> = ({name, label, required, warning, isInvalid , setFormData}:Props) => {

  //States for Opening Menu and selecting option
  const [isSelectMenuOpen, setSelectMenuOpen] = useState<boolean>(false)
  const [selectedOption, setSelectedOption] = useState<string>("")

  const handleSelectMenuClick = () => {
    setSelectMenuOpen(isSelectMenuOpen => !isSelectMenuOpen)
  }

  //Side effect to send selected option for accounting provider to formdata object in parent component 
  useEffect(()=>{
    if(selectedOption) setFormData(formData => ({...formData, accountingProvider: selectedOption}))
  },[selectedOption, setFormData])

  return (
    <div className='relative w-full h-fit flex flex-col justify-center items-start my-2 pb-4'>
      <label htmlFor={name} className='text-sm flex items-center'>
        {label}
        {required && <span className='text-red-500'>*</span>}
      </label>
      <div className='relative w-full h-8 bg-gray-200 rounded-md text-secondaryLightBlue text-sm flex items-center justify-start pl-2 cursor-pointer' style={{outline:`${isInvalid ? "red" : "none"}`}} onClick={handleSelectMenuClick}>
        <span className={`text-secondaryLightBlue text-sm ${selectedOption ? "" :"text-opacity-40"} font-semibold`}>{selectedOption ? selectedOption : "Select Accounting Provider"}</span>
        {isSelectMenuOpen && <FormSelectMenu optionList={ACCOUNTING_PROVIDERS} setSelectedOption={setSelectedOption} />}
      </div>
      {isInvalid && <div className='absolute bottom-0 left-0 text-sm text-red-600 z-0'>{warning}</div>}
    </div>
  )
}

export default FormSelect
