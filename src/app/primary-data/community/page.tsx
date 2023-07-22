
import { LOGIN_URL, SERVER_BASE_URL } from "@/config";
import Community from "@/src/components/primary-data/Community";


async function getElectoralAreas() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/electoral-area`, { cache: 'no-store' });

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



export default async function page() {
  

    const electoralAreas = await getElectoralAreas()
    const communities = await getCommunities()

    let data = { electoralAreas, communities }

    // console.log(data);
    



    return <Community data={data} />


}
