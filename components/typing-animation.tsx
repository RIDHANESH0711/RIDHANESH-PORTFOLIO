'use client';

import { useEffect, useState } from 'react';

export function TypingAnimation({
  words,
  className = '',
}: {
  words: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setSubIndex((s) => s + (deleting ? -1 : 1));
      },
      deleting ? 45 : 90,
    );
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words]);

  return (
    <span className={className}>
      {words[index % words.length].substring(0, subIndex)}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-blink bg-current align-middle" />
    </span>
  );
}
