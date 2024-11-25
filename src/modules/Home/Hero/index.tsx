const Hero = () => {
  return (
    <div className="relative isolate">
      {/* Grid SVG */}
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>

      {/* Coloured Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-100 opacity-60 -z-10"></div>

      {/* Content on top */}
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-extrabold text-white mb-6">Welcome to DebateHub</h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Elevate your debate skills, connect with peers, and explore diverse perspectives
                in a vibrant community of high school debaters.
              </p>
            </div>

            {/* Image Content */}
            <div className="lg:flex-shrink-0 lg:w-1/2">
              <img
                className="w-full object-cover rounded-lg shadow-lg"
                src="https://www.shutterstock.com/image-vector/debate-before-vote-male-woman-600nw-2184567945.jpg"
                alt="Debate illustration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections for Features */}
      <div className="container mx-auto px-4 py-12">
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </svg>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Engage in Discussions</h3>
            <p className="text-gray-600">
              Participate in thought-provoking debates on various topics and formats.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Improve Your Skills</h3>
            <p className="text-gray-600">
              Learn from peers, share strategies, and refine your argumentation techniques.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-500 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Build Connections</h3>
            <p className="text-gray-600">
              Network with fellow debaters and form lasting friendships in the community.
            </p>
          </div>
        </section>

        {/* Section explaining DebateHub */}
        <section className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">What is DebateHub?</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              DebateHub is a dynamic online platform designed specifically for high school debaters
              who are passionate about honing their skills and engaging in meaningful discussions.
              Our community-driven forum provides a space where students can connect, learn, and
              grow without the need for formal coaching or mentoring.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Participate in a wide range of debates and discussions</li>
              <li>Enhance your debating abilities with interactive resources</li>
              <li>Join a supportive network of like-minded debaters</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};


export default Hero;
