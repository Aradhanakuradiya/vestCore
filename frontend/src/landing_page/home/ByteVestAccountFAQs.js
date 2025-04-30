import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is VestCore?",
    answer:
      "VestCore is a cutting-edge stock trading platform designed to empower investors with the tools and resources they need to make informed decisions.",
  },
  {
    question: "How do I open an account?",
    answer:
      'Opening an account is easy! Simply visit our website, click on the "Sign Up" button, and follow the instructions. ',
  },
 
  {
    question: "Is my investment safe with VestCore?",
    answer:
      "Yes, your investments are safe with VestCore. We adhere to industry-leading security standards and employ robust measures to protect your funds and data. We are also regulated by the Securities and Exchange Board of India (SEBI).",
  },
  {
    question: "How do I deposit funds into my account?",
    answer:
      'You can deposit funds into your ByteVest account using various methods, including UPI, net banking, and debit/credit cards. Simply log in to your account, go to the "Funds" section, and choose your preferred deposit method.',
  },
  {
    question: "How do I withdraw funds from my account?",
    answer:
      'Withdrawing funds is also a straightforward process. Log in to your account, navigate to the "Funds" section, and select the "Withdraw" option. Enter the amount you wish to withdraw and confirm your request.',
  },
  {
    question: "What are the brokerage charges?",
    answer:
      "ByteVest offers a competitive and transparent pricing structure. Please visit our pricing page for detailed information on brokerage charges and other fees.",
  },
  {
    question: "What is ByteVest ?",
    answer:
      "ByteVest  is our flagship trading platform. It is a fast, reliable, and user-friendly platform available on web and mobile, designed to provide a seamless trading experience.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      'We offer multiple channels for customer support, including email, phone, and live chat. You can find our contact information on the "Contact Us" page on our website.',
  },
];

const FAQPage = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((itemIndex) => itemIndex !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-4 mt-4">
          <AnimatePresence>
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all hover:scale-[1.01] hover:border-purple-500/20 p-4 rounded-lg"
              >
                <div
                  className="flex flex-row items-center justify-between cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-gray">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-6 w-6 text-gray-400 hover:text-white" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-400 hover:text-white" />
                  )}
                </div>
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-300"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;