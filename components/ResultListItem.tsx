import React from 'react';
import { Patent } from '../lib/types';

type ResultListItemProps = {
  patent: Patent;
}

const ResultListItem = ({ patent }: ResultListItemProps): JSX.Element => {

  const renderInventionTitle = (): JSX.Element => {
    return <h3 className='font-semibold leading-5 mb-2'>{patent.inventionTitle}</h3>;
  }

  const renderCurrentAssignee = (): JSX.Element | null => {
    if (!patent.assigneeEntityName) return null;
    return (
      <small className='block text-xs opacity-50'>
        <i>{patent.assigneeEntityName}</i>
      </small>
    );
  }

  const renderApplicationNumber = (): JSX.Element => {
    return <small className='block text-xs opacity-50'>{patent.patentApplicationNumber}</small>;
  }

  const renderGrantDate = (): JSX.Element => {
    const year = patent.grantDate.split('-')[2];
    const currentYear = new Date().getFullYear().toString();
    const dateString = year === currentYear ? patent.grantDate : year

    return <small className='block text-xs opacity-50'>{dateString}</small>;
  }

  return (
    <div className='p-3'>
      {renderInventionTitle()}
      <div className='pl-2 border-sky-900 border-l'>
        {renderCurrentAssignee()}
        {renderApplicationNumber()}
        {renderGrantDate()}
      </div>
    </div>
  );
}

export default ResultListItem;