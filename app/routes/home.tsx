import HeaderNav from "~/components/HeaderNav";
import type { Route } from "./+types/home";
import FooterNav from "~/components/FooterNav";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nigeria Blockchain Week" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#040806] text-[#D2D2D2]">
        <HeaderNav />

        {/* Hero Section */}
        <section id="hero" className="bg-[#040806] py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
              Nigeria's Flagship
              <br />
              <span className="bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
                Blockchain Week
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Uniting Innovators, State by State: Blockchain Weeks Unveiling
              Nigeria's Vision in Fintech, Governance, and Technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#70EE45] rounded-md text-black font-semibold px-8 py-3">
                Explore State Weeks
              </button>
              <button className="border-[#70EE45] rounded-md text-black font-semibold bg-white px-8 py-3 bg-transparent">
                Sponsor an Event
              </button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <div className="bg-gradient-to-b from-[FFFFFF] to-[#999999] bg-clip-text text-transparent">
                  Expected Attendees across States
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2">
                  36
                </div>
                <div className="bg-gradient-to-b from-[FFFFFF] to-[#999999] bg-clip-text text-transparent">
                  Target States by 2025
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <div className="bg-gradient-to-b from-[FFFFFF] to-[#999999] bg-clip-text text-transparent">
                  Partners & Sponsors
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="bg-gradient-to-b from-[FFFFFF] to-[#999999] bg-clip-text text-transparent">
                  Speakers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discover Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discover Blockchain Weeks Near You
              </h2>
              <p className="">Stay tuned for more states joining in soon!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link to={"https://lagosblockchainweek.io/"}>
                <div className="cursor-pointer p-4 rounded-md border border-[#212922]">
                  <img
                    src="/images/lagos.png"
                    alt="Lagos"
                    className="w-full h-44 object-cover rounded-md"
                  />
                  <div className="my-3">
                    <div className="mb-2 flex justify-between">
                      <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto text-green-500">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>

                        <span>Lagos</span>
                      </h3>
                      <button className="flex gap-3 bg-[#16A249]/20 py-1 px-4 rounded-sm">
                        <span className="my-auto">Live</span>
                        <div className="w-2 h-2 my-auto rounded-full bg-green-500"></div>
                      </button>
                    </div>
                    <p className="text-gray-300 text-sm">AI X Blockchain</p>
                    <p className="text-gray-400 text-sm my-3">
                      The Intelligent Infrastructure of Tomorrow
                    </p>
                    <p className="flex gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                        <line x1="16" x2="16" y1="2" y2="6"/>
                        <line x1="8" x2="8" y1="2" y2="6"/>
                        <line x1="3" x2="21" y1="10" y2="10"/>
                      </svg>
                      <span>29th September - 4th October 2025</span>
                    </p>
                  </div>
                </div>
              </Link>
              <Link to={"http://abujablockchainweek.ng/"}>
                <div className="cursor-pointer p-4 rounded-md border border-[#212922]">
                  <img
                    src="/images/abuja.png"
                    alt="Lagos"
                    className="w-full h-44 object-cover rounded-md"
                  />
                  <div className="my-3">
                    <div className="mb-2 flex justify-between">
                      <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto text-green-500">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>

                        <span>Abuja</span>
                      </h3>
                      <button className="flex gap-3 bg-[#16A249]/20 py-1 px-4 rounded-sm">
                        <span className="my-auto">Live</span>
                        <div className="w-2 h-2 my-auto rounded-full bg-green-500"></div>
                      </button>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Policy, Trust & Innovation
                    </p>
                    <p className="text-gray-400 text-sm my-3">
                      Shaping Nigeria’s Digital Governance
                    </p>
                    <p className="flex gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                        <line x1="16" x2="16" y1="2" y2="6"/>
                        <line x1="8" x2="8" y1="2" y2="6"/>
                        <line x1="3" x2="21" y1="10" y2="10"/>
                      </svg>
                      <span>22nd - 27th September 2025</span>
                    </p>
                  </div>
                </div>
              </Link>

              <div className="cursor-pointer p-4 rounded-md border border-[#212922]">
                <img
                  src="/images/anambara.png"
                  alt="Lagos"
                  className="w-full h-44 object-cover rounded-md"
                />
                <div className="my-3">
                  <div className="mb-2 flex justify-between">
                    <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto text-green-500">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>

                      <span>Anambra</span>
                    </h3>
                    <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
                      <span className="my-auto">soon</span>
                      <div className="w-2 h-2 my-auto rounded-full bg-gray-500"></div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">TBA</p>
                  <p className="text-gray-400 text-sm my-3">Coming Soon</p>
                  <p className="flex gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                    <span>2025</span>
                  </p>
                </div>
              </div>

              <div className="cursor-pointer p-4 rounded-md border border-[#212922]">
                <img
                  src="/images/rivers.png"
                  alt="Lagos"
                  className="w-full h-44 object-cover rounded-md"
                />
                <div className="my-3">
                  <div className="mb-2 flex justify-between">
                    <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto text-green-500">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>

                      <span>Rivers</span>
                    </h3>
                    <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
                      <span className="my-auto">soon</span>
                      <div className="w-2 h-2 my-auto rounded-full bg-gray-500"></div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">TBA</p>
                  <p className="text-gray-400 text-sm my-3">Coming Soon</p>
                  <p className="flex gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                    <span>2025</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building Blocks Section */}
        <section id="BBBE" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Building Blocks Beyond Events
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Whether you're a blockchain enthusiast, developer, entrepreneur,
                or simply curious about the future, we're building communities
                across regions, we're creating a shared vision for a
                blockchain-enabled inclusive Nigeria.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#0B0F0D] border border-[#212922] p-6 text-center rounded-md">
                <div className="mb-4">
                  <img
                    className="w-16 mx-auto"
                    src="/images/icons/education.png"
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-400 text-sm">
                  Workshops, masterclasses, and hands-on sessions
                </p>
              </div>

              <div className="bg-[#0B0F0D] border border-[#212922] p-6 text-center rounded-md">
                <div className="mb-4">
                  <img
                    className="w-16 mx-auto"
                    src="/images/icons/networking.png"
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Networking</h3>
                <p className="text-gray-400 text-sm">
                  Connect with like-minded individuals and industry leaders
                </p>
              </div>

              <div className="bg-[#0B0F0D] border border-[#212922] p-6 text-center rounded-md">
                <div className="mb-4">
                  <img
                    className="w-16 mx-auto"
                    src="/images/icons/policy-influence.png"
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Policy Influence</h3>
                <p className="text-gray-400 text-sm">
                  Shape blockchain policy and regulatory frameworks
                </p>
              </div>

              <div className="bg-[#0B0F0D] border border-[#212922] p-6 text-center rounded-md">
                <div className="mb-4">
                  <img
                    className="w-16 mx-auto"
                    src="/images/icons/innovation.png"
                    alt=""
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">
                  Showcase cutting-edge blockchain solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Movement Section */}
        <section id="hero" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mx-auto md:w-1/2 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join the Movement
              </h2>
              <p className="text-gray-400">
                Whether you're a blockchain enthusiast, developer, or
                entrepreneur, there's a place for you in Nigeria's growing
                blockchain ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-md border border-[#212922]">
                <img
                  src="/images/host-img.png"
                  alt="Lagos"
                  className="w-full h-44 object-cover rounded-md"
                />
                <div className="my-3">
                  <div className="mb-2 flex justify-between">
                    <h3 className="text-lg font-bold text-white mb-1">
                      Host a State Blockchain Week
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm my-3">
                    Bring blockchain innovation to your state and join Nigeria's
                    growing Web3 ecosystem.
                  </p>
                  <button className="bg-[#70EE45] p-3 rounded-sm font-semibold px-6 text-black">
                    Host a State Week
                  </button>
                </div>
              </div>
              <div className="p-4 rounded-md border border-[#212922]">
                <img
                  src="/images/sponsor-img.png"
                  alt="Lagos"
                  className="w-full h-44 object-cover rounded-md"
                />
                <div className="my-3">
                  <div className="mb-2 flex justify-between">
                    <h3 className="text-lg font-bold text-white mb-1">
                      Sponsor Multiple Weeks
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm my-3">
                    Maximize your reach and impact by supporting blockchain
                    events across Nigeria.
                  </p>
                  <button className="bg-white border border-[13B92C] p-3 rounded-sm font-semibold px-6 text-black">
                    Sponsor State Weeks
                  </button>
                </div>
              </div>
              <div className="p-4 rounded-md border border-[#212922]">
                <img
                  src="/images/img.png"
                  alt="Lagos"
                  className="w-full h-44 object-cover rounded-md"
                />
                <div className="my-3">
                  <div className="mb-2 flex justify-between">
                    <h3 className="text-lg font-bold text-white mb-1">
                      Join the National Community
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm my-3">
                    Connect with builders, entrepreneurs, and blockchain
                    enthusiasts nationwide.
                  </p>
                  <a href="https://t.me/NigerianBlockchainWeek" target="_blank">
                    <button className="bg-white border border-[13B92C] p-3 rounded-sm font-semibold px-6 text-black">
                      Join the Community
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blockchain Week Highlights */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Blockchain Week Highlights
              </h2>
              <p className="text-gray-400">
                Highlights from our past events across states.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 bg-[#0B0F0D] p-4 rounded-md border border-[#212922]">
              <div className="p-4 rounded-md border border-[#212922]">
                <img
                  src="/images/lagos-24.png"
                  alt="Lagos"
                  className="w-full h-44 object-cover rounded-md"
                />
                <div className="my-3">
                  <div className="mb-2 flex justify-between">
                    <h3 className="text-lg font-bold text-white mb-1">
                      Lagos Blockchain Week 2024
                    </h3>
                  </div>
                  <p className="text-[#70EE45] flex gap-3 mb-3 text-sm cursor-pointer">
                    <span>Visit Website</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </p>

                  <p className="flex gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                    <span>June 2024</span>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-md border border-[#212922]">
                <img
                  src="/images/abuja-24.png"
                  alt="Lagos"
                  className="w-full h-44 object-cover rounded-md"
                />
                <div className="my-3">
                  <div className="mb-2 flex justify-between">
                    <h3 className="text-lg font-bold text-white mb-1">
                      Abuja Blockchain Week 2024
                    </h3>
                  </div>
                  <p className="text-[#70EE45] flex gap-3 mb-3 text-sm cursor-pointer">
                    <span>Visit Website</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </p>

                  <p className="flex gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                    <span>September 2024</span>
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-md border border-[#212922]">
                <img
                  src="/images/lagos-23.png"
                  alt="Lagos"
                  className="w-full h-44 object-cover rounded-md"
                />
                <div className="my-3">
                  <div className="mb-2 flex justify-between">
                    <h3 className="text-lg font-bold text-white mb-1">
                      Lagos Blockchain Week 2023
                    </h3>
                  </div>
                  <p className="text-[#70EE45] flex gap-3 mb-3 text-sm cursor-pointer">
                    <span>Visit Website</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </p>

                  <p className="flex gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="my-auto">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                      <line x1="16" x2="16" y1="2" y2="6"/>
                      <line x1="8" x2="8" y1="2" y2="6"/>
                      <line x1="3" x2="21" y1="10" y2="10"/>
                    </svg>
                    <span>June 2023</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterNav />
      </div>
    </>
  );
}
