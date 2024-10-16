import React from 'react';
import Navbar from '../Navbar';

import HeroSection from '../HeroSection';
import Carousel from '../Carousel';
import Footer from '../Footer';
import { bishop } from '../../images';
const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <HeroSection />

{/* Bishop's Section */}
<section className=" py-12 text-center bg-slate-950">
  <img src={bishop} alt="Bishop" className="rounded-full w-1/2 h-82 mx-auto mb-4 border-4 border-red-400" />
  <h2 className="text-5xl font-bold text-white">Message from the Bishop Shava T.</h2>
  <p className="mt-4 text-lg max-w-2xl mx-auto text-white">
    "We welcome you to our family. Join us in a journey of faith, love, and togetherness. Together, we can spread kindness and compassion to all."
  </p>
</section>
      <section className="bg-white py-12 text-center">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          To spread love, peace, and kindness through worship and community service. We welcome everyone to join our journey of faith.
        </p>
      </section>
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold mt-8">Praise and Worship</h2>
        <Carousel />
      </section>
      
      {/* Service Times Section */}
      <section className="bg-white py-12 text-center mb-0">
        <h2 className="text-3xl font-bold">Join Us for Service</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We gather each week to worship and celebrate our faith. Everyone is welcome!
        </p>
        <div className="mt-8">
          <p className="text-xl font-semibold">Sunday Service: 10:00 AM</p>
          <p className="text-xl font-semibold">Wednesday Bible Study: 7:00 PM</p>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold">Our Location</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Visit us at 123 Church Avenue, YourCity. You can find us easily on the map.
        </p>
        <a
          href="https://goo.gl/maps/yourchurchlocation"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          View on Google Maps
        </a>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 text-center">
        <h2 className="text-3xl font-bold">What Our Members Say</h2>
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            "This church has become my second family. The warmth and love here are beyond words!"
            <footer className="mt-2 text-sm text-gray-500">— Tadiwa D.</footer>
          </blockquote>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            "Attending services here has been a blessing to my life. I feel connected and renewed."
            <footer className="mt-2 text-sm text-gray-500">— Chipo K.</footer>
          </blockquote>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold">Join Our Community</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Ready to connect? Sign up for our newsletter to receive updates on events, sermons, and more.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Subscribe Now
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
