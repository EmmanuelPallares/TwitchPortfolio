import { Box, Container, Heading } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

import { getSiteLayout } from '@/layout'
import Hero from '@/components/hero'
import * as Marketing from '@/marketing'
import Navigation from '@/components/navigation'
import SEO from '@/components/seo'

export default function PageLayout({ children, page }) {
  const pageBanner = page?.marketing?.find(
    (block) => block.__typename === 'Banner'
  )

  const pageNewsletter = page?.marketing?.find(
    (block) => block.__typename === 'Newsletter'
  )

  return (
    <>
      {page?.seo && <SEO {...page.seo} />}

      {pageBanner && <Marketing.Banner {...pageBanner} />}

      {page?.hero ? (
        <Hero {...page.hero} navigation={page.navigation} page={page} />
      ) : (
        <>
          <Navigation {...page?.navigation} />
          <Box mx="auto" pt={24} px={[4, 6, null, 8]}>
            <Box
              display={[null, 'flex']}
              flexDir={[null, 'column']}
              alignItems={[null, 'center']}
              textAlign={[null, 'center']}
            >
              <Heading
                as="h1"
                fontSize="5xl"
                lineHeight="none"
                fontWeight="extrabold"
                color="gray.900"
              >
                {page?.title}
              </Heading>
              {page?.subtitle && (
                <Container
                  mt={5}
                  p={0}
                  centerContent
                  color="gray.500"
                  lineHeight="tall"
                  fontSize="xl"
                >
                  <MDXRemote {...page.subtitle.mdx} />
                </Container>
              )}
            </Box>
          </Box>
        </>
      )}

      <div>
        {children}
        {pageNewsletter && <Marketing.NewsletterSignup {...pageNewsletter} />}
      </div>

      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          A utility-first CSS framework packed with classes like{' '}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            flex
          </code>
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            pt-4
          </code>{' '}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            text-center
          </code>{' '}
          <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
            rotate-90
          </code>{' '}
          composed to build any design, directly in your markup.
        </p>
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <a
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            href="/docs/installation"
          >
            Get started
          </a>
          <button
            type="button"
            className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="flex-none text-slate-300 dark:text-slate-400"
              aria-hidden="true"
            >
              <path d="m19 19-3.5-3.5"></path>
              <circle cx="11" cy="11" r="6"></circle>
            </svg>
            <span className="flex-auto">Quick search...</span>
            <kbd className="font-sans font-semibold dark:text-slate-500">
              <abbr
                title="Control"
                className="no-underline text-slate-300 dark:text-slate-500"
              >
                Ctrl{' '}
              </abbr>{' '}
              K
            </kbd>
          </button>
        </div>
      </div>
    </>
  )
}

export const getLayout = (page) => {
  return getSiteLayout(<PageLayout {...page.props}>{page}</PageLayout>)
}