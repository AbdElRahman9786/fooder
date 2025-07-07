'use client'

import { useFormStatus } from "react-dom"



export const Formbutton = () => {
    const {pending}=useFormStatus()
  return (
      <button
      disabled={pending}
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold transition"
          >
          {pending?'submitting...':'Submit Meal'}  
          </button>
  )
}
