'use client';

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

import Greeting from '@/components/homepage/Greetings';
import Avatar from '@/components/homepage/Avatar';
import Heading from '@/components/homepage/Heading';
import TypedBios from '@/components/homepage/TypedBios';
import ShortDescription from '@/components/homepage/ShortDescription';

import TechTags from '@/components/homepage/TechTags';
import { platformTags, languageTags, frameworkTags, cssTags, databaseTags, toolTags } from '@/data/techTags';

import Snowfall from 'react-snowfall';

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <Snowfall
        snowflakeCount={60}
        color={'#dee4fd'}
        style={{
          zIndex: -1,
          width: '100vw',
          height: '100vh',
          position: 'fixed'
        }}
      />

      {/* Introduce myself */}
      <div className="mt-8 dark:divide-gray-700 md:mt-8">
        <Greeting />

        <div className="flex flex-col justify-between md:my-4 md:pb-8 xl:flex-row gap-9">
          <Avatar />
          <div className="my-auto flex flex-col text-lg leading-8 text-gray-600 dark:text-gray-400">
            <Heading />
            <TypedBios />
            <ShortDescription />
          </div>
        </div>

      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 py-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Tech Stack I've worked with
          </h1>
        </div>
        <TechTags groupName="Platforms" tags={platformTags} />
        <TechTags groupName="Programming languages" tags={languageTags} />
        <TechTags groupName="Frameworks" tags={frameworkTags} />
        <TechTags groupName="CSS" tags={cssTags} />
        <TechTags groupName="Databases" tags={databaseTags} />
        <TechTags groupName="Other Tools" tags={toolTags} />
      </div>

      {/* List all post */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700 sm:mt-4 md:mt-12">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blog posts
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
