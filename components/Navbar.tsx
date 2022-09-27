import Link from "next/link";


const Navbar = (): JSX.Element => {
  return (
    <nav className="flex justify-between items-center bg-sky-900 py-2 px-5 text-lg">
      <Link href={'/'}>
        <a className="font-bold">
          Patenty
        </a>
      </Link>

      <ul className="flex space-x-5">
        <li>
          <Link href={'/search/publications'}>
            <a>Publications</a>
          </Link>
        </li>
        <li>
          <Link href={'/search/grants'}>
            <a>Grants</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;