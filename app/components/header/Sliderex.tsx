import { Link, useLoaderData } from '@remix-run/react';
import { useRootLoader } from '~/utils/use-root-loader';
import { getCollections } from '~/providers/collections/collections';
import type { LoaderFunctionArgs } from '@remix-run/server-runtime';
import React, { useState } from 'react';
import Hamburger from '~/components/svgs/Hamburger';
import AnimatedCollectionsTreemenu from './CollectionsTreemenu';
import { SearchBar } from '~/components/header/SearchBar';
import SignIn from '~/components/svgs/SignIn';
import { UserIcon } from '@heroicons/react/24/solid';
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
          <Hamburger className="w-10 h-10 mx-auto px-1" fill={finalOpacity} />
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
          className={`shadow-xl shadow-discogray bg-discogray bg-opacity-85 backdrop-blur-md top-20 w-full sm:w-[50vw] h-full absolute right-0 duration-300 ease-out transition-all ${
            isSlideoverVisible ? '' : 'translate-x-full'
          }`}
        >


<div className="absolute transform w-full h-full flex flex-col">
  {/* Menu */}
  <div className="flex-grow overflow-y-auto">
  <div className="bg-white p-4 flex-row-reverse bg-opacity-85 ">
    <div className="flex justify-between items-center">
    <SearchBar />
    <Link
        to={isSignedIn ? '/account' : '/sign-in'}
        className="flex space-x-1"
      >
        <DiscoSignIn className="w-10 h-10 p-1" />
      </Link>
    <div className="cursor-pointer text-discogray flex items-center justify-center" onClick={toggleSlideover}>
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 18L18 6M6 6l12 12" strokeWidth={1.5}/>
        </svg>
      </div>



    </div>
    </div>
    <div className="w-full py-8">
      <AnimatedCollectionsTreemenu
        collectionsData={{ collections }}
        index={0}
      />
    </div>
  </div>
  
  {/* Bottom section */}
  <div className="">

    <div className="flex flex-row-reverse items-center p-4">
      
    </div>
  </div>
</div>
          </div>
        </div>
      </div>

  );
};

export default Sliderex;
