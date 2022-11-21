import axios from "axios";
import { useEffect, useState } from "react";

function Api() {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("http://bucketlist.test/api/bucketlist");
    setServerData(data);
  };

  return (
    <>
      {serverData.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
        </div>
      ))}
    </>
  );
}

export default Api;
