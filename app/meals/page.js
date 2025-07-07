import Image from 'next/image';
import fetchdata from '../../lib/fetchdata'
import { Suspense } from 'react';
import LoadingPage from '@/components/Loading-out';
import { Mealsall } from '@/components/meals/Mealsall';
import Link from 'next/link';

async function Getmeals(){
const meals=await fetchdata();
return <Mealsall meals={meals}/>
}
export default async function Meals(){
    

    return(
        <div className="min-h-screen   p-8 ">
            
      <h1 className="text-4xl font-bold text-center text-red-700 mb-10">Our Delicious Meals</h1>
      <Link href="/meals/share" className='text-center w-full block mb-6 '>share your mael</Link>
   <Suspense fallback={<LoadingPage/>}>
    <Getmeals/>
   </Suspense>
    </div>
    )
}