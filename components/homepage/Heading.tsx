import siteMetadata from '@/data/siteMetadata';

const Heading = () => {
  return (
    <h1 className="font-medium text-neutral-900 dark:text-neutral-200">
      {siteMetadata.myTitle}
    </h1>
  );
};

export default Heading;