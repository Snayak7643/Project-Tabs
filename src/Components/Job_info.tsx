import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

type PropType = {
  data: any[];
  index: number;
};

const JobInfo: React.FunctionComponent<PropType> = ({ data, index }) => {
  return (
    <div className="job-info">
      <h2 className="loading">{data[index].title}</h2>
      <h3 className="loading">{data[index].company}</h3>
      <p className="loading">{data[index].dates}</p>
      <ul className="job-info">
        {data[index].duties.map((duty: string, i: number) => {
          return (
            <li key={i} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              {duty}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default JobInfo;
