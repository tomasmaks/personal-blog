import { workData, sideProjectData } from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            This is a list of startups and projects I've worked at, as well as startups I attempted to build as side projects.
          </p>
        </div>

        <div className="container py-12">
          <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Work
          </h3>
          <div className="-m-4 flex flex-wrap">
            {workData.map((data) => (
              <Card key={data.title} data={data} />
            ))}
          </div>
        </div>

        <div className="container py-12">
          <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          My Startups
          </h3>
          <div className="-m-4 flex flex-wrap">
            {sideProjectData.map((data) => (
              <Card key={data.title} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
