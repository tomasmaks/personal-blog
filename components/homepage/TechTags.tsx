import { map } from 'lodash';

import { TechTag } from '@/data/techTags';
import BrandIcon from '@/components/ui/BrandIcon';

interface TechTagsProps {
  groupName: string;
  tags: TechTag[];
}

const TechTags: React.FC<TechTagsProps> = ({ groupName, tags }) => {
  return (
    <div className="container py-6">
      <h3 className="mb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
        { groupName }
      </h3>
      <div className="popular-tags grid grid-cols-3 gap-4 xl:grid-cols-6">
        {map(tags, (techTag) => { // Now using the 'tags' prop
          const { slug, iconType, href, title } = techTag;
          const className = `${slug} flex sm:w-[156px] md:w-[156px] justify-center space-x-2 rounded-lg p-3`;

          return (
            <div className={className} key={slug}>
              <BrandIcon type={iconType} className="h-6 w-6" />
              <div className="my-auto text-white truncate text-xxs sm:text-sm md:text-base">{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechTags;
