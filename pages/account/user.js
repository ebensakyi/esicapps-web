
import ListUser from '../../components/user/ListUser'
import User from '../../components/user/User'

import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";


export default function user({ regions,  districts, userTypes,users }) {
    return (
        // <div id="layout-wrapper">
        //     <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <User users={users} regions = {regions} districts={districts} userTypes = {userTypes}/>
                        {/* <ListUser/> */}

                    </div>
                </div>
            </div>
        // </div>
    )
}


export async function getServerSideProps(context) {
    const { session } = context.req.cookies;

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: true,
            },
        }
    }
    const userTypes = await fetch(`${SERVER_BASE_URL}/api/v1/account/user-type?session=${session}`).then(
        (res) => res.json()
    );

    const users = await fetch(`${SERVER_BASE_URL}/api/v1/account/user?session=${session}`).then(
        (res) => res.json()
    );

    const regions = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/region?session=${session}`).then(
        (res) => res.json()
    );
    const districts = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/district?session=${session}`).then(
        (res) => res.json()
    );
    

    return {
        props: {
            userTypes,
            users,
            districts,
            regions
        },
    };

}