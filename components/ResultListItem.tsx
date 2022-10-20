import Link from 'next/link';
import React from 'react';
import { Patent } from '../lib/types';

type ResultListItemProps = {
  patent: Patent;
}

const ResultListItem = ({ patent }: ResultListItemProps): JSX.Element => {

  const renderInventionTitleLink = (): JSX.Element => {
    return (
      <Link href={`/patent/${patent.patentApplicationNumber}`}>
        <h3 className='cursor-pointer font-semibold leading-5 mb-2'>{patent.inventionTitle}</h3>
      </Link>
    );
  }

  const renderCurrentAssigneeLine = (): JSX.Element | null => {
    if (!patent.assigneeEntityName) return null;
    return (
      <p>{patent.assigneeEntityName} • {patent?.assigneePostalAddressText}</p>
    );
  }

  const renderApplicationNumber = (): JSX.Element => {
    return <p>{patent.patentApplicationNumber}</p>;
  }

  const renderGrantDate = (): JSX.Element => {
    const year = patent.grantDate.split('-')[2];
    const currentYear = new Date().getFullYear().toString();
    const dateString = year === currentYear ? patent.grantDate : year

    return <p>{dateString}</p>;
  }

  return (
    <div className='p-3'>
      {renderInventionTitleLink()}
      <div className='pl-2 border-sky-900 border-l flex flex-col text-xs opacity-50'>
        {renderCurrentAssigneeLine()}
        {renderApplicationNumber()}
        {renderGrantDate()}
      </div>
    </div>
  );
}

export default ResultListItem;