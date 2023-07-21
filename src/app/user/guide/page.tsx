
import { LOGIN_URL, SERVER_BASE_URL } from "@/config";
import Log from "@/src/app/components/user/Log";

import { Suspense } from "react";
async function getUserGuides() {

    let response = await fetch(`${SERVER_BASE_URL}/api/user-guides`);

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}






export default async function page() {
  

    const guide = await getUserGuides()

    let data = { guide }

    // console.log(data);
    



    return <Log data={data} />


}
