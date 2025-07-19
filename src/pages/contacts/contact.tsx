import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Github, Linkedin, Twitter, X } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_4o1imb7";
const TEMPLATE_ID = "template_fhm7jpo";
const PUBLIC_KEY = "GslUHxARRrX43m4fr";

export const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timeout = setTimeout(() => {
        setShowModal(false);
        setSent(false);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const templateParams = {
      from_name: formData.get("from_name") as string,
      from_email: formData.get("from_email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    setSending(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSent(true);
      formRef.current.reset();
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900 text-white">
      <div className="w-full px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-6">Let's Work Together</h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            Have a project in mind? I'd love to hear about it and discuss how
            we can bring your vision to life.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-4 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all"
        >
          <div
            className={`relative bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl shadow-xl w-full max-w-md mx-4 p-6 text-white transform transition-all duration-200 ${
              isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-red-400"
            >
              <X />
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h3>

            {sent ? (
              <p className="text-center text-green-300">Your message has been sent!</p>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white text-white focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-2 bg-white text-neutral-900 rounded font-medium hover:bg-neutral-100 transition disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}

            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition"
              >
                <Github />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition"
              >
                <Linkedin />
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-300 transition"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
