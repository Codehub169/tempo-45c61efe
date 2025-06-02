import { useState } from 'react';
import { motion } from 'framer-motion';

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' }); // type: 'success' | 'error' | ''
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: result.message || 'Your message has been sent! Thank you.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    }
    setIsLoading(false);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="bg-hueneu-neutral-white p-8 md:p-10 rounded-lg shadow-lg w-full max-w-lg mx-auto text-left space-y-6 relative"
      variants={formVariants} // This will be triggered by parent's whileInView if ContactSection manages variants for its children
      // If ContactForm is animated independently: initial="hidden" animate="visible" 
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-hueneu-neutral-dark font-body mb-1">Your Name</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          required 
          className="mt-1 block w-full px-4 py-3 bg-hueneu-neutral-lightest border border-hueneu-neutral-light rounded-md shadow-sm focus:ring-hueneu-primary focus:border-hueneu-primary font-body sm:text-sm transition-colors duration-300"
          placeholder="What should we call you?"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-hueneu-neutral-dark font-body mb-1">Your Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          required 
          className="mt-1 block w-full px-4 py-3 bg-hueneu-neutral-lightest border border-hueneu-neutral-light rounded-md shadow-sm focus:ring-hueneu-primary focus:border-hueneu-primary font-body sm:text-sm transition-colors duration-300"
          placeholder="Where can we reach you?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-hueneu-neutral-dark font-body mb-1">Your Story / Idea</label>
        <textarea 
          name="message" 
          id="message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-3 bg-hueneu-neutral-lightest border border-hueneu-neutral-light rounded-md shadow-sm focus:ring-hueneu-primary focus:border-hueneu-primary font-body sm:text-sm transition-colors duration-300"
          placeholder="Tell us about your vision..."
        ></textarea>
      </div>
      <div className="text-center">
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full md:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-hueneu-neutral-lightest bg-hueneu-accent hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hueneu-accent transition-opacity duration-300 font-body disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Let’s design your story'}
        </button>
      </div>
      {status.message && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className={`mt-4 text-sm text-center font-body ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
        >
          {status.message}
        </motion.p>
      )}
    </motion.form>
  );
};

export default ContactForm;
