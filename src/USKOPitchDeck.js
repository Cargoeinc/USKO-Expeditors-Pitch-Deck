import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label="Next Slide"
      className={className}
      style={{
        ...style,
        display: 'flex',
        right: 40,
        zIndex: 10,
        width: 80,
        height: 80,
        background: '#eb0028',
        borderRadius: '50%',
        color: 'white',
        border: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onClick={onClick}
      onMouseOver={e => {
        e.currentTarget.style.background = '#ff1a3d';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = '#eb0028';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="none"/>
        <path d="M12 8l8 8-8 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      aria-label="Previous Slide"
      className={className}
      style={{
        ...style,
        display: 'flex',
        left: 40,
        zIndex: 10,
        width: 80,
        height: 80,
        background: '#eb0028',
        borderRadius: '50%',
        color: 'white',
        border: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onClick={onClick}
      onMouseOver={e => {
        e.currentTarget.style.background = '#ff1a3d';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = '#eb0028';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="none"/>
        <path d="M20 8l-8 8 8 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

const slides = [
  // Title Slide
  <section className="flex flex-col justify-center items-center min-h-screen bg-white px-4 py-8 md:p-6">
    <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center">
      {/* Logo */}
      <img 
        src="https://i.imgur.com/J2ME1ji.png" 
        alt="USKO Logo" 
        className="w-48 md:w-64 mb-6 md:mb-8 drop-shadow-xl" 
        style={{
          maxWidth: '70vw',
          filter: 'drop-shadow(0 10px 15px rgba(235, 0, 40, 0.15))'
        }}
      />
      
      {/* Main Title */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 md:mb-4">
          <span className="text-[#eb0028]">Logistics.</span>
          <span className="text-[#eb0028]">Delivered.</span>
          <span className="text-black">Exceptionally.</span>
        </h1>
        
        <h2 className="text-base md:text-xl text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed px-2">
          USKO is your trusted partner for white glove, expedited, and specialized logistics across North America.
          <span className="block mt-2">We move what matters—on time, every time.</span>
        </h2>
      </div>

      {/* CTA Button */}
      <a 
        href="#contact" 
        className="bg-[#eb0028] text-white px-6 py-3 rounded-full font-bold text-sm md:text-base shadow-lg hover:bg-[#cc0023] transition-all duration-300 mb-8 md:mb-12 transform hover:scale-105"
      >
        Let's Move Forward Together
      </a>

      {/* Client Badge */}
      <div className="bg-[#eb0028]/5 p-3 md:p-4 rounded-xl border border-[#eb0028]/20 w-full max-w-sm">
        <div className="flex items-center justify-center space-x-2">
          <svg className="w-4 h-4 md:w-5 md:h-5 text-[#eb0028]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-[#eb0028] font-bold text-sm md:text-lg">Prepared for Expeditors International</span>
        </div>
      </div>
    </div>
  </section>,

  // About USKO
  <section className="flex flex-col justify-center items-center p-6 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#eb0028] mb-3 text-center tracking-tight">About <span className="text-black">USKO</span></h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mb-5 text-center max-w-2xl mx-auto font-semibold">Excellence in Transportation and Logistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="flex justify-center items-center order-2 md:order-1">
          <img src="https://i.imgur.com/H7F2rk9.png" alt="USKO Logistics Truck" className="max-w-full h-auto md:h-80 rounded-lg shadow-lg" style={{maxHeight: '340px'}} />
        </div>
        <div className="space-y-4 order-1 md:order-2">
          <div className="bg-gray-50 rounded-xl p-4 shadow-lg">
            <h3 className="text-xl font-semibold text-[#eb0028] mb-3">Company Highlights</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white font-bold text-base mx-auto shadow-md">
                  18
                </div>
                <div className="text-gray-700 text-sm mt-1">Years Active</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white font-bold text-base mx-auto shadow-md">
                  65M+
                </div>
                <div className="text-gray-700 text-sm mt-1">Miles</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white font-bold text-base mx-auto shadow-md">
                  500+
                </div>
                <div className="text-gray-700 text-sm mt-1">Team</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-lg">
            <p className="text-gray-700 text-sm leading-relaxed">
              From full truckload shipments to specialized logistics, USKO stands as a trusted partner in comprehensive logistics and cargo management across North America and Europe.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mt-2">
              Our premium white-glove service ensures your high-value equipment and sensitive technology arrives safely, on time, every time, with TSA certified drivers ensuring maximum security.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // Transportation Assets
  <section className="flex flex-col justify-center items-center p-8 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <div className="bg-[#eb0028]/10 p-4 rounded-lg border border-[#eb0028]/30 mb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#eb0028] mb-2 text-center tracking-tight">Our <span className="text-black">Transportation Assets</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto font-semibold">Comprehensive Fleet Solutions for Every Need</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#eb0028]">Express LTL & Full Truckload</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>150+ company-owned tractors for reliable capacity</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Dedicated team drivers for high-value shipments</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Specialized 53' trailers with air-ride suspension</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Temperature-controlled solutions for sensitive shipments</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>24/7 tracking via satellite GPS monitoring</span>
            </li>
          </ul>
          
          <div className="mt-4">
            <img src="https://imgur.com/5MNmizZ.jpg" alt="USKO Truck" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg relative">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#eb0028]">Expedite White Glove Services</h3>
          </div>
          
          <div className="mb-4">
            <img src="https://imgur.com/WyZyHpc.jpg" alt="USKO Lift Gate Services" className="w-full h-52 object-cover rounded-lg shadow-md" />
            <p className="text-sm text-gray-500 text-center italic mt-2">USKO specialized lift gate service for precision delivery</p>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Extensive fleet of box trucks with lift gates</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>High-performance sprinter vans for time-critical deliveries</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>TSA certified drivers for secure transportation</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Custom handling equipment for high-value shipments</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 shadow-lg md:col-span-2">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#eb0028]">Why Choose USKO for Expeditors International?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="border-l-4 border-[#eb0028] pl-3">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">Security First</h4>
              <p className="text-gray-700 text-xs">Our TSA certified drivers and secure chain of custody ensure your valuable IT assets are protected at every step.</p>
            </div>
            <div className="border-l-4 border-[#eb0028] pl-3">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">Tech Expertise</h4>
              <p className="text-gray-700 text-xs">Specialized equipment and trained personnel for handling sensitive electronics and server equipment.</p>
            </div>
            <div className="border-l-4 border-[#eb0028] pl-3">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">Global Reach</h4>
              <p className="text-gray-700 text-xs">Seamless cross-border operations through our Monterrey branch and established European network.</p>
            </div>
          </div>
        </div>

        {/* White Glove Service Video Showcase */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#eb0028]">White Glove Service in Action</h3>
              <p className="text-gray-700 text-sm mt-1">Watch our specialized team perform a precision white glove delivery</p>
            </div>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center text-gray-700 font-semibold text-xl">
              Alice's white glove video goes here
            </div>
          </div>
          
          <div className="mt-4 bg-[#eb0028]/5 p-4 rounded-lg border border-[#eb0028]/20">
            <p className="text-gray-700 text-sm">
              Our white glove service goes beyond standard delivery. Watch as our specialized team demonstrates proper handling, 
              precision care, and professional setup of sensitive equipment. This level of care and expertise is what sets USKO apart in handling 
              high-value shipments.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // Network Coverage - Updated to just list branches
  <section className="flex flex-col justify-center items-center p-8 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <div className="bg-[#eb0028]/10 p-4 rounded-lg border border-[#eb0028]/30 mb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#eb0028] mb-2 text-center tracking-tight">Our <span className="text-black">Branch Network</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto font-semibold">Strategic Locations Across North America and Europe</h2>
      </div>
      
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">United States</h3>
            <ul className="space-y-3 w-full">
              <li className="flex justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium">West Sacramento, CA</span>
                <span className="font-medium">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-3 rounded-lg border border-[#eb0028] shadow-sm text-[#eb0028] font-semibold">
                <span>Roseville, CA (HQ)</span>
                <span>Branch</span>
              </li>
              <li className="flex justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium">Chicago, IL</span>
                <span className="font-medium">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium">St Marys, GA</span>
                <span className="font-medium">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium">Houston, TX</span>
                <span className="font-medium">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-3 rounded-lg border border-[#eb0028] shadow-sm text-[#eb0028] font-semibold">
                <span>Sacramento, CA</span>
                <span>Warehouse</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Europe</h3>
            <ul className="space-y-3 w-full">
              <li className="flex justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium">Warsaw, Poland</span>
                <span className="font-medium">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium">Kyiv, Ukraine</span>
                <span className="font-medium">Branch</span>
              </li>
              <li className="flex justify-between bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                <span className="text-gray-700 font-medium">Odesa, Ukraine</span>
                <span className="font-medium">Branch</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Latin America</h3>
            <ul className="space-y-3 w-full">
              <li className="flex justify-between bg-white p-3 rounded-lg border border-[#eb0028] shadow-sm text-[#eb0028] font-semibold">
                <span>Monterrey, Mexico</span>
                <span>Branch</span>
              </li>
              <li className="flex items-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#eb0028] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Daily cross-border operations with the US</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-[#eb0028]/5 p-5 rounded-xl border border-[#eb0028]/20 shadow-lg text-center">
          <p className="text-gray-700">
            All USKO branches are strategically positioned to provide optimal coverage for Expeditors International shipments.
          </p>
        </div>
      </div>
    </div>
  </section>,

  // Sacramento Warehouse Capacity - New Slide
  <section className="flex flex-col justify-center items-center p-6 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto w-full">
      <div className="bg-gradient-to-r from-[#eb0028] to-[#ff1a3d] p-6 rounded-2xl shadow-2xl mb-8 transform hover:scale-[1.02] transition-all duration-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center tracking-tight">Sacramento <span className="text-gray-100">Warehouse Capacity</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-100 text-center max-w-3xl mx-auto font-semibold">Our Flexible Storage & Distribution Solutions</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Services Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(235,0,40,0.1)] hover:shadow-[0_4px_25px_rgba(235,0,40,0.15)] transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eb0028] to-[#ff1a3d] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 ml-4">Core Services</h3>
          </div>
          <div className="space-y-3">
            {[
              'Short-Term & Long-Term Storage',
              'Cross-Docking & Transloading',
              'Container Drayage (Port to Warehouse)',
              'Container Unloading & Palletization',
              'Repacking & Restacking Damaged Goods',
              'Local & Regional Deliveries'
            ].map((service, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-[#eb0028] mr-3"></div>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(235,0,40,0.1)] hover:shadow-[0_4px_25px_rgba(235,0,40,0.15)] transition-all duration-300 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eb0028] to-[#ff1a3d] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">Additional Services</h3>
              <p className="text-sm text-gray-500">INCLUDE:</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Freight consolidation',
              'Container unloading',
              'Product repacking',
              'Inventory management',
              'Pick and pack services',
              'Palletizing and wrapping',
              'Labeling and barcoding',
              'Order fulfillment',
              'Climate-controlled storage',
              'Seasonal storage options'
            ].map((service, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-[#eb0028] mr-2"></div>
                <span className="text-gray-700 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Capabilities Card */}
        <div className="bg-gradient-to-br from-[#eb0028] to-[#ff1a3d] rounded-2xl p-6 shadow-xl md:col-span-2 transform hover:scale-[1.01] transition-all duration-300">
          <h3 className="text-xl font-bold text-white mb-4">Specialized Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                  </svg>
                ),
                title: 'LTL Refrigerated Storage',
                description: 'Temperature-controlled storage solutions for sensitive goods'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Refrigerated Local Deliveries',
                description: '100+ mile radius coverage area'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                ),
                title: 'Climate-Controlled Storage',
                description: 'Specialized storage for temperature-sensitive items'
              }
            ].map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-200">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#eb0028] mb-3">
                  {capability.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{capability.title}</h4>
                <p className="text-gray-100 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statement Card */}
        <div className="bg-gray-50 rounded-2xl p-6 shadow-lg md:col-span-2 border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#eb0028] to-[#ff1a3d] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 ml-4">Statement</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our warehouse, centrally located in the Sacramento, CA area, provides flexible short-term and long-term storage solutions tailored to your logistics needs. We offer a full range of services including cross-docking, transloading, repacking, and local deliveries within a 350-mile radius. We also specialize in LTL refrigerated product storage and refrigerated deliveries within a 100+ mile radius across California.
          </p>
        </div>
      </div>
    </div>
  </section>,

  // Geodis/IBM Custom Slide
  <section className="flex flex-col justify-center items-center p-6 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#eb0028] mb-2 text-center tracking-tight">Partnering with <span className="text-black">Expeditors International</span></h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mb-5 text-center max-w-2xl mx-auto font-semibold">Custom Logistics Solutions for Your Business</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-[#eb0028] mb-3">Our Value Proposition</h3>
          <ul className="space-y-3">
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#eb0028] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">Secure Transportation</h4>
                <p className="text-gray-700 text-xs">TSA certified drivers and specialized handling procedures for high-value and sensitive shipments.</p>
              </div>
            </li>
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#eb0028] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">White Glove Service</h4>
                <p className="text-gray-700 text-xs">Specialized lift gate equipment, inside delivery, unpacking, and debris removal for precision deliveries.</p>
              </div>
            </li>
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#eb0028] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">Transparent Documentation</h4>
                <p className="text-gray-700 text-xs">Comprehensive chain of custody records, detailed proof of delivery, and real-time tracking for all shipments.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#eb0028] mb-4">Key Benefits for Expeditors International</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#eb0028]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb0028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Time-Definite Delivery</h4>
                <p className="text-gray-700 text-sm">99.3% on-time performance for critical IT equipment deployments</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#eb0028]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb0028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Risk Mitigation</h4>
                <p className="text-gray-700 text-sm">Specialized handling reduces damage claims to less than 0.5% for sensitive deliveries</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#eb0028]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb0028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Scalable Capacity</h4>
                <p className="text-gray-700 text-sm">Dedicated fleet ensures availability during high-demand periods</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#eb0028]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#eb0028]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Regulatory Compliance</h4>
                <p className="text-gray-700 text-sm">TSA certified teams ensuring security protocols are followed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#eb0028]/5 p-6 rounded-xl border border-[#eb0028]/20">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#eb0028]">Did You Know?</h3>
            </div>
            <p className="text-gray-700">USKO's new Monterrey branch specializes in cross-border logistics between the US and Mexico, with dedicated TSA certified drivers and specialists to ensure seamless transportation for multinational operations.</p>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // Closing Slide
  <section className="flex flex-col justify-center items-center p-8 pb-16 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#eb0028] mb-4">Ready to Transform Your <span className="text-black">Logistics Experience?</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto font-semibold">
          Partner with USKO to elevate Expeditors International's transportation capabilities with our specialized fleet and white glove delivery teams.
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
          <p className="text-gray-700 mb-3">Speak with our sales team member</p>
          <p className="font-bold text-[#eb0028] text-lg">+1 (916) 849-2156</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-700 mb-3">For RFQ and RFI opportunities email:</p>
          <p className="font-bold text-[#eb0028] text-lg">ron@uskoinc.com</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#eb0028] flex items-center justify-center text-white mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">California Office</h3>
          <p className="text-gray-700 mb-3">Our main West Coast facility</p>
          <div className="flex flex-col items-center">
            <p className="font-bold text-[#eb0028] text-base">1101 CREEKSIDE RIDGE DR STE&nbsp;270</p>
            <p className="font-bold text-[#eb0028] text-base">ROSEVILLE, CA 95678</p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#eb0028]/5 p-6 rounded-xl border border-[#eb0028]/20 shadow-lg mx-auto max-w-3xl mb-8">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#eb0028] flex items-center justify-center text-white mr-3 md:mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-[#eb0028]">USKO Family of Companies</h3>
        </div>
        <div className="space-y-4">
          {/* Tree/Org Chart Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {/* USKO Logistics Inc - Top Center */}
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100 shadow-sm col-span-1 md:col-span-2 mx-auto w-full md:w-[338.89px]">
              <p className="font-bold text-gray-800 text-center text-sm md:text-base">USKO LOGISTICS INC</p>
              <div className="flex justify-between mt-1 text-xs md:text-sm">
                <span className="text-gray-600">MC Number:</span>
                <span className="font-semibold text-gray-800">803644</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">US DOT Number:</span>
                <span className="font-semibold text-gray-800">2337754</span>
              </div>
            </div>
            
            {/* Vertical Line Connector */}
            <div className="col-span-1 md:col-span-2 h-4 md:h-8 flex justify-center">
              <div className="w-px h-full bg-[#eb0028]/20"></div>
            </div>
            
            {/* USKO Expedite and Express - Side by Side */}
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100 shadow-sm">
              <p className="font-bold text-gray-800 text-center text-sm md:text-base">USKO EXPEDITE INC</p>
              <div className="flex justify-between mt-1 text-xs md:text-sm">
                <span className="text-gray-600">MC Number:</span>
                <span className="font-semibold text-gray-800">746242</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">US DOT Number:</span>
                <span className="font-semibold text-gray-800">307593</span>
              </div>
            </div>
            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100 shadow-sm">
              <p className="font-bold text-gray-800 text-center text-sm md:text-base">USKO EXPRESS INC</p>
              <div className="flex justify-between mt-1 text-xs md:text-sm">
                <span className="text-gray-600">MC Number:</span>
                <span className="font-semibold text-gray-800">563453</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm">
                <span className="text-gray-600">US DOT Number:</span>
                <span className="font-semibold text-gray-800">1499885</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-6 mb-12">
        <img src="https://i.imgur.com/J2ME1ji.png" alt="USKO Logo" className="w-64 mx-auto mb-4" />
        <h4 className="text-2xl font-bold text-[#eb0028]">Logistics. Delivered. <span className="text-black">Exceptionally.</span></h4>
      </div>
    </div>
  </section>,
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: false,
  pauseOnHover: true,
  cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  dotsClass: "slick-dots custom-dots",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ],
  // Ensures the slide fits the window properly
  lazyLoad: true,
  fade: false,
  swipe: true,
  touchMove: true
};

const USKOPitchDeck = () => (
  <div className="bg-white w-full">
    <Slider {...settings}>
      {slides.map((slide, idx) => (
        <div key={idx} className="relative">
          {slide}
          <div className="page-indicator">
            <span className="text-[#eb0028] font-bold">{idx + 1}</span>
            <span className="mx-1 text-gray-400">/</span>
            <span className="text-gray-500">{slides.length}</span>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default USKOPitchDeck; 