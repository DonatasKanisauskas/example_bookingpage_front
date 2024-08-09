import "./Status.css";

interface statusProps {
  backendStatus: boolean;
  sqlStatus: boolean;
}

function Status({ backendStatus, sqlStatus }: statusProps) {
  return (
    <div className="StatusWindow">
      <div className="status backend">
        <label>Backend</label>
        <p className={backendStatus ? "active" : "down"}>
          {backendStatus ? "Active" : "Down"}
        </p>
      </div>
      <div className="status sql">
        <label>Database</label>
        <p className={sqlStatus ? "active" : "down"}>
          {sqlStatus ? "Active" : "Down"}
        </p>
      </div>
    </div>
  );
}

export default Status;
