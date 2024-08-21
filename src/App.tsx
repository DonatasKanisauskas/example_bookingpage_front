// import { useEffect, useState } from "react";
// import Status from "./components/Status";
import Kalendorius from "./components/Calendar";
import ScheduleTable from "./components/ScheduleTable";

// interface backendType {
//   status: boolean;
//   sqlStatus: boolean;
//   msg: string;
// }

function App() {
  // const [backend, setBackend] = useState<backendType>({
  //   status: false,
  //   sqlStatus: false,
  //   msg: "",
  // });

  // products update
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // setLoading(true);
  //     try {
  //       const response = await fetch(`http://127.0.0.1:5000`);
  //       const data = await response.json();
  //       setBackend(data);
  //     } catch (err) {
  //       console.error("error", `${err instanceof Error ? err.message : err}`);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="w-full bg-red-800 flex flex-col gap-3 items-stretch p-3 text-white text-center ">
      <h1 className="text-2xl font-bold">Example Booking Page</h1>
      <div className="flex gap-3 bg-orange-600 p-3">
        <div className="w-full bg-orange-300 p-3 flex flex-col gap-3">
          <div>
            <Kalendorius />
          </div>
          <div>
            <ScheduleTable />
          </div>
        </div>
        <div className="w-full bg-orange-300 p-3 gap-3">
          <div>Booked Days</div>
          <div>Checkout</div>
        </div>
      </div>
    </div>
  );
}

export default App;
