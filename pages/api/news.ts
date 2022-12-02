import type{NextApiRequest, NextApiResponse} from 'next';
import { config } from 'dotenv';

config();

const apikey = process.env.API_KEY;
const host = process.env.HOST;

export default async (req:NextApiRequest,res:NextApiResponse) => {
    const {company} = req.body;
    const response = await fetch(`https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query="${company}"`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${apikey}`,
            'X-RapidAPI-Host': `${host}`
                }        
    })
    const data = await response.json();
    // const r = data.news[2].title;
    // console.log(r);
    res.status(200).json(data);
}