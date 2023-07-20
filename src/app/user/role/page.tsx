
import Role from "@/src/app/components/user/Role";
import { Suspense } from "react";
async function getPages() {
    // const res = await fetch(`http://localhost:3000/api/primary-data/pages`)
    // console.log(res.json());




    let response = await fetch(`http://localhost:3000/api/primary-data/pages`);
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


async function getRoles() {

    let response = await fetch(`http://localhost:3000/api/user/role`,{ cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}



export default async function page() {
    const pages = await getPages()
    const roles = await getRoles()

    let data = { pages, roles }



    return (

            <Role data={data} />

    )
}
