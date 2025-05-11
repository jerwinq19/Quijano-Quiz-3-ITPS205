const Contact = () => {
    return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-16 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Contact Me</h2>
            <p className="text-gray-300 mb-8">
                Feel free to reach out if you want to collaborate, ask a question, or just say hi!
            </p>

            <form className="flex flex-col gap-4">
                <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                placeholder="Your Message"
                rows="5"
                className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button
                type="submit"
                className="mt-2 bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 px-4 rounded"
                >
                Send Message
                </button>
            </form>
        </div>
    </section>
    );
};

export default Contact;
  