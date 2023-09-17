export const dynamic = "force-dynamic";

import {  SERVER_BASE_URL } from "@/config";

import SMS from "@/src/components/messaging/SMS";
import SanitationReportList from "@/src/components/sanitation-report/SanitationReportList";
async function getSanitationReports() {

    let response = await fetch(`${SERVER_BASE_URL}/api/sanitation-report`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

export default async function Page() {
  

    const reports = await getSanitationReports()
  

    let data = { reports }  

    



    return <SanitationReportList data={data} />


}
