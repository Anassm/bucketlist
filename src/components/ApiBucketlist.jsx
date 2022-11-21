import axios from "axios";
import { useEffect, useState } from "react";

function ApiBucketlist() {
  // Bucketlist
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      "http://bucketlist-back-end.test/api/bucketlist"
    );
    setServerData(data);
  };

  const tableCss = {
    border: "1px solid #000",
  };

  return (
    <>
      {serverData.map((data) => (
        <div key={data.id}>
          <h1>Bucketlist</h1>
          <div style={tableCss}>
            <tr>
              <th>Nr</th>
              <th>Titel</th>
            </tr>
            <tr>
              <td>{data.id}</td>
              <td>{data.title}</td>
            </tr>
          </div>
        </div>
      ))}
    </>
  );
}

export default ApiBucketlist;
