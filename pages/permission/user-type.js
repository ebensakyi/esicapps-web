import ListUser from "../../components/user/ListUser";

//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import Page from "../../components/permission/Page";
import UserType from "../../components/permission/UserType";

export default function page({ pagesOptions, userTypes, pages }) {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <UserType
            pagesOptions={pagesOptions}
            pages={pages}
            userTypes={userTypes}
          />
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
  const userTypes = await fetch(
    `${SERVER_BASE_URL}/api/v1/permission/user-type?session=${session}`
  ).then((res) => res.json());
  const pages = await fetch(
    `${SERVER_BASE_URL}/api/v1/permission/page?session=${session}`
  ).then((res) => res.json());

  const pagesOptions = pages.map((page) => {
    return {
      value: page.id,
      label: page.name,
    };
  });

  return {
    props: {
      pagesOptions,
      pages,
      userTypes,
    },
  };
}
