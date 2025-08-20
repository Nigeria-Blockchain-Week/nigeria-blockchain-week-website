import HeaderNav from "~/components/HeaderNav";
import type { Route } from "./+types/blogs";
import FooterNav from "~/components/FooterNav";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog - Nigeria Blockchain Week" },
    {
      name: "description",
      content:
        "Stay updated with the latest blockchain insights and news from Nigeria",
    },
  ];
}

const featuredArticles = [
  {
    id: 1,
    title: "The Future of Blockchain Governance in Nigeria",
    excerpt:
      "Exploring how blockchain technology is revolutionizing governance structures across Nigerian states and federal institutions.",
    author: "Dr. Amina Oyagbola",
    date: "August 15, 2025",
    readTime: "8 min read",
    image: "/images/blog/featured1.jpg",
    category: "Policy",
    featured: true,
  },
  {
    id: 2,
    title: "DeFi Adoption Surge in West Africa: Nigeria Leading the Charge",
    excerpt:
      "A comprehensive analysis of Nigeria's role in driving decentralized finance adoption across the West African region.",
    author: "Chioma Okwu",
    date: "August 12, 2025",
    readTime: "6 min read",
    image: "/images/blog/featured2.jpg",
    category: "DeFi",
    featured: true,
  },
];

const allArticles = [
  {
    id: 3,
    title: "Building Sustainable Blockchain Communities Across Nigerian States",
    excerpt:
      "Best practices for establishing and nurturing blockchain communities in different Nigerian states.",
    author: "Ibrahim Hassan",
    date: "August 10, 2025",
    readTime: "5 min read",
    image: "/images/blog/article1.jpg",
    category: "Community",
  },
  {
    id: 4,
    title: "Smart Contracts in Agricultural Supply Chain Management",
    excerpt:
      "How Nigerian farmers are leveraging smart contracts to improve transparency and efficiency.",
    author: "Kemi Afolabi",
    date: "August 8, 2025",
    readTime: "7 min read",
    image: "/images/blog/article2.jpg",
    category: "Agriculture",
  },
  {
    id: 5,
    title: "CBDCs vs Cryptocurrencies: Nigeria's Digital Currency Landscape",
    excerpt:
      "Understanding the differences and implications of Central Bank Digital Currencies and cryptocurrencies.",
    author: "Tunde Ogundimu",
    date: "August 5, 2025",
    readTime: "9 min read",
    image: "/images/blog/article3.jpg",
    category: "CBDC",
  },
  {
    id: 6,
    title: "Women in Blockchain: Bridging the Gender Gap in Nigerian Tech",
    excerpt:
      "Highlighting the contributions of women leaders in Nigeria's blockchain ecosystem.",
    author: "Aisha Bello",
    date: "August 3, 2025",
    readTime: "6 min read",
    image: "/images/blog/article4.jpg",
    category: "Diversity",
  },
  {
    id: 7,
    title: "Blockchain Education: Preparing Nigeria's Youth for Web3 Careers",
    excerpt:
      "Educational initiatives and programs preparing young Nigerians for blockchain and Web3 opportunities.",
    author: "Olumide Taiwo",
    date: "August 1, 2025",
    readTime: "8 min read",
    image: "/images/blog/article5.jpg",
    category: "Education",
  },
  {
    id: 8,
    title: "Cross-Border Payments Revolution: Blockchain Solutions for Nigeria",
    excerpt:
      "How blockchain technology is transforming remittances and cross-border transactions.",
    author: "Funmi Adeleye",
    date: "July 30, 2025",
    readTime: "7 min read",
    image: "/images/blog/article6.jpg",
    category: "Fintech",
  },
];

export default function Blogs() {
  return (
    <>
      <div className="min-h-screen bg-[#040806] text-white">
        <HeaderNav />

        {/* Hero Section */}
        <section id="hero" className="bg-[#040806] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <button className="flex w-80 mx-auto text-[#70EE45] border border-[#70EE45] rounded-full p-4 items-center justify-center mb-6 gap-4">
              <BookOpen />
              <p>Blockchain Insights & Updates</p>
            </button>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
              Latest From the Hub
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest insights, trends, and developments
              from Nigeria's blockchain ecosystem
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <button className="bg-[#70EE45] text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-400 transition-colors">
                All
              </button>
              <button className="bg-transparent border border-[#212922] text-gray-300 px-4 py-2 rounded-full text-sm font-semibold hover:border-green-500 hover:text-green-500 transition-colors">
                Policy
              </button>
              <button className="bg-transparent border border-[#212922] text-gray-300 px-4 py-2 rounded-full text-sm font-semibold hover:border-green-500 hover:text-green-500 transition-colors">
                DeFi
              </button>
              <button className="bg-transparent border border-[#212922] text-gray-300 px-4 py-2 rounded-full text-sm font-semibold hover:border-green-500 hover:text-green-500 transition-colors">
                Community
              </button>
              <button className="bg-transparent border border-[#212922] text-gray-300 px-4 py-2 rounded-full text-sm font-semibold hover:border-green-500 hover:text-green-500 transition-colors">
                Education
              </button>
              <button className="bg-transparent border border-[#212922] text-gray-300 px-4 py-2 rounded-full text-sm font-semibold hover:border-green-500 hover:text-green-500 transition-colors">
                Fintech
              </button>
              <button className="bg-transparent border border-[#212922] text-gray-300 px-4 py-2 rounded-full text-sm font-semibold hover:border-green-500 hover:text-green-500 transition-colors">
                CBDC
              </button>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Articles
              </h2>
              {/* <p className="text-gray-400">
                Our top picks and trending topics in the blockchain space
              </p> */}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-[#0B0F0D] border border-[#212922] rounded-md overflow-hidden hover:border-green-500 transition-colors cursor-pointer"
                >
                  <div className="relative h-64">
                    <img
                      src="/images/abuja-24.png"
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#70EE45] text-black px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 hover:text-green-500 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="text-[#70EE45] flex items-center gap-2 hover:gap-3 transition-all">
                        <span>Read More</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                All Articles
              </h2>
              {/* <p className="text-gray-400">
                Explore our complete collection of blockchain insights and
                analysis
              </p> */}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-[#0B0F0D] border border-[#212922] rounded-md overflow-hidden hover:border-green-500 transition-colors cursor-pointer"
                >
                  <div className="relative h-48">
                    <img
                      src="/images/abuja-24.png"
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#70EE45] text-black px-2 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 hover:text-green-500 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <span className="mx-2">•</span>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {article.readTime}
                      </span>
                      <button className="text-[#70EE45] flex items-center gap-1 hover:gap-2 transition-all text-sm">
                        <span>Read</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center shadow-md bg-[#0B0F0D] border border-[#212922] p-6 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Up-To-Date
            </h2>
            <p className="text-lg text-gray-300 mb-8 w-[60%] mx-auto">
              Get the latest news as new state weeks go live and blockchain
              innovation spreads across Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md bg-transparent border border-[#212922] text-white placeholder-gray-400"
              />
              <button className="hover:bg-[#70EE45] border border-[#70EE45] rounded-md text-black font-semibold px-8 py-3 bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <FooterNav />
      </div>
    </>
  );
}
