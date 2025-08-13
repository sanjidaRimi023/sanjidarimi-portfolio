import React, { useState } from 'react';


const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
         viewBox="0 0 24 24" strokeWidth={1.5} 
         stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

export const ContactInfo = () => {
    return (
        <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 md:p-10 mb-4 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-600">
                Let’s Connect
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
                Have a project in mind or just want to say hello? I’m always open to new ideas and collaborations.
            </p>
            <div className="space-y-4">
                <a href="mailto:tumithasan1@gmail.com" 
                   className="flex items-center gap-3 text-gray-300 hover:text-rose-400 transition-colors group">
                    <Icon path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
                          className="w-6 h-6 text-rose-500 group-hover:text-rose-400 transition-colors" />
                    <span>sanjidarimi023@gmail.com</span>
                </a>
                <a href="https://wa.me/8801611960330" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-3 text-gray-300 hover:text-rose-400 transition-colors group">
                    <Icon path="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.006 3 11.55c0 2.43.99 4.625 2.603 6.22l-1.1 4.074 4.15-1.088a8.96 8.96 0 004.347.994z" 
                          className="w-6 h-6 text-rose-500 group-hover:text-rose-400 transition-colors" />
                    <span>+880 194 208 4201</span>
                </a>
            </div>
        </div>
    );
};


const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1000));

        if (window.Swal) {
            window.Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: `Thank you for reaching out, ${formData.name}. We'll get back to you soon!`,
                background: '#18181b',
                color: '#ffffff',
                confirmButtonColor: '#f43f5e',
                timer: 3000,
                timerProgressBar: true,
            });
        } else {
            alert(`Thanks for reaching out, ${formData.name}!`);
        }

        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <div className="w-full p-6 sm:p-8 md:p-10 bg-gray-900 rounded-3xl mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-600">
                Send a Message
            </h2>
            <p className="text-center text-gray-400 mb-8">
                I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="peer w-full p-4 rounded-lg bg-gray-800 border border-gray-700 placeholder-transparent outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                    />
                    <label htmlFor="name" className="absolute left-4 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-5.5 peer-focus:text-rose-400 peer-focus:text-sm">
                        Your Name
                    </label>
                </div>

                <div className="relative">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="peer w-full p-4 rounded-lg bg-gray-800 border border-gray-700 placeholder-transparent outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                    />
                    <label htmlFor="email" className="absolute left-4 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-5.5 peer-focus:text-rose-400 peer-focus:text-sm">
                        Your Email
                    </label>
                </div>

                <div className="relative">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="peer w-full p-4 rounded-lg bg-gray-800 border border-gray-700 placeholder-transparent outline-none focus:ring-2 focus:ring-rose-500 resize-none transition-all"
                    />
                    <label htmlFor="message" className="absolute left-4 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-5.5 peer-focus:text-rose-400 peer-focus:text-sm">
                        Your Message
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 disabled:bg-rose-900 disabled:cursor-not-allowed text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-rose-500 focus:ring-opacity-50"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </>
                    ) : (
                        <>
                            <Icon path="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
