import { useState, useEffect } from "react";

const Home = () => {
    const hobbies = ["Biking", "Coding", "Playing guitar"];
    const [text, setText] = useState("");
    const [hobbyIndex, setHobbyIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentHobby = hobbies[hobbyIndex];

        if (charIndex < currentHobby.length) {
        const timeout = setTimeout(() => {
            setText((prev) => prev + currentHobby[charIndex]);
            setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
        } else {
        const delay = setTimeout(() => {
            setText("");
            setCharIndex(0);
            setHobbyIndex((prev) => (prev + 1) % hobbies.length);
        }, 1500);
        return () => clearTimeout(delay);
        }
    }, [charIndex, hobbyIndex]);

    return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-16 flex items-center justify-center">
        <div className="max-w-2xl text-center">
            <p className="text-gray-400 text-sm">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Jerwin Nico</h1>

            <h2 className="text-xl md:text-2xl mt-4">
            I love <span className="text-blue-400">{text}</span>
            <span className="animate-pulse">|</span>
            </h2>

            <p className="mt-6 text-gray-300">
            I'm a 2nd year BSIT student at Dalubhasaan ng Lungsod ng Lucena,
            primarily interested in Full Stack Web Development.
            </p>

            <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
            Get in Touch
            </button>
        </div>
    </section>
    );
};

export default Home;
