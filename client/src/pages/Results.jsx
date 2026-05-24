import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles, faDownload, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Results = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImage(null);

    setTimeout(() => {
      setImage("https://picsum.photos/seed/" + Date.now() + "/600/600");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative px-4 sm:px-10 md:px-14 lg:px-28 pt-28 pb-20">
      <div
        className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-r from-blue-900 via-purple-500 to-red-600 z-0"
        style={{ maskImage: "linear-gradient(to bottom, black 50%, transparent 85%)" }}
      >
        <div
          className="absolute top-0 left-0 h-full w-[30%]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)`,
            backgroundSize: "30px 30px",
            maskImage: "linear-gradient(to right, white 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-[30%]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)`,
            backgroundSize: "30px 30px",
            maskImage: "linear-gradient(to left, white 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute top-[210px] left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black z-10" />

      <div className="relative z-20 text-white max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="py-1 px-3 mb-4 backdrop-blur-sm bg-white/10 rounded-full w-fit mx-auto text-sm">
            AI Image Generator ✨
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Generate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-red-400">
              Image
            </span>
          </h1>
          <p className="text-gray-400 mt-2 text-base">
            Describe what you want to see and let AI do the rest.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Your prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A futuristic city at sunset with neon lights and flying cars..."
                rows={8}
                className="w-full bg-white/5 border border-white/15 rounded-2xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-purple-500 transition resize-none text-sm leading-relaxed"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:opacity-90 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin />
                  Generating...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faWandMagicSparkles} />
                  Generate Image
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            <label className="text-sm text-gray-300">Result</label>
            <div className="w-full aspect-square rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
              {loading && (
                <div className="flex flex-col items-center gap-3 text-gray-400">
                  <FontAwesomeIcon icon={faSpinner} spin className="text-3xl text-purple-400" />
                  <p className="text-sm">Creating your image...</p>
                </div>
              )}
              {!loading && image && (
                <img
                  src={image}
                  alt="Generated"
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
              {!loading && !image && (
                <div className="flex flex-col items-center gap-2 text-gray-600">
                  <FontAwesomeIcon icon={faWandMagicSparkles} className="text-4xl" />
                  <p className="text-sm">Your image will appear here</p>
                </div>
              )}
            </div>

            {image && !loading && (
              <a
                href={image}
                download="liora-ai-image.jpg"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition text-sm font-medium"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download Image
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
