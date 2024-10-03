import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Outlet, useLocation, useOutletContext } from '@remix-run/react';
import { CartContents } from '~/components/cart/CartContents';
import { OutletContext } from '~/types';
import { classNames } from '~/utils/class-names';
import { CartTotals } from '~/components/cart/CartTotals';

const steps = [
  { name: 'Shipping', state: 'shipping' },
  { name: 'Payment', state: 'payment' },
  { name: 'Confirmation', state: 'confirmation' },
];

export default function Checkout() {
  const outletContext = useOutletContext<OutletContext>();
  const { activeOrder, adjustOrderLine, removeItem } = outletContext;
  const location = useLocation();
  let state = 'shipping';
  if (location.pathname === '/checkout/payment') {
    state = 'payment';
  } else if (location.pathname.startsWith('/checkout/confirmation')) {
    state = 'confirmation';
  }
  let isConfirmationPage = state === 'confirmation';

  return (
    <div className="bg-white mt-32">
      <div
        className={classNames(
          isConfirmationPage ? 'lg:max-w-3xl mx-auto' : 'lg:max-w-7xl',
          'max-w-2xl mx-auto pb-24 px-4',
        )}
      >
        <h2 className="sr-only">Checkout</h2>
        {/* <nav
          aria-label="Progress"
          className="hidden sm:block pb-8 mb-8 "
        >
          <div className="relative h-[5rem] pt-8 flex justify-center items-center mr-auto ml-auto w-full">
          <ol role="list" className="flex h-full space-x-4 justify-center px-4 border-y border-discogray">
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="flex items-center">
                {step.state === state ? (
                  <span aria-current="page" className="text-xl px-4 items-center font-bold uppercase justify-center flex tracking-[0.25em] leading-10">
                    {step.name}
                  </span>
                ) : (
                  <span className="text-xl uppercase tracking-[0.25em]">{step.name}</span>
                )}

                {stepIdx !== steps.length - 1 ? (
                  <ChevronRightIcon
                    className="w-5 h-5 text-discogray ml-4"
                    aria-hidden="true"
                  />
                ) : null}
              </li>
            ))}
          </ol>
          </div>
        </nav> */}
        <div className="lg:grid lg:grid-cols-2">
          <div className={isConfirmationPage ? 'lg:col-span-2' : ''}>
            <Outlet context={outletContext} />
          </div>

          {/* Order summary */}
          {!isConfirmationPage && (
            <div className="mt-10 lg:mt-0 p-8 bg-gray-50">
              <h2 className="text-md font-bold uppercase text-center tracking-[0.05em] text-discogray mb-12">
                Order summary
              </h2>

              <CartContents
                orderLines={activeOrder?.lines ?? []}
                currencyCode={activeOrder?.currencyCode!}
                editable={state === 'shipping'}
                removeItem={removeItem}
                adjustOrderLine={adjustOrderLine}
              ></CartContents>
              <CartTotals order={activeOrder}></CartTotals>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
