export default function Community(){
    return (
         <main className="min-h-screen px-4 py-12  text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Our Community
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          At <span className="text-black font-semibold">FoodEr</span>, we’re more than just meals —
          we’re a family of food lovers, home chefs, and passionate eaters sharing delicious
          moments every day.
        </p>

        <section className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-red-500 mb-2"> Share Recipes</h2>
            <p>
              Post your favorite dishes, secret ingredients, and traditional meals to inspire others.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-green-600 mb-2"> Connect & Discuss</h2>
            <p>
              Join conversations, give tips, and ask for advice from thousands of foodies like you.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-yellow-500 mb-2"> Food Moments</h2>
            <p>
              Share beautiful photos of your meals and get featured on our homepage.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-purple-500 mb-2"> Global Flavors</h2>
            <p>
              Discover dishes from around the world and expand your taste buds with each click.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <a
            href="/signup"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Join Now
          </a>
        </div>
      </div>
    </main>
    )
}