import Image from 'next/image'
import Dashboard from '../components/dashboard/Dashboard'
import { SERVER_BASE_URL } from '@/config'
import { headers } from 'next/headers'


async function getData() {


  const res = await fetch(`${SERVER_BASE_URL}/api/dashboard`, {  cache: 'no-store', method: "GET",
  headers: headers() })

  if (!res.ok) {
      throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default function page() {
  return <Dashboard/>
  
}
