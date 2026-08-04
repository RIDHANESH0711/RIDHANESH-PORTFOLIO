'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Brain, Cpu, Eye, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypingAnimation } from '@/components/typing-animation';
import { personal, typingRoles } from '@/lib/data';

const floatingIcons = [
  { Icon: Brain, delay: 0, x: '8%', y: '20%', size: 'h-14 w-14' },
  { Icon: Cpu, delay: 0.5, x: '85%', y: '15%', size: 'h-12 w-12' },
  { Icon: Eye, delay: 1, x: '15%', y: '70%', size: 'h-16 w-16' },
  { Icon: Bot, delay: 1.5, x: '80%', y: '65%', size: 'h-14 w-14' },
  { Icon: Sparkles, delay: 0.8, x: '50%', y: '10%', size: 'h-10 w-10' },
  { Icon: Brain, delay: 1.2, x: '90%', y: '45%', size: 'h-10 w-10' },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Floating AI icons */}
      {floatingIcons.map(({ Icon, delay, x, y, size }, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute -z-10"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay }}
          >
            <Icon className={`${size} text-purple-400`} />
          </motion.div>
        </motion.div>
      ))}

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-400 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m <span className="gradient-text">RIDHANESH T</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 h-8 text-lg font-medium text-muted-foreground sm:text-2xl md:h-10"
        >
          <TypingAnimation words={typingRoles} className="gradient-text-light font-display" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg text-balance"
        >
          {personal.headline}. {personal.role} at {personal.college}, passionate about
          building impactful AI products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects">
            <Button
              size="lg"
              className="group gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 text-white shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href={personal.resume} download>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-xl border-purple-500/30 bg-card/40 backdrop-blur-sm hover:bg-purple-500/10 hover:scale-105 transition-all"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </a>
          <a href="#contact">
            <Button
              size="lg"
              variant="ghost"
              className="gap-2 rounded-xl hover:scale-105 transition-all"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-purple-500" />
            {personal.location}
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            CGPA {personal.cgpa}
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1 w-1 rounded-full bg-blue-500" />
            {personal.graduation}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
