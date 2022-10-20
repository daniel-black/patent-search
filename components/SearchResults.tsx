import React from 'react';
import { PatentSearchResults } from '../lib/types';
import ResultListItem from './ResultListItem';

type SearchResultsProps = {
  isLoading: boolean;
  results: PatentSearchResults | null;
}

const SearchResults = (props: SearchResultsProps): JSX.Element => {
  if (props.isLoading) {
    return (
      <div>Loading...</div>
    );
  }

  const renderResultsCount = (): JSX.Element => {
    const count = props.results?.recordTotalQuantity
      ? props.results.recordTotalQuantity
      : 0;

    return (
      <p className='py-3'>{count}&nbsp;result{count === 1 ? '' : 's'}</p>
    );
  }

  return (
    <div className='w-[700px] flex flex-start space-x-5'>
      <div>
        {renderResultsCount()}
      </div>
      <div className='bg-slate-800 w-full rounded-xl border border-sky-900'>
        <ul className='divide-y divide-sky-900'>
          {props.results?.results.map(r => (
            <ResultListItem patent={r} key={r.patentApplicationNumber} /> 
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchResults;