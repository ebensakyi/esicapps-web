
import User from "@/src/app/components/user/User";
import { userLevel } from '../../../prisma/seed/userLevel';




async function getRoles() {

    let response = await fetch(`http://localhost:3000/api/user/role`, { cache: 'no-store' });

    console.log(response);
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getUserLevel() {

    let response = await fetch(`http://localhost:3000/api/primary-data/user-level`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getRegion() {

    let response = await fetch(`http://localhost:3000/api/primary-data/region`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getDistrict() {

    let response = await fetch(`http://localhost:3000/api/primary-data/district`, { cache: 'no-store' });

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
    const userLevels = await getUserLevel()
    const regions = await getRegion()
    const districts = await getDistrict()

    let data = { users, roles, userLevels, regions, districts }



    return (

        <User data={data} />

    )
}
