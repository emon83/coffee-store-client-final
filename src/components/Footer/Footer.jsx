import "./Footer.css";
import img from '../../images/more/logo1.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <div>
        <div className="footer-bg1">
        <div className="flex items-center gap-4 md:gap-10 h-[550px] sm:mx-16 md:mx-36">
          <div>
          <img className="w-16 pt-4" src={img} alt="" />
            <h2 className="text-4xl title text-orange-950 font-bold mt-5">Espresso Emporium</h2>
            <p className="text-orange-950 mt-8">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
            <div className="flex items-center gap-5 mt-8">
                <FaFacebook className="w-10 h-10 text-orange-950"/>
                <FaTwitter className="w-12 h-12 text-orange-950"/>
                <FaInstagram className="w-12 h-12 text-orange-950"/>
            </div>
            <h2 className="text-4xl title text-orange-950 font-bold mt-8">Get in Touch</h2>
            <div>
                <div className="flex items-center text-orange-950 mt-8">
                  <PhoneIcon className="h-6 w-6"/>
                  <p>+88 01533 333 333</p>
                </div>
                <div className="flex items-center text-orange-950 mt-4">
                  <EnvelopeIcon className="h-6 w-6"/>
                  <p>info@gmail.com</p>
                </div>
                <div className="flex items-center text-orange-950 my-4">
                  <MapPinIcon className="h-6 w-6"/>
                  <p>72, Wall street, King Road, Dhaka</p>
                </div>
            </div>
        <div>
        </div>
          </div>
        <div>
        <h2 className="text-4xl font-bold title text-orange-950">Connect with Us</h2>
          <div className="text-orange-950 ">
          <input type="text" placeholder="Name" className="input w-full " />
          <input type="email" placeholder="Email" className="input w-full mt-4" />
          <input type="text" placeholder="Message" className="input w-full h-[130px] mt-4" />
          </div>
          <button className="btn btn-outline hover:bg-orange-950 text-orange-950 rounded-3xl mt-6 title">Send Message</button>
        </div>
      </div>
        </div>
      <div className="h-12 footer-bg2">
        <h2 className="text-xl text-center title text-white pt-2">
          Copyright Espresso Emporium ! All Rights Reserved
        </h2>
      </div>
    </div>
  );
};

export default Footer;
