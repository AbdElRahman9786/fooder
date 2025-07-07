'use server'

import { redirect } from "next/navigation"
import { addmeal } from "./fetchdata"
import { revalidatePath } from "next/cache"


export async  function getFormData(formdata){
  function checkError(text){
    return !text||text==''
  }
    
    const meal={
      title:formdata.get('title'),
      summary:formdata.get('summary'),
      image:formdata.get('image'),
      instructions:formdata.get('instructions'),
      creator:formdata.get('creator'),
      creator_email:formdata.get('creator_email')

        }
        if(checkError(meal.title)||checkError(meal.summary)||checkError(meal.image)||checkError(meal.instructions)
        ||checkError(meal.creator)||checkError(meal.creator_email)){
      throw new Error("there is a missing filed")
    
      }
await addmeal(meal)
revalidatePath('/meals')
redirect('/meals')
  }