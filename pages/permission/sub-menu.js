import ListUser from "../../components/user/ListUser";

//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import SubMenu from "../../components/permission/SubMenu";

export default function menu({ menus }) {
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <SubMenu menus={menus}  />
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
  const sub_menus = await fetch(
    `${SERVER_BASE_URL}/api/v1/permission/sub-menu?token=${token}`
  ).then((res) => res.json());

  
  return {
    props: {
        sub_menus,
     
    },
  };
}
