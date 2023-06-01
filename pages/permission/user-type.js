import ListUser from "../../components/user/ListUser";

//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import Page from "../../components/permission/Page";
import UserType from "../../components/permission/UserType";

export default function page({ pages }) {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <UserType pages={pages}  />
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
  const userType = await fetch(
    `${SERVER_BASE_URL}/api/v1/permission/user-type?token=${token}`
  ).then((res) => res.json());
  const pages = await fetch(
    `${SERVER_BASE_URL}/api/v1/permission/page?token=${token}`
  ).then((res) => res.json());
  
  return {
    props: {
      pages,
     
    },
  };
}
