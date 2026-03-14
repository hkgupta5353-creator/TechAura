const Home = () => {
return (
<div className="bg-gray-900 text-white py-24">
<div className="container mx-auto text-center px-4">
<h1 className="text-5xl md:text-7xl font-extrabold text-blue-400 mb-6">
Innovate. Create. Elevate.
</h1>
<p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
Welcome to TechAura 2026. The official technical club where students build real-world projects, master new skills, and shape the future of technology.
</p>
<div className="space-x-4">
<button className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-bold transition">
Explore Events
</button>
<button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-bold transition">
View Projects
</button>
</div>
</div>
</div>
);
};

export default Home;