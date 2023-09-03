import React from 'react'
import {useNavigate} from "react-router-dom"
import {useMutation} from "react-query"
import { toast } from 'react-toastify'

import FormButton from '../components/common/FormButton'

import simulateBackendCall, { initiateApplicationURI } from '../helper/simulateBackendCall'

//Structure of Body to create POST req to initiate application request
export interface IsApplicationInitiated{
  isApplicationInitiated: boolean
}

const initiateApplication = async (isApplicationInitiated:IsApplicationInitiated) => {
  try{
    const response = await simulateBackendCall(initiateApplicationURI, "POST",  isApplicationInitiated)
    console.log(response)
    return response
  }catch(error){
    console.error(error)
    throw error
  }
}//Optimized initiateApplication function with error handling

const Application:React.FC = () => {

  const navigate = useNavigate()

  //Using React Query's useMutation hook for initiating the application
  const initiateApplicationMutation = useMutation(initiateApplication, {
    onSuccess: (response) => {
      if(response) {
        toast.success("Application initiation successful")
        navigate("/application-form")
      }
      else toast.error("Application initiation was not successful.")
    },
    onError: (error) => {
      console.error(error)
    }
  })

  //On click handler for initiating the application
  const handleInitiateApplication = async (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const isApplicationInitiated:IsApplicationInitiated = {
      isApplicationInitiated: true
    }

    initiateApplicationMutation.mutate(isApplicationInitiated)
  }

  return (
    <form onSubmit={handleInitiateApplication} className='w-full h-full flex justify-center items-center px-2'>
      <FormButton type='submit' data-testid="initiation" displayText='Initiate Application'/>
    </form>
  )
}

export default Application
