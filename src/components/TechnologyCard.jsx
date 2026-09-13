function TechnologyCard({ technology, onAddToStack, isAdded }) {
    return (
        <div className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-lg hover:-translate-y-1 transition duration-300">

            {/* Top Part */}
            <div className="flex items-center justify-between">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-10 h-10"
                />

                <span className="text-xs px-3 py-1 rounded-full bg-pink-50 text-pink-500">
                    {technology.badge}
                </span>
            </div>

            {/* Technology Name */}
            <h2 className="text-xl font-bold mt-4">
                {technology.name}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-2">
                {technology.description}
            </p>

            {/* Category + Difficulty */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {technology.category}
                </span>

                <span className="text-xs text-gray-500">
                    {technology.difficulty}
                </span>
            </div>

            {/* Rating */}
            <div className="mt-3 text-sm">
                ⭐ {technology.rating}
            </div>

            {/* Button */}
            <button
                disabled={isAdded}
                onClick={() => onAddToStack(technology)}
                className={`w-full mt-4 py-2 rounded-lg text-white font-medium transition ${isAdded
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>

        </div>
    );
}

export default TechnologyCard;