export const dynamic = "force-dynamic";

import { SERVER_BASE_URL } from "@/config";
//import dynamic from "next/dynamic";

// const Map = dynamic(() => import("@/src/components/map/Map"), {
//     ssr: false
// });


async function getData() {

    let response = await fetch(`${SERVER_BASE_URL}/api/map`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

export default async function Page() {


    const mapData = await getData()


    let data = { mapData }





    return <Map data={data} />


}
