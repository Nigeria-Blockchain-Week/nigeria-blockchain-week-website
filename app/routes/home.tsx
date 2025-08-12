import HeaderNav from "~/components/HeaderNav";
import type { Route } from "./+types/home";
import FooterNav from "~/components/FooterNav";

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Blockchain Weeks
              <br />
              <span className="text-green-500">Across Nigeria</span>
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

        <FooterNav />
      </div>
    </>
  );
}
