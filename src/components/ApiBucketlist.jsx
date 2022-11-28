import axios from "axios";
import { useEffect, useState } from "react";

function ApiBucketlist() {
  // Bucketlist
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("http://bucketlist.test/api/bucketlist");
    setServerData(data);
  };

  const tableCss = {
    border: "2px solid #000",
    padding: "6px",
    marginBottom: "5px",
    textAlign: "left",
  };
  const tableItemCss = {
    paddingRight: "3vw",
  };

  return (
    <>
      <h1>Bucketlist</h1>
      {serverData.map((data) => (
        <div key={data.id} style={tableCss}>
          <tr>
            <th style={tableItemCss}>Nr</th>
            <th style={tableItemCss}>Titel</th>
          </tr>
          <tr>
            <td style={tableItemCss}>{data.id}</td>
            <td style={tableItemCss}>{data.title}</td>
          </tr>
        </div>
      ))}
    </>
  );
}

export default ApiBucketlist;
