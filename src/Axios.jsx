import { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setData(response.data);
  };
  return (
    <>
      <div>
        <button onClick={onClick}>LOAD</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data)}
          readOnly={true}
        ></textarea>
      )}
    </>
  );
};
export default Axios;
