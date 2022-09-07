import UserType from "../../components/account/UserType";
import ListRole from "../../components/account/ListUserType";
import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";

export default function userype({ userLevels, pages }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <UserType userLevels={userLevels} pages={pages} />
            <ListRole />
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
  const userLevels = await fetch(
    `${SERVER_BASE_URL}/api/v1/default/user-level`
  ).then((res) => res.json());

  const pages = await fetch(`${SERVER_BASE_URL}/api/v1/default/pages`).then(
    (res) => res.json()
  );

  console.log(userLevels);
  return {
    props: {
      userLevels,
      pages,
    },
  };
}
