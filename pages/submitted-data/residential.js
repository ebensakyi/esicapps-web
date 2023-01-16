
import Residential from '../../components/submitted-data/Residential'
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import { inspect } from 'util';


export default function residential({ data }) {
    return (
        <div id="layout-wrapper">
            <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <Residential data={data} />

                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { token } = context.req.cookies;
    const  {published}  =context.query;

    console.log(published);

    if (!token) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: true,
            },
        }
    }
    const data = await fetch(`${SERVER_BASE_URL}/api/v1/submitted-data/residential?published=${published}`).then(
        (res) => res.json()
    );

    inspect(data)
   
    return {
        props: {
            data,
        },
    };

}