import ListUser from "../../components/user/ListUser";

//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import Page from "../../components/permission/Page";

export default function page({ pages }) {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <Page pages={pages}  />
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
  const pages = await fetch(
    `${SERVER_BASE_URL}/api/v1/permission/page?token=${token}`
  ).then((res) => res.json());

  
  return {
    props: {
      pages,
     
    },
  };
}
