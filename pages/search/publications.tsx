import { useState } from "react";
import PublicationSearchForm from "../../components/PublicationSearchForm";
import { PatentSearchResults } from "../../lib/types";


const Publications = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<PatentSearchResults | null>(null)
  
  return (
    <div className="flex h-full">
      <section className="bg-stone-600 w-1/3 p-2 space-y-2">
        <h2 className="font-bold text-lg">Patent Search</h2>
        <PublicationSearchForm 
          setIsLoadingSearchResults={setIsLoading} 
          setSearchResults={setSearchResults} 
        />
      </section>

      <main>
        <code>
          <pre>
            {searchResults ? JSON.stringify(searchResults, null, 2) : 'No search results'}
            {isLoading && <p>LOADING</p>}
          </pre>
        </code>
      </main>
    </div>
  );
}

export default Publications;