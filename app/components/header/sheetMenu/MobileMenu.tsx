import React, { useState, useEffect } from 'react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { MenuIcon } from '~/components/svgsAnimated/menu';
import { Link } from '@remix-run/react';

type MobileMenuProps = {
  collections: Array<{ id: string; slug: string; name: string; parentId: string }>;
  headerOpacity: number;
  rootRouteOpacity: number;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ collections, headerOpacity, rootRouteOpacity }) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = collections.filter(collection => collection.parentId === '15');
  const subCollections = collections.filter(collection => collection.parentId === '12');

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('prevent-scroll');
    } else {
      document.body.classList.remove('prevent-scroll');
    }
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="text-center flex-col items-center justify-center">
          <MenuIcon
            headerOpacity={headerOpacity}
            rootRouteOpacity={rootRouteOpacity}
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </button>
      </SheetTrigger>
      <SheetContent className="h-[calc(100vh-5rem)] mt-20 text-base">
        <Accordion type="single" collapsible>
          <AccordionItem value="collections">
            <AccordionTrigger className="pl-6">Collections</AccordionTrigger>
            <AccordionContent>
              <ul className="border-t-[2px] border-primary">
                {subCollections.map(collection => (
				<Link key={collection.id} to={`/collections/${collection.slug}`}>
                  <li className="px-6 py-3 font-semibold">
                  {collection.name}
                  </li>
				  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="categories">
            <AccordionTrigger  className="pl-6">Categories</AccordionTrigger>
            <AccordionContent>
              <ul className="border-t-[2px] border-primary">
                {categories.map(category => (
				<Link key={category.id}  to={`/categories/${category.slug}`}>
                  <li className="px-6 py-3 font-semibold">
                    {category.name}
                  </li>
				  </Link>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;