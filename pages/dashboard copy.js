
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SERVER_BASE_URL } from "../config";
import Dashboard from '../components/Dashboard'

export default function dashboard({data,regions}) {
    return (
        <div id="layout-wrapper">
        <Header />
  
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <Dashboard
              data={data}
              
              regions={regions}
                // userTypes={userTypes}
              />
            </div>
          </div>
        </div>
      </div>
    )
}


export async function getServerSideProps(context) {
    const { token } = context.req.cookies;


    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: true,
            },
        }
    }
    const data = await fetch(`${SERVER_BASE_URL}/api/v1/dashboard?token=${token}`).then(
        (res) => res.json()
    );
    const regions = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/region`).then(
        (res) => res.json()
    );
    return {
        props: {
          data,regions
        },
    };

}