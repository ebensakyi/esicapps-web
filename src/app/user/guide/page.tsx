
import { LOGIN_URL, SERVER_BASE_URL } from "@/config";

import { Suspense } from "react";
import Guide from "../../components/user/Guide";
async function getUserGuides() {

    let response = await fetch(`${SERVER_BASE_URL}/api/user/guide`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


async function getFileType() {

    let response = await fetch(`${SERVER_BASE_URL}/api/user/fil`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}



export default async function page() {
  

    const guide = await getUserGuides()

    let data = { guide }

    // console.log(data);
    



    return <Guide data={data} />


}
