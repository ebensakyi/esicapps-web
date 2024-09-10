export const dynamic = "force-dynamic";

import { LOGIN_URL, SERVER_BASE_URL } from "@/config";
import PremisesAndForm from "@/src/components/primary-data/PremisesAndForm";
import { headers } from "next/headers";


async function getInspectionForms() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/inspection-form`, {
        cache: 'no-store', method: "GET",
        headers: headers()
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}
async function getData() {


    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/premises-forms`, {
        cache: 'no-store', method: "GET",
        headers: headers()
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


export default async function Page({ searchParams }: any) {

    const formPremises = await getData()
    const inspectionForms = await getInspectionForms()


    let data = { formPremises,inspectionForms }





    return <PremisesAndForm data={data} />


}
