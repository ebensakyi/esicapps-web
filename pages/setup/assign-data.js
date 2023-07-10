import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SERVER_BASE_URL } from "../../config";
import AssignData from "../../components/setup/AssignData";

export default function assignData({ districts, assignments }) {
  return (
    // <div id="layout-wrapper">
    //   <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <AssignData assignments={assignments} districts={districts} />
          </div>
        </div>
      </div>
    // </div>
  );
}

export async function getServerSideProps(context) {
  const { session } = context.req.cookies;

  console.log("sesssion ", session);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }
  const districts = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/district?session=${session}`
  ).then((res) => res.json());
  const assignments = await fetch(
    `${SERVER_BASE_URL}/api/v1/setup/assign-data`
  ).then((res) => res.json());


  console.log(assignments);
  return {
    props: {
      districts,
      assignments,
    },
  };
}
