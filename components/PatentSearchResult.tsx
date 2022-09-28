import Link from "next/link";
import { useState } from "react";
import { Patent } from "../lib/types";

type PatentSearchResultProps = {
  p: Patent,
};

const PatentSearchResult = (
  { p }: PatentSearchResultProps
): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-sky-900 rounded p-2">
      <h3 className="font-bold text-sky-50">
        <Link href={'#'}>
          {p.inventionTitle}
        </Link>
      </h3>
      <p className="text-xs">application no. {p.patentApplicationNumber}</p>
      <ul className="flex flex-wrap text-xs mt-1">
        {p.inventorNameArrayText && p.inventorNameArrayText.map(name => (
          <li key={name} className="whitespace-nowrap px-2 py-0.5 rounded-full bg-slate-800 mr-2 mb-1">👤 {name}</li>
        ))}
      </ul>
      <div className="flex items-start space-x-2">
        <button className="bg-sky-800 text-sky-50 rounded p-2" onClick={() => setShow(!show)}>
          {show ? '↠' : '↡'}
        </button>
        <p className={`${show ? '' : 'truncate'} bg-sky-800 p-2 rounded`}>{p.abstractText}</p>
      </div>
    </div>
  );
}

export default PatentSearchResult;