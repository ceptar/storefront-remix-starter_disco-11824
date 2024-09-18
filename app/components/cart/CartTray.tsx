import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import X from '../svgs/X';
import { CartContents } from './CartContents';
import { Link, useLocation } from '@remix-run/react';
import { Price } from '~/components/products/Price';
import { CartLoaderData } from '~/routes/api/active-order';
import { CurrencyCode } from '~/generated/graphql';

export function CartTray({
  open,
  onClose,
  activeOrder,
  adjustOrderLine,
  removeItem,
}: {
  open: boolean;
  onClose: (closed: boolean) => void;
  activeOrder: CartLoaderData['activeOrder'];
  adjustOrderLine?: (lineId: string, quantity: number) => void;
  removeItem?: (lineId: string) => void;
}) {
  const currencyCode = activeOrder?.currencyCode || CurrencyCode.Usd;
  const location = useLocation();
  const editable = !location.pathname.startsWith('/checkout');
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20"
        onClose={onClose}
      >
        <div className="absolute inset-0">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-discogray-100 bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 w-full sm:w-[50vw] top-20 flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300 sm:duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300 sm:duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen">
                <div className="h-full flex flex-col bg-white bg-opacity-85 shadow-xl">
                  <div className="flex-1 ">
                    <div className="flex flex-row justify-between items-center h-20 border-b border-discogray">
                      <Dialog.Title className="pl-4 text-2xl text-discogray">
                        Shopping cart
                      </Dialog.Title>
                      <div className="flex items-center pr-4">
                        <button
                          type="button"
                          className=" text-discogray hover:text-discogray-500"
                          onClick={() => onClose(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <X className="h-9 w-9" fill="discogray" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="overflow-y-auto px-4 py-8">
                      {activeOrder?.totalQuantity ? (
                        <CartContents
                          orderLines={activeOrder?.lines ?? []}
                          currencyCode={currencyCode!}
                          editable={editable}
                          removeItem={removeItem}
                          adjustOrderLine={adjustOrderLine}
                        ></CartContents>
                      ) : (
                        <div className="flex items-center justify-center h-48 text-xl text-gray-400">
                          Your cart is empty
                        </div>
                      )}
                    </div>
                  </div>

                  {activeOrder?.totalQuantity && editable && (
                    <div className="border-t border-discogray py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>
                          {currencyCode && (
                            <Price
                              priceWithTax={activeOrder?.subTotalWithTax ?? 0}
                              currencyCode={currencyCode}
                            />
                          )}
                        </p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping will be calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          to="/checkout"
                          onClick={() => onClose(false)}
                          className="uppercase tracking-wider text-sm flex justify-center items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium text-white bg-primary-700 hover:bg-primary-500"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

// import { Fragment } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import { XMarkIcon } from '@heroicons/react/24/outline';
// import { CartContents } from './CartContents';
// import { Link, useLocation } from '@remix-run/react';
// import { Price } from '~/components/products/Price';
// import { CartLoaderData } from '~/routes/api/active-order';
// import { CurrencyCode } from '~/generated/graphql';
// // import { useTranslation } from 'react-i18next';

// export function CartTray({
//   open,
//   onClose,
//   activeOrder,
//   adjustOrderLine,
//   removeItem,
// }: {
//   open: boolean;
//   onClose: (closed: boolean) => void;
//   activeOrder: CartLoaderData['activeOrder'];
//   adjustOrderLine?: (lineId: string, quantity: number) => void;
//   removeItem?: (lineId: string) => void;
// }) {
//   const currencyCode = activeOrder?.currencyCode || CurrencyCode.Usd;
//   const location = useLocation();
//   const editable = !location.pathname.startsWith('/checkout');
//   // const { t } = useTranslation();

//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog
//         as="div"
//         className="fixed inset-0 overflow-hidden z-20"
//         onClose={onClose}
//       >
//         <div className="absolute inset-0 overflow-hidden">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-in-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in-out duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//           </Transition.Child>

//           <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex top-[5rem] h-[calc(100vh-5rem)]">
//             <Transition.Child
//               as={Fragment}
//               enter="transform transition ease-in-out duration-300 sm:duration-300"
//               enterFrom="translate-x-full"
//               enterTo="translate-x-0"
//               leave="transform transition ease-in-out duration-300 sm:duration-300"
//               leaveFrom="translate-x-0"
//               leaveTo="translate-x-full"
//             >
//               <div className="w-screen max-w-md">
//                 <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
//                   <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
//                     <div className="flex items-start justify-between">
//                       <Dialog.Title className="text-lg font-fw400 text-gray-900">
//                         {('Disco-Cart')}
//                       </Dialog.Title>
//                       <div className="ml-3 h-7 flex items-center">
//                         <button
//                           type="button"
//                           className="-m-2 p-2 text-gray-400 hover:text-gray-500"
//                           onClick={() => onClose(false)}
//                         >
//                           <span className="sr-only">
//                             {('ClosePanel')}
//                           </span>
//                           <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="mt-8">
//                       {activeOrder?.totalQuantity ? (
//                         <CartContents
//                           orderLines={activeOrder?.lines ?? []}
//                           currencyCode={currencyCode!}
//                           editable={editable}
//                           removeItem={removeItem}
//                           adjustOrderLine={adjustOrderLine}
//                         ></CartContents>
//                       ) : (
//                         <div className="flex items-center justify-center h-48 text-xl text-gray-400">
//                           {('empty, lets go treasure hunting!')}
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {activeOrder?.totalQuantity && editable && (
//                     <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
//                       <div className="flex justify-between text-base font-fw400 text-gray-900">
//                         <p>{('Subtotal')}</p>
//                         <p>
//                           {currencyCode && (
//                             <Price
//                               priceWithTax={activeOrder?.subTotalWithTax ?? 0}
//                               currencyCode={currencyCode}
//                             />
//                           )}
//                         </p>
//                       </div>
//                       <p className="mt-0.5 text-sm text-gray-500">
//                         {('PLACEHOLDER_SHIPPING_TAXES_AND_DISCOUNTS')}
//                       </p>
//                       <div className="mt-6">
//                         <Link
//                           to="/checkout"
//                           onClick={() => onClose(false)}
//                           className="flex justify-center items-center px-6 py-3 border border-transparent  shadow-sm text-base font-fw400 text-white bg-primary-600 hover:bg-primary-700"
//                         >
//                           {('Checkout')}
//                         </Link>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }
