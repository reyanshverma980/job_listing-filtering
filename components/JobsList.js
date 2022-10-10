import { useContext } from "react";
import { FilterContext } from "../pages/_app";
import JobsCard from "./JobsCard";

function JobsList(props) {
  const ctx = useContext(FilterContext);

  let classes = "";

  if (ctx.filteredTags.length === 0) {
    classes = "flex flex-col gap-12 py-24";
  } else {
    classes = "flex flex-col gap-12 pt-32 pb-24 lg:py-24";
  }

  const jobs = props.jobs.map((job) => {
    const tags = [job.role, job.level, ...job.languages, ...job.tools];
    return { ...job, tags: tags };
  });

  const handleFilteredJobs = () => {
    if (ctx.filteredTags.length === 0) {
      return jobs;
    }
    return jobs.filter((job) => {
      return (
        ctx.filteredTags.length ===
        job.tags.filter((tag) => ctx.filteredTags.includes(tag)).length
      );
    });
  };

  return (
    <ul className={classes}>
      {handleFilteredJobs().map((job) => {
        return <JobsCard job={job} key={job.id} />;
      })}
    </ul>
  );
}

export default JobsList;
