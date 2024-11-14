import { BrandIconType } from '@/components/ui/BrandIcon';

export type TechTag = {
  iconType: BrandIconType;
  slug: string;
  title: string;
};

const platformTags: TechTag[] = [
  {
    iconType: 'Android',
    slug: 'android',
    title: 'Android',
  },
  {
    iconType: 'Web',
    slug: 'web',
    title: 'Web',
  },
  {
    iconType: 'Ethereum',
    slug: 'ethereum',
    title: 'Ethereum',
  },
  {
    iconType: 'Shopify',
    slug: 'shopify',
    title: 'Shopify',
  },
  {
    iconType: 'Wordpress',
    slug: 'wordpress',
    title: 'Wordpress',
  }
];

const languageTags: TechTag[] = [
  {
    iconType: 'Javascript',
    slug: 'javascript',
    title: 'Javascript',
  },
  {
    iconType: 'Typescript',
    slug: 'typescript',
    title: 'Typescript',
  },
  {
    iconType: 'Java',
    slug: 'java',
    title: 'Java',
  },
  {
    iconType: 'Kotlin',
    slug: 'kotlin',
    title: 'Kotlin',
  }
];

const frameworkTags: TechTag[] = [
  {
    iconType: 'ReactJS',
    slug: 'reactJS',
    title: 'ReactJS',
  },
  {
    iconType: 'VueJS',
    slug: 'vueJS',
    title: 'VueJS',
  },
  {
    iconType: 'NextJS',
    slug: 'nextJS',
    title: 'NextJS',
  },
  {
    iconType: 'NodeJS',
    slug: 'nodeJS',
    title: 'NodeJS',
  },
  {
    iconType: 'RubyOnRails',
    slug: 'rubyOnRails',
    title: 'Ruby On Rails',
  }
];

const cssTags: TechTag[] = [
  {
    iconType: 'Tailwind',
    slug: 'tailwindCSS',
    title: 'TailwindCSS',
  },
  {
    iconType: 'Bootstrap',
    slug: 'bootstrap',
    title: 'Bootstrap',
  }
];

const databaseTags: TechTag[] = [
  {
    iconType: 'Firebase',
    slug: 'firebase',
    title: 'Firebase',
  },
  {
    iconType: 'Postgres',
    slug: 'postgres',
    title: 'Postgres',
  }
];

const toolTags: TechTag[] = [
  {
    iconType: 'Canva',
    slug: 'canva',
    title: 'Canva',
  },
  {
    iconType: 'Photoshop',
    slug: 'photoshop',
    title: 'Photoshop',
  },
  {
    iconType: 'Autocad',
    slug: 'autocad',
    title: 'Autocad',
  },
  {
    iconType: 'Solidworks',
    slug: 'solidworks',
    title: 'Solidworks',
  }
];

export {platformTags, languageTags, frameworkTags, cssTags, databaseTags, toolTags};
