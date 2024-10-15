// import { useState } from 'react';
// import data from '../data.json'; // Import the JSON data

// const RestaurantPage = () => {
//   const itemsPerPage = 4; // Number of items to display per page
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState(''); // State for search input
//   const [minRating, setMinRating] = useState(0); // State for minimum rating

//   // Filter restaurants based on search term and minimum rating
//   const filteredRestaurants = data.restaurants.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//     item.rating >= minRating
//   );

//   // Calculate total pages based on filtered results
//   const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

//   // Get the current items to display
//   const currentItems = filteredRestaurants.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Handle page change
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Restaurants</h2> */}

//       {/* Search and Rating Filter */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search restaurants..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border rounded px-4 py-2 mr-2"
//         />
//         <select
//           value={minRating}
//           onChange={(e) => setMinRating(Number(e.target.value))}
//           className="border rounded px-4 py-2"
//         >
//           <option value={0}>All Ratings</option>
//           <option value={1}>1 Star & Up</option>
//           <option value={2}>2 Stars & Up</option>
//           <option value={3}>3 Stars & Up</option>
//           <option value={4}>4 Stars & Up</option>
//           <option value={5}>5 Stars</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {currentItems.map((item, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="p-6">
//               <h3 className="text-lg font-semibold">{item.name}</h3>
//               <p className="mt-2 text-gray-600">Rating: {item.rating} ⭐</p>
//               <p className="mt-1 text-gray-600">{item.address}</p>
//               <p className="mt-1 text-gray-600">{item.postal_code}</p>
//               <p className="mt-1 text-green-600">{item.cuisine}</p>
//               <a 
//                 href={item.menu_link} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
//               >
//                 Visit Menu
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-8">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={`mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-500`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantPage;


const restaurants = [
  {
    name: "The Hungry Hippo",
    location: "123 Foodie Lane, Yumtown",
    nickname: "Gobbler of Goodness",
    image: "https://via.placeholder.com/100/FF5733/FFFFFF?text=Hippo",
    bgColor: "bg-red-200",
  },
  {
    name: "Pasta Paradise",
    location: "456 Noodle St, Saucy City",
    nickname: "Carb King",
    image: "https://via.placeholder.com/100/FFC300/FFFFFF?text=Pasta",
    bgColor: "bg-yellow-200",
  },
  {
    name: "Burger Bonanza",
    location: "789 Burger Blvd, Meatropolis",
    nickname: "Bun in the Oven",
    image: "https://via.placeholder.com/100/DAF7A6/FFFFFF?text=Burger",
    bgColor: "bg-green-200",
  },
  {
    name: "Taco Town",
    location: "101 Taco Rd, Spicyville",
    nickname: "Chili Chompers",
    image: "https://via.placeholder.com/100/C70039/FFFFFF?text=Taco",
    bgColor: "bg-pink-200",
  },
  {
    name: "Sushi Central",
    location: "202 Fishy Ave, Rollington",
    nickname: "Rice Rocket",
    image: "https://via.placeholder.com/100/900C3F/FFFFFF?text=Sushi",
    bgColor: "bg-purple-200",
  },
  {
    name: "Curry Castle",
    location: "303 Spice St, Flavorland",
    nickname: "Maharaja of Masala",
    image: "https://via.placeholder.com/100/FFC300/FFFFFF?text=Curry",
    bgColor: "bg-orange-200",
  },
  {
    name: "Dessert Den",
    location: "404 Sweet Tooth Way, Sugarland",
    nickname: "Confection Commander",
    image: "https://via.placeholder.com/100/F39C12/FFFFFF?text=Dessert",
    bgColor: "bg-yellow-300",
  },
  {
    name: "BBQ Bliss",
    location: "505 Smokehouse Rd, Grilltopia",
    nickname: "Sauce Slinger",
    image: "https://via.placeholder.com/100/16A085/FFFFFF?text=BBQ",
    bgColor: "bg-teal-200",
  },
  {
    name: "Pizza Palace",
    location: "606 Cheese St, Crustville",
    nickname: "Slice of Heaven",
    image: "https://via.placeholder.com/100/E67E22/FFFFFF?text=Pizza",
    bgColor: "bg-orange-200",
  },
  {
    name: "Breakfast Bistro",
    location: "707 Egg Ave, Morningtown",
    nickname: "Sunny Side Up",
    image: "https://via.placeholder.com/100/F1C40F/FFFFFF?text=Eggs",
    bgColor: "bg-yellow-200",
  },
  {
    name: "Vegan Vortex",
    location: "808 Plant St, Greenery City",
    nickname: "Herbivore Hero",
    image: "https://via.placeholder.com/100/27AE60/FFFFFF?text=Vegan",
    bgColor: "bg-green-300",
  },
  {
    name: "Deli Delight",
    location: "909 Sandwich St, Snacktown",
    nickname: "The Deli-ghtful One",
    image: "https://via.placeholder.com/100/2980B9/FFFFFF?text=Deli",
    bgColor: "bg-blue-200",
  },
];

const Restaurant = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Restaurants</h2>
      <div className="space-y-4">
        {restaurants.map((restaurant, index) => (
          <div key={index} className={`flex items-center ${restaurant.bgColor} rounded-lg shadow-md p-4`}>
            <img src={restaurant.image} alt={restaurant.name} className="w-16 h-16 mr-4 rounded" />
            <div>
              <h3 className="text-lg font-semibold">{restaurant.name}</h3>
              <p className="text-gray-700">{restaurant.location}</p>
              <p className="text-sm text-gray-500 italic">{restaurant.nickname}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;

