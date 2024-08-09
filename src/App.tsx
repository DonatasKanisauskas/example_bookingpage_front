import { useEffect, useState } from "react";
import "./app.css";
import Status from "./Status";

interface backendType {
  status: boolean;
  sqlStatus: boolean;
  msg: string;
}

function App() {
  const [backend, setBackend] = useState<backendType>({
    status: false,
    sqlStatus: false,
    msg: "",
  });

  // products update
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:5000`);
        const data = await response.json();
        setBackend(data);
      } catch (err) {
        console.error("error", `${err instanceof Error ? err.message : err}`);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="content-center full flex flex-col gap-30">
        <h1>Example Booking Page</h1>
        <p>{backend.msg}</p>
        <Status backendStatus={backend.status} sqlStatus={backend.sqlStatus} />
      </div>
    </div>
  );
}

export default App;
