'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionWrapper, SectionHeading, FadeInItem } from '@/components/section-wrapper';
import { personal, contactItems } from '@/lib/data';

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // EmailJS integration placeholder
    await new Promise((r) => setTimeout(r, 1200));
    toast.success('Message sent! I&apos;ll get back to you soon.');
    (e.target as HTMLFormElement).reset();
    setLoading(false);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={<>Let&apos;s <span className="gradient-text">connect</span></>}
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Contact info */}
        <div className="space-y-4 lg:col-span-2">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <FadeInItem key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/40 p-4 backdrop-blur-sm transition-all hover:border-purple-500/40 hover:scale-[1.02]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-border/50 transition-colors group-hover:from-purple-500/30 group-hover:to-cyan-500/30">
                    <Icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
                    <p className="truncate font-medium">{item.value}</p>
                  </div>
                </a>
              </FadeInItem>
            );
          })}
        </div>

        {/* Contact form */}
        <FadeInItem className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm sm:p-8"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-purple-500/15 to-cyan-500/15 blur-3xl" />

            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" name="name" placeholder="Your name" required className="rounded-xl bg-background/40" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" required className="rounded-xl bg-background/40" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" name="subject" placeholder="What's this about?" required className="rounded-xl bg-background/40" />
            </div>
            <div className="mt-4 space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="rounded-xl bg-background/40 resize-none" />
            </div>
            <div className="mt-6">
              <Button
                type="submit"
                disabled={loading}
                className="w-full gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all sm:w-auto"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </FadeInItem>
      </div>
    </SectionWrapper>
  );
}
