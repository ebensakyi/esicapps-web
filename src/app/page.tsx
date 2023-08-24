import Image from 'next/image'
import Dashboard from '../components/dashboard/Dashboard'
import { SERVER_BASE_URL } from '@/config'
import { headers } from 'next/headers'
import { getServerSession } from "next-auth";
import { authOptions } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';


async function getDashboardData() {


  const res = await fetch(`${SERVER_BASE_URL}/api/dashboard`, {
    cache: 'no-store', method: "GET",
    headers: headers()
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
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
  const session = await getServerSession(authOptions);

  console.log("session===>",session);
  
  if(session?.user?.passwordChanged==0){
    redirect('/auth/profile?message=Change your default password')

  }



  const dashboardData = await getDashboardData()
  const regions = await getRegions()
  const districts = await getDistricts()



  let data = { session, dashboardData, regions, districts }


  return <Dashboard data={data} />
}
