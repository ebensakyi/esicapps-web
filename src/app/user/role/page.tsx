export const dynamic = "force-dynamic";

import { LOGIN_URL, SERVER_BASE_URL } from "@/config";
import Role from "@/src/components/user/Role";
import { headers } from "next/headers";

import { Suspense } from "react";
async function getPages() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/pages`,{ cache: 'no-store',headers: headers() });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


async function getRoles() {

    let response = await fetch(`${SERVER_BASE_URL}/api/user/role`, { cache: 'no-store',headers: headers() });
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}



export default async function Page() {
  

    const pages = await getPages()
    const roles = await getRoles()

    let data = { pages, roles }



    return <Role data={data} />


}
