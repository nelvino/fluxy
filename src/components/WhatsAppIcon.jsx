import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon96 from '../assets/mobileApp/whatsappLogo-96.svg';

// const WHATSAPP_URL = "https://wa.me/+5491136949578";
const WHATSAPP_URL = "https://wa.me/+5491133126239";

const WhatsAppIcon = () => {
  return (
    <Link to={WHATSAPP_URL} target="_blank" className="fixed bottom-5 sm:bottom-10 right-3 sm:right-10 z-50 rounded-full bg-green-500 hover:bg-green-700 shadow-md p-2 flex justify-center items-center">
      {/* <i className="fab fa-whatsapp text-white text-xl"></i> */}
      <img width={32} height={32} src={WhatsAppIcon96} />
    </Link>
  );
};

export default WhatsAppIcon;