  // // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  // import type { NextApiRequest, NextApiResponse } from "next";

  // type Data = {
  //   name: string;
  // };

  // import type { NextApiRequest, NextApiResponse } from 'next'
  
  // export default function handler(req: NextApiRequest, res: NextApiResponse) {

  //   if (req.method === 'GET') {
  //     res.status(200).json({ name: "this is get requiest"});
  //   } else {
  //     // Handle any other HTTP method
  //   }
    
  //   if (req.method === 'POST') {
  //     res.status(200).json({ name: "this is Post requiest"});
  //   } else {
  //     // Handle any other HTTP method
  //   }
    
  //   if (req.method === 'PUT') {
  //     res.status(200).json({ name: "this is put requiest"});
  //   } else {
  //     // Handle any other HTTP method
  //   }
    
  //   if (req.method === 'DELETE') {
  //     res.status(200).json({ name: "this is DELETE requiest"});
  //   } else {
  //     // Handle any other HTTP method
  //   }
  // }

  import { fetchPrismicData } from '../../lib/prismic';

  export default async function handler(req, res) {
    try {
      const prismicData = await fetchPrismicData();
      res.status(200).json(prismicData);
    } catch (error) {
      console.error('Error fetching Prismic data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }