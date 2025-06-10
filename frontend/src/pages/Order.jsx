import React from 'react'

const Orders = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e8ac7175-6337-44ba-994b-44ee5b8ab4c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="bg-zinc-900 rounded-xl shadow-lg p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Order Books</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="order"
            placeholder="Order of Books (list the books you want to order)"
            required
            rows={4}
            className="px-4 py-3 rounded bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition-colors duration-200"
          >
            Submit Order
          </button>
        </form>
        <span className="block mt-4 text-center text-green-400">{result}</span>
      </div>
    </div>
  )
}

export default Orders