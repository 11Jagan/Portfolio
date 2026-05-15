import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
} from 'lucide-react';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);

  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handle = (e) => {
    setData((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setError('');

    try {
      await emailjs.send(
        'service_13olgoc',
        'template_4mxu73l',
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Jagan',
          time: new Date().toLocaleString(),
        },
        'WC7k56CKd8qyOlqoK'
      );

      setSubmitted(true);

      setData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    } catch (err) {
      setError(
        'Could not send. Please try again or email me directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    'w-full bg-transparent border-0 border-b border-[var(--border)] focus:border-brand focus:outline-none py-4 font-sans text-lg text-[var(--fg)] placeholder:text-[var(--muted)] transition-colors';

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 sm:py-32 lg:py-40 bg-[var(--surface)] border-t border-[var(--border)]"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-24">
          <div className="col-span-12 lg:col-span-8">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
              <span className="text-brand">[ 06 ]</span>
              &nbsp; Contact
            </div>

            <h2 className="font-display font-black uppercase text-5xl sm:text-7xl lg:text-9xl leading-[0.85] tracking-normal">
              Let&rsquo;s build
              <br />

              <span className="font-serif italic font-normal lowercase text-[var(--muted-fg)]">
                something
              </span>{' '}
              <span className="text-brand">together.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-5"
          >
            {/* Email */}
            <div className="border-t border-[var(--border)] pt-8">
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-2">
                Email · Primary
              </div>

              <a
                data-testid="contact-email-link"
                href="mailto:konthamjaganmohanreddy@gmail.com"
                className="font-display font-bold text-2xl sm:text-3xl break-words link-underline hover:text-brand transition-colors"
              >
                konthamjaganmohanreddy@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="border-t border-[var(--border)] pt-8 mt-12">
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-2">
                Phone · WhatsApp
              </div>

              <a
                data-testid="contact-phone-link"
                href="tel:+918050453043"
                className="font-display font-bold text-2xl sm:text-3xl link-underline hover:text-brand transition-colors"
              >
                +91 80504 53043
              </a>
            </div>

            {/* Socials */}
            <div className="border-t border-[var(--border)] pt-8 mt-12">
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
                Elsewhere
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    I: Github,
                    l: 'GitHub',
                    u: 'https://github.com/11Jagan',
                  },
                  {
                    I: Linkedin,
                    l: 'LinkedIn',
                    u: 'https://www.linkedin.com/in/jagan-mohan-reddy-kontham-445250293',
                  },
                  {
                    I: Instagram,
                    l: 'Instagram',
                    u: 'https://www.instagram.com/11_jagan_/',
                  },
                  {
                    I: Mail,
                    l: 'Mail',
                    u: 'mailto:konthamjaganmohanreddy@gmail.com',
                  },
                ].map(({ I, l, u }, i) => (
                  <a
                    key={i}
                    data-testid={`contact-social-${l.toLowerCase()}`}
                    href={u}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 border border-[var(--border)] px-4 py-3 font-mono text-[11px] tracking-[0.2em] uppercase hover:border-brand hover:text-brand transition-colors"
                  >
                    <I size={14} />
                    {l}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="border-t border-[var(--border)] pt-8 mt-12 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--muted)]">
              <div className="mb-1">
                <span className="text-brand">●</span>
                &nbsp; Available · Jan — Mar 2026
              </div>

              <div>
                Based in India · Working IST / Open to remote
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="col-span-12 lg:col-span-6 lg:col-start-7"
          >
            <form
              ref={formRef}
              onSubmit={onSubmit}
              data-testid="contact-form"
              className="space-y-2"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]"
                >
                  01 · Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  data-testid="contact-input-name"
                  value={data.name}
                  onChange={handle}
                  className={inputCls}
                  placeholder="Jane Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]"
                >
                  02 · Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  data-testid="contact-input-email"
                  value={data.email}
                  onChange={handle}
                  className={inputCls}
                  placeholder="jane@studio.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]"
                >
                  03 · Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  required
                  data-testid="contact-input-subject"
                  value={data.subject}
                  onChange={handle}
                  className={inputCls}
                  placeholder="A new SaaS dashboard, etc."
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]"
                >
                  04 · Tell me about it
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  data-testid="contact-input-message"
                  value={data.message}
                  onChange={handle}
                  className={`${inputCls} resize-none`}
                  placeholder="Scope, timeline, ambitions…"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="mt-4 border border-brand text-brand p-4 font-mono text-xs tracking-[0.15em] uppercase">
                  {error}
                </div>
              )}

              {/* Success */}
              {submitted && (
                <div className="mt-4 border border-[var(--fg)] p-4 font-mono text-xs tracking-[0.15em] uppercase">
                  ✓ Message Sent — I&rsquo;ll get back to you within 24 hours.
                </div>
              )}

              {/* Submit */}
              <div className="pt-8">
                <button
                  type="submit"
                  data-testid="contact-submit-button"
                  disabled={submitting}
                  className="group inline-flex items-center justify-between gap-6 bg-[var(--fg)] text-[var(--bg)] px-8 py-5 font-mono text-xs tracking-[0.25em] uppercase hover:bg-brand hover:text-white transition-colors w-full sm:w-auto disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send Message'}

                  <ArrowUpRight
                    size={18}
                    className="group-hover:rotate-45 transition-transform duration-300"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;