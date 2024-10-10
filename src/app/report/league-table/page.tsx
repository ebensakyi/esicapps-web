// export const dynamic = "force-dynamic";

import { SERVER_BASE_URL } from '@/config';
import LeagueTable from '@/src/components/report/LeagueTable';
import UserSubmissions from '@/src/components/report/UserSubmissions';
import { headers } from 'next/headers'



async function getRegions() {


    const res = await fetch(`${SERVER_BASE_URL}/api/primary-data/region`, { cache: 'no-store', headers: headers() })

    if (!res.ok) {
        throw new Error('Failed to fetch data 1')
    }

    return res.json()
}


async function getForms() {


    const res = await fetch(`${SERVER_BASE_URL}/api/primary-data/inspection-form`, { cache: 'no-store', headers: headers() })

    if (!res.ok) {
        throw new Error('Failed to fetch data 2')
    }

    return res.json()
}

async function getLeagueTable() {

    // let { region } = searchParams
    const res = await fetch(`${SERVER_BASE_URL}/api/report/league-table`, { cache: 'no-store', headers: headers() })

    

    if (!res.ok) {
        throw new Error('Failed to fetch data 3')
    }

    return res.json()
}


export default async function Page({ searchParams }: any) {

    const forms = await getForms()

    const regions = await getRegions()
    const leagueTable = await getLeagueTable()


    

    let data: any = { regions, forms, leagueTable }



    return <LeagueTable data={data} />


}

