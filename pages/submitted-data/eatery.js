
import Eatery from '../../components/submitted-data/Eatery';
import Header from '../../components/Header'
//import Footer from '../../components/Footer'
import { SERVER_BASE_URL } from "../../config";


export default function eatery({ data,regions,districts,electoralAreas,communities }) {
    return (
        <div id="layout-wrapper">
            <Header />

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <Eatery data={data} districts={districts} regions={regions} electoralAreas={electoralAreas} communities={communities}/>

                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { token } = context.req.cookies;
    const { published } = context.query;
   const  filterBy  = context.query.filterBy || "regionId";
   const  filterValue  = context.query.filterValue ;
    const { from } = context.query;
    const { to } = context.query;
  
    const page = context.query.page || 1;
    const searchText = context.query.searchText || "";
    if (!token) {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: true,
        },
      };
    }
  
    const data = await fetch(
      `${SERVER_BASE_URL}/api/v1/submitted-data/data?token=${token}&published=${published}&page=${page}&searchText=${searchText}&inspectionFormId=2&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}
     `
    ).then((res) => res.json());
  
    const regions = await fetch(
      `${SERVER_BASE_URL}/api/v1/primary-data/region?token=${token}`
    ).then((res) => res.json());
    const districts = await fetch(
      `${SERVER_BASE_URL}/api/v1/primary-data/district?token=${token}`
    ).then((res) => res.json());
    const electoralAreas = await fetch(
      `${SERVER_BASE_URL}/api/v1/primary-data/electoral-area?token=${token}`
    ).then((res) => res.json());
    const communities = await fetch(
      `${SERVER_BASE_URL}/api/v1/primary-data/community?token=${token}`
    ).then((res) => res.json());
    return {
      props: {
        data,
        regions,
        districts,electoralAreas,communities
      },
    };
  }
  