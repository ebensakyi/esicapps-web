import Permission from "../../components/account/Premission";
import Header from "../../components/Header";
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";

export default function permission({ userTypes, pages, pageAccess }) {
  return (
    <div id="layout-wrapper">
      <Header />

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <Permission
              userTypes={userTypes.data}
              pages={pages}
              pageAccess={pageAccess}
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
  const userTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/primary-data/user-type`
  ).then((res) => res.json());

  console.log(userTypes);

  const pages = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/pages`).then(
    (res) => res.json()
  );
  const pageAccess = await fetch(`${SERVER_BASE_URL}/api/v1/account/permission`).then((res) => res.json());
  const _pages = await pages.map((page) => ({
    label: page.name + " " + page.id,
    value: page.id,
  }));
  return {
    props: {
      userTypes,
      pages,
      pageAccess,
    },
  };
}
