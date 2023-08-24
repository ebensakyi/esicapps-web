
import { LOGIN_URL, SERVER_BASE_URL } from "@/config";
import District from "@/src/components/primary-data/District";
import ElectoralArea from "@/src/components/primary-data/ElectoralArea";
import { headers } from "next/headers"


async function getRegions() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/region`, {
        cache: 'no-store', method: "GET",
        headers: headers()
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}
async function getDistricts() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/district`, {  cache: 'no-store', method: "GET",
    headers: headers() });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


export default async function page() {

    const regions = await getRegions()
    const districts = await getDistricts()


    let data = { regions, districts }





    return <District data={data} />


}
