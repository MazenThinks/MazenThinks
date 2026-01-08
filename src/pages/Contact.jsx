import { useState } from 'react';
import { useToast } from '../contexts/ToastContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { showToast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send email using EmailJS
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'mazenmagdy190.mm@gmail.com',
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            showToast('Failed to send message. Please try emailing me directly.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            label: 'Email',
            value: 'mazenmagdy190.mm@gmail.com',
            href: 'mailto:mazenmagdy190.mm@gmail.com',
        },
        {
            label: 'LinkedIn',
            value: 'linkedin.com/in/mazenmagdyy',
            href: 'https://www.linkedin.com/in/mazenmagdyy/',
        },
        {
            label: 'GitHub',
            value: 'github.com/MazenThinks',
            href: 'https://github.com/MazenThinks',
        },
        {
            label: 'Discord',
            value: 'mazenmagdy101',
            href: null,
        },
    ];

    return (
        <div className="bg-white dark:bg-neutral-950 transition-colors duration-600 min-h-screen animate-page-enter">
            {/* Header */}
            <section className="pt-32 pb-16">
                <div className="container-custom">
                    <h1 className="heading-lg text-neutral-900 dark:text-white mb-4 transition-colors duration-600">Let's Connect</h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl transition-colors duration-600">
                        Have a project in mind or just want to chat? I'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="pb-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 transition-colors duration-600">Get in Touch</h2>
                            <div className="space-y-6">
                                {contactInfo.map((item) => (
                                    <div key={item.label}>
                                        <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1 transition-colors duration-600">
                                            {item.label}
                                        </div>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="text-lg text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="text-lg text-neutral-500 dark:text-neutral-500">
                                                {item.value}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl transition-colors duration-600">
                                <p className="text-neutral-600 dark:text-neutral-400 transition-colors duration-600">
                                    Typically responds within 24 hours. For urgent inquiries,
                                    please reach out via email directly.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 transition-colors duration-600">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:border-transparent transition-all text-neutral-900 dark:text-white"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 transition-colors duration-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:border-transparent transition-all text-neutral-900 dark:text-white"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 transition-colors duration-600">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white focus:border-transparent transition-all resize-none text-neutral-900 dark:text-white"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
