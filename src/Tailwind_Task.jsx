import {FaFacebookF,FaInstagram,FaTwitter,FaGithub,FaDribbble,} from "react-icons/fa";
import Picture from './assets/react-components-using-tailwind-css.png';
//import tailwindcss from "@tailwindcss/vite";

export default function Tailwind_Task() {
  return (
    <>
    <header class="w-full  bg-sky-200">
      <div class=" px-20 py-1 flex items-center justify-between">
        <span class="font-bold text-3xl antialiased font-stretch-extra-expanded text-blue-600/100 dark:text-sky-400/100">BrandLogo</span>
        <nav class="items-center mt-4">
          <ul class="flex items-center space-x-20 
           text-blue-800 font-medium">
            <li><p class="hover:bg-amber-300 no-underline">Home</p></li>
            <li><p  class="hover:bg-amber-300 text-blue-800">About</p></li>
            <li><p  class="hover:bg-amber-300 text-blue-800">Services</p></li>
            <li><p  class="hover:bg-amber-300  text-blue-800">Contact</p></li>
          </ul>
        </nav>
        <div>
          <button class="bg-blue-600 text-white px-5 py-2 rounded  hover:scale-140">Get Started</button>
        </div>
      </div>
    </header>
    <div className="w-full h-96 flex justify-center items-center">
      <img src={Picture} alt="React Components" className="w-full h-80 object-cover"/>
    </div>
  
  <footer className="bg-black text-white">
  <div className="flex justify-around origin-top">
    <div>
      <span class="text-5xl font-bold text-green-600/100 dark:text-green-400/100 mb-10 ">REACT.</span>

      <p className="w-80 mb-8 leading-8 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Id odit ullam iste repellat consequatur libero reiciendis,
        blanditiis accusantium.
      </p>

      <div className="flex gap-8 text-3xl">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaGithub />
        <FaDribbble />
      </div>
    </div>

    <div>
      <h2 className="text-base font-bold">Solutions</h2>
      <p className="mb-3 pt-1">Analytics</p>
      <p className="mb-3">Marketing</p>
      <p className="mb-3">Commerce</p>
      <p>Insights</p>
    </div>

   
    <div>
      <h2 className="text-base font-bold">Support</h2>
      <p className="mb-3 pt-1">Pricing</p>
      <p className="mb-3">Documentation</p>
      <p className="mb-3">Guides</p>
      <p>API Status</p>
    </div>

   
    <div>
      <h2 className="text-base font-bold">Company</h2>
      <p className="mb-3 pt-1">About</p>
      <p className="mb-3">Blog</p>
      <p className="mb-3">Jobs</p>
      <p className="mb-3">Press</p>
      <p>Careers</p>
    </div>

  
    <div>
      <h2 className="text-base font-bold">Legal</h2>
      <p className="mb-3 pt-1">Claim</p>
      <p className="mb-3">Policy</p>
      <p>Terms</p>
    </div>

  </div>
</footer>
</>
  );
}
