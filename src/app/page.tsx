import Image from 'next/image'
import Dashboard from '../components/dashboard/Dashboard'
import { SERVER_BASE_URL } from '@/config'
import { headers } from 'next/headers'
import { getServerSession } from "next-auth";
import { authOptions } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import { logger } from '@/logger';

async function getDashboardData(searchParams: any) {
  try {
    let { filterBy } = searchParams
    let { filterValue } = searchParams
    let { from } = searchParams
    let { to } = searchParams


    const res = await fetch(`${SERVER_BASE_URL}/api/dashboard?filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}`, {
      cache: 'no-store',
      headers: headers()
    })

    if (!res.ok) {
      logger.error("getDashboardData==>",SERVER_BASE_URL);

      throw new Error('Failed to fetch data')
    }

    return await res.json()
  } catch (error) {
    logger.error("getDashboardData==>", error);

  }

}


async function getRegions() {
  try {
    let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/region`, { cache: 'no-store', headers: headers() });

    if (!response.ok) {
      logger.error("getDashboardData==>", response);

      throw new Error('Failed to fetch data')
    }
    return await response.json();

  } catch (error) {
    logger.error("Dashboard==>", error);

  }


}

async function getDistricts() {

  let response = await fetch(`${SERVER_BASE_URL}/api/primary-data/district`, { cache: 'no-store', headers: headers() });

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return await response.json();

}


export default async function Page({ searchParams }: any) {
  const session: any = await getServerSession(authOptions);

  if (session?.user?.passwordChanged == 0) {
    redirect('/auth/profile?message=Change your default password')

  }



  const dashboardData = await getDashboardData(searchParams)
  const regions = await getRegions()
  const districts = await getDistricts()



  let data = { session, dashboardData, regions, districts }


  return <Dashboard data={data} />
}
