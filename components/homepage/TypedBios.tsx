import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/ui/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I live in a small European country called Lithuania.
        </li>
        <li>
          My favorite startup categories are print-on-demand, e-commerce and marketplaces.
        </li>
        <li>
          I spend ~10 hours/week reading about startups from the best entrepreneurs in Silicon Valley.
        </li>
        <li>
          As a 202cm person, I used to play basketball a lot.
        </li>
        <li>My current tech stack is Javacript, Typescript, Next.js, React.js and Tailwind CSS </li>
      </ul>
      <span ref={el} className="text-primary-500" />
    </div>
  );
};

export default TypedBios;
