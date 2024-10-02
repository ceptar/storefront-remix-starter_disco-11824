import { Link, useLoaderData } from '@remix-run/react';
import { useRootLoader } from '~/utils/use-root-loader';
import { getCollections } from '~/providers/collections/collections';
import type { LoaderFunctionArgs } from '@remix-run/server-runtime';
import React, { useState } from 'react';
import Hamburger from '~/components/svgs/Hamburger';
import AnimatedCollectionsTreemenu from './CollectionsTreemenu';
import { SearchBar } from '~/components/header/SearchBar';
import X from '../svgs/X';
import DiscoSignIn from '../svgs/DiscoSignIn';

export async function loader({ request }: LoaderFunctionArgs) {
  const collections = await getCollections(request, { take: 20 });
  return { collections };
}

type SliderexProps = {
  finalOpacity: number;
};

const Sliderex: React.FC<SliderexProps> = ({ finalOpacity }) => {
  const data = useRootLoader();
  const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
  const [isSlideoverVisible, setSlideoverVisible] = useState(false);

  const { collections } = useLoaderData<typeof loader>();

  const toggleSlideover = () => setSlideoverVisible(!isSlideoverVisible);

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={toggleSlideover}
        className="flex flex-col bg-opacity-90 cursor-pointer justify-center items-center py-2 text-sm text-discogray-500 transition-all duration-300 ease-out hover:opacity-70"
      >
        <button>
          <Hamburger className="w-9 h-9" fill={finalOpacity} />
        </button>
      </div>
      <div
        id="slideover-container"
        className={`w-full h-full fixed z-[100] inset-0 ${
          isSlideoverVisible ? '' : 'invisible'
        }`}
      >
        <div
          onClick={toggleSlideover}
          id="slideover-bg"
          className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-discogray opacity-0"
        />
        <div
          onClick={toggleSlideover}
          id="slideover"
          className={`shadow-xl shadow-discogray bg-transparent top-20 w-full md:w-[50vw] h-full absolute right-0 duration-300 ease-out transition-all ${
            isSlideoverVisible ? '' : 'translate-x-full'
          }`}
        >
          <div className="absolute justify-between items-stretch bg-discogray bg-opacity-85 backdrop-blur-md transform w-full h-full flex flex-col">
            {/* Menu */}

            <div className="flex flex-row justify-between items-center h-20 border-b border-gray-500">
              <h2 className="pl-4 text-xl font-bold tracking-[0.05em] uppercase text-white">
                Menu
                </h2>

              <div className="flex flex-row pr-4 gap-2 items-center">
                <Link
                  to={isSignedIn ? '/account' : '/sign-in'}
                  className="flex space-x-1"
                >
                  <DiscoSignIn className="w-9 h-9" fill="white" />
                </Link>
                <div
                  className="cursor-pointer text-white flex items-center justify-center"
                  onClick={toggleSlideover}
                >
                  <X className="w-9 h-9" fill="white" />
                </div>
              </div>
            </div>
            <div className="flex-grow overflow-y-auto">
              <div className="flex flex-col">
                <div className="w-full py-8">
                  <AnimatedCollectionsTreemenu
                    collectionsData={{ collections }}
                    index={0}
                  />
                </div>
              </div>
            </div>
            <div className="mb-20">
              <SearchBar />
            </div>
          </div>

          {/* Bottom section */}
        </div>
      </div>
    </div>
  );
};

export default Sliderex;
