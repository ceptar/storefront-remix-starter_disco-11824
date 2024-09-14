import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useAnimation,
} from 'framer-motion';
import { ProductCardCarousel } from '../products/ProductCardCarousel';
import { ProductItem } from '~/providers/interfaces';
import { Link } from '@remix-run/react';

interface CarouselProps {
  featuredProducts: ProductItem[];
  slideWidth?: '1/2' | '1/3' | '1/4' | 'full';
}

export default function Carousel({
  featuredProducts,
  slideWidth = '1/3',
}: CarouselProps) {
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);

  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const getSlideWidth = () => {
    switch (slideWidth) {
      case '1/2':
        return 'w-1/2';
      case '1/3':
        return 'w-1/3';
      case '1/4':
        return 'w-1/4';
      case 'full':
        return 'w-full';
      default:
        return 'w-1/3';
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: any, info: any) => {
    setTimeout(() => setIsDragging(false), 0); // Reset dragging state
    const threshold = 150;
    if (Math.abs(info.velocity.x) > threshold) {
      if (info.velocity.x > 0) {
        controls.start({ x: 0 });
      } else {
        controls.start({ x: -width });
      }
    }
  };

  const disableDragClick = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <motion.div ref={carousel} className="cursor-grab overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={controls}
        className="flex"
      >
        {featuredProducts.map((item, index) => (
          <motion.div
            key={index}
            className={`${getSlideWidth()} h-fit p-2 flex-shrink-0 relative`}
            onMouseDown={(e) => e.preventDefault()} // Prevent default image drag behavior
            onClick={disableDragClick} // Prevent link click while dragging
          >
            <ProductCardCarousel
              productAsset={item.productAsset}
              productName={item.productName}
              priceWithTax={item.priceWithTax}
              currencyCode={item.currencyCode}
            />
            <Link
              to={`/products/${item.slug}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                zIndex: 1,
                cursor: 'pointer',
              }}
              onMouseDown={(e) => e.preventDefault()} // Prevent image drag behavior
              onClick={(e) => {
                if (isDragging) {
                  e.preventDefault();
                }
              }} // Disable click when dragging
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}