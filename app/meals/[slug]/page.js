import { singlemeal } from "@/lib/fetchdata"

export default async function DynamicMeals({params}){
    const meal= await singlemeal(params.slug)
    return(
        <div className="min-h-screen bg-gradient-to-br from-lime-100 via-white to-red-100 p-8 flex justify-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-6">
        {/* <img
          src={meal.image}
          alt={meal.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        /> */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{meal.title}</h1>
        <p className="text-gray-600 mb-4 italic">{meal.summary}</p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Instructions</h2>
          <div
            className="text-gray-700 space-y-2"
            dangerouslySetInnerHTML={{ __html: meal.instructions }}
          />
        </div>

        <div className="mt-6 border-t pt-4 text-sm text-gray-500">
          <p>
            Created by: <span className="font-medium text-gray-700">{meal.creator}</span>
          </p>
          <p>Email: {meal.creator_email}</p>
        </div>
      </div>
    </div>
  );

    
}