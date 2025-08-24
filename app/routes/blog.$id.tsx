import HeaderNav from "~/components/HeaderNav";
import FooterNav from "~/components/FooterNav";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { marked } from "marked";

// Firebase setup
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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

// Configure marked for better markdown parsing
marked.setOptions({
  breaks: true,
  gfm: true,
});

export function meta() {
  return [
    { title: "Blog Post - Nigeria Blockchain Week" },
    {
      name: "description",
      content: "Read the latest blockchain insights from Nigeria Blockchain Week",
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

export default function BlogPost() {
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      if (!params.id) {
        setError("No article ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const docRef = doc(db, "posts", params.id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setArticle({ id: docSnap.id, ...docSnap.data() } as Article);
        } else {
          setError("Article not found");
        }
      } catch (err) {
        setError("Failed to load article");
        console.error("Error fetching article:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#040806] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#70EE45] border-opacity-70 mb-4"></div>
          <span className="text-[#70EE45] text-lg font-semibold">Loading article...</span>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-[#040806] text-white">
        <HeaderNav />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-red-500">Error</h1>
            <p className="text-gray-400 mb-8">{error || "Article not found"}</p>
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 bg-[#70EE45] text-black px-6 py-3 rounded-md font-semibold hover:bg-green-400 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Back to Blog
            </a>
          </div>
        </div>
        <FooterNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#040806] text-white">
      <HeaderNav />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 text-[#70EE45] hover:text-green-400 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 19-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Back to Blog
            </a>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#67FF83] via-[#D9FFE6] to-[#02D929] bg-clip-text text-transparent">
              {article.title}
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              {article.description}
            </p>
            
            {/* Author and Date */}
            <div className="flex items-center gap-6 text-gray-400 border-b border-[#212922] pb-6">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          </div>

          {/* Cover Image */}
          {article.coverUrl && (
            <div className="mb-12">
              <img
                src={article.coverUrl}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-gray-300 prose-strong:text-white prose-em:text-gray-200 prose-blockquote:border-l-[#70EE45] prose-blockquote:text-gray-300 prose-code:text-[#70EE45] prose-code:bg-[#0B0F0D] prose-pre:bg-[#0B0F0D] prose-pre:border prose-pre:border-[#212922] prose-a:text-[#70EE45] prose-a:no-underline hover:prose-a:underline prose-ul:text-gray-300 prose-ol:text-gray-300 prose-li:text-gray-300">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: marked(article.markdown) 
              }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#212922]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Enjoyed this article?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter for more insights from Nigeria's blockchain ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md bg-transparent border border-[#212922] text-white placeholder-gray-400 focus:outline-none focus:border-[#70EE45] transition-colors"
            />
            <button className="hover:bg-[#70EE45] border border-[#70EE45] rounded-md text-black font-semibold px-8 py-3 bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <FooterNav />
    </div>
  );
}
