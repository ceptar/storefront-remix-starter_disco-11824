import React, { useState } from 'react';
import type { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';
import { arrayToTree, TreeNode, RootNode } from '~/utils/array-to-tree';
import LogoTwoLines from '~/components/svgs/LogoTwoLines'

const navigation = {
  support: [
    { name: 'Help', href: '#' },
    { name: 'Track order', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Corporate responsibility', href: '#' },
    { name: 'Press', href: '#' },
  ],
};

export default function Footer() {

  return (
<div className="relative text-white w-full h-full">
  {/* Gradient background */}
  <div className="absolute inset-0 bg-discogray"></div>
  <div className="absolute inset-0">
    <svg width="100%" height="100%" className="mix-blend-overlay">
      <pattern id="pattern-disco" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <path 
d="M13.8183 1.16319C13.836 1.06857 13.9186 1 14.0148 1H16.2754C16.4243 1 16.521 1.1569 16.4541 1.28991L15.2531 3.67615C15.2126 3.75714 15.2715 3.85238 15.3621 3.85238H17.2223C17.3161 3.85238 17.3747 3.95402 17.3277 4.03523L14.6432 8.63059C14.5522 8.78635 14.3236 8.77539 14.2479 8.61164V8.61164C14.2267 8.56557 14.2217 8.51363 14.2339 8.46437L14.8898 5.81695C14.9088 5.74013 14.8507 5.66584 14.7715 5.66584H13.1218C13.0456 5.66584 12.9881 5.59656 13.0021 5.52161L13.8183 1.16319Z"
fill="white"/>
<path 
d="M3.81827 11.1632C3.83598 11.0686 3.91859 11 4.01485 11H6.27544C6.42434 11 6.52103 11.1569 6.45408 11.2899L5.25308 13.6762C5.21265 13.7571 5.27155 13.8524 5.36206 13.8524H7.22228C7.31612 13.8524 7.37471 13.954 7.3277 14.0352L4.6432 18.6306C4.55221 18.7864 4.32361 18.7754 4.24794 18.6116V18.6116C4.22665 18.5656 4.2217 18.5136 4.2339 18.4644L4.88978 15.817C4.9088 15.7401 4.85068 15.6658 4.77153 15.6658H3.12185C3.04559 15.6658 2.98808 15.5966 3.00212 15.5216L3.81827 11.1632Z"
fill="white"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#pattern-disco)" />
    </svg>
  </div>
  <footer
    className="w-full h-full relative overflow-x-hidden z-110"
    aria-labelledby="footer-heading"
  >

    <div className="container flex flex-col flex-wrap mx-auto md:flex-no-wrap md:flex-row md:items-center">
      <div className="flex flex-wrap flex-grow my-[2rem] md:text-left">
        <div className="w-full px-4 lg:w-1/4 md:w-1/2 mt-[2rem]">



          <h3 className="text-sm font-semibold tracking-[0.25em] uppercase">
            Company
          </h3>
          <ul className="my-2">
            {navigation.company.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-md font-metrolight1  hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          

        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2 mt-[2rem]">
          <h3 className="text-sm font-semibold  tracking-[0.25em] uppercase">
            Shop
          </h3>
{/* 

{collectionTree.children.length > 0 ? (
    <CollectionList collections={collectionTree} />
  ) : (
    <p>No collections available</p>
  )}
 */}
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2 mt-[2rem]">
          <h3 className="text-sm font-semibold  tracking-[0.25em] uppercase">
            Support
          </h3>
          <ul className="my-2">
            {navigation.support.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-md font-metrolight1  hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>{" "}
        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2 mt-[2rem]">

        <div className="mx-auto">
              <LogoTwoLines
                fill="#fff"
                className="-ml-2 mr-auto max-h-[5rem]"
              />
            </div>


        </div>
      </div>
      {/* <div className="flex flex-row w-full px-4 mb-8 mt-8 xl:mt-0">
        <div className="flex flex-col">
            <h3 className="text-sm font-semibold  tracking-[0.25em] uppercase">
              Subscribe to our newsletter
            </h3>
            <span className="mt-4 text-md font-metrolight1 ">
              Be the first to know about exclusive offers & deals.
            </span>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none w-full bg-white border border-gray-300 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-discoyellow-200 border border-transparent py-2 px-6 flex items-center justify-center tracking-[0.25em] text-sm uppercase text-discogray hover:bg-discoyellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          </div> */}
    </div>
  </footer>
  </div>
  );
}
/* 
function CollectionList({ collections }: { collections: RootNode<any> }) {
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  if (!collections || !collections.children || collections.children.length === 0) {
    return <p>No collections available</p>;
  }

  return (
    <ul className="my-2">
      {collections.children.map((child) => (
        <li key={child.id}>
          <button
            onClick={() => toggleAccordion(child.id)}
            className="flex items-center justify-between w-full text-left"
          >
            <span>{child.name}</span>
            <span>{openAccordions.includes(child.id) ? '▲' : '▼'}</span>
          </button>
          {openAccordions.includes(child.id) && child.children.length > 0 && (
            <ul className="pl-4 my-2">
              {child.children.map((subChild) => (
                <li key={subChild.id}>
                  <a href={subChild.slug} className="hover:underline">{subChild.name}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
 */