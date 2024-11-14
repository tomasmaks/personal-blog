import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Link from '@/components/Link'
import BrandIcon from '@/components/ui/BrandIcon'

export default function Footer() {
  return (
    <footer>
      <div className="mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="mr-1 text-gray-500 dark:text-gray-400">Build with</span>
          <div className="flex space-x-1.5">
            <Link href="https://nextjs.org">
              <BrandIcon type="NextJS" className="h-5 w-5" />
            </Link>
            <Link href="https://tailwindcss.com">
              <BrandIcon type="Tailwind" className="h-5 w-5" />
            </Link>
            <Link href="https://www.typescriptlang.org">
              <BrandIcon type="Typescript" className="h-5 w-5" />
            </Link>
          </div>
          <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
          <Link href={siteMetadata.siteRepo} className="text-gray-500 underline underline-offset-4 dark:text-gray-400">
            <span data-umami-event="view-source">View source</span>
          </Link>
        </div>
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{siteMetadata.author}</div>
        </div>
      </div>
    </footer>
  )
}
