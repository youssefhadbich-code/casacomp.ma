import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+212668281346';
  const message = 'Hello! I would like to request a FREE CONSULTATION.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center gap-3 font-medium"
    >
      <MessageCircle className="w-6 h-6" />
      <span>
        FREE CONSULTATION
      </span>
    </a>
  );
};

export default WhatsAppButton;