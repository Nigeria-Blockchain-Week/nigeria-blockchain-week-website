import HeaderNav from "~/components/HeaderNav";
import type { Route } from "./+types/team";
import FooterNav from "~/components/FooterNav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team - Nigeria Blockchain Week" },
    {
      name: "description",
      content: "Meet the team behind Nigeria Blockchain Week",
    },
  ];
}

const advisoryBoard = [
  {
    name: "Dr. Amina Oyagbola",
    role: "Blockchain Policy Advisor",
    image: "/images/team/advisory1.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Prof. Chike Okonkwo",
    role: "Technology Innovation Expert",
    image: "/images/team/advisory2.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Fintech Strategic Advisor",
    image: "/images/team/advisory3.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emeka Okafor",
    role: "Government Relations Advisor",
    image: "/images/team/advisory4.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

const coreTeam = [
  {
    name: "Adebayo Johnson",
    role: "Executive Director",
    image: "/images/team/core1.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Chioma Okwu",
    role: "Technical Lead",
    image: "/images/team/core2.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Ibrahim Hassan",
    role: "Community Manager",
    image: "/images/team/core3.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Funmi Adeleye",
    role: "Operations Manager",
    image: "/images/team/core4.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Kemi Afolabi",
    role: "Marketing Director",
    image: "/images/team/core5.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Tunde Ogundimu",
    role: "Partnership Lead",
    image: "/images/team/core6.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aisha Bello",
    role: "Event Coordinator",
    image: "/images/team/core7.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Olumide Taiwo",
    role: "Developer Relations",
    image: "/images/team/core8.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

export default function Team() {
  return (
    <>
      <div className="min-h-screen bg-[#040806] text-white">
        <HeaderNav />

        {/* Hero Section */}
        <section id="hero" className="bg-[#040806] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <button className="flex w-62 mx-auto text-[#70EE45] border border-[#70EE45] rounded-full p-4 items-center justify-center mb-6 gap-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <p>Leadership & Expertise</p>
            </button>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
              Meet the Team
              {/* <br />
              <span className="bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
                Building the Future
              </span> */}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Meet the visionary leaders guiding Nigeria's blockchain ecosystem
              toward a decentralized future
            </p>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Advisory Board
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisoryBoard.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#0B0F0D] border border-[#212922] p-3 rounded-md hover:border-green-500 transition-colors"
                >
                  <div className="mb-4">
                    <img
                      src={"/images/abuja-24.png"}
                      alt={member.name}
                      className="w-full h-40 rounded-md object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm mb-4">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className=" mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Team</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#0B0F0D] border border-[#212922] p-3 rounded-md hover:border-green-500 transition-colors"
                >
                  <div className="mb-4">
                    <img
                      src={"/images/abuja-24.png"}
                      alt={member.name}
                      className="w-full h-40 rounded-md object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm mb-4">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center shadow-md bg-[#0B0F0D] border border-[#212922] p-6 rounded-xl">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Our Advisory Mission
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our advisory board brings together Nigeria's most respected
              blockchain experts, policymakers, and innovators. Together, we're
              committed to fostering a thriving, inclusive blockchain ecosystem
              that drives economic growth, promotes financial inclusion, and
              positions Nigeria as a global blockchain leader.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#70EE45] rounded-md text-black font-semibold px-8 py-3">
                Explore State Weeks
              </button>
              <button className="border border-[#70EE45] rounded-md  font-semibold px-8 py-3 bg-white hover:bg-[#70EE45] text-black transition-colors">
                Sponsor an Event
              </button>
            </div>
          </div>
        </section>

        <FooterNav />
      </div>
    </>
  );
}
