export const dynamic = "force-dynamic";

import { SERVER_BASE_URL } from '@/config';
import DataTransfer from '@/src/components/assign-data/AssignData';


async function getForms() {


    const res = await fetch(`${SERVER_BASE_URL}/api/data-transfer`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {

    const forms = await getForms()



    let data: any = { forms }



    return <DataTransfer data={data} />


}

