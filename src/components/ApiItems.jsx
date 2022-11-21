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
      "http://bucketlist-back-end.test/api/bucketlist_items"
    );
    setServerData(data);
  };

  

  return (
    <>
      {serverData.map((data) => (
        <div key={data.id}>
          <h1>Items</h1>
          <tr>
            <th>Nr</th>
            <th>Naam</th>
            <th>Descriptie</th>
          </tr>
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.description}</td>
          </tr>
        </div>
      ))}
    </>
  );
}

export default ApiItems;
