import { useSession } from 'next-auth/react';

import { headers } from 'next/headers';
import Profile from '@/src/components/user/Profile';
import { SERVER_BASE_URL } from '@/config';

async function getData() {
    
    
    


    const res = await fetch(`${SERVER_BASE_URL}/api/submitted-data`,{cache:"no-store"})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default async function page() {
    const userData = await getData();



    // const { data: session } = useSession()



    // const router = useRouter();
    // const searchParams = useSearchParams()
    // const pathname = usePathname()



    // var dateString = moment().format("DD-MM-yyyy-HH-mm-ss-a");

    // // const query = router.query;
    // const formId = Number(searchParams.get('formId'))
    // const published = Number(searchParams.get('published'))
    // const page = Number(searchParams.get('page'))
    // const searchtext = Number(searchParams.get('searchText'))



    let data = { userData }


    return <Profile data={data} />


}

