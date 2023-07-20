
import Role from "@/src/app/components/user/User";
import { Suspense } from "react";



async function getRoles() {

    let response = await fetch(`http://localhost:3000/api/user/role`, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getUsers() {

    let response = await fetch(`http://localhost:3000/api/user`, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


export default async function page() {
    const users = await getUsers()
    const roles = await getRoles()

    let data = { users, roles }



    return (

        <Role data={data} />

    )
}
