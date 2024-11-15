import Image from './Image'
import Link from './Link'
import BrandIcon from '@/components/ui/BrandIcon'

const Card = ({ data }) => {
  let { title, description, imgSrc, href, stack, notes } = data
  return (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}

      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div className="mt-3 mb-3">
          <div className="flex h-6 flex-wrap items-center gap-1.5">
            <a className="text-l text-white mr-2">Stack:</a>
            {stack?.map((s) => (
              <div key={s} className="relative group">
                <BrandIcon type={s} className="h-6 w-6" />
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex items-center justify-center bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg">
                  {s}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>

        {notes && (
          <div className="mb-4">
            <a className="text-l text-white mr-2">Lessons:</a>
            <a className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{notes}</a>
          </div>
        )}

        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>)
}

export default Card
