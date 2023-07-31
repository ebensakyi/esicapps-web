import Image from 'next/image'
import Dashboard from '../components/dashboard/Dashboard'
import { SERVER_BASE_URL } from '@/config'
import { headers } from 'next/headers'


async function getData() {


  const res = await fetch(`${SERVER_BASE_URL}/api/dashboard`, {
    cache: 'no-store', method: "GET",
    headers: headers()
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

export default async function page() {

  const dashboard = await getData()
  let data = { dashboard }


  return <Dashboard data={data} />

}
