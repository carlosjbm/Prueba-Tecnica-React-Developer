import { useState, useEffect } from "react";

function useFetch(url, url2) {
  const [data1, setData1] = useState(null);
  const [errData1, setErrData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [errData2, setErrData2] = useState(null);

  useEffect(() => {
    // Hago el primer Fetch
    fetch(url)
      .then((res) => res.json())
      .then((response) => setData1(response))
      .catch((err) => setErrData1(err));
    // Hago el segundo
    fetch(url2)
      .then((res) => res.json())
      .then((response2) => setData2(response2))
      .catch((err) => setErrData2(err));
  }, []);

  return { data1, data2, errData1, errData2 };
}

export default useFetch;
