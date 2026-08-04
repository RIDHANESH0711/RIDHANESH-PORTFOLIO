'use client';

import { motion } from 'framer-motion';
import { SectionWrapper, SectionHeading, FadeInItem } from '@/components/section-wrapper';
import { TiltCard } from '@/components/tilt-card';
import { skillCategories } from '@/lib/data';

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills"
        title={<>My <span className="gradient-text">technical arsenal</span></>}
        subtitle="Technologies and tools I work with to bring ideas to life."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <FadeInItem key={cat.title}>
              <TiltCard
                className="group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-purple-500/40"
                max={6}
              >
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${cat.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />

                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-background/40 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:scale-105 hover:border-purple-500/40 hover:text-foreground"
                        >
                          <SkillIcon style={{ color: skill.color }} className="h-4 w-4" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </TiltCard>
            </FadeInItem>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
