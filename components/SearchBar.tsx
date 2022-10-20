import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { PatentSearchResults } from '../lib/types';

type SearchBarProps = {
  setResults: (r: PatentSearchResults) => void;
  setIsLoading: (b: boolean) => void;
}

const SearchBar = (props: SearchBarProps): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    props.setIsLoading(true);
    e.preventDefault();
    e.stopPropagation();

    const query = new URLSearchParams();
    query.append('searchText', searchText);
    const request = await axios.get('/api/patents?' + query.toString());

    props.setIsLoading(false);
    props.setResults(request.data);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.currentTarget.value);

  return (
    <form onSubmit={submitForm}>
      <input 
        value={searchText}
        onChange={handleChange}
        className="py-3 px-5 bg-sky-200 text-slate-900 outline-none text-xl rounded-xl w-[700px] border border-sky-900"
        type="text" 
        placeholder="⌕ Search for a patent" 
      />
    </form>
  );
}

export default SearchBar;