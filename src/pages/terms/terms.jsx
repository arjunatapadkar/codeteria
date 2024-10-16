import React from 'react';
import MainNavbar from '../../components/MainNavbar';
import Footer from '../../components/core/Footer';
import './terms.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <MainNavbar />
      <div className="terms-content container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-[#F1C232]">Terms and Conditions</h1>
        <p className="text-lg text-[#D5A187] mb-8">
          Welcome to our platform. By accessing or using our website, you agree to comply with the
          following terms and conditions:
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#F1C232]">1. Use of Website</h2>
        <p className="text-lg text-[#D5A187] mb-6">
          By accessing this website, you warrant and represent that you are at least 18 years of age
          or have obtained parental consent to use the platform.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#F1C232]">2. Intellectual Property</h2>
        <p className="text-lg text-[#D5A187] mb-6">
          The content, features, and functionality on this website are owned by us and are protected
          by intellectual property laws. You agree not to modify, distribute, or use any content
          without our written consent.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#F1C232]">3. Limitation of Liability</h2>
        <p className="text-lg text-[#D5A187] mb-6">
          We are not liable for any direct or indirect damages resulting from the use or inability to
          use the site. You agree that your use of the site is at your own risk.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#F1C232]">4. Changes to Terms</h2>
        <p className="text-lg text-[#D5A187] mb-6">
          We reserve the right to modify these terms at any time. Changes will be effective
          immediately upon posting.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-[#F1C232]">5. Governing Law</h2>
        <p className="text-lg text-[#D5A187] mb-6">
          These terms and conditions are governed by the laws of [Your Jurisdiction], and any
          disputes will be resolved in the courts of [Your Jurisdiction].
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
