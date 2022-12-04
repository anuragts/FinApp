import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const dataObj = Object.fromEntries(data);
    setLoading(true);

    const response = await fetch("/api/news", {
      method: "POST",
      body: JSON.stringify({ company: dataObj.company }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    const t = result.news;
    // console.log(t);
    setData(t);
    setLoading(false);
  };

  return (
    <div className="">
      <Head>
        <title>FinApp</title>
        <meta name="description" content="next finance app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <div className="bold">
          <h1 className="text-3xl text-center my-20">Welcome to FinApp</h1>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              type="text"
              className="md:text-xl text-base resize rounded-md mt-5 px-2 md:px-20 md:py-5 py-3"
              name="company"
              required
              placeholder="Enter a company name'"
            />
            <br />
            <button
              type="submit"
              className="bg-third text-base md:text-xl  text-secondary mt-10 rounded  px-8 md:px-10 py-2 md:my-4 my-2 hover:bg-secondary hover:text-third border-2 border-third">
              Submit
            </button>
          </form>
          <div>
            {loading? <h1>Loading...</h1> :null}
            {data && data.length > 0 && data.map((item) => ( 
              <div className="mt-10 text-center">
                <h1 className="text-2xl">{item.title}</h1>
                <a href={item.longURL}>Visit</a>
                </div>
                ))
                }
          </div>
        </div>
    </div>
  );
}
