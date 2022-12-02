import type{NextApiRequest, NextApiResponse} from 'next';

export default async (req:NextApiRequest,res:NextApiResponse) => {
    const response = await fetch('https://stock-and-options-trading-data-provider.p.rapidapi.com/options/amzn'
    ,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Proxy-Secret': 'a755b180-f5a9-11e9-9f69-7bf51e845926',
            'X-RapidAPI-Key': '38c2c4fa9dmsh373af5705c9126fp1f3898jsnf68f63996b25',
            'X-RapidAPI-Host': 'stock-and-options-trading-data-provider.p.rapidapi.com'
        }
    });
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
}
