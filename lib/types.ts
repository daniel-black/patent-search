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

export type PatentSearchResults = {
  recordTotalQuantity: number,
  results: Array<Patent>,
};

export type Patent = {
  abstractText: Array<string>,
  archiveURI: string,
  assigneeEntityName: string | null,
  assigneePostalAddressText: string | null,
  claimText: Array<string>,
  descriptionText: Array<string>,
  filelocationURI: string,
  filingDate: string,
  grantDate: string,
  furtherCPCSymbolArrayText: Array<string> | string | null,
  inventionSubjectMatterCategory: Category,
  inventionTitle: string,
  inventorNameArrayText: Array<string> | null,
  mainCPCSymbolText: string | null,
  patentApplicationNumber: string,
  publicationDate: string,
  publicationDocumentIdentifier: string,
};