export const dynamic = "force-dynamic";

import { SERVER_BASE_URL } from '@/config';
import FollowUp from '@/src/components/submitted-data/FollowUp';
import { headers } from 'next/headers';

async function getSubmittedData(searchParams: any) {

    let { formId } = searchParams
 
    let { filterBy } = searchParams
    let { filterValue } = searchParams
    let { from } = searchParams
    let { to } = searchParams
    let { searchText } = searchParams
    let { page } = searchParams




    const res = await fetch(`${SERVER_BASE_URL}/api/submitted-data/follow-up?formId=${formId}&page=${page}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}&searchText=${searchText}`, { cache: 'no-store',headers: headers() })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getRegions() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/region`, { cache: 'no-store' });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    return await response.json();
  
  }
  

export default async function Page({ searchParams }: any) {
    const followUpData = await getSubmittedData(searchParams)
    const regions = await getRegions()

    // const { data: session } = useSession()

    let data = { followUpData: followUpData ,regions}

    return <FollowUp data={data} />


}

