// Platforms
import Android from 'public/static/icons/android.svg';
import Web from 'public/static/icons/web.svg';
import Ethereum from 'public/static/icons/ethereum.svg';
import Shopify from 'public/static/icons/shopify.svg';
import Wordpress from 'public/static/icons/wordpress.svg';

// Programming languages
import Javascript from 'public/static/icons/javascript.svg';
import Typescript from 'public/static/icons/typescript.svg';
import Java from 'public/static/icons/java.svg';
import Kotlin from 'public/static/icons/kotlin.svg';

// Frameworks
import ReactJS from 'public/static/icons/react.svg';
import VueJS from 'public/static/icons/vuejs.svg';
import NextJS from 'public/static/icons/nextjs.svg';
import NodeJS from 'public/static/icons/nodejs.svg';
import RubyOnRails from 'public/static/icons/rubyonrails.svg';

// CSS
import Tailwind from 'public/static/icons/tailwind.svg';
import Bootstrap from 'public/static/icons/bootstrap.svg';

// Databases
import Firebase from 'public/static/icons/firebase.svg';
import Postgres from 'public/static/icons/postgres.svg';

// Other Tools
import Canva from 'public/static/icons/canva.svg';
import Photoshop from 'public/static/icons/photoshop.svg';
import Autocad from 'public/static/icons/autocad.svg';
import Solidworks from 'public/static/icons/solidworks.svg';

export const BrandIconsMap = {
  Android,
  Web,
  Ethereum,
  Shopify,
  Wordpress,
  Javascript,
  Typescript,
  Java,
  Kotlin,
  ReactJS,
  VueJS,
  NextJS,
  NodeJS,
  RubyOnRails,
  Tailwind,
  Bootstrap,
  Firebase,
  Postgres,
  Canva,
  Photoshop,
  Autocad,
  Solidworks
};

export type BrandIconType = keyof typeof BrandIconsMap;

const BrandIcon = (props: { type: keyof typeof BrandIconsMap; className?: string }) => {
  const { type, className } = props;

  const Icon = BrandIconsMap[type];

  if (!Icon) {
    return <div>Missing icon for {type}.</div>;
  }

  return <Icon className={className || 'h-16 w-16 lg:h-14 lg:w-14 xl:h-20 xl:w-20'} fill="currentColor" />;
};

export default BrandIcon;
