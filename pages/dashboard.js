
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
//import { SERVER_BASE_URL } from "../../config";
import Dashboard from '../../components/Dashboard';

export default function dashboard({ examTypes, paymentTypes }) {
    return (
        <div >

            <Header />

            <Dashboard />

            <Footer />
        </div>
    )
}


// export async function getServerSideProps(context) {
//     const { token } = context.req.cookies;

//     if (!token) {
//         return {
//             redirect: {
//                 destination: '/auth/login',
//                 permanent: true,
//             },
//         }
//     }
//     const examTypes = await fetch(`${SERVER_BASE_URL}/api/exam-type`).then(
//         (res) => res.json()
//     );

//     const paymentTypes = await fetch(`${SERVER_BASE_URL}/api/payment-type`).then(
//         (res) => res.json()
//     );
//     return {
//         props: {
//             examTypes,
//             paymentTypes
//         },
//     };

// }
