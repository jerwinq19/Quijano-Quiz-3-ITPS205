import { FaPython, FaJs, FaHtml5, FaCss3, FaGithub, FaGithubAlt, FaFacebook } from "react-icons/fa";
import { FaInstagram, FaMaskVentilator } from "react-icons/fa6";

const About = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-16 flex items-center justify-center">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 max-w-3xl w-full">
                <section className="mb-5">
                    <h1 className="text-3xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-2">
                        About Me
                    </h1>
            
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I'm Jerwin Nico, a 2nd-year BSIT student at Dalubhasaan ng Lungsod ng Lucena.
                        I’m passionate about <span className="text-blue-400">Full Stack Web Development</span> and enjoy turning ideas into real-world apps.
                    </p>
            
                    <p className="text-gray-300 text-lg leading-relaxed mt-4">
                        I prefer building things from scratch without frameworks, using core
                        technologies like <span className="text-blue-400">JavaScript, Python, and Django</span>.
                        I’m currently exploring React and deepening my skills in React and Tailwind CSS.
                    </p>
            
                    <p className="text-gray-300 text-lg leading-relaxed mt-4">
                        Outside of coding, I love biking and spending time with people who help me grow.
                    </p>
                </section>

                <section className="mt-12">
                    <h1 className="text-3xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-2">
                        Skills
                    </h1>

                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-4 bg-gray-800 hover:bg-gray-700 transition p-4 rounded-lg">
                            <FaPython className="text-3xl text-yellow-300 mt-1" />
                            <div>
                                <p className="text-white text-lg font-semibold">Python</p>
                                <p className="text-gray-300 text-sm">
                                I'm currently learning Python to build RESTful APIs using Flask and Django.
                                </p>
                            </div>
                            </li>

                        <li className="flex items-start gap-4 bg-gray-800 hover:bg-gray-700 transition p-4 rounded-lg">
                            <FaJs className="text-3xl text-yellow-400 mt-1" />
                            <div>
                                <p className="text-white text-lg font-semibold">JavaScript</p>
                                <p className="text-gray-300 text-sm">
                                I use JavaScript for front-end interactivity and React development, and I enjoy building apps without frameworks.
                                </p>
                            </div>
                        </li>

                        <li className="flex items-start gap-4 bg-gray-800 hover:bg-gray-700 transition p-4 rounded-lg">
                            <FaHtml5 className="text-3xl text-orange-500 mt-1" />
                            <div>
                                <p className="text-white text-lg font-semibold">HTML</p>
                                <p className="text-gray-300 text-sm">
                                I structure all my projects with semantic HTML for accessibility and clean code.
                                </p>
                            </div>
                        </li>

                        <li className="flex items-start gap-4 bg-gray-800 hover:bg-gray-700 transition p-4 rounded-lg">
                            <FaCss3 className="text-3xl text-blue-400 mt-1" />
                            <div>
                                <p className="text-white text-lg font-semibold">CSS & Tailwind CSS</p>
                                <p className="text-gray-300 text-sm">
                                I use Tailwind CSS to build responsive, modern UIs quickly, and I understand core CSS deeply.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="mt-12">
                    <h1 className="text-3xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-2">
                        Socials
                    </h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <a href="https://github.com/jerwinq19" target='_blank' className="flex flex-col items-center justify-center gap-2 bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition duration-200">
                            <FaGithubAlt className="text-4xl hover:text-white transition"/>
                            <p className="text-sm text-gray-300 font-medium">GitHub</p>
                        </a>

                        <a href="https://www.instagram.com/___.nxco/" target='_blank' className="flex flex-col items-center justify-center gap-2 bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition duration-200">
                            <FaInstagram className="text-4xl hover:text-white transition"/>
                            <p className="text-sm text-gray-300 font-medium">Instagram</p>
                        </a>

                        <a href="https://www.facebook.com/Ekkosecc" target='_blank' className="flex flex-col items-center justify-center gap-2 bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition duration-200">
                            <FaFacebook className="text-4xl hover:text-white transition"/>
                            <p className="text-sm text-gray-300 font-medium">Facebook</p>
                        </a>
                    </div>

                </section>
            </div>


        </section>
    );
};
    
export default About;