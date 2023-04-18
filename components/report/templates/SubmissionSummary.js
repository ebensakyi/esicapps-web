import Image from 'next/image'
import moment from 'moment';


const SubmissionSummary = ({ data }) => {
  var dateString =  moment().format("DD/MM/yyyy HH:mm a");
  const handleFormName = (formId) => {
    try {
      if (formId == 1) {
        return `RESIDENTIAL PREMISES`;
      } else if (formId == 2) {
        return `EATING & DRINKING PREMISES`;
      } else if (formId == 3) {
        return `HEALTH PREMISES`;
      } else if (formId == 4) {
        return `HOSPITALITY PREMISES`;
      } else if (formId == 5) {
        return `INSTITUTION PREMISES`;
      } else if (formId == 6) {
        return `INDUSTRY PREMISES`;
      } else if (formId == 7) {
        return `MARKETS & LORRY PARK PREMISES`;
      } else if (formId == 8) {
        return `SANITARY FACILITY PREMISES`;
      }
    } catch (error) {
      console.log(error);
    }
  };

   return <div className="card">
    <div className="card-header" style={{margin: "auto"}}>

      <center><Image
      src="/assets/images/logo_.png"
      alt="title"
      width={180}
      height={100}
	  quality={100}
    /></center>
    <h5 className="card-title mb-0">  EXPANDED SANITARY INSPECTIONS COMPLIANCE APPLICATION</h5>
     <center><h5 className="card-title mb-0">SUBMISSION SUMMARY</h5></center> 
     <center>Report Generated On: {dateString}
</center>

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
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dt) => {
            return (
              <tr key={dt.id}>
                {" "}
                <td>{handleFormName(dt.inspectionFormId)}</td>
                <td>{dt._count.inspectionFormId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
}

export default SubmissionSummary;
