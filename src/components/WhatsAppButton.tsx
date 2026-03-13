import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919354129891?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20legal%20services.";

const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
  >
    <MessageCircle className="w-7 h-7 fill-white stroke-white" />
  </a>
);

export { WHATSAPP_URL };
export default WhatsAppButton;
