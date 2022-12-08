import User from "../../components/user/User";
import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";

export default function user({ users,userTypes, regions }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <User
              users={users}
            
              regions={regions}
              userTypes={userTypes}
            />
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
  const regions = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/region`).then(
    (res) => res.json()
  );

  const userTypes = await fetch(`${SERVER_BASE_URL}/api/v1/account/user-type`).then(
    (res) => res.json()
  );  
  
  // const districts = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/district`).then((res) => res.json());
  //  const electoralAreas = await fetch(
  //   `${SERVER_BASE_URL}/api/v1/primary-data/electoral-area`
  // ).then((res) => res.json());

  return {
    props: {
      users,
      userTypes,
      regions,

    },
  };
}
