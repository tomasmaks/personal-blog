import clsx from 'clsx';
import siteMetadata from '@/data/siteMetadata'

const Greeting = () => {
  const className = clsx(
    'bg-gradient-to-l from-blue-800 to-primary-600',
    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-7xl md:leading-[86px]'
  );

  return (
    <div className={className}>
      {siteMetadata.welcome}
    </div>
  );
};

export default Greeting;