// import React from "react";

// const FooterNav = () => {
//   return (
//     <footer className="border-t border-[#202221] bg-lineart-to-r from-[#090D0B] to-[#0A0E0C] py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div>
//             <img src="/images/Logo.svg" className="w-20 mb-3" alt="" />
//             <p className="text-gray-400 text-sm">
//               Uniting Innovators State by State: Blockchain Weeks Showcasing Nigeria’s Vision for Fintech, Governance, and Technology.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>
//                 <a
//                   href="https://bit.ly/LBW2024Gallery"
//                   target="_blank"
//                   className="hover:text-white transition-colors"
//                 >
//                   Lagos Blockchain Week 2024
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition-colors">
//                   Abuja Blockchain Week 2024
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition-colors">
//                   All States
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Get Involved</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>
//                 <a
//                   href=" https://bit.ly/NBWPartnershipform"
//                   target="_blank"
//                   className="hover:text-white transition-colors"
//                 >
//                   Partnerships
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://bit.ly/NBWSponsorship"
//                   target="_blank"
//                   className="hover:text-white transition-colors"
//                 >
//                   Sponsorship
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://bit.ly/NBWSpeakerForm"
//                   target="_blank"
//                   className="hover:text-white transition-colors"
//                 >
//                   Speakers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://bit.ly/NBW_Volunteer"
//                   target="_blank"
//                   className="hover:text-white transition-colors"
//                 >
//                   Volunteers
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-4">Contact</h4>
//             <ul className="space-y-2 text-sm text-gray-400">
//               <li>
//                 <a href="mailto:partnership@nigeriablockchainweek.ng">
//                   General Inquiries
//                 </a>
//               </li>
//               <li>
//                 <a href="mailto:partnership@nigeriablockchainweek.ng">
//                   Partnership Inquiries
//                 </a>
//               </li>
//               <li>
//                 <a href="mailto:partnership@nigeriablockchainweek.ng">
//                   Press Inquiries
//                 </a>
//               </li>
//               <li>
//                 <a href="mailto:partnership@nigeriablockchainweek.ng">
//                   Speaker Inquiries
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-[#202221] mt-8 pt-8 text-center text-sm text-gray-400">
//           © 2025 Nigeria Blockchain Week. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterNav;

import React, { useState } from "react";

const FooterNav = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your newsletter service
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/nigerianblockchainweek",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/nigeriablockchainweek",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Telegram",
      url: "https://t.me/NigerianBlockchainWeek",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@nigeriablockchainweek",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer id="foot" className="relative bg-gradient-to-br from-[#090D0B] via-[#0A0E0C] to-[#0B0F0D] border-t border-[#202221]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-[#13B92C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-[#00A619] rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-[#202221]/50">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Nigeria Blockchain Week
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on upcoming events, partnerships, and blockchain innovations across Nigeria.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13B92C] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#13B92C] to-[#00A619] hover:from-[#00A619] hover:to-[#13B92C] text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img 
                  src="/images/Logo.svg" 
                  className="w-24 mb-4 transition-transform hover:scale-105" 
                  alt="Nigeria Blockchain Week Logo" 
                />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Uniting Innovators State by State: Blockchain Weeks Showcasing Nigeria's Vision for Fintech, Governance, and Technology.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-[#13B92C] transition-all duration-300 transform hover:scale-110"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg relative">
                Quick Links
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#13B92C] to-[#00A619] rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Lagos Blockchain Week 2024", url: "#", external: true },
                  { name: "Abuja Blockchain Week 2024", url: "#", external: false },
                  { name: "All States", url: "#", external: false }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                      {link.external && (
                        <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg relative">
                Get Involved
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#13B92C] to-[#00A619] rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Partnerships", url: "https://bit.ly/NBWPartnershipform" },
                  { name: "Sponsorship", url: "https://bit.ly/NBWSponsorship" },
                  { name: "Speakers", url: "https://bit.ly/NBWSpeakerForm" },
                  { name: "Volunteers", url: "https://bit.ly/NBW_Volunteer" }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                      <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-6 text-lg relative">
                Contact
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#13B92C] to-[#00A619] rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "General Inquiries", email: "info@nigeriablockchainweek.ng" },
                  { name: "Partnership Inquiries", email: "partnership@nigeriablockchainweek.ng" },
                  // { name: "Press Inquiries", email: "press@nigeriablockchainweek.ng" },
                  // { name: "Speaker Inquiries", email: "speakers@nigeriablockchainweek.ng" }
                ].map((contact) => (
                  <li key={contact.name}>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm group"
                    >
                      <div className="group-hover:translate-x-1 transition-transform duration-200">
                        <div className="font-medium">{contact.name}</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-300">
                          {contact.email}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#202221]/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Nigeria Blockchain Week. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-xs text-gray-500">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
