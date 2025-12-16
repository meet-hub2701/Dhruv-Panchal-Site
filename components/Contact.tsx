import React, { useState } from 'react';
import { Instagram, Dribbble, Figma, CheckCircle, Twitter } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form after delay if needed, or keep success message
      // setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
      <section 
        id="contact" 
        className={`relative w-full pt-12 pb-20 md:pt-20 md:pb-40 px-6 md:px-24 transition-colors duration-500 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}
      >
        <div className="flex items-center justify-center mb-16">
          <h2 className={`text-3xl font-medium tracking-wide ${isDarkMode ? 'text-white' : 'text-black'}`}>
            CONTACT
          </h2>
          <div className={`h-0.5 w-16 ml-4 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 justify-between max-w-7xl mx-auto">
          {/* Left Side */}
          <div className="lg:w-5/12">
            <h3 className="font-marker text-5xl text-primary mb-8">
              Let's Work
            </h3>
            <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              It's important to have a brand that represents you and what you stand for. 
              That's why I'm committed to helping you create a website that truly represents you, 
              resonates with your audience, and makes a real difference. Together we can create 
              a website that inspires, inspires and makes an impact. Let's do that!
            </p>
            
            <div className="flex gap-6 mt-8">
                <a href="https://x.com" className="text-primary hover:text-yellow-500 transition-colors">
                    <Twitter size={24} />
                </a>
                <a href="https://www.figma.com" className="text-primary hover:text-yellow-500 transition-colors">
                    <Figma size={24} />
                </a>
                <a href="https://www.instagram.com" className="text-primary hover:text-yellow-500 transition-colors">
                    <Instagram size={24} />
                </a>
                <a href="https://www.behance.net" className="text-primary font-bold text-sm flex items-center">
                    Bē
                </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2">
            {isSubmitted ? (
               <div className={`flex flex-col items-center justify-center h-full p-8 rounded-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                  <CheckCircle size={64} className="text-green-500 mb-4" />
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Message Sent!</h3>
                  <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-primary hover:underline"
                  >
                    Send another message
                  </button>
               </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                        <label className={`block mb-2 text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                            Name *
                        </label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Write your name here"
                            className={`w-full bg-gray-100 p-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all
                              ${errors.name ? 'ring-2 ring-red-500' : 'focus:ring-primary'}`}
                        />
                        {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
                    </div>
                    
                    <div>
                        <label className={`block mb-2 text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                            Email *
                        </label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Write your email here"
                            className={`w-full bg-gray-100 p-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all
                              ${errors.email ? 'ring-2 ring-red-500' : 'focus:ring-primary'}`}
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                    </div>

                    <div>
                        <label className={`block mb-2 text-lg font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                            Message *
                        </label>
                        <textarea 
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here"
                            className={`w-full bg-gray-100 p-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none
                              ${errors.message ? 'ring-2 ring-red-500' : 'focus:ring-primary'}`}
                        ></textarea>
                         {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message}</span>}
                    </div>

                    <div className="flex justify-end mt-4">
                        <button 
                            type="submit"
                            className="bg-primary text-white font-medium px-12 py-3 rounded-full hover:bg-yellow-500 transition-colors shadow-md"
                        >
                            Send
                        </button>
                    </div>
                </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-primary py-12 px-6 flex flex-col items-center justify-center gap-6">
        <ul className="flex gap-6 md:gap-12 flex-wrap justify-center">
            {['HOME', 'ABOUT', 'PORTFOLIO', 'RESUME', 'CONTACT'].map((item) => (
                <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-black text-sm font-medium hover:text-white transition-colors">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
        
        <h2 className="font-marker text-4xl text-black mt-4">
            Dhruv Panchal
        </h2>
        
        <p className="text-black/60 text-xs mt-4">
            Copyright by Dhruv Panchal 2023
        </p>
      </footer>
    </>
  );
};