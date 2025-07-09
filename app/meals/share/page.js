import { Formbutton } from "@/components/formbutton/Formbutton";
import { ImagePacker } from "@/components/imagePacker/ImagePacker";
import { getFormData } from "@/lib/actions";
import img from '../../images/grilled-beef-burger-gourmet-meal-american-culture-unhealthy-eating-generated-by-artificial-intelligence 1.png'
import Image from "next/image";

export default function ShareMeals(){

    return(
            <div className=" p-2  flex items-center justify-center flex-wrap mt-5">
              <div>
                <Image src={img} alt="side image" className="w-[80%]"/>
              </div>
      <div className="w-full max-w-2xl   rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-orange-500">Share Your Meal</h1>
        <form className="space-y-4" action={getFormData}>
<div className="flex max-w-full items-center justify-between">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Meal Title</label>
            <input
              type="text"
              required
              name="title"
              className="w-full p-2 px-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Summary</label>
            <input
              type="text"
              name="summary"
              required
              className="w-full p-2 px-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
             
            />
          </div>
          </div>

         <div className="flex items-center  max-w-full justify-between">
          <div>
            <label className="block mb-1 font-medium text-gray-700">craetor Name</label>
            <input
              type="text"
              required
              name="creator"
              className="w-full p-2 px-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">creator Email</label>
            <input
              type="text"
              name="creator_email"
              required
              className="w-full p-2 px-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
             
            />
          </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Image </label>
            <ImagePacker/>
          </div>

          

          <div>
            <label className="block mb-1 font-medium text-gray-700">Instructions</label>
            <textarea
              name="instructions"
              required
              rows="5"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
             
            ></textarea>
          </div>


       <Formbutton/>

        </form>
      </div>
    </div>
    )
}