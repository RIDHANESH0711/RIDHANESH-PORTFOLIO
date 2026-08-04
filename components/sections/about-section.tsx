'use client';

import { motion } from 'framer-motion';
import { Target, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import { SectionWrapper, SectionHeading, FadeInItem } from '@/components/section-wrapper';
import { AnimatedCounter } from '@/components/animated-counter';
import { TiltCard } from '@/components/tilt-card';
import { personal, stats } from '@/lib/data';

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="About Me"
        title={<>Get to <span className="gradient-text">know me</span></>}
        subtitle="Passionate about turning ideas into intelligent, real-world solutions."
      />

      <div className="grid items-center gap-10 lg:grid-cols-5">
        {/* Image placeholder */}
        <FadeInItem className="lg:col-span-2">
          <TiltCard className="relative mx-auto max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 text-5xl font-bold text-white shadow-2xl shadow-purple-500/30">
                    R
                  </div>
                  <p className="mt-6 font-display text-lg font-semibold">{personal.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">AI & DS Student</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 opacity-50 blur-2xl" />
          </TiltCard>
        </FadeInItem>

        {/* Text content */}
        <div className="space-y-6 lg:col-span-3">
          <FadeInItem>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {personal.about}
            </p>
          </FadeInItem>

          <FadeInItem>
            <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">
              <div className="flex items-start gap-3">
                <Target className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
                <div>
                  <h3 className="font-display font-semibold">Career Objective</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{personal.goal}</p>
                </div>
              </div>
            </div>
          </FadeInItem>

          <FadeInItem>
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-display font-semibold">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border/60 bg-card/50 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:border-purple-500/40 hover:text-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </FadeInItem>

          <FadeInItem>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                {personal.location}
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-cyan-400" />
                {personal.college}
              </span>
            </div>
          </FadeInItem>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <FadeInItem key={stat.label}>
            <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-purple-500/40" max={5}>
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-2xl transition-opacity group-hover:opacity-80" />
              <div className="relative">
                <p className="font-display text-3xl font-bold gradient-text sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </TiltCard>
          </FadeInItem>
        ))}
      </div>
    </SectionWrapper>
  );
}
