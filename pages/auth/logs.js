
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import Logs from '../../components/auth/Logs'


export default function logs({ logs }) {
    return (
        <div id="layout-wrapper">
            <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <Logs logs={logs} />

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
    const logs = await fetch(`${SERVER_BASE_URL}/api/v1/auth/logs`).then(
        (res) => res.json()
    );

   
    return {
        props: {
            logs,
        },
    };

}
