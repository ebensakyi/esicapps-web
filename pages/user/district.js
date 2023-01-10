
import DistrictUser from '../../components/user/DistrictUser'
import ListDistrictUser from '../../components/user/ListDistrictUser'
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";


export default function user({ regions, userTypes, districts,users }) {
    return (
        <div id="layout-wrapper">
            <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <DistrictUser regions = {regions} userTypes = {userTypes} districts={districts}/>
                        <ListDistrictUser users = {users}/>

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
    const userTypes = await fetch(`${SERVER_BASE_URL}/api/v1/user/user-type?token=${token}`).then(
        (res) => res.json()
    );

    const users = await fetch(`${SERVER_BASE_URL}/api/v1/user/district`).then(
        (res) => res.json()
    );

    const regions = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/region`).then(
        (res) => res.json()
    );
    const districts = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/district`).then(
        (res) => res.json()
    );
    

    return {
        props: {
            userTypes,
            users,
            regions,districts
        },
    };

}
