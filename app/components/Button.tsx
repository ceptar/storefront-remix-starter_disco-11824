import clsx from 'clsx';

export function Button(
  props: React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>,
) {
  return (
    <button
      {...props}
      className={clsx(
        '  focus:outline-none focus:z-10 focus:ring-1 focus:ring-offset-0 focus:ring-gray-300',
        'py-2 px-4 text-base tracking-[0.15em] uppercase font-sans',
        'flex items-center justify-around gap-2',
        'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400',
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
