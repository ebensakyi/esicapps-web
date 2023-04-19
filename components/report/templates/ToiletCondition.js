import ReportHeader from "./ReportHeader";

// Pipe-borne
// Protected hand dug well
// Unprotected hand dug well
// Rain Water
// River/stream
// Tanker service
// Borehole
// Mechanised Borehole
// Not applicable
const ToiletCondition = ({ data }) => {
 
  let title = "TOILET CONDITION";

  return (
    <div className="card">
      <ReportHeader title={title} />
      <div className="card-body">
        <div className="col-sm"></div>
        <br />
        <table
          id="fixed-header"
          className="table table-bordered dt-responsive nowrap table-striped align-middle"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Source</th>
              <th>Safe</th>
              <th>Unsafe</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((dt) => {
              return (
                <tr key={dt.id}>
                  {" "}
                  <td>{dt.name}</td>
                  <td>{dt.safe}</td>
                  <td>{dt.unsafe}</td>
                  <td>{dt.safe}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ToiletCondition;
