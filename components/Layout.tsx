
type LayoutProps = {
  children: JSX.Element | Array<JSX.Element>
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="bg-stone-900 text-sky-200 w-full h-screen min-h-fit">
      {children}
    </div>
  );
}

export default Layout;