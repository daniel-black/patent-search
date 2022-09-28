import type { NextApiRequest, NextApiResponse } from "next";
import { publicationsEndpoint } from "../../lib/constants";
import axiosClient from "../../utils/axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  console.log('FROM API')
  console.log(query);

  const qs = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== '')
        qs.append(key, String(value));
    }

  const requestString = `${publicationsEndpoint}?${qs}`;
  console.log(requestString);

  const response = await axiosClient.get(requestString);

  console.log(response.data);

  res.status(200).json(response.data);
}