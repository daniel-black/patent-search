import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../components/Spinner';

const Inventor = (): JSX.Element => {
  const router = useRouter();
  const { name } = router.query;

  const { status, data, error } = useQuery('getPatent', async () => {
    if (typeof name !== 'string') return;
    const [first, last] = name.split('-');
    const queryString = new URLSearchParams();
    queryString.append('first', first);
    queryString.append('last', last);
    const { data } = await axios.get(`/api/inventor?${queryString.toString()}`);
    return data;
  });
  
  if (status === 'loading') return <Spinner />;
  // if (status === 'error') return <p>{JSON.stringify(error)}</p>;

  const displayName = name.replace('-', ' ');

  return (
    <div>
      {displayName}
      {JSON.stringify(data, null, 2)}
      <p>Total patents: {data?.length}</p>
      <ul className='space-y-5'>
        {data && data.map(p => (
          <li className='bg-slate-800 rounded p-3' key={p.patentApplicationNumber}>
            <p>{p.inventionTitle}</p>
            <p>{p.patentApplicationNumber}</p>
            <p>{p.grantDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventor;