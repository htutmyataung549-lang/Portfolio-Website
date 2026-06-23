"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactInput = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000)); // Fake API Delay
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      const results = await response.json();
      // console.log("Submit clicked")
      // console.log("Form Data", data);
      if (results.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        reset();
      } else {
        console.log(results);
        toast.error(results.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-3">
            Get In Touch
          </h2>
          <p className="text-foreground/70 text-sm">
            Have a question or want to work together? Drop me a message below!
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-foreground/2 border border-foreground/10 p-8 rounded-2xl shadow-sm transition-colors duration-300"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-xl border bg-background dark:bg-zinc-900 text-foreground text-sm outline-none transition-all ${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-foreground/10 focus:border-blue-500 dark:focus:border-blue-400"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1.5 font-medium">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="alex@example.com"
                className={`w-full px-4 py-3 rounded-xl border bg-background dark:bg-zinc-900 text-foreground text-sm outline-none transition-all ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-foreground/10 focus:border-blue-500 dark:focus:border-blue-400"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1.5 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-semibold text-foreground/80 mb-2">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Hi, I'd love to talk about a project..."
                className={`w-full px-4 py-3 rounded-xl border bg-background dark:bg-zinc-900 text-foreground text-sm outline-none transition-all resize-none ${
                  errors.message
                    ? "border-red-500 focus:border-red-500"
                    : "border-foreground/10 focus:border-blue-500 dark:focus:border-blue-400"
                }`}
              />
              {errors.message && (
                <p className="text-xs text-red-500 mt-1.5 font-medium">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              aria-label="Send Message"
              disabled={isSubmitting}
              className="w-full bg-foreground text-background hover:bg-foreground/90 disabled:bg-foreground/40 font-medium text-sm py-3 px-6 rounded-xl transition shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
