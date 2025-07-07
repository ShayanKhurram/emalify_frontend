"use client"
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { sendMessageToAgent } from '@/actions/Agent_chat'
import { getLead } from '@/actions/crud'
const SendData = ({ lead_id }: { lead_id: number }) => {

   async function handleSendData(){
    const result = await getLead(lead_id)
    console.log(result)
    const jsonString = JSON.stringify(result)
    const response = await sendMessageToAgent(jsonString + " the data is a json object collect all relevant info from it and than send email also use tools to get info about vmgroupe.com  website data to offer a service to the user.Send email using email tool.My company name is vmgroupe")
    console.log(response)
}
  return (
    <div>
          <AlertDialog>
  <AlertDialogTrigger className='text-blue-600'>Send</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleSendData}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
  )
}

export default SendData
