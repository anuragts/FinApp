import type{NextApiRequest, NextApiResponse} from 'next';

export default async (req:NextApiRequest,res:NextApiResponse) => {
    const response = await fetch('https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query="tesla"', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '38c2c4fa9dmsh373af5705c9126fp1f3898jsnf68f63996b25',
            'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
        }        
    })
    const data = await response.json();
    const r = data.news[2].title;
    console.log(r);
    res.status(200).json(r);
}