export const dynamic = "force-dynamic";

import { SERVER_BASE_URL } from "@/config";
import { logger } from "@/logger";
import User from "@/src/components/user/User";
import { headers } from "next/headers";




async function getRoles() {
try {
     let response = await fetch(`${SERVER_BASE_URL}/api/user/role`, { cache: 'no-store',headers: headers() });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();
} catch (error) {
    
}
   

}

async function getUserLevel() {
try {
     let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/user-level`, { cache: 'no-store',headers: headers() });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();
} catch (error) {
    logger.error("getUserLevel==>",error);

}
   

}

async function getRegion() {
try {
     let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/region`, { cache: 'no-store',headers: headers() });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();
} catch (error) {
    logger.error("getRegion==>",error);

}
   

}

async function getDistrict() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/district?get_all=1`, { cache: 'no-store',headers: headers() });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getUsers(searchParams: any) {
    try {
          let { page } = searchParams
let { searchText } = searchParams
    let response = await fetch(`${SERVER_BASE_URL}/api/user?page=${page}&searchText=${searchText}`, { cache: 'no-store',headers: headers() });
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();
    } catch (error) {
        logger.error("getUsers==>",error);

    }
    
  

}


export default async function Page({ searchParams }: any) {
    const users = await getUsers(searchParams)
    const roles = await getRoles()
    const userLevels = await getUserLevel()
    const regions = await getRegion()
   const districts = await getDistrict()

    let data = { users, roles, userLevels, regions,districts }



    return (

        <User data={data} />

    )
}
