'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { SectionWrapper, SectionHeading, FadeInItem } from '@/components/section-wrapper';
import { TiltCard } from '@/components/tilt-card';
import { personal } from '@/lib/data';

export function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        eyebrow="Education"
        title={<>Academic <span className="gradient-text">background</span></>}
        subtitle="My formal education in Artificial Intelligence & Data Science."
      />

      <FadeInItem>
        <div className="mx-auto max-w-3xl">
          <TiltCard className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm sm:p-10" max={4}>
            {/* Glow */}
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-purple-500/15 to-cyan-500/15 blur-3xl transition-opacity group-hover:opacity-80" />

            <div className="relative grid gap-8 md:grid-cols-3">
              {/* Left: icon + college */}
              <div className="md:col-span-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 shadow-xl shadow-purple-500/25">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{personal.college}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{personal.university}</p>
              </div>

              {/* Right: details */}
              <div className="space-y-4 md:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/50 bg-background/30 p-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Degree</p>
                    <p className="mt-1 font-medium">{personal.degree}</p>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-background/30 p-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Department</p>
                    <p className="mt-1 font-medium">{personal.department}</p>
                  </div>
                  <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Current CGPA</p>
                    <p className="mt-1 font-display text-2xl font-bold gradient-text">{personal.cgpa}</p>
                  </div>
                  <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Expected Graduation</p>
                    <p className="mt-1 font-medium">{personal.graduation}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </FadeInItem>
    </SectionWrapper>
  );
}
