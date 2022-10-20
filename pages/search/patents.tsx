import { useState } from "react";
import Divider from "../../components/Divider";
import SearchBar from "../../components/SearchBar";
import SearchResults from "../../components/SearchResults";
import { PatentSearchResults } from "../../lib/types";

const Patents = (): JSX.Element => {
  const [results, setResults] = useState<PatentSearchResults | null>(null);
  const [isLoadingResults, setIsLoadingResults] = useState<boolean>(false);

  console.log(results);

  const setResultFromSearch = (r: PatentSearchResults):void => setResults(r);
  const setSearchIsLoadingResults = (b: boolean) => setIsLoadingResults(b);

  return (
    <div className="flex flex-col items-center justify-start mt-10 pb-10 space-y-10">
      <section>
        <SearchBar setResults={setResultFromSearch} setIsLoading={setSearchIsLoadingResults} />
      </section>
      <Divider />
      <main>
        <SearchResults isLoading={isLoadingResults} results={results} />
      </main>
    </div>
  );
}

export default Patents;