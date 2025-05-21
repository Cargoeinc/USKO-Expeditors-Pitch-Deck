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
        background: '#007aff',
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
        e.currentTarget.style.background = '#3395ff';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = '#007aff';
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
        background: '#007aff',
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
        e.currentTarget.style.background = '#3395ff';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.background = '#007aff';
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
  <section className="flex flex-col justify-center items-center p-6 bg-white">
    <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center px-16">
      <img src="https://i.imgur.com/J2ME1ji.png" alt="USKO Logo" className="w-64 md:w-80 mb-6 drop-shadow-lg" style={{maxWidth:'80vw'}} />
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#007aff] mb-3 text-center tracking-tight">Logistics. Delivered. <span className="text-black">Exceptionally.</span></h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mb-6 text-center max-w-2xl mx-auto font-semibold">USKO is your trusted partner for white glove, expedited, and specialized logistics across North America. We move what matters—on time, every time.</h2>
      <div className="flex flex-col md:flex-row gap-3 justify-center">
        <a href="#contact" className="bg-[#007aff] text-white px-6 py-2 rounded-full font-bold text-base shadow hover:bg-[#0062cc] transition-colors duration-300 text-center">Let's Move Forward Together</a>
        <span className="text-[#007aff] font-semibold text-base flex items-center justify-center">Prepared for Geodis/IBM</span>
      </div>
    </div>
  </section>,

  // About USKO
  <section className="flex flex-col justify-center items-center p-6 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#007aff] mb-3 text-center tracking-tight">About <span className="text-black">USKO</span></h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mb-5 text-center max-w-2xl mx-auto font-semibold">Excellence in Transportation and Logistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="flex justify-center items-center order-2 md:order-1">
          <img src="https://i.imgur.com/H7F2rk9.png" alt="USKO Logistics Truck" className="max-w-full h-auto md:h-80 rounded-lg shadow-lg" style={{maxHeight: '340px'}} />
        </div>
        <div className="space-y-4 order-1 md:order-2">
          <div className="bg-gray-50 rounded-xl p-4 shadow-lg">
            <h3 className="text-xl font-semibold text-[#007aff] mb-3">Company Highlights</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#007aff] flex items-center justify-center text-white font-bold text-base mx-auto shadow-md">
                  18
                </div>
                <div className="text-gray-700 text-sm mt-1">Years Active</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#007aff] flex items-center justify-center text-white font-bold text-base mx-auto shadow-md">
                  65M+
                </div>
                <div className="text-gray-700 text-sm mt-1">Miles</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#007aff] flex items-center justify-center text-white font-bold text-base mx-auto shadow-md">
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
      <div className="bg-[#007aff]/10 p-4 rounded-lg border border-[#007aff]/30 mb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#007aff] mb-2 text-center tracking-tight">Our <span className="text-black">Transportation Assets</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto font-semibold">Comprehensive Fleet Solutions for Every Need</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#007aff]">Express LTL & Full Truckload</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>150+ company-owned tractors for reliable capacity</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Dedicated team drivers for high-value shipments</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Specialized 53' trailers with air-ride suspension</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Temperature-controlled solutions for electronics</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="w-12 h-12 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#007aff]">Expedite White Glove Services</h3>
          </div>
          
          <div className="mb-4">
            <img src="https://imgur.com/WyZyHpc.jpg" alt="USKO Lift Gate Services" className="w-full h-52 object-cover rounded-lg shadow-md" />
            <p className="text-sm text-gray-500 text-center italic mt-2">USKO specialized lift gate service for precision delivery</p>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Extensive fleet of box trucks with lift gates</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>High-performance sprinter vans for time-critical deliveries</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>TSA certified drivers for secure transportation</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Custom handling equipment for fragile IT hardware</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-4 shadow-lg md:col-span-2">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#007aff]">Why Choose USKO for Geodis/IBM?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="border-l-4 border-[#007aff] pl-3">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">Security First</h4>
              <p className="text-gray-700 text-xs">Our TSA certified drivers and secure chain of custody ensure your valuable IT assets are protected at every step.</p>
            </div>
            <div className="border-l-4 border-[#007aff] pl-3">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">Tech Expertise</h4>
              <p className="text-gray-700 text-xs">Specialized equipment and trained personnel for handling sensitive electronics and server equipment.</p>
            </div>
            <div className="border-l-4 border-[#007aff] pl-3">
              <h4 className="font-semibold text-gray-800 mb-1 text-sm">Global Reach</h4>
              <p className="text-gray-700 text-xs">Seamless cross-border operations through our Monterrey branch and established European network.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // Network Coverage - Updated to just list branches
  <section className="flex flex-col justify-center items-center p-8 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <div className="bg-[#007aff]/10 p-4 rounded-lg border border-[#007aff]/30 mb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#007aff] mb-2 text-center tracking-tight">Our <span className="text-black">Branch Network</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto font-semibold">Strategic Locations Across North America and Europe</h2>
      </div>
      
      <div className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#007aff] flex items-center justify-center text-white mb-4">
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
              <li className="flex justify-between bg-white p-3 rounded-lg border border-[#007aff] shadow-sm text-[#007aff] font-semibold">
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
              <li className="flex justify-between bg-white p-3 rounded-lg border border-[#007aff] shadow-sm text-[#007aff] font-semibold">
                <span>Sacramento, CA</span>
                <span>Warehouse</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#007aff] flex items-center justify-center text-white mb-4">
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
            <div className="w-14 h-14 rounded-full bg-[#007aff] flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Latin America</h3>
            <ul className="space-y-3 w-full">
              <li className="flex justify-between bg-white p-3 rounded-lg border border-[#007aff] shadow-sm text-[#007aff] font-semibold">
                <span>Monterrey, Mexico</span>
                <span>Branch</span>
              </li>
              <li className="flex items-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Daily cross-border operations with the US</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 bg-[#007aff]/5 p-5 rounded-xl border border-[#007aff]/20 shadow-lg text-center">
          <p className="text-gray-700">
            The Sacramento Warehouse provides 85,000 sq ft of dry storage and 35,000 sq ft of refrigerated storage capacity.
            All USKO branches are strategically positioned to provide optimal coverage for Geodis/IBM shipments.
          </p>
        </div>
      </div>
    </div>
  </section>,

  // Sacramento Warehouse Capacity - New Slide
  <section className="flex flex-col justify-center items-center p-6 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <div className="bg-[#007aff]/10 p-3 rounded-lg border border-[#007aff]/30 mb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#007aff] mb-1 text-center tracking-tight">Sacramento <span className="text-black">Warehouse Capacity</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-700 text-center max-w-3xl mx-auto font-semibold">Our Flexible Storage & Distribution Solutions</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-[#0A1A2F] rounded-xl p-3 shadow-lg overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#007aff]/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#007aff]/5 rounded-full -ml-12 -mb-12"></div>
          <h3 className="text-lg font-semibold text-[#007aff] mb-3 relative z-10">Core Services:</h3>
          <ul className="space-y-1 text-white relative z-10 text-sm">
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Short-Term & Long-Term Storage</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Cross-Docking & Transloading</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Container Drayage (Port to Warehouse)</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Container Unloading & Palletization</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Repacking & Restacking Damaged Goods</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-2 mt-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Local & Regional Deliveries</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#0A1A2F] rounded-xl p-3 shadow-lg overflow-hidden relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#007aff]/10 rounded-full -ml-16 -mt-16"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#007aff]/5 rounded-full -mr-12 -mb-12"></div>
          <h3 className="text-lg font-semibold text-[#007aff] mb-1 relative z-10">Additional Services</h3>
          <h4 className="text-base font-semibold text-white mb-2 relative z-10">INCLUDE:</h4>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-white text-xs relative z-10">
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-1 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Freight consolidation</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-1 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Container unloading</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-1 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Product repacking</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-1 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Inventory management</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-1 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Pick and pack services</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-1 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Palletizing and wrapping</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-1 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Labeling and barcoding</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-1 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Order fulfillment</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-1 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Climate-controlled storage</span>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-1 mt-0.5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Seasonal storage options</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-[#0A1A2F] rounded-xl p-3 shadow-lg overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#007aff]/10 rounded-full -mr-16 -mb-16"></div>
          <h3 className="text-lg font-semibold text-[#007aff] mb-2 relative z-10">Specialized Capabilities:</h3>
          <ul className="space-y-2 text-white relative z-10 text-sm">
            <li className="flex items-center p-2 bg-[#007aff]/10 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-2 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                </svg>
              </div>
              <span className="font-medium">LTL Refrigerated Storage</span>
            </li>
            <li className="flex items-center p-2 bg-[#007aff]/10 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-2 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-medium">Refrigerated Local Deliveries (100+ mile radius)</span>
            </li>
            <li className="flex items-center p-2 bg-[#007aff]/10 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-2 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <span className="font-medium">Climate-Controlled Storage for Sensitive Goods</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl p-3 shadow-lg border border-[#007aff]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#007aff]/5 w-32 h-32 rounded-bl-full"></div>
          <div className="w-10 h-10 rounded-full bg-[#007aff] flex items-center justify-center text-white absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-[#007aff] mb-2">Statement</h3>
          <p className="text-gray-800 text-xs leading-relaxed">
            Our warehouse, centrally located in the Sacramento, CA area, provides flexible short-term and long-term storage solutions tailored to your logistics needs. We offer a full range of services including cross-docking, transloading, repacking, and local deliveries within a 350-mile radius. We also specialize in LTL refrigerated product storage and refrigerated deliveries within a 100+ mile radius across California.
          </p>
        </div>
      </div>
    </div>
  </section>,

  // Geodis/IBM Custom Slide
  <section className="flex flex-col justify-center items-center p-6 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#007aff] mb-2 text-center tracking-tight">Partnering with <span className="text-black">Geodis & IBM</span></h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mb-5 text-center max-w-2xl mx-auto font-semibold">Custom Logistics Solutions for Your Business</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-[#007aff] mb-3">Our Value Proposition</h3>
          <ul className="space-y-3">
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#007aff] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">Secure IT Equipment Transportation</h4>
                <p className="text-gray-700 text-xs">TSA certified drivers and specialized handling procedures for servers and sensitive electronics.</p>
              </div>
            </li>
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#007aff] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">Cross-Border Expertise</h4>
                <p className="text-gray-700 text-xs">Seamless movement between US and Mexico through our Monterrey branch, with customs clearance expertise.</p>
              </div>
            </li>
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#007aff] flex-shrink-0 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-0.5 text-sm">White Glove Service</h4>
                <p className="text-gray-700 text-xs">Specialized lift gate equipment, inside delivery, unpacking, and debris removal for data center installations.</p>
              </div>
            </li>
            <li className="flex">
              <div className="w-8 h-8 rounded-full bg-[#007aff] flex-shrink-0 flex items-center justify-center text-white mr-3">
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
            <h3 className="text-2xl font-semibold text-[#007aff] mb-4">Key Benefits for Geodis/IBM</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#007aff]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#007aff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Time-Definite Delivery</h4>
                <p className="text-gray-700 text-sm">99.3% on-time performance for critical IT equipment deployments</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#007aff]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#007aff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Risk Mitigation</h4>
                <p className="text-gray-700 text-sm">Specialized handling reduces damage claims to less than 0.5%</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#007aff]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#007aff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Scalable Capacity</h4>
                <p className="text-gray-700 text-sm">Dedicated fleet ensures availability during high-demand periods</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#007aff]/10 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#007aff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Regulatory Compliance</h4>
                <p className="text-gray-700 text-sm">TSA certified teams ensuring security protocols are followed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#007aff]/5 p-6 rounded-xl border border-[#007aff]/20">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#007aff]">Did You Know?</h3>
            </div>
            <p className="text-gray-700">USKO's new Monterrey branch specializes in cross-border logistics between the US and Mexico, with dedicated TSA certified drivers and customs specialists to ensure seamless IT equipment transportation for multinational operations.</p>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // DoD Approved Transportation Slide
  <section className="flex flex-col justify-center items-center p-8 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#007aff] mb-3 text-center tracking-tight">DoD Approved <span className="text-black">Transportation Services</span></h1>
      <h2 className="text-xl md:text-2xl text-gray-700 mb-6 text-center max-w-2xl mx-auto font-semibold">Supporting Your Military and Defense Logistics Requirements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#007aff]">DoD Approved Transportation Provider</h3>
          </div>
          
          <div className="mb-5 bg-[#007aff]/5 p-4 rounded-lg border border-[#007aff]/20">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">USKO is proud to be an approved DoD Transportation Service Provider (TSP)</span>, fully equipped to handle the specialized requirements of your military shipments.
            </p>
            <p className="text-gray-700">
              We understand that Geodis is also a DoD TSP and we can provide complementary services to assist with your DoD transportation requirements, functioning as a reliable transportation partner for defense-related shipments.
            </p>
          </div>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>COMSEC-approved drivers and handling procedures</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Expert navigation of military transportation systems</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Familiar with military base access protocols</span>
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#007aff] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Compliant with NISPOM and ITAR regulations</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-5">
          <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-[#007aff] mb-4">Our Military Logistics Expertise</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-[#007aff] pl-4 py-2">
                <h4 className="font-semibold text-gray-800 mb-1">Security Clearances</h4>
                <p className="text-gray-700">Our drivers maintain appropriate security clearances for transporting sensitive defense materials.</p>
              </div>
              
              <div className="border-l-4 border-[#007aff] pl-4 py-2">
                <h4 className="font-semibold text-gray-800 mb-1">Scheduling Expertise</h4>
                <p className="text-gray-700">We understand the unique scheduling requirements of military logistics and ensure precise coordination.</p>
              </div>
              
              <div className="border-l-4 border-[#007aff] pl-4 py-2">
                <h4 className="font-semibold text-gray-800 mb-1">Geodis DoD Support</h4>
                <p className="text-gray-700">As Geodis is a DoD TSP, we can enhance your capabilities with our specialized fleet for military shipments.</p>
              </div>
              
              <div className="border-l-4 border-[#007aff] pl-4 py-2">
                <h4 className="font-semibold text-gray-800 mb-1">Chain of Custody</h4>
                <p className="text-gray-700">Rigorous documentation ensures unbroken chain of custody for defense-related shipments.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#007aff]">Experience You Can Trust</h3>
            </div>
            <p className="text-gray-700 mb-3">
              USKO has successfully handled countless military shipments, providing reliable transportation services for defense contractors and government agencies across North America.
            </p>
            <p className="text-gray-700">
              Our team understands the critical nature of military logistics and can work with Geodis to enhance your DoD transportation capabilities, ensuring all security and compliance requirements are met.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>,

  // Closing Slide
  <section className="flex flex-col justify-center items-center p-8 pb-16 bg-white">
    <div className="max-w-6xl mx-auto w-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#007aff] mb-4">Ready to Transform Your <span className="text-black">Logistics Experience?</span></h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto font-semibold">
          Partner with USKO to elevate Geodis/IBM's transportation capabilities with our specialized fleet, TSA certified teams, and DoD-approved security protocols.
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#007aff] flex items-center justify-center text-white mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
          <p className="text-gray-700 mb-3">Speak with our logistics specialists</p>
          <p className="font-bold text-[#007aff] text-lg">+1 (916) 849-2156</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#007aff] flex items-center justify-center text-white mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-700 mb-3">Request a custom quote</p>
          <p className="font-bold text-[#007aff] text-lg">ron@uskoinc.com</p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 shadow-lg text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#007aff] flex items-center justify-center text-white mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">California Office</h3>
          <p className="text-gray-700 mb-3">Our main West Coast facility</p>
          <p className="font-bold text-[#007aff] text-base">1101 CREEKSIDE RIDGE DR STE 270,<br />ROSEVILLE, CA 95678</p>
        </div>
      </div>
      
      <div className="bg-[#007aff]/5 p-6 rounded-xl border border-[#007aff]/20 shadow-lg mx-auto max-w-3xl mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[#007aff] flex items-center justify-center text-white mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#007aff]">USKO Family of Companies</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <p className="font-bold text-gray-800">USKO EXPEDITE INC</p>
            <div className="flex justify-between mt-1">
              <span className="text-gray-600">MC Number:</span>
              <span className="font-semibold text-gray-800">746242</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">US DOT Number:</span>
              <span className="font-semibold text-gray-800">3075935</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <p className="font-bold text-gray-800">USKO EXPRESS INC</p>
            <div className="flex justify-between mt-1">
              <span className="text-gray-600">MC Number:</span>
              <span className="font-semibold text-gray-800">563453</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">US DOT Number:</span>
              <span className="font-semibold text-gray-800">1499885</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <p className="font-bold text-gray-800">USKO LOGISTICS INC</p>
            <div className="flex justify-between mt-1">
              <span className="text-gray-600">MC Number:</span>
              <span className="font-semibold text-gray-800">803644</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">US DOT Number:</span>
              <span className="font-semibold text-gray-800">2337754</span>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
            <p className="text-center font-bold text-gray-800 mb-1">Certifications</p>
            <div className="flex justify-between">
              <span className="text-gray-600">TSA Certification:</span>
              <span className="font-semibold text-gray-800">Certified</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">DoD Approved:</span>
              <span className="font-semibold text-gray-800">TSP Provider</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-6 mb-12">
        <img src="https://i.imgur.com/J2ME1ji.png" alt="USKO Logo" className="w-64 mx-auto mb-4" />
        <h4 className="text-2xl font-bold text-[#007aff]">Logistics. Delivered. <span className="text-black">Exceptionally.</span></h4>
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
            <span className="text-[#007aff] font-bold">{idx + 1}</span>
            <span className="mx-1 text-gray-400">/</span>
            <span className="text-gray-500">{slides.length}</span>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default USKOPitchDeck; 