import { useState } from 'react';

/**
 * Form submissions — configure ONE of the following before going live:
 *
 * 1) Formspree (current wiring): Create a form at https://formspree.io → copy the form id from the
 *    endpoint URL (…/f/xxxxxxxx) → set FORMSPREE_FORM_ID below (or set VITE_FORMSPREE_ID in `.env` and use import.meta.env.VITE_FORMSPREE_ID).
 *
 * 2) Netlify Forms: Deploy the site on Netlify, replace this component’s `<form>` with a static POST form:
 *    add `data-netlify="true"` `name="contact"` and `<input type="hidden" name="form-name" value="contact" />`,
 *    set `action="/"` (or your thank-you path) and `method="POST"`, and remove the fetch-based handler (or keep a honeypot as Netlify docs suggest).
 */
const FORMSPREE_FORM_ID =
    import.meta.env.VITE_FORMSPREE_ID && import.meta.env.VITE_FORMSPREE_ID !== ''
        ? import.meta.env.VITE_FORMSPREE_ID
        : 'YOUR_FORM_ID';

const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('idle');

    const onFieldChange = (setter) => (e) => {
        setter(e.target.value);
        setStatus((s) => (s === 'sending' ? s : 'idle'));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (FORMSPREE_FORM_ID === 'YOUR_FORM_ID') {
            setStatus('config');
            return;
        }
        setStatus('sending');
        try {
            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    _replyto: email,
                }),
            });
            const data = await res.json().catch(() => ({}));
            if (res.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
                console.warn('Formspree error', data);
            }
        } catch (err) {
            setStatus('error');
            console.warn(err);
        }
    };

    return (
        <div className="card-surface p-6 sm:p-8 border-slate-700/80">
            <h3 className="font-display font-semibold text-white text-lg">Send a message</h3>
            <p className="mt-1 text-sm text-slate-500">I will respond as soon as I can.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                        Name
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={onFieldChange(setName)}
                        className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                        Email
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={onFieldChange(setEmail)}
                        className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50"
                        placeholder="you@company.com"
                    />
                </div>
                <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                        Message
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={message}
                        onChange={onFieldChange(setMessage)}
                        className="w-full resize-y rounded-lg border border-slate-600 bg-slate-900/50 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/50"
                        placeholder="How can I help?"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="mt-2 w-full sm:w-auto min-w-[10rem] inline-flex items-center justify-center rounded-lg bg-accent-blue px-8 py-3 text-sm font-semibold text-white shadow-md shadow-accent-blue/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-accent-blue/45 disabled:opacity-60 disabled:pointer-events-none"
                >
                    {status === 'sending' ? 'Sending…' : 'Send'}
                </button>

                {status === 'success' && (
                    <p className="text-sm text-emerald-400" role="status">
                        Thanks — your message was sent.
                    </p>
                )}
                {status === 'error' && (
                    <p className="text-sm text-red-400" role="alert">
                        Something went wrong. Try again or email me directly.
                    </p>
                )}
                {status === 'config' && (
                    <p className="text-sm text-amber-400/90" role="status">
                        Set your Formspree form id in <code className="text-amber-200/90">VITE_FORMSPREE_ID</code> or in{' '}
                        <code className="text-amber-200/90">ContactForm.jsx</code> before sending.
                    </p>
                )}
            </form>
        </div>
    );
}
