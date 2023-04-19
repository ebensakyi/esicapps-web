import Image from 'next/image'
import moment from 'moment';

const ReportHeader = ({ data }) => {
  const handleFormName = (id) => {
    try {
      if (id == 1) {
        return `Hygiene Education`;
      } else if (id == 2) {
        return `Notice Served`;
      } else if (id == 3) {
        return `Criminal Summons`;
      }
    } catch (error) {
      console.log(error);
    }
  };
  var dateString =  moment().format("DD/MM/yyyy HH:mm a");

  return (
    <div className="card-header" style={{ margin: "auto" }}>
      <center>
        <Image
          src="/assets/images/logo_.png"
          alt="title"
          width={180}
          height={100}
          quality={100}
        />
      </center>
      <h5 className="card-title mb-0">
        {" "}
        EXPANDED SANITARY INSPECTIONS COMPLIANCE APPLICATION
      </h5>
      <center>
        <h5 className="card-title mb-0">SUBMISSION SUMMARY</h5>
      </center>
      <center>Report Generated On: {dateString}</center>
    </div>
  );
};

export default ReportHeader;
