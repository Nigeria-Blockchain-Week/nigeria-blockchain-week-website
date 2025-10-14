// import HeaderNav from "~/components/HeaderNav";
// import type { Route } from "./+types/home";
// import FooterNav from "~/components/FooterNav";
// import { Link } from "react-router";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Nigeria Blockchain Week" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// export default function Home() {
//   return (
//     <>
//       <div className="min-h-screen bg-[#040806] text-[#D2D2D2]">
//         <HeaderNav />

//         {/* Hero Section */}
//         <section id="hero" className="bg-[#040806] py-32 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
//               Nigerian
//               <br />
//               <span className="bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
//                 Blockchain Week
//               </span>
//             </h1>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Uniting Innovators State by State: Blockchain Weeks Showcasing Nigeria’s Vision for Fintech, Governance, and Technology.

//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-[#70EE45] rounded-md text-black font-semibold px-8 py-3">
//                 Explore State Weeks
//               </button>
//               <a href="https://bit.ly/NBWSponsorship" target="_blank">
//                 <button className="border-[#70EE45] rounded-md text-black font-semibold bg-white px-8 py-3 bg-transparent">
//                   Sponsor an Event
//                 </button>
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Statistics Section */}
//         <section className="py-8 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               <div>
//                 <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2">
//                   1000+
//                 </div>
//                 <div className="bg-gradient-to-b from-[FFFFFF] to-[#999999] bg-clip-text text-transparent">
//                   Expected Attendees across States
//                 </div>
//               </div>
//               <div>
//                 <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2">
//                   36
//                 </div>
//                 <div className="bg-gradient-to-b from-[FFFFFF] to-[#999999] bg-clip-text text-transparent">
//                   Target States by 2025
//                 </div>
//               </div>
//               <div>
//                 <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2">
//                   200+
//                 </div>
//                 <div className="bg-gradient-to-b from-[FFFFFF] to-[#999999] bg-clip-text text-transparent">
//                   Partners & Sponsors
//                 </div>
//               </div>
//               <div>
//                 <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2">
//                   150+
//                 </div>
//                 <div className="bg-gradient-to-b from-[FFFFFF] to-[#999999] bg-clip-text text-transparent">
//                   Speakers
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Discover Section */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Discover Blockchain Weeks Near You
//               </h2>
//               <p className="">Stay tuned for more states joining in soon!</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <Link to={"https://lagosblockchainweek.io/"}>
//                 <div className="cursor-pointer p-4 rounded-md border border-[#212922]">
//                   <img
//                     src="/images/lagos.png"
//                     alt="Lagos"
//                     className="w-full h-44 object-cover rounded-md"
//                   />
//                   <div className="my-3">
//                     <div className="mb-2 flex justify-between">
//                       <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
//                         <svg
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="my-auto text-green-500"
//                         >
//                           <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//                           <circle cx="12" cy="10" r="3" />
//                         </svg>

//                         <span>Lagos</span>
//                       </h3>
//                       <button className="flex gap-3 bg-[#16A249]/20 py-1 px-4 rounded-sm">
//                         <span className="my-auto">Live</span>
//                         <div className="w-2 h-2 my-auto rounded-full bg-green-500"></div>
//                       </button>
//                     </div>
//                     <p className="text-gray-300 text-sm">AI X Blockchain</p>
//                     <p className="text-gray-400 text-sm my-3">
//                       The Intelligent Infrastructure of Tomorrow
//                     </p>
//                     <p className="flex gap-3">
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="my-auto"
//                       >
//                         <rect
//                           width="18"
//                           height="18"
//                           x="3"
//                           y="4"
//                           rx="2"
//                           ry="2"
//                         />
//                         <line x1="16" x2="16" y1="2" y2="6" />
//                         <line x1="8" x2="8" y1="2" y2="6" />
//                         <line x1="3" x2="21" y1="10" y2="10" />
//                       </svg>
//                       <span>29th September - 4th October 2025</span>
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//               <Link to={"http://abujablockchainweek.ng/"}>
//                 <div className="cursor-pointer p-4 rounded-md border border-[#212922]">
//                   <img
//                     src="/images/abuja.png"
//                     alt="Lagos"
//                     className="w-full h-44 object-cover rounded-md"
//                   />
//                   <div className="my-3">
//                     <div className="mb-2 flex justify-between">
//                       <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
//                         <svg
//                           width="20"
//                           height="20"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="my-auto text-green-500"
//                         >
//                           <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//                           <circle cx="12" cy="10" r="3" />
//                         </svg>

//                         <span>Abuja</span>
//                       </h3>
//                       <button className="flex gap-3 bg-[#16A249]/20 py-1 px-4 rounded-sm">
//                         <span className="my-auto">Live</span>
//                         <div className="w-2 h-2 my-auto rounded-full bg-green-500"></div>
//                       </button>
//                     </div>
//                     <p className="text-gray-300 text-sm">
//                       Policy, Trust & Innovation
//                     </p>
//                     <p className="text-gray-400 text-sm my-3">
//                       Shaping Nigeria’s Digital Governance
//                     </p>
//                     <p className="flex gap-3">
//                       <svg
//                         width="16"
//                         height="16"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="my-auto"
//                       >
//                         <rect
//                           width="18"
//                           height="18"
//                           x="3"
//                           y="4"
//                           rx="2"
//                           ry="2"
//                         />
//                         <line x1="16" x2="16" y1="2" y2="6" />
//                         <line x1="8" x2="8" y1="2" y2="6" />
//                         <line x1="3" x2="21" y1="10" y2="10" />
//                       </svg>
//                       <span>22nd - 27th September 2025</span>
//                     </p>
//                   </div>
//                 </div>
//               </Link>

