
import { LOGIN_URL, SERVER_BASE_URL } from "@/config";

import { Suspense } from "react";
import Guide from "../../components/user/Guide";
import { fileType } from '../../../../prisma/seed/fileType';
async function getUserGuides() {

    let response = await fetch(`${SERVER_BASE_URL}/api/user/guide`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


async function getFileType() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/file-type`);

    console.log(response);
    

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
