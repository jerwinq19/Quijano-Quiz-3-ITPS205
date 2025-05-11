


const MyProject = [
    {
        title: "Notes App",
        disc: "A simple Note App that follows the CRUD principles, it allows user to store notes and mark it done when its done.",
        link: "https://jerwinq19.github.io/Note-App/"
    },
    {
        title: "Management System Using REDUX",
        disc: "An advanced guild management system that integrates Redux for state management and uses APIs to dynamically handle data.",
        link: "https://hands-on-2-jicoo.vercel.app/"
    },
    {
        title: "Luistro Cafe",
        disc: "A static website built for a local coffee shop in Cotta, Lucena City. Developed using HTML, CSS, and JavaScript for showcasing products and business info.",
        link: "https://jerwinq19.github.io/PELEC-201-Lustrio/"
    },
    {
        title: "Book Finder",
        disc: "A React application that uses the Google Books API to search and display books with detailed information for users.",
        link: "https://advance-api-usage.vercel.app/"
    },
    {
        title: "Django To-Do List",
        disc: "A simple yet functional to-do list app built with Django, HTML, and CSS, featuring basic CRUD operations.",
        link: "https://github.com/jerwinq19/itp-webdev-django-todoapp"
    }
];




const Project = () => {
        return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-blue-400 mb-10 text-center">
                    My Projects
                </h1>
        
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {MyProject.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-[1.02] transition"
                    >
                        <h2 className="text-2xl font-semibold mb-2 text-blue-300">
                        {item.title}
                        </h2>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {item.disc}
                        </p>
                        {item.link ? (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-auto text-sm text-blue-400 hover:underline"
                        >
                            View Project →
                        </a>
                        ) : (
                        <span className="text-sm text-gray-500 italic">Coming soon</span>
                        )}
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;