import type { NextApiRequest, NextApiResponse } from "next";
import { applicationPublicationsUrl } from "../../lib/constants";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'test' });
}