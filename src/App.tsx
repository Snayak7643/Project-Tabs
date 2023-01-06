import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
function App() {
  const url = "https://course-api.com/react-tabs-project";

  const [data, setData] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(url);
      const res = await response.json();
      setData(res);
    };
    fetching();
  }, []);
  if (data.length === 0) {
    return <h1 className="loading">Loading...</h1>;
  } else {
    return (
      <section className="section">
        <div className="title">
          <h2 className="loading">Jobs</h2>
          {data.map((job, i) => {
            return (
              <button
                key={i}
                className={i === index ? "active-btn" : "job-btn"}
                onClick={() => {
                  setIndex(i);
                }}
              >
                {job.company}
              </button>
            );
          })}
          <div className="job-info">
            <h2 className="loading">{data[index].title}</h2>
            <h3 className="loading">{data[index].company}</h3>
            <p className="loading">{data[index].dates}</p>
          </div>
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
        <button
          className="btn"
          onClick={() => {
            const name = prompt("Enter Your Name");
            if (name !== null) {
              alert(
                "Congrats! " +
                  name +
                  " You Applied for " +
                  data[index].title +
                  " Role in " +
                  data[index].company
              );
            }
          }}
        >
          Apply
        </button>
      </section>
    );
  }
}

export default App;
