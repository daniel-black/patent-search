export const usptoUrl = 'https://developer.uspto.gov/ibd-api';

// Return the applications patent data by applcation number and various other parameters.
export const publicationsEndpoint = '/v1/application/publications';

// Return the applications patent data by applcation number and various other parameters.
export const grantedPatentsEndpoint = '/v1/application/grants';

// Google patents API for inventors
// The query string is like: [url]=[inventor=first_name+last_name]
// So just throw an equal sign in front of FN and a plus sign in front of LN before URL encoding
export const inventorEndpoint = 'https://patents.google.com/xhr/query?url=inventor';