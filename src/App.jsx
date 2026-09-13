import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechnologyCard from "./components/TechnologyCard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Add technology
  const handleAddToStack = (technology) => {
    const alreadyExists = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemoveFromStack = (id) => {
    const technology = stack.find((item) => item.id === id);

    if (!technology) return;

    setStack(stack.filter((item) => item.id !== id));

    toast.info(`${technology.name} removed from your stack!`);
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);

    toast.info("All technologies removed from your stack!");
  };

  // Load JSON data
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load technologies");
        }

        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load technologies. Please try again.");
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl">⚠️</div>

          <h2 className="text-xl font-bold text-gray-700 mt-3">
            Something went wrong
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-purple-500 rounded-full animate-spin mx-auto"></div>

          <h2 className="mt-4 text-lg font-semibold text-gray-700">
            Loading technologies...
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Please wait a moment
          </p>
        </div>
      </div>
    );
  }


  return (
    <>
      <Navbar />
      <Hero />

      <div className="p-6">

        <ToastContainer />

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">Technologies</span>
          </h2>

          <p className="text-gray-500 mt-2">
            Pick one Technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Technology Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAddToStack={handleAddToStack}
                isAdded={stack.some((item) => item.id === technology.id)}
              />
            ))}

          </div>

          {/* Your Stack */}
          <div className="border border-gray-200 rounded-xl p-5 bg-white h-fit shadow-sm lg:sticky lg:top-24">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">
                  Your Stack
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
                </p>
              </div>

              {stack.length > 0 && (
                <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {stack.length}
                </span>
              )}
            </div>

            {/* Empty State */}
            {stack.length === 0 && (
              <div className="border border-dashed border-gray-300 rounded-lg p-8 mt-4 text-center">
                <div className="text-3xl mb-2">🧩</div>
                <p className="font-medium text-gray-600">
                  Your stack is empty
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Add technologies to build your stack.
                </p>
              </div>
            )}

            {/* Stack Items */}
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between border rounded-lg p-3 mt-3"
              >

                <div className="flex items-center gap-3">

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-8 h-8"
                  />

                  <div>
                    <h3 className="font-semibold text-sm">
                      {technology.name}
                    </h3>

                    <p className="text-xs text-gray-400">
                      {technology.category}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() =>
                    handleRemoveFromStack(technology.id)
                  }
                 className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full w-7 h-7 transition"
                >
                  ✕
                </button>

              </div>
            ))}

            {/* Remove All */}
            {stack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="w-full mt-4 border border-red-300 text-red-500 py-2 rounded-lg"
              >
                Remove All
              </button>
            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default App;