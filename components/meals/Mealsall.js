import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Mealsall = ({meals}) => {
  return (
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meals.map((meal) => (
         <div
  key={meal.slug}
  className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
>
  
  <div className="relative w-full h-64">
    <Image
      src={`https://images-nextjs.s3.eu-north-1.amazonaws.com/${meal.image}`}
      alt={meal.title}
      fill
      className="object-cover"
    />
  </div>

  {/* Content section */}
  <div className="p-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
      {meal.title}
    </h2>

    <p className="text-gray-600 mb-4 line-clamp-2">{meal.summary}</p>

    <details className="mb-4">
      <summary className="cursor-pointer font-medium text-orange-600">
        Cooking Instructions
      </summary>
      <pre className="mt-2 text-sm text-gray-700 whitespace-pre-wrap">
        {meal.instructions}
      </pre>
    </details>

    <div className="text-sm text-gray-500">
      Created by: <span className="text-gray-700">{meal.creator}</span>
    </div>

    <Link
      href={`/meals/${meal.slug}`}
      className="mt-2 inline-block text-orange-600 hover:underline"
    >
      Show Details
    </Link>
  </div>
</div>

        ))}
      </div>
  )
}
