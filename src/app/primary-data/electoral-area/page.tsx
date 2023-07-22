
import { LOGIN_URL, SERVER_BASE_URL } from "@/config";
import ElectoralArea from "@/src/components/primary-data/ElectoralArea";


async function getRegions() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/region`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}
async function getDistricts() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/district`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getElectoralAreas() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/electoral-area`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}



export default async function page() {
  
    const regions = await getRegions()
    const districts = await getDistricts()

    const electoralAreas = await getElectoralAreas()

    let data = {regions,districts, electoralAreas }

    // console.log(data);
    



    return <ElectoralArea data={data} />


}
