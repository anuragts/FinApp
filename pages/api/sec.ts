import type{NextApiRequest, NextApiResponse} from 'next';

export default async (req:NextApiRequest,res:NextApiResponse) => {
    const response = await fetch('https://zirra.p.rapidapi.com/v1/companies'
    ,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '38c2c4fa9dmsh373af5705c9126fp1f3898jsnf68f63996b25',
            'X-RapidAPI-Host': 'zirra.p.rapidapi.com'
        }
    });
    const data = await response.json();
    console.log(data);
    res.status(200).json(data);
}
