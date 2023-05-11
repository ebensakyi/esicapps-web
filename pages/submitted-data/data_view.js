
import DataView from '../../components/submitted-data/DataView';
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";


export default function data_view({ data }) {
    return (
        <div id="layout-wrapper">
            <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <DataView data={data} />

                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { token } = context.req.cookies;
    const  {id}  =context.query;
    const inspectionFormId = context.query.inspectionFormId || 1;


    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: true,
            },
        }
    }
    const data = await fetch(`${SERVER_BASE_URL}/api/v1/submitted-data/data-view?id=${id}&?token=${token}&inspectionFormId=${inspectionFormId}&token=${token}`).then(
        (res) => res.json()
    );

   
    return {
        props: {
            data,
        },
    };

}
