
import Institution from '../../components/data/Institution'
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
//import { SERVER_BASE_URL } from "../../config";


export default function user({ data }) {
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
