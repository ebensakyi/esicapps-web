import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SERVER_BASE_URL } from "../../config";
import CommunityBulkUploadTemplate from "../../../components/setup/CommunityBulkUploadTemplate";

export default function cbut({  }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <CommunityBulkUploadTemplate/>
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
