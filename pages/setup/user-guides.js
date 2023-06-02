import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SERVER_BASE_URL } from "../../config";
import AddUserGuides from "../../components/setup/AddUserGuides";

export default function addUserGuides({ data }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <AddUserGuides data={data} />
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

  const data = await fetch(
    `${SERVER_BASE_URL}/api/v1/setup/user-guides?session=${session}`
  ).then((res) => res.json());


  return {
    props: {
      data,
      
    },
  };
}
