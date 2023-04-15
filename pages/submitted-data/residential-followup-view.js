
import ResidentialFollowupView from '../../components/submitted-data/ResidentialFollowupView';
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";


export default function residential_followup_view({ data }) {
    return (
        <div id="layout-wrapper">
            <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <ResidentialFollowupView data={data} />

                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { token } = context.req.cookies;
    const  {id}  =context.query;


    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: true,
            },
        }
    }
    const data = await fetch(`${SERVER_BASE_URL}/api/v1/submitted-data/residential-followup-view?id=${id}`).then(
        (res) => res.json()
    );

    console.log(data);
   
    return {
        props: {
            data
        },
    };

}
