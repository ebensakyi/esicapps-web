import Header from "../../../components/Header";

import ElectoralAreaBulkUploadTemplate from "../../../components/setup/ElectoralAreaBulkUploadTemplate";

export default function eabut({  }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <ElectoralAreaBulkUploadTemplate  />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { session } = context.req.cookies;

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
