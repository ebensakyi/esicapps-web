export const dynamic = "force-dynamic";
import { SERVER_BASE_URL } from '@/config';

async function getSubmittedData(searchParams: any) {

   
    let { userId } = searchParams




    const res = await fetch(`${SERVER_BASE_URL}/api/submitted-data/statistics?userId=${userId}`, { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default async function Page({ searchParams }: any) {
    const submittedData = await getSubmittedData(searchParams)


    let data = { submittedData: submittedData }



    return <h1></h1>


}

