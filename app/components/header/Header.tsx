import React, { useEffect, useState } from 'react';
import { useLocation, Link } from '@remix-run/react';
import Cart from '~/components/svgs/Cart';

import Logo from '~/components/svgs/Logo';
import Sliderex from './Sliderex';

export function Header({
  onCartIconClick,
  cartQuantity,
}: {
  onCartIconClick: () => void;
  cartQuantity: number;
}) {
  const [rootRouteOpacity, setRootRouteOpacity] = React.useState(1);
  const [headerOpacity, setHeaderOpacity] = React.useState(0);
  const location = useLocation();

  React.useEffect(() => {
    const checkRootRoute = () => {
      setRootRouteOpacity(location.pathname === '/' ? 0 : 1);
    };

    // Run check on initial mount and on every location change
    checkRootRoute();
  }, [location]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.min(scrollPosition / 70, 1); // Ensures opacity doesn't exceed 1
      setHeaderOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className="z-40 bg-discogray bg-opacity-75 top-0 flex items-center fixed justify-between h-[5rem] w-full min-w-full"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${headerOpacity})`,
        borderColor: `rgba(${255 * (1 - headerOpacity - rootRouteOpacity)}, ${
          255 * (1 - headerOpacity - rootRouteOpacity)
        }, ${255 * (1 - headerOpacity - rootRouteOpacity)})`, // Interpolates from white to black
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
    >
      <div className="relative px-4 flex flex-row items-center justify-between h-full w-full ">
        <div className="relative ml-4 flex flex-col  items-start justify-start w-1/6">
          <button
            className="flex flex-col  bg-opacity-90 shadow-none cursor-pointer justify-center rounded-full items-center py-2 text-sm text-discogray transition-all duration-300 ease-out hover:opacity-70"
            onClick={onCartIconClick}
            aria-label="Open cart tray"
          >
            <Cart
              className="w-8 h-8 z-40"
              fill={`rgba(${255 * (1 - headerOpacity - rootRouteOpacity)}, ${
                255 * (1 - headerOpacity - rootRouteOpacity)
              }, ${255 * (1 - headerOpacity - rootRouteOpacity)})`}
            />
            {cartQuantity ? (
              <div className="top-[15px] left-[12px] w-5 h-5 z-40 absolute items-center justify-center rounded-full text-md bg-secondary-500 text-white font-fw400">
                {cartQuantity}
              </div>
            ) : (
              ''
            )}
          </button>
        </div>
        <div className="z-40 min-w-[100px] max-w-[300px] flex flex-col w-full justify-center mx-auto">
          <Link to="/" className="">
            <Logo
              className="max-h-12 mx-auto"
              fill={`rgba(${255 * (1 - headerOpacity - rootRouteOpacity)}, ${
                255 * (1 - headerOpacity - rootRouteOpacity)
              }, ${255 * (1 - headerOpacity - rootRouteOpacity)})`}
            />
          </Link>
        </div>
        <div className="z-40 mr-4 flex flex-col items-end justify-center w-1/6">

          <Sliderex
            finalOpacity={`rgba(${
              255 * (1 - headerOpacity - rootRouteOpacity)
            }, ${255 * (1 - headerOpacity - rootRouteOpacity)}, ${
              255 * (1 - headerOpacity - rootRouteOpacity)
            })`}
          />

        </div>
      </div>
    </header>
  );
}
