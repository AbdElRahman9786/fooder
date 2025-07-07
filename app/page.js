import Image from "next/image";
import Link from "next/link";
import img from '../app/images/Jakob-Esko-scaled-1.jpg'
import Slider from "@/components/slider/Slider";

export default function Home() {
  
  return (
    <>
    <div className="w-screen max-w-[100%] h-full flex justify-evenly items-center container  flex-wrap mx-auto mt-60  ">
      <div className="w-96 max-sm:mb-3.5 max-xl:mb-3.5 max-w-[100%]">
        
        <Slider/>
      </div>
      <div className="font-bold text-4xl max-sm:text-2xl max-sm:text-center max-xl:text-center">
        <h1 className="mb-10 text-blue-300">The Taste You’ll Never Forget.</h1>
        <h1 className="mb-10 text-blue-300">Where Every Dish Tells a Story.</h1>
        <div className="flex flex-wrap justify-between items-center max-sm:justify-center">
          <Link href="/meals" className="mr-5 border-2 p-3 rounded-2xl text-red-400 max-sm:mb-3.5">Explore Meals</Link>
          <Link href="/community" className="hover:bg-red-400 p-3 border-2 hover:text-white rounded-2xl duration-150">join to our community</Link>
        </div>
      </div>
     
 

    </div>
   <section className="mt-50 px-4 py-10 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
    Meet Our Passionate Chefs 👨‍🍳👩‍🍳
  </h2>

  <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
    {/* Chef Card 1 */}
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
      <Image
        src={img}
        alt="Chef Amina"
        className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center text-gray-800">Chef Amina</h3>
      <p className="text-sm text-center text-gray-600 mt-2">
        Master of Mediterranean flavors. Her recipes blend tradition with creativity.
      </p>
    </div>

    {/* Chef Card 2 */}
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
      <Image
        src={img}
        alt="Chef Omar"
        className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center text-gray-800">Chef Omar</h3>
      <p className="text-sm text-center text-gray-600 mt-2">
        Expert in Middle Eastern street food. Known for his bold spices and rich sauces.
      </p>
    </div>

    {/* Chef Card 3 */}
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
      <Image
        src={img}
        alt="Chef Lina"
        className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-center text-gray-800">Chef Lina</h3>
      <p className="text-sm text-center text-gray-600 mt-2">
        Queen of desserts. She brings sweetness, elegance, and joy to every table.
      </p>
    </div>
  </div>
</section>

    </>
  );
}
