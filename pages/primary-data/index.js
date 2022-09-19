
import PrimaryData from '../../components/primary_data/PrimaryData'
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";


export default function primary_data({ regions, districts,electoralAreas }) {
    return (
        <div id="layout-wrapper">
            <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <PrimaryData regions={regions} districts={districts} electoralAreas={electoralAreas}/>

                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { token } = context.req.cookies;

    // if (!token) {
    //     return {
    //         redirect: {
    //             destination: '/auth/login',
    //             permanent: true,
    //         },
    //     }
    // }
    const regions = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/region`).then(
        (res) => res.json()
    );

    const districts = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/district`).then(
        (res) => res.json()
    );

    const electoralAreas = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/electoral-area`).then(
        (res) => res.json()
    );
    return {
        props: {
            regions,
            districts,
            electoralAreas
        },
    };

}
