import Link from "next/dist/client/link";

export const Columns = ({
  children,
  columns,
  border,
  background,
  align,
  ...rest
}) => {
  return (
    <section
      className={`grid grid-cols-1 md:grid-cols-${columns} items-${align} border-t-${border} ${background} gap-4 items-start px-10 py-10 lg:px-48 w-full `}
      {...rest}
    >
      {children}
    </section>
  );
};

Columns.defaultProps = {
  columns: "grid-cols-1",
};

export const Box = ({ children, align, ...rest }) => {
  return (
    <div
      className={`flex justify-${align} flex-col items-${align} text-${align} border-gray-200 border shadow-md rounded-lg p-6 mb-5 hover:bg-gray-100 transition-all duration-150`}
      {...rest}
    >
      {children}
    </div>
  );
};

export const Icon = ({ path }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={`${path}`}
      />
    </svg>
  );
};

export const Button = ({ children, link, icon, background, width }) => {
  return (
    <Link href={`${link}`} passHref>
      <button
        className={`w-${width} inline-flex justify-center gap-2 mt-4  px-5 py-3 rounded-xl text-base font-medium text-white ${background} hover:opacity-90 active:bg-grey-900 focus:outline-none border-4 border-white focus:border-purple-200 transition-all`}
      >
        {children}
        {icon ? <Icon path={`${icon}`} /> : null}
      </button>
    </Link>
  );
};

Button.defaultProps = {
  background: "bg-indigo-600",
};

export const Container = ({ children, style, ...rest }) => {
  return (
    <section
      className={`w-full p-6 block flex flex-wrap items-center justify-center gap-2 ${style}`}
    >
      {children}
    </section>
  );
};

export default Columns;