//               <div className="cursor-pointer p-4 rounded-md border border-[#212922]">
//                 <img
//                   src="/images/anambara.png"
//                   alt="Lagos"
//                   className="w-full h-44 object-cover rounded-md"
//                 />
//                 <div className="my-3">
//                   <div className="mb-2 flex justify-between">
//                     <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="my-auto text-green-500"
//                       >
//                         <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//                         <circle cx="12" cy="10" r="3" />
//                       </svg>

//                       <span>Anambra</span>
//                     </h3>
//                     <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
//                       <span className="my-auto">soon</span>
//                       <div className="w-2 h-2 my-auto rounded-full bg-gray-500"></div>
//                     </button>
//                   </div>
//                   <p className="text-gray-300 text-sm">TBA</p>
//                   <p className="text-gray-400 text-sm my-3">Coming Soon</p>
//                   <p className="flex gap-3">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="my-auto"
//                     >
//                       <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//                       <line x1="16" x2="16" y1="2" y2="6" />
//                       <line x1="8" x2="8" y1="2" y2="6" />
//                       <line x1="3" x2="21" y1="10" y2="10" />
//                     </svg>
//                     <span>2025</span>
//                   </p>
//                 </div>
//               </div>

//               <div className="cursor-pointer p-4 rounded-md border border-[#212922]">
//                 <img
//                   src="/images/rivers.png"
//                   alt="Lagos"
//                   className="w-full h-44 object-cover rounded-md"
//                 />
//                 <div className="my-3">
//                   <div className="mb-2 flex justify-between">
//                     <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="my-auto text-green-500"
//                       >
//                         <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//                         <circle cx="12" cy="10" r="3" />
//                       </svg>

//                       <span>Rivers</span>
//                     </h3>
//                     <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
//                       <span className="my-auto">soon</span>
//                       <div className="w-2 h-2 my-auto rounded-full bg-gray-500"></div>
//                     </button>
//                   </div>
//                   <p className="text-gray-300 text-sm">TBA</p>
//                   <p className="text-gray-400 text-sm my-3">Coming Soon</p>
//                   <p className="flex gap-3">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="my-auto"
//                     >
//                       <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//                       <line x1="16" x2="16" y1="2" y2="6" />
//                       <line x1="8" x2="8" y1="2" y2="6" />
//                       <line x1="3" x2="21" y1="10" y2="10" />
//                     </svg>
//                     <span>2025</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Building Blocks Section */}
//         <section id="BBBE" className="py-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Building Blocks Beyond Events
//               </h2>
//               <p className="text-gray-400 max-w-2xl mx-auto">
//                 Whether you're a blockchain enthusiast, developer, entrepreneur,
//                 or simply curious about the future, we're building communities
//                 across regions, we're creating a shared vision for a
//                 blockchain-enabled inclusive Nigeria.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <div className="bg-[#0B0F0D] border border-[#212922] p-6 text-center rounded-md">
//                 <div className="mb-4">
//                   <img
//                     className="w-16 mx-auto"
//                     src="/images/icons/education.png"
//                     alt=""
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Education</h3>
//                 <p className="text-gray-400 text-sm">
//                   Workshops, masterclasses, and hands-on sessions
//                 </p>
//               </div>

//               <div className="bg-[#0B0F0D] border border-[#212922] p-6 text-center rounded-md">
//                 <div className="mb-4">
//                   <img
//                     className="w-16 mx-auto"
//                     src="/images/icons/networking.png"
//                     alt=""
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Networking</h3>
//                 <p className="text-gray-400 text-sm">
//                   Connect with like-minded individuals and industry leaders
//                 </p>
//               </div>

//               <div className="bg-[#0B0F0D] border border-[#212922] p-6 text-center rounded-md">
//                 <div className="mb-4">
//                   <img
//                     className="w-16 mx-auto"
//                     src="/images/icons/policy-influence.png"
//                     alt=""
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Policy Influence</h3>
//                 <p className="text-gray-400 text-sm">
//                   Shape blockchain policy and regulatory frameworks
//                 </p>
//               </div>

