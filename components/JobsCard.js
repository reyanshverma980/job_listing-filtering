import Tag from "./Tag";

function JobsCard(props) {
  let classes = "";

  if (props.job.featured) {
    classes =
      " w-11/12 md:w-9/12 relative bg-white border-l-[6px] border-l-desaturatedDarkCyan flex flex-col lg:flex-row lg:items-center gap-4 mx-auto p-8 rounded-lg shadow-xl";
  } else {
    classes =
      "w-11/12 md:w-9/12 relative bg-white flex flex-col lg:flex-row lg:items-center gap-4 mx-auto p-8 rounded-lg shadow-xl";
  }

  return (
    <li className={classes}>
      <div className="absolute top-0 -translate-y-1/2 lg:-translate-y-0 lg:static">
        <img
          className="w-14 lg:w-auto"
          src={props.job.logo}
          alt={props.job.company}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <h2 className="text-desaturatedDarkCyan text-base font-bold">
            {props.job.company}
          </h2>
          {props.job.new && (
            <span className="bg-desaturatedDarkCyan text-sm font-bold uppercase px-3 py-1 text-white  rounded-full">
              New!
            </span>
          )}
          {props.job.featured && (
            <span className="bg-veryDarkGrayishCyan text-sm font-bold uppercase px-3 py-1 text-white rounded-full">
              Featured
            </span>
          )}
        </div>
        <h2 className=" text-veryDarkGrayishCyan hover:text-desaturatedDarkCyan text-xl font-bold">
          {props.job.position}
        </h2>
        <ul className="flex items-center gap-4 font-medium text-darkGrayishCyan list-disc">
          <li className="pr-3 list-none">{props.job.postedAt}</li>
          <li className="px-3">{props.job.contract}</li>
          <li className="pl-3">{props.job.location}</li>
        </ul>
      </div>
      <hr className="lg:hidden" />
      <div className="flex gap-4 items-center flex-grow flex-wrap lg:justify-end">
        {props.job.tags.map((tag) => {
          return <Tag key={tag} tag={tag} />;
        })}
      </div>
    </li>
  );
}

export default JobsCard;
