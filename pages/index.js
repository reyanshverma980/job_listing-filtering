import Head from "next/head";
import JobsList from "../components/JobsList";
import Filter from "../components/Filter";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FilterContext } from "./_app";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    const res = await fetch("/data.json");
    const data = await res.json();
    setJobs([...data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ctx = useContext(FilterContext);
  return (
    <div className="container-job_listing">
      <Head>
        <title>Job Listing</title>
        <meta name="description" content="A challenge by front end mentor" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      <header className="bg-desaturatedDarkCyan relative h-44 lg:h-auto ">
        <img
          className="w-full h-full"
          src="/images/bg-header-desktop.svg"
          alt=""
        />
        {ctx.filteredTags.length !== 0 && <Filter />}
      </header>

      <main>
        <JobsList jobs={jobs} />
      </main>
    </div>
  );
}
