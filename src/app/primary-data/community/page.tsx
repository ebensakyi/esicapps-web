export const dynamic = "force-dynamic";

import {  SERVER_BASE_URL } from "@/config";
import Community from "@/src/components/primary-data/Community";


async function getRegions() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/region`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}



async function getCommunities() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/community`, { cache: 'no-store' });
    

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}



export default async function Page() {
  
    const regions = await getRegions()
  
    const communities = await getCommunities()

    let data = {regions, communities }

    



    return <Community data={data} />


}
