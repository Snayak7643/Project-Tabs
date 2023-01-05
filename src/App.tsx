import React, { useState, useEffect } from "react";
function App() {
  const url = "https://course-api.com/react-tabs-project";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(url);
      const res = await response.json();
      setData(res);
    };
    fetching();
  }, []);

  return <h1>Hello</h1>;
}

export default App;
