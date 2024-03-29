export const dynamic = "force-dynamic";

import { SERVER_BASE_URL } from "@/config";
import Map from "@/src/components/map/Map";
import { headers } from "next/headers";
//import dynamic from "next/dynamic";

// const Map = dynamic(() => import("@/src/components/map/Map"), {
//     ssr: false
// });


async function getData(searchParams: any) {
    let { formId } = searchParams
   // let response = await fetch(`${SERVER_BASE_URL}/api/map?formId=${formId}`, { next: { revalidate: 14400,headers: headers()  } });

    let response = await fetch(`${SERVER_BASE_URL}/api/map?formId=${formId}`,{ cache: 'no-store',headers: headers() } );

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

export default async function Page({ searchParams }: any) {


    const mapData = await getData(searchParams)


    let data = { mapData }





    return <Map data={data}/>


}