//               <div className="bg-[#0B0F0D] border border-[#212922] p-6 text-center rounded-md">
//                 <div className="mb-4">
//                   <img
//                     className="w-16 mx-auto"
//                     src="/images/icons/innovation.png"
//                     alt=""
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Innovation</h3>
//                 <p className="text-gray-400 text-sm">
//                   Showcase cutting-edge blockchain solutions
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Join the Movement Section */}
//         <section id="hero" className="py-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mx-auto md:w-1/2 mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Join the Movement
//               </h2>
//               <p className="text-gray-400">
//                 Whether you're a blockchain enthusiast, developer, or
//                 entrepreneur, there's a place for you in Nigeria's growing
//                 blockchain ecosystem.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="p-4 rounded-md border border-[#212922]">
//                 <img
//                   src="/images/host-img.png"
//                   alt="Lagos"
//                   className="w-full h-44 object-cover rounded-md"
//                 />
//                 <div className="my-3">
//                   <div className="mb-2 flex justify-between">
//                     <h3 className="text-lg font-bold text-white mb-1">
//                       Host a State Blockchain Week
//                     </h3>
//                   </div>
//                   <p className="text-gray-400 text-sm my-3">
//                     Bring blockchain innovation to your state and join Nigeria's
//                     growing Web3 ecosystem.
//                   </p>
//                   <button className="bg-[#70EE45] p-3 rounded-sm font-semibold px-6 text-black">
//                     Host a State Week
//                   </button>
//                 </div>
//               </div>
//               <div className="p-4 rounded-md border border-[#212922]">
//                 <img
//                   src="/images/sponsor-img.png"
//                   alt="Lagos"
//                   className="w-full h-44 object-cover rounded-md"
//                 />
//                 <div className="my-3">
//                   <div className="mb-2 flex justify-between">
//                     <h3 className="text-lg font-bold text-white mb-1">
//                       Sponsor Multiple Weeks
//                     </h3>
//                   </div>
//                   <p className="text-gray-400 text-sm my-3">
//                     Maximize your reach and impact by supporting blockchain
//                     events across Nigeria.
//                   </p>
//                   <a href="https://bit.ly/NBWSponsorship" target="_blank">
//                     <button className="bg-white border border-[#13B92C] p-3 rounded-sm font-semibold px-6 text-black">
//                       Sponsor State Weeks
//                     </button>
//                   </a>
//                 </div>
//               </div>
//               <div className="p-4 rounded-md border border-[#212922]">
//                 <img
//                   src="/images/img.png"
//                   alt="Lagos"
//                   className="w-full h-44 object-cover rounded-md"
//                 />
//                 <div className="my-3">
//                   <div className="mb-2 flex justify-between">
//                     <h3 className="text-lg font-bold text-white mb-1">
//                       Join the National Community
//                     </h3>
//                   </div>
//                   <p className="text-gray-400 text-sm my-3">
//                     Connect with builders, entrepreneurs, and blockchain
//                     enthusiasts nationwide.
//                   </p>
//                   <a href="https://t.me/NigerianBlockchainWeek" target="_blank">
//                     <button className="bg-white border border-[13B92C] p-3 rounded-sm font-semibold px-6 text-black">
//                       Join the Community
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Blockchain Week Highlights */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                 Blockchain Week Highlights
//               </h2>
//               <p className="text-gray-400">
//                 Highlights from our past events across states.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6 bg-[#0B0F0D] p-4 rounded-md border border-[#212922]">
//               <div className="p-4 rounded-md border border-[#212922]">
//                 <img
//                   src="/images/lagos-24.png"
//                   alt="Lagos"
//                   className="w-full h-44 object-cover rounded-md"
//                 />
//                 <div className="my-3">
//                   <div className="mb-2 flex justify-between">
//                     <h3 className="text-lg font-bold text-white mb-1">
//                       Lagos Blockchain Week 2024
//                     </h3>
//                   </div>
//                   <p className="text-[#70EE45] flex gap-3 mb-3 text-sm cursor-pointer">
//                     <a href="https://bit.ly/LBW2024Gallery" target="_blank">
//                       Visit Website
//                     </a>
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="my-auto"
//                     >
//                       <path d="M5 12h14" />
//                       <path d="m12 5 7 7-7 7" />
//                     </svg>
//                   </p>

//                   <p className="flex gap-3">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="my-auto"
//                     >
//                       <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//                       <line x1="16" x2="16" y1="2" y2="6" />
//                       <line x1="8" x2="8" y1="2" y2="6" />
//                       <line x1="3" x2="21" y1="10" y2="10" />
//                     </svg>
//                     <span>June 2024</span>
//                   </p>
//                 </div>
//               </div>

//               <div className="p-4 rounded-md border border-[#212922]">
//                 <img
//                   src="/images/abuja-24.png"
//                   alt="Lagos"
//                   className="w-full h-44 object-cover rounded-md"
//                 />
//                 <div className="my-3">
//                   <div className="mb-2 flex justify-between">
//                     <h3 className="text-lg font-bold text-white mb-1">
//                       Abuja Blockchain Week 2024
//                     </h3>
//                   </div>
//                   <p className="text-[#70EE45] flex gap-3 mb-3 text-sm cursor-pointer">
//                     <span>Visit Website</span>
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="my-auto"
//                     >
//                       <path d="M5 12h14" />
//                       <path d="m12 5 7 7-7 7" />
//                     </svg>
//                   </p>

//                   <p className="flex gap-3">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="my-auto"
//                     >
//                       <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//                       <line x1="16" x2="16" y1="2" y2="6" />
//                       <line x1="8" x2="8" y1="2" y2="6" />
//                       <line x1="3" x2="21" y1="10" y2="10" />
//                     </svg>
//                     <span>September 2024</span>
//                   </p>
//                 </div>
//               </div>
//               <div className="p-4 rounded-md border border-[#212922]">
//                 <img
//                   src="/images/lagos-23.png"
//                   alt="Lagos"
//                   className="w-full h-44 object-cover rounded-md"
//                 />
//                 <div className="my-3">
//                   <div className="mb-2 flex justify-between">
//                     <h3 className="text-lg font-bold text-white mb-1">
//                       Lagos Blockchain Week 2023
//                     </h3>
//                   </div>
//                   <p className="text-[#70EE45] flex gap-3 mb-3 text-sm cursor-pointer">
//                     <span>Visit Website</span>
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="my-auto"
//                     >
//                       <path d="M5 12h14" />
//                       <path d="m12 5 7 7-7 7" />
//                     </svg>
//                   </p>

