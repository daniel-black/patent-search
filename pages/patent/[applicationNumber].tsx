import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import { Patent } from '../../lib/types';


const PatentPage = (): JSX.Element => {
  const router = useRouter();
  const { applicationNumber } = router.query;

  const { status, data, error } = useQuery('getPatent', async () => {
    if (typeof applicationNumber !== 'string') return;
    const queryString = new URLSearchParams();
    queryString.append('patentApplicationNumber', applicationNumber);
    const { data } = await axios.get(`/api/singlePatent?${queryString}`);
    return data;
  });
  
  if (status === 'loading') return <Spinner />;
  if (status === 'error') return <p>{JSON.stringify(error)}</p>;
  const p = data ? data.results[0] as Patent : null;

  const parseClaims = (): Array<string> => {
    let claims: Array<string> = [];
    let claimCount = 1;

    // split on ".X." where x is any number
    // I'm gonna write a really shitty thing and then come back with regex superpowers
    const blob = p?.claimText[0];

    // I'm actually not going to do this right now as I am very 😴

    return claims;
  }

  const renderAssignee = (): JSX.Element | null => {
    if (!p?.assigneeEntityName) return null;
    return (
      <div className='flex items-baseline space-x-3 text-sm'>
        <p>Assignee</p>
        <p className='py-0.5 px-4 rounded-full bg-slate-800 border border-sky-900'>{p?.assigneeEntityName}</p>
      </div>
    );
  }

  const renderInventors = (): JSX.Element | null => {
    if (!p?.inventorNameArrayText) return null;
    return (
      <div className='flex items-baseline space-x-3 text-sm'>
        <p>Inventors</p>
        <ul className='flex space-x-1 flex-wrap'>
          {p?.inventorNameArrayText?.map(inventor => (
            <li 
              className='py-0.5 px-4 rounded-full bg-slate-800 border border-sky-900'
              key={inventor}
            >
              {inventor}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const renderAbstract = (): JSX.Element | null => {
    if (!p?.abstractText) return null;
    return (
      <details open={true}>
        <summary>
          Abstract
          <hr className='border border-sky-900 mt-1.5' />
        </summary>
        <p className='leading-8 font-serif mt-1 indent-12 text-lg'>{p?.abstractText[0]}</p>
      </details>
    );
  }

  const renderClaims = (): JSX.Element | null => {
    if (p?.claimText.length === 0) return null;
    return (
      <details open={false}>
        <summary>
          Claims
          <hr className='border border-sky-900 mt-1.5' />
        </summary>
        <ul>
          {p?.claimText.map(claim => (
            <li><p className='leading-8 font-serif mt-1 indent-12 text-lg'>{claim}</p></li>
          ))}
        </ul>
      </details>
    );
  }

  const renderDescription = (): JSX.Element | null => {
    if (p?.descriptionText.length === 0) return null;
    return (
      <details open={false}>
        <summary>
          Description
          <hr className='border border-sky-900 mt-1.5' />
        </summary>
        <p className='leading-8 font-serif mt-1 indent-12 text-lg'>{p?.descriptionText}</p>
      </details>
    );
  }


  return (
    <div className='mt-10 pb-10 space-y-5 px-10'>
      <h2 className='text-3xl text-center'>{p?.inventionTitle}</h2>
      <p className='text-center opacity-70'>
        {applicationNumber} ({p?.inventionSubjectMatterCategory}) granted on {p?.grantDate}
      </p>
      
      {renderAssignee()}
      {renderInventors()}
      {renderAbstract()}
      {renderClaims()}
      {renderDescription()}

      <a className='block max-w-fit p-3 bg-sky-300 rounded-lg text-slate-900' href={p?.archiveURI}>
        Download ZIP
      </a>
    </div>
  )
}

export default PatentPage;