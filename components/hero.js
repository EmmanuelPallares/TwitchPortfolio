import { Box, Heading, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'

import Button from '@/components/button'
import Navigation from '@/components/navigation'

export default function Hero({ buttons, image, navigation, page }) {
  return (
    <>
      <Box position="relative" bg="gray.50">
        <Navigation {...navigation} />
        <div class="bg-[url('https://cdn.tuk.dev/assets/pink-bg-gradient.jpg')] xl:flex items-center justify-center w-full relative">
          <div class="xl:w-[843px] flex flex-col xl:items-start items-center flex-shrink-0">
            <h1 class="w-full newTemplate xl:leading-tight lg:leading-tight md:leading-tight leading-tight text-center font-black text-gray-900 dark:text-gray-50 uppercase 2xl:leading-tight 2xl:text-7xl lg:text-6xl md:text-5xl text-3xl flex flex-col ">
              Software Developer <span></span>
              <span>
                <span class="template-react bg-clip-text t-f-c ">
                  Solutions,
                </span>{' '}
                <span class="template-angular bg-clip-text t-f-c pr-1 ">
                  Tools,
                </span>
                <span class="template-vue bg-clip-text t-f-c ">Empowers</span>
              </span>
            </h1>
            <div class="flex items-center justify-center md:hidden border rounded-lg border-gray-600 dark:border-gray-600 gap-x-8 px-7 py-3 mt-6">
              <svg
                width="22"
                height="25"
                viewBox="0 0 22 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M0.871094 0.719299L2.72516 21.4459L11.0445 24.1794L19.417 21.4459L21.2711 0.719299H0.871094ZM17.2442 7.41696H7.47984L7.69766 10.0039H17.0264L16.3039 17.775L11.103 19.1889V19.2046H11.0445L5.80109 17.775L5.48234 13.8057H8.01641L8.20234 15.8008L11.0445 16.5601L13.8973 15.8008L14.2161 12.5436H5.34953L4.66953 4.91908H17.478L17.2442 7.41696Z"
                    fill="#9CA3AF"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="20.4"
                      height="23.913"
                      fill="white"
                      transform="translate(0.871094 0.492859)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7142 0.734314L23.0071 4.74398L21.2852 19.6111L11.7142 24.8889L2.14324 19.6111L0.421387 4.74398L11.7142 0.734314ZM11.7142 3.4034L4.65439 19.1643H7.28696L8.70646 15.6377H14.6977L16.1185 19.1643H18.7498L11.7142 3.4034ZM13.7761 13.4638H9.65239L11.7142 8.52417L13.7761 13.4638Z"
                  fill="#9CA3AF"
                ></path>
              </svg>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9718 16.9323C15.3216 17.8519 14.613 18.7292 13.8504 19.5591C15.8807 21.5192 17.7702 22.4371 18.8169 21.8344C19.866 21.233 20.0105 19.1472 19.3196 16.419C18.2838 16.6484 17.1582 16.8224 15.9718 16.9323ZM14.3811 17.0373C13.4602 17.0752 12.5382 17.0752 11.6174 17.0373C12.0752 17.6315 12.5378 18.1823 12.9992 18.6847C13.4607 18.1823 13.9221 17.6315 14.3811 17.0373ZM20.5011 7.50351C23.7372 8.42622 25.85 9.96004 25.85 11.8115C25.85 13.6629 23.7372 15.1968 20.5011 16.1195C21.3147 19.3682 21.0366 21.9552 19.4252 22.8803C17.8127 23.8067 15.4205 22.7535 12.9992 20.4286C10.5779 22.7535 8.18579 23.8067 6.57322 22.8803C4.96187 21.9552 4.68258 19.3682 5.49737 16.1195C2.26129 15.1968 0.148438 13.6629 0.148438 11.8115C0.148438 9.96004 2.26129 8.42622 5.49737 7.50351C4.68379 4.25472 4.96187 1.66776 6.57322 0.742644C8.18579 -0.183684 10.5779 0.869455 12.9992 3.19433C15.4205 0.869455 17.8127 -0.183684 19.4252 0.742644C21.0366 1.66776 21.3159 4.25472 20.5011 7.50351ZM19.3196 7.204C20.0117 4.47453 19.866 2.38999 18.8181 1.78854C17.7702 1.18588 15.8807 2.10376 13.8517 4.0639C14.5693 4.84047 15.2833 5.72332 15.9718 6.69071C17.1594 6.79941 18.2838 6.97332 19.3196 7.204ZM6.67887 16.419C5.98672 19.1484 6.13244 21.233 7.18037 21.8344C8.2283 22.4371 10.1177 21.5192 12.1468 19.5591C11.3846 18.7292 10.6765 17.8518 10.0267 16.9323C8.90088 16.8322 7.78268 16.6607 6.67887 16.419ZM11.6174 6.58564C12.5382 6.54772 13.4602 6.54772 14.3811 6.58564C13.9446 6.01736 13.4835 5.46813 12.9992 4.9395C12.5378 5.44192 12.0764 5.99264 11.6174 6.58685V6.58564ZM10.0267 6.69071C10.6773 5.77108 11.3862 4.89369 12.1492 4.0639C10.1177 2.10376 8.22708 1.18588 7.18158 1.78854C6.13244 2.38999 5.98794 4.47574 6.67887 7.204C7.71465 6.97453 8.84029 6.80062 10.0267 6.69071ZM15.2991 15.7728C16.1635 14.5112 16.9318 13.1871 17.5977 11.8115C16.9318 10.4359 16.1635 9.11178 15.2991 7.85013C13.768 7.73612 12.2305 7.73612 10.6994 7.85013C9.83499 9.11178 9.06663 10.4359 8.40072 11.8115C9.06663 13.1871 9.83499 14.5112 10.6994 15.7728C12.2305 15.8869 13.768 15.8869 15.2991 15.7728ZM16.8582 15.6146C17.605 15.518 18.3154 15.3936 18.9832 15.2475C18.7648 14.566 18.5169 13.8943 18.2401 13.2342C17.8126 14.0459 17.3516 14.8396 16.8582 15.6134V15.6146ZM9.14022 8.00714C8.39344 8.10376 7.68308 8.22815 7.01522 8.37429C7.22165 9.02163 7.46937 9.69554 7.75837 10.3876C8.18581 9.57589 8.64682 8.78213 9.14022 8.00835V8.00714ZM7.01522 15.2463C7.68308 15.3924 8.39344 15.5156 9.14022 15.6134C8.64682 14.8396 8.18581 14.0459 7.75837 13.2342C7.46937 13.925 7.22165 14.5989 7.01522 15.2463ZM5.82765 14.9504C6.14458 13.9431 6.55622 12.8876 7.05408 11.8103C6.55622 10.733 6.14458 9.67743 5.82765 8.67018C3.10522 9.4395 1.36272 10.6074 1.36272 11.8103C1.36272 13.0132 3.10522 14.1811 5.82765 14.9504ZM18.9832 8.37429C18.3154 8.22815 17.605 8.10496 16.8582 8.00714C17.3516 8.78092 17.8126 9.57468 18.2401 10.3864C18.5291 9.69554 18.7768 9.02163 18.9832 8.37429ZM20.1708 8.67018C19.8539 9.67743 19.4422 10.733 18.9444 11.8103C19.4422 12.8876 19.8539 13.9431 20.1708 14.9504C22.8932 14.1811 24.6357 13.0132 24.6357 11.8103C24.6357 10.6074 22.8932 9.4395 20.1708 8.67018ZM12.9992 14.082C12.6994 14.082 12.4026 14.0233 12.1256 13.9092C11.8486 13.7951 11.597 13.6278 11.385 13.417C11.173 13.2062 11.0049 12.9559 10.8901 12.6804C10.7754 12.4049 10.7164 12.1097 10.7164 11.8115C10.7164 11.5133 10.7754 11.2181 10.8901 10.9426C11.0049 10.6671 11.173 10.4168 11.385 10.206C11.597 9.99514 11.8486 9.82789 12.1256 9.71379C12.4026 9.59968 12.6994 9.54095 12.9992 9.54095C13.6047 9.54095 14.1853 9.78017 14.6134 10.206C15.0416 10.6318 15.2821 11.2093 15.2821 11.8115C15.2821 12.4137 15.0416 12.9912 14.6134 13.417C14.1853 13.8428 13.6047 14.082 12.9992 14.082Z"
                  fill="#9CA3AF"
                ></path>
              </svg>
              <svg
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.927734 0.942017H5.78488L14.2849 15.4348L22.7849 0.942017H27.642L14.2849 23.8889L0.927734 0.942017ZM11.4519 0.942017L14.2849 5.77293L17.1178 0.942017H22.0174L14.2849 14.227L6.55231 0.942017H11.4519Z"
                  fill="#9CA3AF"
                ></path>
              </svg>
            </div>
            <p class="md:text-lg text-base font-regular md:leading-7 leading-6  w-10/12 md:w-full mt-8 text-center dark:text-gray-400 ">
              Browse through the site <br class="md:block hidden" /> my work,
              and everything in which I can provide you
            </p>
            <div class="w-full flex justify-center">
              <a href="#templateStart">
                <button class="w-14 h-14 templateDetialsbtn rounded-full flex items-center justify-center mt-10">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5.83331V22.1666"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M21 15.1667L14 22.1667"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7 15.1667L14 22.1667"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <Box as="main" position={{ lg: 'relative' }}>
          <Box
            mx="auto"
            maxW="7xl"
            w="full"
            py={{ lg: 48 }}
            pt={16}
            pb={20}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Box px={[4, 8]} pr={{ xl: 16 }} width={{ lg: '50%' }}>
              <Heading
                as="h1"
                fontSize={['4xl', '5xl', '6xl', '5xl', '6xl']}
                letterSpacing="tight"
                lineHeight="1"
                fontWeight="extrabold"
                color="gray.900"
              >
                {page.title}
              </Heading>
              {page.subtitle && (
                <Box
                  className="prose prose-lg sm:prose-xl"
                  mt={[3, null, 5]}
                  w="full"
                  maxW={['md', null, '3xl']}
                  mx="auto"
                >
                  <MDXRemote {...page.subtitle.mdx} />
                </Box>
              )}
              {buttons && (
                <Stack
                  mt={10}
                  direction={['column', 'row']}
                  display={{ sm: 'flex' }}
                  justifyContent={{ sm: 'center', lg: 'flex-start' }}
                  spacing={[3, 0]}
                >
                  {buttons.map((button) => (
                    <Box
                      key={button.id}
                      sx={{
                        ':nth-of-type(even)': {
                          mx: [0, 3]
                        }
                      }}
                    >
                      <Button {...button} />
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>
          </Box>
        </Box> */}
      </Box>

      <div class="py-12 bg-white" id="templateStart">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              web-develop
            </h2>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The Web Reinvented
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Increase the engagement of your website with powerful technology,
              add practical daily features, and make your website you righthand.
            </p>
          </div>

          <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Competitive exchange rates
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    No hidden fees
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Transfers are instant
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Mobile notifications
                  </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}
