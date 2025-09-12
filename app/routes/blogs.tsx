import HeaderNav from "~/components/HeaderNav";
import type { Route } from "./+types/blogs";
import FooterNav from "~/components/FooterNav";
import { useEffect, useState } from "react";

// Firebase setup
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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


type Article = {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  coverUrl?: string;
  markdown: string;
};

export default function Blogs() {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "posts"));
      const posts: any = [];
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });
      setAllArticles(posts);
      setFilteredArticles(posts);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  // Filter articles based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredArticles(allArticles);
    } else {
      const filtered = allArticles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArticles(filtered);
    }
  }, [searchQuery, allArticles]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#040806] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#70EE45] border-opacity-70 mb-4"></div>
          <span className="text-[#70EE45] text-lg font-semibold">Loading blog posts...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#040806] text-white">
        <HeaderNav />
        {/* ...existing code... */}
        {/* Hero Section */}
        <section id="hero" className="bg-[#040806] py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <button className="flex w-80 mx-auto text-[#70EE45] border border-[#70EE45] rounded-full p-4 items-center justify-center mb-6 gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
              </svg>
              <p>Blockchain Insights & Updates</p>
            </button>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
              Latest From the Hub
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest insights, trends, and developments
              from Nigeria's blockchain ecosystem
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mt-8">
              <div className="relative">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-transparent border border-[#212922] text-white placeholder-gray-400 focus:outline-none focus:border-[#70EE45] transition-colors"
                />
              </div>
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
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                <a
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="bg-[#0B0F0D] border border-[#212922] rounded-md overflow-hidden hover:border-green-500 transition-colors cursor-pointer block"
                >
                  <div className="relative h-48">
                    <img
                      src={article.coverUrl || "/images/abuja-24.png"}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    {/* <div className="absolute top-3 left-3">
                      <span className="bg-[#70EE45] text-black px-2 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div> */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 hover:text-green-500 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mb-3">
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                          <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <span>{article.author}</span>
                      </div>
                      <span className="mx-2">•</span>
                      <div className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                          <line x1="16" x2="16" y1="2" y2="6"/>
                          <line x1="8" x2="8" y1="2" y2="6"/>
                          <line x1="3" x2="21" y1="10" y2="10"/>
                        </svg>
                        <span>{new Date(article.createdAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      {/* <span className="text-xs text-gray-500">
                        {article.readTime}
                      </span> */}
                      <button className="text-[#70EE45] flex items-center gap-1 hover:gap-2 transition-all text-sm">
                        <span>Read</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"/>
                          <path d="m12 5 7 7-7 7"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </a>
              ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-400 text-lg">
                    {searchQuery ? `No articles found for "${searchQuery}"` : "No articles available"}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* Newsletter Section */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
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
        </section> */}
        <FooterNav />
      </div>
    </>
  );
}
