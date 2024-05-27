export const dynamic = "force-dynamic";

import { SERVER_BASE_URL } from '@/config';
import { logger } from '@/logger';
import DataTransfer from '@/src/components/assign-data/AssignData';
import { headers } from 'next/headers';


async function getAssignData() {
    try {

        const res = await fetch(`${SERVER_BASE_URL}/api/assign-data`, { cache: 'no-store', headers: headers() })

        if (!res.ok) {
            logger.error("getAssignData==>");

            throw new Error('Failed to fetch data')
        }

        return res.json()
    } catch (error) {
        logger.error("getAssignData==>", error);

    }


}
async function getDistricts() {
try {
     const res = await fetch(
        `${SERVER_BASE_URL}/api/primary-data/district?get_all=1`
        , { cache: 'no-store', headers: headers() })
    if (!res.ok) {
        logger.error("getDistricts==>");

        throw new Error('Failed to fetch data')
    }

    return res.json()
} catch (error) {
    logger.error("getDistricts==>", error);

}

   

}
export default async function Page() {

    const assignments = await getAssignData()
    const districts = await getDistricts()



    let data: any = { assignments, districts }



    return <DataTransfer data={data} />


}

