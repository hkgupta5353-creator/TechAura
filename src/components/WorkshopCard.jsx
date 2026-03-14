import React from "react";

const WorkshopCard = ({ title, description, image, date }) => {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 text-white">

        <p className="text-sm text-indigo-400 mb-1">{date}</p>

        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        <p className="text-slate-300 text-sm mb-4">
          {description}
        </p>

        <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg text-sm font-medium transition">
          Register Now
        </button>

      </div>
    </div>
  );
};

export default WorkshopCard;