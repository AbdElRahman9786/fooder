import Image from 'next/image';
import fetchdata from '../../lib/fetchdata'
import { Suspense } from 'react';
import LoadingPage from '@/app/Loading';
import { Mealsall } from '@/components/meals/Mealsall';
import Link from 'next/link';

async function Getmeals(){
const meals=await fetchdata();
return <Mealsall meals={meals}/>
}
export default async function Meals(){
    

    return(
        <>
        <div className="min-h-screen   p-8 ">
            
      <h1 className="text-4xl font-bold text-center text-red-700 mb-10">Our Delicious Meals</h1>
      
   
    <Getmeals/>
   
   
    </div>
    <Link href="/meals/share" className='text-center block w-[200px] mx-auto  my-10 text-[#F47200] bg-white px-6 py-4 rounded-2xl'>share your mael</Link>
    </>
    )
}