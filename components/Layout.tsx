
type LayoutProps = {
  children: JSX.Element | Array<JSX.Element>
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="bg-slate-900 text-sky-200 w-full min-h-screen">
      {children}
    </div>
  );
}

export default Layout;