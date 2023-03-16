
import Institution from '../../components/submitted-data/Institution';
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";


export default function institution({ data }) {
    return (
        <div id="layout-wrapper">
            <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <Institution data={data} />

                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { token } = context.req.cookies;
    const  {published}  =context.query;


    const page = context.query.page || 1
    const searchText = context.query.searchText || ""
    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: true,
            },
        }
    }
    const data = await fetch(`${SERVER_BASE_URL}/api/v1/submitted-data/data?token=${token}&published=${published}&page=${page}&searchText=${searchText}&inspectionFormId=5`).then(

        (res) => res.json()
    );

   
    return {
        props: {
            data,
        },
    };

}
