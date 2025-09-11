import React from "react";

const FooterNav = () => {
  return (
    <footer className="border-t border-[#202221] bg-lineart-to-r from-[#090D0B] to-[#0A0E0C] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/images/Logo.svg" className="w-20 mb-3" alt="" />
            <p className="text-gray-400 text-sm">
              Uniting Innovators State by State: Blockchain Weeks Showcasing Nigeria’s Vision for Fintech, Governance, and Technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://bit.ly/LBW2024Gallery"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Lagos Blockchain Week 2024
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Abuja Blockchain Week 2024
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  All States
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href=" https://bit.ly/NBWPartnershipform"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Partnerships
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/NBWSponsorship"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Sponsorship
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/NBWSpeakerForm"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/NBW_Volunteer"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Volunteers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:partnership@nigeriablockchainweek.ng">
                  General Inquiries
                </a>
              </li>
              <li>
                <a href="mailto:partnership@nigeriablockchainweek.ng">
                  Partnership Inquiries
                </a>
              </li>
              <li>
                <a href="mailto:partnership@nigeriablockchainweek.ng">
                  Press Inquiries
                </a>
              </li>
              <li>
                <a href="mailto:partnership@nigeriablockchainweek.ng">
                  Speaker Inquiries
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#202221] mt-8 pt-8 text-center text-sm text-gray-400">
          © 2025 Nigeria Blockchain Week. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterNav;
