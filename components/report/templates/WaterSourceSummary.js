

const SubmissionSummary = ({ data,level }) => {
    <div className="card">
    <div className="card-header">
      <h5 className="card-title mb-0">SUBMISSION SUMMARY</h5>
    </div>
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
            <th>Form</th>
            <th>Baseline</th>
            <th>ReInspection</th>
            <th>Follow Up</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt) => {
            return (
              <tr key={dt.id}>
                {" "}
                <td>{dt.name}</td>
                <td>{dt.baselineCount}</td>
                <td>{dt.reinspectionCount}</td>
                <td>{dt.followupCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
}

export default SubmissionSummary;
