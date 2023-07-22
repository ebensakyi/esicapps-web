
import { LOGIN_URL, SERVER_BASE_URL } from "@/config";
import Log from "@/src/app/components/user/Log";

import { Suspense } from "react";
async function getLogs() {

    let response = await fetch(`${SERVER_BASE_URL}/api/user/log`,{ cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}






export default async function page() {
  

    const logs = await getLogs()

    let data = { logs }

    // console.log(data);
    



    return <Log data={data} />


}
