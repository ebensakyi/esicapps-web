
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import Health from '../../components/submitted-data/Health'


export default function health({ data }) {
    return (
        <div id="layout-wrapper">
            <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <Health data={data} />

                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { token } = context.req.cookies;
    const  {published}  =context.query;
    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: true,
            },
        }
    }
    const data = await fetch(`${SERVER_BASE_URL}/api/v1/data/health?published=${published}`).then(
        (res) => res.json()
    );

   
    return {
        props: {
            data,
        },
    };

}
