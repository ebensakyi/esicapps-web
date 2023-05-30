import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SERVER_BASE_URL } from "../../config";
import BulkUploadTemplates from "../../components/setup/BulkUploadTemplates";
import DistrictBulkUploadTemplate from "../../../components/setup/DistrictBulkUploadTemplate";

export default function dbut({  }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <DistrictBulkUploadTemplate/>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  if (!token) {
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
