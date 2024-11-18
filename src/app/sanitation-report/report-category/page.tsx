export const dynamic = "force-dynamic";

import { SERVER_BASE_URL } from "@/config";
import ConfigureReports from "@/src/components/sanitation-report/ConfigureReports";

import { headers } from "next/headers";
async function getReportCategory(searchParams: any) {
    try {
   
        
        let response = await fetch(`${SERVER_BASE_URL}/api/sanitation-report/report-category`, { cache: 'no-store', headers: headers() });

        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        return response.json();
    } catch (error) {

    }


}

export default async function Page({ searchParams }: any) {


    const reportCategories= await getReportCategory(searchParams)



    let data = { reportCategories }

    return <ConfigureReports data={data} />


}
