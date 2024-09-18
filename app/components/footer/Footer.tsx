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

export default function Footer({ collections }: RootLoaderData) {
  console.log('Collections:', collections);
  const collectionTree = arrayToTree(collections);
  console.log('Collection Tree:', collectionTree);

  return (
  <footer
    className="bg-discograytwo relative overflow-x-hidden z-110"
    aria-labelledby="footer-heading"
  >

    <div className="container flex flex-col flex-wrap mx-auto md:flex-no-wrap md:flex-row md:items-center">
      <div className="flex flex-wrap flex-grow my-[2rem] md:text-left">
        <div className="w-full px-4 lg:w-1/4 md:w-1/2 mt-[2rem]">



          <h3 className="text-sm font-semibold text-discogray tracking-[0.25em] uppercase">
            Company
          </h3>
          <ul className="my-2">
            {navigation.company.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-md font-metrolight1 text-discogray hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          

        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2 mt-[2rem]">
          <h3 className="text-sm font-semibold text-discogray tracking-[0.25em] uppercase">
            Shop
          </h3>

{/* TREEMENU */}
{collectionTree.children.length > 0 ? (
    <CollectionList collections={collectionTree} />
  ) : (
    <p>No collections available</p>
  )}

        </div>
        <div className="w-full px-4 lg:w-1/4 md:w-1/2 mt-[2rem]">
          <h3 className="text-sm font-semibold text-discogray tracking-[0.25em] uppercase">
            Support
          </h3>
          <ul className="my-2">
            {navigation.support.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-md font-metrolight1 text-discogray hover:underline"
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
                fill="#000"
                className="-ml-2 mr-auto max-h-[5rem]"
              />
            </div>


        </div>
      </div>
      <div className="flex flex-row w-full px-4 mb-8 mt-8 xl:mt-0">
        <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-discogray tracking-[0.25em] uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-md font-metrolight1 text-discogray">
              Be the first to know about exclusive offers & deals.
            </p>
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
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 py-2 px-8 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-discogray border border-transparent py-2 px-4 flex items-center justify-center text-base uppercase tracking-[0.15em] text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          </div>
    </div>
  </footer>
  );
}

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