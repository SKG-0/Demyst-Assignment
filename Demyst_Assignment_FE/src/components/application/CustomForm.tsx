import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import {useMutation} from "react-query"

import FormInput from '../common/FormInput'
import FormSelect from '../common/FormSelect'
import FormButton from '../common/FormButton'

import { useAppDispatch } from '../../store/hooks'
import { fetchBalanceSheet } from '../../store/slices/balanceSheetSlice'
import { fetchBusinessDetails } from '../../store/slices/bussinessDetailsSlice'

import type { DataObjectType } from '../../helper/simulateBackendCall'
import simulateBackendCall, { fetchBalanceSheetURI } from '../../helper/simulateBackendCall'
import validateFormData, { validateAccountingProvider, validateBusinessName, validateLoanAmount, validateYearEstablished } from '../../helper/validators'


const submitApplication = async (data:DataObjectType) => {
    try{
        const response = await simulateBackendCall(fetchBalanceSheetURI, "POST", data)
        return response
    }catch(error){
        console.error(error)
        throw error
    }
}//Optimized submitApplication function with error handling

//State object structure
interface ValidatorObjectType {
    isBusinessNameInvalid: boolean,
    isYearEstablishedInvalid: boolean,
    isLoanAmountInvalid: boolean,
    isAccountingProviderInvalid: boolean,
}

//Initial States
const initialFormState:DataObjectType = {
    businessName:"",
    yearEstablished:0,
    loanAmount:0,
    accountingProvider:""
}
const initialValidatorState:ValidatorObjectType = {
    isBusinessNameInvalid: false,
    isYearEstablishedInvalid: false,
    isLoanAmountInvalid: false,
    isAccountingProviderInvalid: false,
}

const CustomForm:React.FC = () => {

    const [formData, setFormData] = useState<DataObjectType>(initialFormState)
    const [isformDataValid, setFormDataValid] = useState<ValidatorObjectType>(initialValidatorState)

    //Reducer hooks
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    //Using React Query's useMutation hook for requesting balance sheet
    const submitApplicationMutation = useMutation(submitApplication, {
        onSuccess:(response) => {
            console.log(response)
            dispatch(fetchBalanceSheet(response.message))
            navigate("/review-balance-sheet")
        },
        onError: (error) => {
            console.log(error)
        }
    })

    //Function to set value of form input fields
    const handleFormFieldValueChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value
        setFormData({...formData, [name]: value})
    }

    //Function to change form validators state to default
    function setDefaultValidatorState(){
        setFormDataValid(initialValidatorState)
    }

    const handleApplicationFormSubmit = async (event:React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        setDefaultValidatorState()

        //Validating each fields
        const validateFields:ValidatorObjectType = {
            isBusinessNameInvalid: !validateBusinessName(formData.businessName),
            isYearEstablishedInvalid: !validateYearEstablished(formData.yearEstablished),
            isLoanAmountInvalid: !validateLoanAmount(formData.loanAmount),
            isAccountingProviderInvalid: !validateAccountingProvider(formData.accountingProvider),
        }

        //Changing state to display validated result
        setFormDataValid({...isformDataValid, ...validateFields})
        
        console.log(formData)
        if(validateFormData(formData)) {
            dispatch(fetchBusinessDetails(formData))
            submitApplicationMutation.mutate(formData)
        }
    }

  return (
    <form onSubmit={handleApplicationFormSubmit} className='w-full max-w-[450px] h-fit bg-primaryBlue p-5 shadow-lg rounded-2xl flex flex-col justify-center items-center'>
        <h1 className='font-bold text-xl'>Application Form</h1>
        <div className='w-full h-0 border-b-[1px] my-2 border-solid border-white'></div>
        <h6 className='self-start mt-5 font-semibold'>Business Details</h6>
        <FormInput type='text' label='Business Name' name='businessName' onChange={handleFormFieldValueChange} required={true} placeholder='Enter your business name' warning="Please enter valid businessman" isInvalid={isformDataValid.isBusinessNameInvalid}/>
        <FormInput type='number' label='Year Established' name='yearEstablished' onChange={handleFormFieldValueChange} required={true} placeholder='Enter year of establishment' warning="Please enter valid year" isInvalid={isformDataValid.isYearEstablishedInvalid}/>
        <h6 className='self-start mt-5 font-semibold'>Loan Details</h6>
        <FormInput type='number' label='Loan Amount' name='loanAmount' onChange={handleFormFieldValueChange} required={true} placeholder='Enter amount of loan' warning="Please enter valid load amount more than zero" isInvalid={isformDataValid.isLoanAmountInvalid}/>
        <h6 className='self-start mt-5 font-semibold'>Accounting Provider</h6>
        <FormSelect name='accountingProvider' label='Accounting Provider'  required={true} setFormData={setFormData} warning="Please select accounting provider" isInvalid={isformDataValid.isAccountingProviderInvalid}/>
        <div className='bg-[transparent] w-full h-10'></div>
        <FormButton type='submit' displayText='Request Balance Sheet' />
    </form>
  )
}

export default CustomForm
