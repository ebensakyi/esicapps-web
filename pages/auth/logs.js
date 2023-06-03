
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import Logs from '../../components/auth/Logs'


export default function logs({ data }) {
    return (
        // <div id="layout-wrapper">
        //     <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <Logs data={data} />

                    </div>
                </div>
            </div>
        // </div>
    )
}


export async function getServerSideProps(context) {
    const { session } = context.req.cookies;
    const page = context.query.page || 1;

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: true,
            },
        }
    }
    const data = await fetch(`${SERVER_BASE_URL}/api/v1/auth/logs?page=${page}`).then(
        (res) => res.json()
    );

   
    return {
        props: {
            data,
        },
    };

}
