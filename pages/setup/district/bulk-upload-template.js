import Header from "../../../components/Header";

import DistrictBulkUploadTemplate from "../../../components/setup/DistrictBulkUploadTemplate";

export default function dbut({  }) {
  return (
    // <div id="layout-wrapper">
    //   <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <DistrictBulkUploadTemplate/>
          </div>
        </div>
      </div>
    // </div>
  );
}

export async function getServerSideProps(context) {
  const { session } = context.req.cookies;

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }


  return {
    props: {
    
      
    },
  };
}
