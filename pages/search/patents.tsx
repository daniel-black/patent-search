import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import Spinner from "../../components/Spinner";

const Patents = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState(null);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);

    const query = new URLSearchParams();
    query.append('searchText', searchText);

    const request = await axios.get('/api/patents?' + query);
    setResults(request.data);
    setIsLoading(false);
    console.log(request.data);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.currentTarget.value);

  return (
    <div className="flex flex-col items-center justify-start mt-10 space-y-10">

      <section>
        <form onSubmit={submitForm}>
          <input 
            value={searchText}
            onChange={handleChange}
            className="p-3 rounded-2xl w-[700px]"
            type="text" 
            placeholder="Search for a patent" 
          />
        </form>
      </section>

      <main>
        {isLoading && <Spinner />}
        {!isLoading && results && <div>results: we have them</div>}
        Results
      </main>

    </div>
  );
}

export default Patents;