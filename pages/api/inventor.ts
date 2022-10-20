import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { inventorEndpoint } from "../../lib/constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // query = { first: "bob", last: "jones" } or something like that
  const { first, last } = req.query;

  const response = await axios.get(`${inventorEndpoint}%3D${first}%2B${last}`);

  console.log(response.data.results.cluster[0].result);

  const inventorPatents = response.data.results.cluster[0].result.map(r => ({
    patentApplicationNumber: r.patent.publication_number,
    grantDate: r.patent.grant_date,
    inventionTitle: r.patent.title.trim(),
  }))

  if (response.status === 200) {
    if (response.data.results.total_num_results === 0) {
      res.status(404).json({ msg: 'No results found' });
    }
    res.status(200).json(inventorPatents);
  } else {
    res.status(400).json({ msg: 'uh oh we had an oops' });
  }
}