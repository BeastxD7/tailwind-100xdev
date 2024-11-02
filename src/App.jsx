import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Video,
} from "lucide-react";
function App() {
  return (
    <>
      <main className="bg-blue-400 w-screen h-screen">
        <header className="bg-blue-950 w-full h-[25%]"></header>
        <section className="h-[75%] bg-white flex">
          <div className=" w-[35%]">hello</div>
          <div className=" w-[65%]">
            <h1 className="text-gray-800 font-semibold mt-10">
              Monday 14, October
            </h1>
            <h1 className="text-gray-950 text-2xl font-bold mt-5">
              Good Morning, Shashank!👋
            </h1>

            <div className="w-full  h-[70%] mt-10 flex justify-center gap-10">
              <div className="bg-slate-300  min-w-[40rem] rounded-lg">
                <div className="flex items-center mt-7 px-6 bg-slate-200 py-2 rounded-lg mx-5 justify-between mb-4">
                  <div className="flex items-center  gap-2">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">
                      Monday, 14 October 2024
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex gap-1">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center py-6 px-10 border-b-2 border-gray-500 pb-2 mx-5 ">
                    <div className="w-20">
                      <div className="text-sm font-medium text-gray-900">
                        11:30 AM
                      </div>
                      <div className="text-xs text-gray-400">11:30 AM</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                        Live
                      </span>
                      <span className="text-sm font-medium">UX Webinar</span>
                      <Video className="w-4 h-4 text-red-400" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center py-6 px-10 border-b-2 border-gray-500 pb-2 mx-5 ">
                    <div className="w-20">
                      <div className="text-sm font-medium text-gray-900">
                        11:30 AM
                      </div>
                      <div className="text-xs text-gray-400">11:30 AM</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                        Live
                      </span>
                      <span className="text-sm font-medium">UX Webinar</span>
                      <Video className="w-4 h-4 text-red-400" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center py-6 px-10 border-b-2 border-gray-500 pb-2 mx-5 ">
                    <div className="w-20">
                      <div className="text-sm font-medium text-gray-900">
                        11:30 AM
                      </div>
                      <div className="text-xs text-gray-400">11:30 AM</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                        Live
                      </span>
                      <span className="text-sm font-medium">UX Webinar</span>
                      <Video className="w-4 h-4 text-red-400" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center py-6 px-10 border-b-2 border-gray-500 pb-2 mx-5 ">
                    <div className="w-20">
                      <div className="text-sm font-medium text-gray-900">
                        11:30 AM
                      </div>
                      <div className="text-xs text-gray-400">11:30 AM</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                        Live
                      </span>
                      <span className="text-sm font-medium">UX Webinar</span>
                      <Video className="w-4 h-4 text-red-400" />
                    </div>
                  </div>
                </div>{" "}
                <div className="space-y-3">
                  <div className="flex items-center py-6 px-10 border-b-2 border-gray-500 pb-2 mx-5 ">
                    <div className="w-20">
                      <div className="text-sm font-medium text-gray-900">
                        11:30 AM
                      </div>
                      <div className="text-xs text-gray-400">11:30 AM</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                        Live
                      </span>
                      <span className="text-sm font-medium">UX Webinar</span>
                      <Video className="w-4 h-4 text-red-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 bg-white rounded-3xl shadow-lg p-6 w-[280px] mt-[-10rem] ml-[9rem]">
                <div className="flex flex-col items-center text-center">
                  <img
                    src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Ftalent%2F427843%2Fpicture%2Foptimized%2Fhuge_c711f787694f240c7bb20e598bfdd6e8-e2b83df354d725bbf11311fddbcf3719.jpg&width=480"
                    alt="Profile"
                    className="w-24 h-24 rounded-2xl object-cover mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">
                    Harkirat
                  </h2>
                  <p className="text-gray-500 text-sm mb-0.5">
                    harkirat@gmail.com
                  </p>
                  <p className="text-gray-500 text-sm mb-0.5">yoyoyoyoyo</p>
                  <p className="text-gray-500 text-sm">Delhi, India</p>
                </div>
              </div>

              <div className="bg-slate-300 max-w-[24rem] h-64 rounded-lg flex gap-3 justify-start items-start flex-wrap p-10">
                {/* ------------------ */}

                <div className="text-center">
                  <div className="bg-teal-400 w-12 h-12 mx-auto mb-2 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium">Schedule a Webinar</p>
                </div>

                <div className="text-center">
                  <div className="bg-teal-400 w-12 h-12 mx-auto mb-2 rounded-xl flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">+</span>
                  </div>
                  <p className="text-sm font-medium">Join a Webinar</p>
                </div>

                <div className="text-center">
                  <div className="bg-teal-400 w-12 h-12 mx-auto mb-2 rounded-xl flex items-center justify-center">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium">Open Recordings</p>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </section>
      </main>
    </>
  );
}

export default App;
