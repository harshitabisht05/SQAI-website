'use client';

import React from 'react';

export default function Mission() {
  return (
    <section id="mission" className="font-sans">
      <div className="bg-black text-white py-10 px-6 transition-all">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold mb-4">We Build Impactful AI</h1>
          <p className="text-lg text-gray-300">
            Sentienta QualityAI delivers real-world solutions for MedTech, AutoTech, LegalTech, and MSMEs.
          </p>
        </div>
      </div>

      <div className="bg-white text-black py-10 px-6 transition-all">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            We create real-world AI solutions that bring measurable impact across sectors like healthcare, education, and small businesses. With roots in MedTech, we're expanding into AutoTech and LegalTech — solving document overload, trust issues in pricing, and access gaps in financing and legal help.
          </p>
        </div>
      </div>

      <div className="bg-black text-white py-10 px-6 transition-all">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Where We Started</h2>
          <p className="text-lg text-gray-300">
            Our journey began in MedTech, helping doctors and hospitals process data, run diagnostics, and automate workflows. That foundation of trust and innovation now powers our work in other domains.
          </p>
        </div>
      </div>

      <div className="bg-white text-black py-10 px-6 transition-all">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Expanding Horizons</h2>
          <ul className="list-disc ml-6 text-lg text-gray-700 space-y-2">
            <li><span className="text-[#0085FF] font-medium">AutoTech:</span> AI for used-car inspection, pricing, and financing</li>
            <li><span className="text-[#0085FF] font-medium">MSMEs:</span> Automating documents, contracts, and meeting notes</li>
            <li><span className="text-[#0085FF] font-medium">LegalTech:</span> Making complex contracts easy to understand in local languages</li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-white py-10 px-6 transition-all">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">We Build AI That Is:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ['Accessible', 'Offline-first. Works even in low-internet areas.'],
              ['Multilingual', 'Supports Indian languages like Hindi and Tamil.'],
              ['Scalable', 'Built for startups and large institutions alike.'],
              ['Trustworthy', 'Strong security. Local data control.'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-gray-900 text-[#00FF90] border border-[#00FF90] rounded-xl p-6 hover:shadow-lg hover:scale-105 transition">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-base text-[#BFFFE1]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
