// import HeaderNav from "~/components/HeaderNav";
// import type { Route } from "./+types/team";
// import FooterNav from "~/components/FooterNav";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Team - Nigeria Blockchain Week" },
//     {
//       name: "description",
//       content: "Meet the team behind Nigeria Blockchain Week",
//     },
//   ];
// }

// const advisoryBoard = [
//   {
//     name: "Dr. Amina Oyagbola",
//     role: "Blockchain Policy Advisor",
//     image: "/images/team/advisory1.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Prof. Chike Okonkwo",
//     role: "Technology Innovation Expert",
//     image: "/images/team/advisory2.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Fatima Al-Rashid",
//     role: "Fintech Strategic Advisor",
//     image: "/images/team/advisory3.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Emeka Okafor",
//     role: "Government Relations Advisor",
//     image: "/images/team/advisory4.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
// ];

// const coreTeam = [
//   {
//     name: "Adebayo Johnson",
//     role: "Executive Director",
//     image: "/images/team/core1.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Chioma Okwu",
//     role: "Technical Lead",
//     image: "/images/team/core2.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Ibrahim Hassan",
//     role: "Community Manager",
//     image: "/images/team/core3.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Funmi Adeleye",
//     role: "Operations Manager",
//     image: "/images/team/core4.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Kemi Afolabi",
//     role: "Marketing Director",
//     image: "/images/team/core5.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Tunde Ogundimu",
//     role: "Partnership Lead",
//     image: "/images/team/core6.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Aisha Bello",
//     role: "Event Coordinator",
//     image: "/images/team/core7.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
//   {
//     name: "Olumide Taiwo",
//     role: "Developer Relations",
//     image: "/images/team/core8.jpg",
//     linkedin: "#",
//     twitter: "#",
//   },
// ];

// export default function Team() {
//   return (
//     <>
//       <div className="min-h-screen bg-[#040806] text-white">
//         <HeaderNav />

//         {/* Hero Section */}
//         <section id="hero" className="bg-[#040806] py-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center">
//             <button className="flex w-62 mx-auto text-[#70EE45] border border-[#70EE45] rounded-full p-4 items-center justify-center mb-6 gap-4">
//               <svg
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//                 <circle cx="9" cy="7" r="4" />
//                 <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//               </svg>
//               <p>Leadership & Expertise</p>
//             </button>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
//               Meet the Team
//               {/* <br />
//               <span className="bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
//                 Building the Future
//               </span> */}
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Meet the visionary leaders guiding Nigeria's blockchain ecosystem
//               toward a decentralized future
//             </p>
//           </div>
//         </section>

