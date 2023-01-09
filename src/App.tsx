import React, { useState, useEffect } from "react";
import JobInfo from "./Components/Job_info";
import Button from "./Components/Button";

function App() {
  const url = "https://course-api.com/react-tabs-project";

  const [data, setData] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const fetching = async () => {
    const response = await fetch(url);
    const res = await response.json();
    setData(res);
    console.log(res);
  };

  useEffect(() => {
    try {
      fetching();
    } catch (err) {
      setError(true);
    }
  }, []);

  if (error === true) {
    return <h1 className="loading">Error</h1>;
  }

  if (data.length === 0) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <section className="section">
      <div className="title">
        <h2 className="loading">Jobs</h2>
      </div>
      <ul>
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
      </ul>
      <JobInfo data={data} index={index} />
      <Button />
    </section>
  );
}

export default App;
