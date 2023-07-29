
import { LOGIN_URL, SERVER_BASE_URL } from "@/config";

import { Suspense } from "react";
import Guide from "../../../components/user/Guide";
async function getUserGuides() {

    let response = await fetch(`${SERVER_BASE_URL}/api/user/guide`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


async function getFileType() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/file-type`, { cache: 'no-store' });

    

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}



export default async function page() {
  

    const guides = await getUserGuides()
    const fileTypes = await getFileType()

    let data = { guides, fileTypes }

    // console.log(data);
    



    return <Guide data={data} />


}