//         {/* Advisory Board Section */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Advisory Board
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {advisoryBoard.map((member, index) => (
//                 <div
//                   key={index}
//                   className="bg-[#0B0F0D] border border-[#212922] p-3 rounded-md hover:border-green-500 transition-colors"
//                 >
//                   <div className="mb-4">
//                     <img
//                       src={"/images/abuja-24.png"}
//                       alt={member.name}
//                       className="w-full h-40 rounded-md object-cover"
//                     />
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">{member.name}</h3>
//                   <p className="text-sm mb-4">{member.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Core Team Section */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto">
//             <div className=" mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Team</h2>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {coreTeam.map((member, index) => (
//                 <div
//                   key={index}
//                   className="bg-[#0B0F0D] border border-[#212922] p-3 rounded-md hover:border-green-500 transition-colors"
//                 >
//                   <div className="mb-4">
//                     <img
//                       src={"/images/abuja-24.png"}
//                       alt={member.name}
//                       className="w-full h-40 rounded-md object-cover"
//                     />
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">{member.name}</h3>
//                   <p className="text-sm mb-4">{member.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Join Our Team Section */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl mx-auto text-center shadow-md bg-[#0B0F0D] border border-[#212922] p-6 rounded-xl">
//             <h2 className="text-xl md:text-2xl font-bold mb-4">
//               Our Advisory Mission
//             </h2>
//             <p className="text-lg text-gray-300 mb-8">
//               Our advisory board brings together Nigeria's most respected
//               blockchain experts, policymakers, and innovators. Together, we're
//               committed to fostering a thriving, inclusive blockchain ecosystem
//               that drives economic growth, promotes financial inclusion, and
//               positions Nigeria as a global blockchain leader.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-[#70EE45] rounded-md text-black font-semibold px-8 py-3">
//                 Explore State Weeks
//               </button>
//               <button className="border border-[#70EE45] rounded-md  font-semibold px-8 py-3 bg-white hover:bg-[#70EE45] text-black transition-colors">
//                 Sponsor an Event
//               </button>
//             </div>
//           </div>
//         </section>

//         <FooterNav />
//       </div>
//     </>
//   );
// }

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
    name: "Senator Ihenyen",
    role: "Co-Founder BNUG/Chairman National Blockchain Policy Steering Committee",
    image: "/images/core/Senator.jpg",
    linkedin: "https://www.linkedin.com/in/senatorihenyen/",
    twitter: "https://x.com/SenatorIhenyen",
  },
  // {
  //   name: "Prof. Chike Okonkwo",
  //   role: "Technology Innovation Expert",
  //   image: "/images/team/advisory2.jpg",
  //   linkedin: "#",
  //   twitter: "#",
  // },
  // {
  //   name: "Fatima Al-Rashid",
  //   role: "Fintech Strategic Advisor",
  //   image: "/images/team/advisory3.jpg",
  //   linkedin: "#",
  //   twitter: "#",
  // },
  // {
  //   name: "Emeka Okafor",
  //   role: "Government Relations Advisor",
  //   image: "/images/team/advisory4.jpg",
  //   linkedin: "#",
  //   twitter: "#",
  // },
];

const coreTeam = [
  {
    name: "Enoch Mbabie",
    role: "Convener",
    image: "/images/core/enoch.jpg",
    linkedin: "https://www.linkedin.com/in/cembaebie/",
    twitter: "https://x.com/Divine_Vessel",
  },
  {
    name: "Etette Etok",
    role: "Technical Lead",
    image: "/images/core/etettee.jpg",
    linkedin: "https://www.linkedin.com/in/etette-etok",
    twitter: "https://x.com/Em_Etok",
  },
  {
    name: "Rukayat Issa",
    role: "Program Lead",
    image: "/images/core/issa.jpg",
    linkedin: "https://www.linkedin.com/in/rukayatissa/",
    twitter: "https://x.com/DecentralisedPM",
  },
   {
    name: "Mercy Oluwatumininu Kolapo",
    role: "Design Lead",
    image: "/images/core/tumi.jpg",
    linkedin: "https://www.linkedin.com/in/mercy-kolapo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/MercyKolapo?t=N0nqncPF2zP7KUKnGa4vSg&s=09",
  },
  {
    name: "Dominic Akpan",
    role: "Tech Support",
    image: "/images/core/dom.jpg",
    linkedin: "https://www.linkedin.com/in/dominic-akpan-540560196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "http://x.com/techydom",
  },
  {
    name: "Olayinka Olawale",
    role: "Tech Support",
    image: "/images/core/olayinka.JPG",
    linkedin: "https://www.linkedin.com/in/oluwatimilehin-abiodun-17789123a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/talk_to_yinka?s=21",
  },
  {
    name: "Oluwatimilehin Abiodun ",
    role: "Design Support",
    image: "/images/core/olu.jpg",
    linkedin: "https://www.linkedin.com/in/oluwatimilehin-abiodun-17789123a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://x.com/web3_designguy?t=zXeO3YTJxz2PxokVGVYNGQ&s=09",
  },
  {
    name: "Asu Wisdom",
    role: "Marketing Support",
    image: "/images/core/jojo.jpg",
    linkedin: "#",
    twitter: "https://x.com/Mr__Kreative",
  },
];

export default function Team() {
  return (
    <>
      <div className="min-h-screen bg-[#040806] text-white overflow-hidden">
        <HeaderNav />

        {/* Hero Section - Enhanced with animations */}
        <section id="hero" className="bg-[#040806] py-20 px-4 sm:px-6 lg:px-8 relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#67FF83]/5 to-[#02D929]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#02D929]/3 to-[#67FF83]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <button className="flex w-auto mx-auto text-[#70EE45] border border-[#70EE45] hover:border-[#5fd635] rounded-full p-4 items-center justify-center mb-6 gap-4 transform transition-all duration-300 hover:scale-105 hover:bg-[#70EE45]/10 animate-fade-in-up">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform transition-transform duration-300 hover:rotate-6"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <p className="font-medium">Leadership & Expertise</p>
            </button>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent animate-fade-in-up delay-200">
              Meet the Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-300">
              Meet the visionary leaders guiding Nigeria's blockchain ecosystem
              toward a decentralized future
            </p>
          </div>
        </section>

        {/* Advisory Board Section - Enhanced with staggered animations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                Advisory Board
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#67FF83] to-[#02D929] rounded-full mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisoryBoard.map((member, index) => (
                <div
                  key={index}
                  className={`group bg-[#0B0F0D] border border-[#212922] hover:border-[#67FF83]/50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#67FF83]/10 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-40 rounded-lg object-contain transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-[#67FF83] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Social Links with hover effects */}
                  <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-[#212922] hover:bg-[#0077b5] rounded-full flex items-center justify-center transform transition-all duration-200 hover:scale-110"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-gray-400 hover:text-white"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      className="w-8 h-8 bg-[#212922] hover:bg-[#1da1f2] rounded-full flex items-center justify-center transform transition-all duration-200 hover:scale-110"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-gray-400 hover:text-white"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team Section - Enhanced with better layout and animations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-[#0B0F0D]/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                Core Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#67FF83] to-[#02D929] rounded-full mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreTeam.map((member, index) => (
                <div
                  key={index}
                  className={`group bg-[#0B0F0D] border border-[#212922] hover:border-[#67FF83]/50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#67FF83]/10 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 overflow-hidden rounded-lg relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-40 rounded-lg object-contain transform transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#67FF83]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-[#67FF83] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Social Links with hover effects */}
                  <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-[#212922] hover:bg-[#0077b5] rounded-full flex items-center justify-center transform transition-all duration-200 hover:scale-110"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-gray-400 hover:text-white"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      className="w-8 h-8 bg-[#212922] hover:bg-[#1da1f2] rounded-full flex items-center justify-center transform transition-all duration-200 hover:scale-110"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-gray-400 hover:text-white"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section - Enhanced with better visual design */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center bg-gradient-to-br from-[#0B0F0D] to-[#1a2520] border border-[#212922] hover:border-[#67FF83]/30 p-8 md:p-12 rounded-2xl transform transition-all duration-300 hover:shadow-2xl hover:shadow-[#67FF83]/10 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#67FF83]/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#02D929]/10 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
                  Our Advisory Mission
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our advisory board brings together Nigeria's most respected
                  blockchain experts, policymakers, and innovators. Together, we're
                  committed to fostering a thriving, inclusive blockchain ecosystem
                  that drives economic growth, promotes financial inclusion, and
                  positions Nigeria as a global blockchain leader.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/#states" className="no-underline">
                  <button className="bg-[#70EE45] hover:bg-[#5fd635] rounded-lg text-black font-semibold px-8 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#70EE45]/20">
                    Explore State Weeks
                  </button>
                  </a>
                  <a href="https://bit.ly/NBWSponsorship" target="_blank" rel="noopener noreferrer">
                  <button className="border border-[#70EE45] hover:border-[#5fd635] rounded-lg font-semibold px-8 py-3 bg-white hover:bg-[#70EE45] text-black transition-all duration-300 transform hover:scale-105">
                    Sponsor an Event
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterNav />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Custom pulse animation */
        @keyframes custom-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-pulse {
          animation: custom-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #040806;
        }

        ::-webkit-scrollbar-thumb {
          background: #67FF83;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #5fd635;
        }

        /* Gradient border animation */
        @keyframes gradient-border {
          0% { border-color: #212922; }
          50% { border-color: rgba(103, 255, 131, 0.5); }
          100% { border-color: #212922; }
        }
        `
      }} />
    </>
  );
}
