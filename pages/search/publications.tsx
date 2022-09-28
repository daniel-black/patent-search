import { useState } from "react";
import PatentSearchResult from "../../components/PatentSearchResult";
import PublicationSearchForm from "../../components/PublicationSearchForm";
import Spinner from "../../components/Spinner";
import { PatentSearchResults } from "../../lib/types";


const Publications = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<PatentSearchResults | null>(null)


  return (
    <div className="flex h-full">
      <section className="bg-slate-700 w-1/3 p-2 space-y-2">
        <h2 className="font-bold text-lg">Patent Search</h2>
        <PublicationSearchForm 
          setIsLoadingSearchResults={setIsLoading} 
          setSearchResults={setSearchResults} 
        />
      </section>

      <main className="w-2/3 h-full bg-slate-800 p-2">
        <div className="flex justify-between border-b border-sky-800 pb-2 mb-2">
          <h2 className="font-bold text-lg">Results</h2>
          <span className="opacity-60">
            {searchResults?.recordTotalQuantity 
              ? `${searchResults?.recordTotalQuantity} total records for this search`
              : 'none'}
          </span>
        </div>
        {isLoading && <Spinner />}
        <ul className="space-y-4">
          {searchResults && searchResults.results.map(r => (
            <PatentSearchResult p={r} key={r.patentApplicationNumber} />)
          )}
        </ul>
      </main>
    </div>
  );
}

export default Publications;