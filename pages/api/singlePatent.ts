import type { NextApiRequest, NextApiResponse } from "next";
import { grantedPatentsEndpoint } from "../../lib/constants";
import axiosClient from "../../utils/axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  // add error handling at some point

  const qs = new URLSearchParams();
  qs.append('patentApplicationNumber', query.patentApplicationNumber);

  const requestString = `${grantedPatentsEndpoint}?${qs}`;
  const response = await axiosClient.get(requestString);
  console.log(response.data);

  if (response.status === 200) {
    res.status(200).json(response.data);
  } else {
    res.status(400).json({
      statusFromUsptoAPI: response.status,
      msgFromUsptoAPI: response.statusText,
    });
  }
}