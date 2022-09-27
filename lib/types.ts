export type Category = 'utility' | 'design' | 'plant';

export type FormInputs = {
  searchText: string,
  inventionSubjectMatterCategory: Category,
  publicationFromDate: string,
  publicationToDate: string,
  patentApplicationNumber: string,
  filingDateFromDate: string,
  filingDateToDate: string,
  inventionTitle: string,
  assigneeEntityName: string,
  inventorNameText: string,
  claimText: string,
  abstractText: string,
  descriptionText: string,
  start: number,
  rows: number,
};