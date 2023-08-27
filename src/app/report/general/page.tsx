
import { SERVER_BASE_URL } from '@/config';
import DataView from '@/src/components/submitted-data/DataView';

async function getReports(searchParams: any) {
    
    let { formId } = searchParams
    let { published } = searchParams
    let { id } = searchParams


    


    const res = await fetch(`${SERVER_BASE_URL}/api/submitted-data/data-view?id=${id}&published=${published}&formId=${formId}`,{cache:"no-store"})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default async function Page({ searchParams }: any) {
    const reports = await getReports(searchParams)


    let data = { reports }



    return <DataView data={data} />


}

