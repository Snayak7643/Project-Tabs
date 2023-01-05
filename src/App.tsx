import React, { useState } from "react";
function App() {
  const url = "https://course-api.com/react-tabs-project";

  const [data, setData] = useState([]);
  const fetching = async () => {
    const response = await fetch(url);
    const res = await response.json();
    setData(res);
  };

  return <h1 onClick={fetching}>Hello</h1>;
}

export default App;
