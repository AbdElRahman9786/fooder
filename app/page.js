
import Image from "next/image";

import img from '../app/images/Jakob-Esko-scaled-1.jpg'
import { Main } from "@/components/main/Main";



export default function Home() {
  
  return (
    <>
<Main/>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF7A04" fill-opacity="0.8" d="M0,192L14.1,181.3C28.2,171,56,149,85,160C112.9,171,141,213,169,208C197.6,203,226,149,254,106.7C282.4,64,311,32,339,48C367.1,64,395,128,424,160C451.8,192,480,192,508,181.3C536.5,171,565,149,593,133.3C621.2,117,649,107,678,133.3C705.9,160,734,224,762,224C790.6,224,819,160,847,149.3C875.3,139,904,181,932,218.7C960,256,988,288,1016,256C1044.7,224,1073,128,1101,117.3C1129.4,107,1158,181,1186,224C1214.1,267,1242,277,1271,256C1298.8,235,1327,181,1355,165.3C1383.5,149,1412,171,1426,181.3L1440,192L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path></svg>
   <section className="mt-90 px-4 py-10 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg max-w-6xl mx-auto">
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
