import axios from "axios";
import { useEffect, useState } from "react";

function ApiItems() {
  // Bucketlist
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(
      "http://bucketlist.test/api/bucketlist_items"
    );
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
      <h1 style={{ paddingTop: "40px" }}>Items</h1>
      {serverData.map((data) => (
        <div key={data.id} style={tableCss}>
          <tr>
            <th style={tableItemCss}>Nr</th>
            <th style={tableItemCss}>Naam</th>
            <th style={tableItemCss}>Descriptie</th>
            <th style={tableItemCss}>Prioriteit</th>
            <th style={tableItemCss}>Done?</th>
          </tr>
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.description}</td>
            <td>{data.prioriteit}</td>
            <td>{data.done}</td>
          </tr>
        </div>
      ))}
    </>
  );
}

export default ApiItems;
