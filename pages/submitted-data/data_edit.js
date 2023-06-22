
import { SERVER_BASE_URL } from "../../config";
import DataEdit from "../../components/submitted-data/DataEdit";

export default function data_edit({ data }) {
  return (
    // <div id="layout-wrapper">
    //   <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <DataEdit data={data} />
          </div>
        </div>
      </div>
    // </div>
  );
}

export async function getServerSideProps(context) {
  const { session } = context.req.cookies;
  const { id } = context.query;
  const inspectionFormId = context.query.inspectionFormId || 1;

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }
  const data = await fetch(
    `${SERVER_BASE_URL}/api/v1/submitted-data/data-view?id=${id}&?session=${session}&inspectionFormId=${inspectionFormId}&session=${session}`
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}
