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
import Woman from '../svgs/Woman';

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
          <Hamburger className="w-8 h-8 mx-auto" fill={finalOpacity} />
        </button>
      </div>
      <div
        id="slideover-container"
        className={`w-full h-full fixed z-[100] inset-0 ${isSlideoverVisible ? '' : 'invisible'}`}
      >
        <div
          onClick={toggleSlideover}
          id="slideover-bg"
          className="w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-discogray opacity-0"
        />
        <div
          onClick={toggleSlideover}
          id="slideover"
          className={`shadow-xl shadow-discogray bg-discogray bg-opacity-90 backdrop-blur-md top-[5rem] w-full sm:w-[50vw] h-full absolute right-0 duration-300 ease-out transition-all ${
            isSlideoverVisible ? '' : 'translate-x-full'
          }`}
        >
          <div className="mx-4 px-4 flex absolute top-0 pt-2 text-white text-xl font-fw700">



          </div>
          
  
<div className="flex flex-row-reverse items-center mt-4 pr-8 pb-4">
        
          <div className="cursor-pointer text-white top-0 flex items-center justify-center right-0">

            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div className="pr-4"> <Link to={isSignedIn ? '/account' : '/sign-in'} className="flex space-x-1">
                <SignIn className="w-8 h-8 text-white" />
                </Link></div>
 </div>


          <div className="absolute transform w-full">
          <div className="bg-discopink-100" ><SearchBar/></div>
            <div className="w-full pb-8">
              <AnimatedCollectionsTreemenu collectionsData={{ collections }} index={0} />
            </div>
            <div className="w-full pb-8">
              
            </div>
            <div className="flex flex-row-reverse py-3 pb-8 px-4">
            
             
               

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliderex;