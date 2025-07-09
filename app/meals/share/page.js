import { Formbutton } from "@/components/formbutton/Formbutton";
import { ImagePacker } from "@/components/imagePacker/ImagePacker";
import { getFormData } from "@/lib/actions";

export default function ShareMeals(){

    return(
            <div className="min-h-screen  p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Share Your Meal</h1>
        <form className="space-y-4" action={getFormData}>
<div className="flex  items-center justify-between">
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

         <div className="flex items-center justify-between">
          <div >
            <label className="  font-medium text-gray-700">Creator Name</label>
           
            <input
              type="text"
              required
              name="creator"
              className="w-full p-2 px-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
             
            />
            
          </div>

          <div>
            <label className="block  font-medium text-gray-700">Creator Email</label>
            <input
              type="email"
              required
              name="creator_email"
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