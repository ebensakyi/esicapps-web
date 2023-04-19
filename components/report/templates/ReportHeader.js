import Image from 'next/image'
import moment from 'moment';

const ReportHeader = ({ title,level }) => {

  var dateString =  moment().format("DD/MM/yyyy HH:mm a");

  const capitalize = str => {
    return (
      str.toUpperCase() 
    );
  };
  

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
        <h5 className="card-title mb-0">{title}</h5>
      </center>
      <center>
        {/* <h6 >REPORT FOR {capitalize(level)}</h6> */}
      </center>
      <center>Report Generated On: {dateString}</center>
    </div>
  );
};

export default ReportHeader;
