
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";
import Profile from '../../components/auth/Profile';


export default function profile({ regions,  districts, userTypes,user }) {
    return (
        <div id="layout-wrapper">
            <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <Profile regions = {regions} districts={districts} userTypes = {userTypes} user={user}/>

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
    const user = await fetch(`${SERVER_BASE_URL}/api/v1/auth/profile?token=${token}`).then(
        (res) => res.json()
    );
    const userTypes = await fetch(`${SERVER_BASE_URL}/api/v1/account/user-type?token=${token}`).then(
        (res) => res.json()
    );

    const users = await fetch(`${SERVER_BASE_URL}/api/v1/account/user?token=${token}`).then(
        (res) => res.json()
    );

    const regions = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/region?token=${token}`).then(
        (res) => res.json()
    );
    const districts = await fetch(`${SERVER_BASE_URL}/api/v1/primary-data/district?token=${token}`).then(
        (res) => res.json()
    );
    

    return {
        props: {
            userTypes,
            user,
            districts,
            regions
        },
    };

}