//                   <p className="flex gap-3">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="my-auto"
//                     >
//                       <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//                       <line x1="16" x2="16" y1="2" y2="6" />
//                       <line x1="8" x2="8" y1="2" y2="6" />
//                       <line x1="3" x2="21" y1="10" y2="10" />
//                     </svg>
//                     <span>June 2023</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <FooterNav />
//       </div>
//     </>
//   );
// }


import HeaderNav from "~/components/HeaderNav";
import type { Route } from "./+types/home";
import FooterNav from "~/components/FooterNav";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nigeria Blockchain Week" },
    { name: "description", content: "Welcome to Nigeria Blockchain Week!" },
  ];
}

const handleDivClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

export default function Home() {
  return (    
    <>
      <div className="min-h-screen bg-[#040806] text-[#D2D2D2] overflow-hidden">
        <HeaderNav />

        {/* Hero Section - with animations */}
        <section id="hero" className="bg-[#040806] py-32 px-4 sm:px-6 lg:px-8 relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#67FF83]/5 to-[#02D929]/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#02D929]/3 to-[#67FF83]/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent animate-fade-in-up">
              Nigerian
              <br />
              <span className="bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
                Blockchain Week
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Uniting Innovators State by State: Blockchain Weeks Showcasing Nigeria's Vision for Fintech, Governance, and Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <a href="#states">
              <button className="bg-[#70EE45] hover:bg-[#5fd635] rounded-md text-black font-semibold px-8 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#70EE45]/20">
                Explore State Weeks
              </button>
              </a>
              <a href="https://bit.ly/NBWSponsorship" target="_blank" rel="noopener noreferrer">
                <button className="border border-[#70EE45] hover:border-[#5fd635] rounded-md text-white font-semibold bg-transparent hover:bg-[#70EE45]/10 px-8 py-3 transform transition-all duration-300 hover:scale-105">
                  Sponsor an Event
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Statistics Section - Enhanced with hover effects */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/5 p-4 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2 group-hover:from-[#67FF83] group-hover:to-[#02D929] transition-all duration-300">
                  1000+
                </div>
                <div className="bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  Expected Attendees across States
                </div>
              </div>
              <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/5 p-4 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2 group-hover:from-[#67FF83] group-hover:to-[#02D929] transition-all duration-300">
                  36
                </div>
                <div className="bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  Target States by 2025
                </div>
              </div>
              <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/5 p-4 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2 group-hover:from-[#67FF83] group-hover:to-[#02D929] transition-all duration-300">
                  20+
                </div>
                <div className="bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  Partners & Sponsors
                </div>
              </div>
              <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/5 p-4 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent mb-2 group-hover:from-[#67FF83] group-hover:to-[#02D929] transition-all duration-300">
                  60+
                </div>
                <div className="bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  Speakers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discover Section - Enhanced cards */}
        {/* <section id="states" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Discover Blockchain Weeks Near You
              </h2>
              <p className="text-gray-400">Stay tuned for more states joining in soon!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link to={"https://lagosblockchainweek.io/"}>
                <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-[#67FF83]/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-[#67FF83]/10">
                  <div className="overflow-hidden rounded-md mb-3">
                    <img
                      src="/images/lagos.png"
                      alt="Lagos"
                      className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="my-3">
                    <div className="mb-2 flex justify-between items-center">
                      <h3 className="text-lg flex gap-3 font-bold text-white mb-1 group-hover:text-[#67FF83] transition-colors duration-300">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="my-auto text-green-500 group-hover:animate-bounce"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Lagos</span>
                      </h3>
                      <div className="flex gap-2">
                        <button className="flex gap-3 bg-[#16A249]/20 hover:bg-[#16A249]/30 py-1 px-4 rounded-sm transition-all duration-300">
                          <span className="my-auto">Live</span>
                          <div className="w-2 h-2 my-auto rounded-full bg-green-500 animate-pulse"></div>
                        </button>
                        <button className="flex gap-3 bg-green-400 hover:bg-[#16A249]/30 py-1 px-4 rounded-sm transition-all duration-300">
                          <span className="my-auto text-black hover:text-white">View</span>
                          <div className="w-2 h-2 my-auto rounded-full bg-green-500 animate-pulse"></div>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm font-semibold">AI X Blockchain</p>
                    <p className="text-gray-400 text-sm my-3">
                      The Intelligent Infrastructure of Tomorrow
                    </p>
                    <p className="flex gap-3 text-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      <span>4th November - 8th November 2025</span>
                    </p>
                  </div>
                </div>
              </Link>

              <Link to={"http://abujablockchainweek.ng/"}>
                <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-[#67FF83]/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-[#67FF83]/10">
                  <div className="overflow-hidden rounded-md mb-3">
                    <img
                      src="/images/abuja.png"
                      alt="Abuja"
                      className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="my-3">
                    <div className="mb-2 flex justify-between items-center">
                      <h3 className="text-lg flex gap-3 font-bold text-white mb-1 group-hover:text-[#67FF83] transition-colors duration-300">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="my-auto text-green-500 group-hover:animate-bounce"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Abuja</span>
                      </h3>
                      <div className="flex gap-2">
                        <button className="flex gap-3 bg-[#16A249]/20 hover:bg-[#16A249]/30 py-1 px-4 rounded-sm transition-all duration-300">
                          <span className="my-auto">Live</span>
                          <div className="w-2 h-2 my-auto rounded-full bg-green-500 animate-pulse"></div>
                        </button>
                        <button className="flex gap-3 bg-green-400 hover:bg-[#16A249]/30 py-1 px-4 rounded-sm transition-all duration-300">
                          <span className="my-auto text-black hover:text-white">View</span>
                          <div className="w-2 h-2 my-auto rounded-full bg-green-500 animate-pulse"></div>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm font-semibold">Policy, Trust & Innovation</p>
                    <p className="text-gray-400 text-sm my-3">
                      Shaping Nigeria's Digital Governance
                    </p>
                    <p className="flex gap-3 text-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      <span>27th October - 1st November 2025</span>
                    </p>
                  </div>
                </div>
              </Link>

              <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
                <div className="overflow-hidden rounded-md mb-3 relative">
                  <img
                    src="/images/anambara.png"
                    alt="Anambra"
                    className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
                  </div>
                </div>
                <div className="my-3">
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto text-green-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Anambra</span>
                    </h3>
                    <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
                      <span className="my-auto">Soon</span>
                      <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">TBA</p>
                  <p className="text-gray-400 text-sm my-3">Coming Soon</p>
                  <p className="flex gap-3 text-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-auto"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>2025</span>
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
                <div className="overflow-hidden rounded-md mb-3 relative">
                  <img
                    src="/images/crs2.jpg"
                    alt="cross river"
                    className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
                  </div>
                </div>
                <div className="my-3">
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto text-green-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Cross River</span>
                    </h3>
                    <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
                      <span className="my-auto">Soon</span>
                      <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">TBA</p>
                  <p className="text-gray-400 text-sm my-3">Coming Soon</p>
                  <p className="flex gap-3 text-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-auto"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>2025</span>
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
                <div className="overflow-hidden rounded-md mb-3 relative">
                  <img
                    src="/images/enugu.jpg"
                    alt="enugu"
                    className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
                  </div>
                </div>
                <div className="my-3">
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto text-green-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Enugu</span>
                    </h3>
                    <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
                      <span className="my-auto">Soon</span>
                      <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">TBA</p>
                  <p className="text-gray-400 text-sm my-3">Coming Soon</p>
                  <p className="flex gap-3 text-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-auto"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>2025</span>
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
                <div className="overflow-hidden rounded-md mb-3 relative">
                  <img
                    src="/images/riverss.jpg"
                    alt="Rivers"
                    className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
                  </div>
                </div>
                <div className="my-3">
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto text-green-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Rivers</span>
                    </h3>
                    <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
                      <span className="my-auto">Soon</span>
                      <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">TBA</p>
                  <p className="text-gray-400 text-sm my-3">Coming Soon</p>
                  <p className="flex gap-3 text-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-auto"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>2025</span>
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
                <div className="overflow-hidden rounded-md mb-3 relative">
                  <img
                    src="/images/kano.jpg"
                    alt="Kano"
                    className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
                  </div>
                </div>
                <div className="my-3">
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto text-green-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Kano</span>
                    </h3>
                    <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
                      <span className="my-auto">Soon</span>
                      <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">TBA</p>
                  <p className="text-gray-400 text-sm my-3">Coming Soon</p>
                  <p className="flex gap-3 text-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-auto"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>2025</span>
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
                <div className="overflow-hidden rounded-md mb-3 relative">
                  <img
                    src="/images/aks.jpg"
                    alt="akwa ibom"
                    className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
                  </div>
                </div>
                <div className="my-3">
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto text-green-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Akwa Ibom</span>
                    </h3>
                    <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
                      <span className="my-auto">Soon</span>
                      <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">TBA</p>
                  <p className="text-gray-400 text-sm my-3">Coming Soon</p>
                  <p className="flex gap-3 text-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-auto"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>2025</span>
                  </p>
                </div>
              </div>
              <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
                <div className="overflow-hidden rounded-md mb-3 relative">
                  <img
                    src="/images/abia2.jpg"
                    alt="Abia"
                    className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-md flex items-center justify-center">
                    <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
                  </div>
                </div>
                <div className="my-3">
                  <div className="mb-2 flex justify-between items-center">
                    <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto text-green-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>Abia</span>
                    </h3>
                    <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
                      <span className="my-auto">Soon</span>
                      <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm">TBA</p>
                  <p className="text-gray-400 text-sm my-3">Coming Soon</p>
                  <p className="flex gap-3 text-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-auto"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <span>2025</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section id="states" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Discover Blockchain Weeks Near You
      </h2>
      <p className="text-gray-400">Stay tuned for more states joining in soon!</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Link to={"https://lagosblockchainweek.io/"}>
                <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-[#67FF83]/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-[#67FF83]/10">
                  <div className="overflow-hidden rounded-md mb-3">
                    <img
                      src="/images/lagos.png"
                      alt="Lagos"
                      className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="my-3">
                    <div className="mb-2 flex justify-between items-center">
                      <h3 className="text-lg flex gap-3 font-bold text-white mb-1 group-hover:text-[#67FF83] transition-colors duration-300">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="my-auto text-green-500 group-hover:animate-bounce"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Lagos</span>
                      </h3>
                      <div className="flex gap-2">
                        <button className="flex gap-3 bg-[#16A249]/20 hover:bg-[#16A249]/30 py-1 px-4 rounded-sm transition-all duration-300">
                          <span className="my-auto">Live</span>
                          <div className="w-2 h-2 my-auto rounded-full bg-green-500 animate-pulse"></div>
                        </button>
                        <button className="flex gap-3 bg-green-400 hover:bg-[#16A249]/30 py-1 px-4 rounded-sm transition-all duration-300">
                          <span className="my-auto text-black hover:text-white">View</span>
                          <div className="w-2 h-2 my-auto rounded-full bg-green-500 animate-pulse"></div>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm font-semibold">AI X Blockchain</p>
                    <p className="text-gray-400 text-sm my-3">
                      The Intelligent Infrastructure of Tomorrow
                    </p>
                    <p className="flex gap-3 text-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      <span>10th December - 13th 2025</span>
                    </p>
                  </div>
                </div>
              </Link>

              <Link to={"http://abujablockchainweek.ng/"}>
                <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-[#67FF83]/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-[#67FF83]/10">
                  <div className="overflow-hidden rounded-md mb-3">
                    <img
                      src="/images/abuja.png"
                      alt="Abuja"
                      className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="my-3">
                    <div className="mb-2 flex justify-between items-center">
                      <h3 className="text-lg flex gap-3 font-bold text-white mb-1 group-hover:text-[#67FF83] transition-colors duration-300">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="my-auto text-green-500 group-hover:animate-bounce"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Abuja</span>
                      </h3>
                      <div className="flex gap-2">
                        <button className="flex gap-3 bg-[#16A249]/20 hover:bg-[#16A249]/30 py-1 px-4 rounded-sm transition-all duration-300">
                          <span className="my-auto">Live</span>
                          <div className="w-2 h-2 my-auto rounded-full bg-green-500 animate-pulse"></div>
                        </button>
                        <button className="flex gap-3 bg-green-400 hover:bg-[#16A249]/30 py-1 px-4 rounded-sm transition-all duration-300">
                          <span className="my-auto text-black hover:text-white">View</span>
                          <div className="w-2 h-2 my-auto rounded-full bg-green-500 animate-pulse"></div>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm font-semibold">Policy, Trust & Innovation</p>
                    <p className="text-gray-400 text-sm my-3">
                      Shaping Nigeria's Digital Governance
                    </p>
                    <p className="flex gap-3 text-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      <span>1st December - 4th,2025</span>
                    </p>
                  </div>
                </div>
              </Link>

      <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
        <div className="overflow-hidden rounded-md mb-3 relative">
          <img
            src="/images/anambra.jpg"
            alt="Anambra"
            className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-75 filter brightness-85 contrast-105"
          />
          <div className="absolute inset-0 bg-black/35 rounded-md flex items-center justify-center">
            <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
          </div>
        </div>
        <div className="my-3">
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-auto text-green-500"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Anambra</span>
            </h3>
            <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
              <span className="my-auto">Soon</span>
              <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
            </button>
          </div>
          <p className="text-gray-300 text-sm">TBA</p>
          <p className="text-gray-400 text-sm my-3">Coming Soon</p>
          <p className="flex gap-3 text-gray-400">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="my-auto"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>2025</span>
          </p>
        </div>
      </div>

      <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
        <div className="overflow-hidden rounded-md mb-3 relative">
          <img
            src="/images/crs2.jpg"
            alt="cross river"
            className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-75 filter brightness-85 contrast-105"
          />
          <div className="absolute inset-0 bg-black/35 rounded-md flex items-center justify-center">
            <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
          </div>
        </div>
        <div className="my-3">
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-auto text-green-500"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Cross River</span>
            </h3>
            <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
              <span className="my-auto">Soon</span>
              <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
            </button>
          </div>
          <p className="text-gray-300 text-sm">TBA</p>
          <p className="text-gray-400 text-sm my-3">Coming Soon</p>
          <p className="flex gap-3 text-gray-400">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="my-auto"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>2025</span>
          </p>
        </div>
      </div>

      <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
        <div className="overflow-hidden rounded-md mb-3 relative">
          <img
            src="/images/enugu2.jpg"
            alt="enugu"
            className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-75 filter brightness-85 contrast-105"
          />
          <div className="absolute inset-0 bg-black/35 rounded-md flex items-center justify-center">
            <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
          </div>
        </div>
        <div className="my-3">
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-auto text-green-500"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Enugu</span>
            </h3>
            <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
              <span className="my-auto">Soon</span>
              <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
            </button>
          </div>
          <p className="text-gray-300 text-sm">TBA</p>
          <p className="text-gray-400 text-sm my-3">Coming Soon</p>
          <p className="flex gap-3 text-gray-400">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="my-auto"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>2025</span>
          </p>
        </div>
      </div>

      <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
        <div className="overflow-hidden rounded-md mb-3 relative">
          <img
            src="/images/riverss.jpg"
            alt="Rivers"
            className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-75 filter brightness-85 contrast-105"
          />
          <div className="absolute inset-0 bg-black/35 rounded-md flex items-center justify-center">
            <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
          </div>
        </div>
        <div className="my-3">
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-auto text-green-500"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Rivers</span>
            </h3>
            <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
              <span className="my-auto">Soon</span>
              <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
            </button>
          </div>
          <p className="text-gray-300 text-sm">TBA</p>
          <p className="text-gray-400 text-sm my-3">Coming Soon</p>
          <p className="flex gap-3 text-gray-400">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="my-auto"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>2025</span>
          </p>
        </div>
      </div>

      <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
        <div className="overflow-hidden rounded-md mb-3 relative">
          <img
            src="/images/kano.jpg"
            alt="Kano"
            className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-75 filter brightness-85 contrast-105"
          />
          <div className="absolute inset-0 bg-black/35 rounded-md flex items-center justify-center">
            <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
          </div>
        </div>
        <div className="my-3">
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-auto text-green-500"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Kano</span>
            </h3>
            <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
              <span className="my-auto">Soon</span>
              <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
            </button>
          </div>
          <p className="text-gray-300 text-sm">TBA</p>
          <p className="text-gray-400 text-sm my-3">Coming Soon</p>
          <p className="flex gap-3 text-gray-400">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="my-auto"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>2025</span>
          </p>
        </div>
      </div>

      <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
        <div className="overflow-hidden rounded-md mb-3 relative">
          <img
            src="/images/aks.jpg"
            alt="akwa ibom"
            className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-75 filter brightness-85 contrast-105"
          />
          <div className="absolute inset-0 bg-black/35 rounded-md flex items-center justify-center">
            <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
          </div>
        </div>
        <div className="my-3">
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-auto text-green-500"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Akwa Ibom</span>
            </h3>
            <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
              <span className="my-auto">Soon</span>
              <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
            </button>
          </div>
          <p className="text-gray-300 text-sm">TBA</p>
          <p className="text-gray-400 text-sm my-3">Coming Soon</p>
          <p className="flex gap-3 text-gray-400">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="my-auto"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>2025</span>
          </p>
        </div>
      </div>

      <div className="group cursor-pointer p-4 rounded-lg border border-[#212922] hover:border-gray-500/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102">
        <div className="overflow-hidden rounded-md mb-3 relative">
          <img
            src="/images/abia2.jpg"
            alt="Abia"
            className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 opacity-75 filter brightness-85 contrast-105"
          />
          <div className="absolute inset-0 bg-black/35 rounded-md flex items-center justify-center">
            <span className="text-white font-semibold bg-black/60 px-4 py-2 rounded-full">Coming Soon</span>
          </div>
        </div>
        <div className="my-3">
          <div className="mb-2 flex justify-between items-center">
            <h3 className="text-lg flex gap-3 font-bold text-white mb-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-auto text-green-500"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Abia</span>
            </h3>
            <button className="flex gap-3 bg-gray-800 py-1 px-4 rounded-sm">
              <span className="my-auto">Soon</span>
              <div className="w-2 h-2 my-auto rounded-full bg-gray-500 animate-pulse"></div>
            </button>
          </div>
          <p className="text-gray-300 text-sm">TBA</p>
          <p className="text-gray-400 text-sm my-3">Coming Soon</p>
          <p className="flex gap-3 text-gray-400">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="my-auto"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>2025</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Building Blocks Section - Enhanced with staggered animations */}
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
              {[
                {
                  icon: "/images/icons/education.png",
                  title: "Education",
                  description: "Workshops, masterclasses, and hands-on sessions",
                  delay: "delay-0"
                },
                {
                  icon: "/images/icons/networking.png",
                  title: "Networking",
                  description: "Connect with like-minded individuals and industry leaders",
                  delay: "delay-100"
                },
                {
                  icon: "/images/icons/policy-influence.png",
                  title: "Policy Influence",
                  description: "Shape blockchain policy and regulatory frameworks",
                  delay: "delay-200"
                },
                {
                  icon: "/images/icons/innovation.png",
                  title: "Innovation",
                  description: "Showcase cutting-edge blockchain solutions",
                  delay: "delay-300"
                }
              ].map((item, index) => (
                <div key={index} className={`group bg-[#0B0F0D] border border-[#212922] hover:border-[#67FF83]/30 p-6 text-center rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#67FF83]/10 animate-fade-in-up ${item.delay}`}>
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    <img
                      className="w-16 mx-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                      src={item.icon}
                      alt=""
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#67FF83] transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Movement Section - Enhanced cards */}
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

            <div className=" cursor-pointer grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group p-4 rounded-lg border border-[#212922] hover:border-[#67FF83]/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-[#67FF83]/10">
                <div className="overflow-hidden rounded-md mb-3">
                  <img
                    src="/images/host-img.png"
                    alt="Host"
                    className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="my-3">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#67FF83] transition-colors duration-300">
                    Host a State Blockchain Week
                  </h3>
                  <p className="text-gray-400 text-sm my-3 group-hover:text-gray-300 transition-colors duration-300">
                    Bring blockchain innovation to your state and join Nigeria's
                    growing Web3 ecosystem.
                  </p>
                  <button className="bg-[#70EE45] hover:bg-[#5fd635] p-3 rounded-sm font-semibold px-6 text-black transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#70EE45]/20">
                    Host a State Week
                  </button>
                </div>
              </div>

              <div className="group p-4 rounded-lg border border-[#212922] hover:border-[#67FF83]/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-[#67FF83]/10">
                <div className="overflow-hidden rounded-md mb-3">
                  <img
                    src="/images/sponsor-img.png"
                    alt="Sponsor"
                    className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="my-3">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#67FF83] transition-colors duration-300">
                    Sponsor Multiple Weeks
                  </h3>
                  <p className="text-gray-400 text-sm my-3 group-hover:text-gray-300 transition-colors duration-300">
                    Maximize your reach and impact by supporting blockchain
                    events across Nigeria.
                  </p>
                  <a href="https://bit.ly/NBWSponsorship" target="_blank">
                    <button className="bg-white hover:bg-gray-100 border border-[#13B92C] hover:border-[#0fa827] p-3 rounded-sm font-semibold px-6 text-black transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Sponsor State Weeks
                    </button>
                  </a>
                </div>
              </div>

              <div className="group p-4 rounded-lg border border-[#212922] hover:border-[#67FF83]/30 bg-[#0B0F0D] hover:bg-[#0F1510] transform transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-[#67FF83]/10 md:col-span-2 lg:col-span-1">
                <div className="overflow-hidden rounded-md mb-3">
                  <img
                    src="/images/img.png"
                    alt="Community"
                    className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="my-3">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#67FF83] transition-colors duration-300">
                    Join the National Community
                  </h3>
                  <p className="text-gray-400 text-sm my-3 group-hover:text-gray-300 transition-colors duration-300">
                    Connect with builders, entrepreneurs and blockchain
                    enthusiasts nationwide.
                  </p>
                  <a href="https://t.me/NigerianBlockchainWeek" target="_blank">
                    <button className="bg-white hover:bg-gray-100 border border-[#13B92C] hover:border-[#0fa827] p-3 rounded-sm font-semibold px-6 text-black transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Join the Community
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain Week Highlights - Enhanced gallery */}
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

            <div className="cursor-pointer bg-[#0B0F0D] p-6 rounded-lg border border-[#212922]">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group p-4 rounded-lg border border-[#212922] hover:border-[#67FF83]/30 transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-[#67FF83]/10">
                  <div className="overflow-hidden rounded-md mb-3">
                    <img
                      src="/images/lagos-24.png"
                      alt="Lagos 2024"
                      className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* <div className="my-3">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#67FF83] transition-colors duration-300">
                      Lagos Blockchain Week 2024
                    </h3>
                    <a href="https://streameth.org/66636b641e7953197957825f" target="_blank" className="text-[#70EE45] hover:text-[#5fd635] flex gap-3 mb-3 text-sm cursor-pointer items-center transform transition-all duration-300 hover:translate-x-1">
                      <span>Recap the Moments</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transform transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                    <p className="flex gap-3 text-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      <span>June 2024</span>
                    </p>
                  </div> */}
<div 
    className="my-3 cursor-pointer group"
    onClick={() => handleDivClick('https://streameth.org/66636b641e7953197957825f')}
    onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleDivClick('https://streameth.org/66636b641e7953197957825f');
        }
    }}
    tabIndex={0}
    role="button"
    aria-label="View Lagos Blockchain Week 2024 Recap"
>
    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#67FF83] transition-colors duration-300">
        Lagos Blockchain Week 2024
    </h3>
    <div className="text-[#70EE45] group-hover:text-[#5fd635] flex gap-3 mb-3 text-sm items-center transform transition-all duration-300 group-hover:translate-x-1">
        <span>Recap the Moments</span>
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform transition-transform duration-300 group-hover:translate-x-1"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    </div>
    <p className="flex gap-3 text-gray-300">
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="my-auto"
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
        <span>June 2024</span>
    </p>
</div>
                </div>

                {/* <div className="group p-4 rounded-lg border border-[#212922] hover:border-[#67FF83]/30 transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-[#67FF83]/10">
                  <div className="overflow-hidden rounded-md mb-3">
                    <img
                      src="/images/abuja-24.png"
                      alt="Abuja 2024"
                      className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="my-3">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#67FF83] transition-colors duration-300">
                      Abuja Blockchain Week 2024
                    </h3>
                    <p className="text-[#70EE45] flex gap-3 mb-3 text-sm cursor-pointer items-center transform transition-all duration-300 hover:translate-x-1 hover:text-[#5fd635]">
                      <span>Visit Website</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transform transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </p>
                    <p className="flex gap-3 text-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      <span>September 2024</span>
                    </p>
                  </div>
                </div> */}

                {/* <div className="group p-4 rounded-lg border border-[#212922] hover:border-[#67FF83]/30 transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-[#67FF83]/10">
                  <div className="overflow-hidden rounded-md mb-3">
                    <img
                      src="/images/lagos-23.png"
                      alt="Lagos 2023"
                      className="w-full h-44 object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="my-3">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#67FF83] transition-colors duration-300">
                      Lagos Blockchain Week 2023
                    </h3>
                    <p className="text-[#70EE45] flex gap-3 mb-3 text-sm cursor-pointer items-center transform transition-all duration-300 hover:translate-x-1 hover:text-[#5fd635]">
                      <span>Visit Website</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transform transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </p>
                    <p className="flex gap-3 text-gray-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="my-auto"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                      </svg>
                      <span>June 2023</span>
                    </p>
                  </div>
                </div> */}
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

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        /* Custom pulse animation for dots */
        @keyframes custom-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: custom-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
        `
      }} />
    </>
  );
}
