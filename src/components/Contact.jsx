
const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-6 bg-gray-50 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Contact Us</h2>
        <p className="mb-4">Feel free to reach out for any inquiries!</p>
        
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Address"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Side: Geek Food Details */}
      <div className="w-full md:w-1/2 p-6">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">About Geek Food</h3>
          <p className="mb-2">
            At Geek Food, we are passionate about providing the best food experience.
            Our team is dedicated to quality and service, ensuring that each meal
            is a delightful experience. Whether you are looking for quick bites
            or gourmet meals, we have something for everyone. Our ingredients
            are sourced from local farms, and we prioritize sustainability.
          </p>
          <p className="mb-2">For any questions or feedback, please feel free to contact us!</p>
        </div>
        
        <div>
          <p className="mb-2">Mobile: 123-456-7890</p>
          <p>Email: contact@geekfood.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;