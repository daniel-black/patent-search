import type { NextApiRequest, NextApiResponse } from "next";
import { publicationsEndpoint } from "../../lib/constants";
import axiosClient from "../../utils/axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;
  console.log(query);

  const requestString = `${publicationsEndpoint}?searchText=image`;

  const response = await axiosClient.get(requestString);

  console.log(response.data);

  res.status(200).json({ numberOfResults: response.data.results.length });
}