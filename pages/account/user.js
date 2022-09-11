import User from "../../components/account/User";
import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";

export default function user({ users }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <User users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  //   if (!token) {
  //     return {
  //       redirect: {
  //         destination: "/auth/login",
  //         permanent: true,
  //       },
  //     };
  //   }
  const users = await fetch(`${SERVER_BASE_URL}/api/v1/account/user`).then(
    (res) => res.json()
  );

  return {
    props: {
      users,
    },
  };
}
