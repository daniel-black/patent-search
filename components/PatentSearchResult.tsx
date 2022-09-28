import { Patent } from "../lib/types";

type PatentSearchResultProps = {
  p: Patent,
};

const PatentSearchResult = (
  { p }: PatentSearchResultProps
): JSX.Element => {
  return (
    <div className="bg-sky-900 rounded p-2">
      <h3 className="font-bold">{p.inventionTitle}</h3>
      <p>{p.inventorNameArrayText}</p>
      <p className="truncate">{p.abstractText}</p>
    </div>
  );
}

export default PatentSearchResult;