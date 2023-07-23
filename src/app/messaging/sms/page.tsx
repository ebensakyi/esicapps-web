
import {  SERVER_BASE_URL } from "@/config";

import Guide from "../../../components/user/Guide";
async function getSMSs() {

    let response = await fetch(`${SERVER_BASE_URL}/api/messaging/sms`, { cache: 'no-store' });

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}


async function getSendingType() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/sending-type`, { cache: 'no-store' });    

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getRegions() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/region`, { cache: 'no-store' });    

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

async function getDistricts() {

    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/district`, { cache: 'no-store' });    

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}

export default async function page() {
  

    const sms = await getSMSs()
    const sendingTypes = await getSendingType()
    const regions = await getRegions()
    const districts = await getDistricts()

    let data = { sms, sendingTypes, regions, districts }  

    // console.log(data);
    



    return <Guide data={data} />


}
