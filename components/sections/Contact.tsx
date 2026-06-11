'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, type Variants } from 'framer-motion';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/toast/use-toast';
import { Phone, Mail, User } from 'lucide-react';

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function Contact() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: 'Message Sent Successfully',
          description: 'Thank you. We will review your message and reply promptly.',
          variant: 'success',
        });
        reset();
      } else {
        toast({
          title: 'Submission Failed',
          description: result.error || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Network Error',
        description: 'Unable to submit the form. Please check your connection.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="pt-30 pb-12 px-6 bg-bg relative overflow-hidden flex flex-col justify-between min-h-[90vh]">
      <div className="max-w-7xl mx-auto w-full z-10 relative flex-grow">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          {/* Left Column: Heading and Co-founder Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-semibold tracking-widest text-text uppercase">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text">
                Partner With Our Search Desk
              </h2>
              <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                Connect with our search consultants to submit a hiring mandate or enquire about candidate placements.
              </p>
            </div>

            {/* Co-founder Contact details */}
            <div className="flex flex-col gap-6 border-t border-muted/10 pt-8 mt-4">
              <h3 className="text-sm font-mono text-muted uppercase tracking-wider font-semibold">
                Co-Founders & Leadership
              </h3>

              <div className="grid grid-cols-1 gap-6">
                {/* Co-founder 1 */}
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-surface border border-muted/5">
                  <div className="flex items-center gap-2 text-text font-bold font-display">
                    <User className="w-4 h-4 text-text" />
                    <span>CA Piyush Bathwal</span>
                  </div>
                  <div className="flex flex-col gap-1 pl-6 text-sm text-muted font-mono">
                    <a href="tel:+919051902574" className="hover:text-text flex items-center gap-1.5 transition-colors">
                      <Phone className="w-3.5 h-3.5" /> +91-90519-02574
                    </a>
                    <a href="mailto:piyush@finroles.com" className="hover:text-text flex items-center gap-1.5 transition-colors">
                      <Mail className="w-3.5 h-3.5" /> piyush@finroles.com
                    </a>
                  </div>
                </div>

                {/* Co-founder 2 */}
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-surface border border-muted/5">
                  <div className="flex items-center gap-2 text-text font-bold font-display">
                    <User className="w-4 h-4 text-text" />
                    <span>CA Ishant Goel</span>
                  </div>
                  <div className="flex flex-col gap-1 pl-6 text-sm text-muted font-mono">
                    <a href="tel:+919999264535" className="hover:text-text flex items-center gap-1.5 transition-colors">
                      <Phone className="w-3.5 h-3.5" /> +91-99992-64535
                    </a>
                    <a href="mailto:ishant@finroles.com" className="hover:text-text flex items-center gap-1.5 transition-colors">
                      <Mail className="w-3.5 h-3.5" /> ishant@finroles.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7 bg-surface border border-muted/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative h-fit">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono text-muted uppercase tracking-wider"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="e.g. Marcus Vance"
                  disabled={isSubmitting}
                  {...register('name')}
                />
                {errors.name && (
                  <span className="text-xs text-red-500 font-mono mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono text-muted uppercase tracking-wider"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. marcus@vantage.com"
                  disabled={isSubmitting}
                  {...register('email')}
                />
                {errors.email && (
                  <span className="text-xs text-red-500 font-mono mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-muted uppercase tracking-wider"
                >
                  Mandate Details / Query
                </label>
                <Textarea
                  id="message"
                  placeholder="Describe the role specifications, location, seniority, or talent requirements..."
                  disabled={isSubmitting}
                  {...register('message')}
                />
                {errors.message && (
                  <span className="text-xs text-red-500 font-mono mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex justify-end">
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  Submit Mandate Request
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer copyright and wordmark */}
      <div className="max-w-7xl mx-auto w-full z-10 relative border-t border-muted/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted/60">
        <span className="text-lg font-bold text-text font-display">Finroles</span>
        <span>&copy; {new Date().getFullYear()} Finroles. All rights reserved.</span>
      </div>
    </section>
  );
}
