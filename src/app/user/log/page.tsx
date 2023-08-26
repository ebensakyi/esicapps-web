
import { LOGIN_URL, SERVER_BASE_URL } from "@/config";
import Log from "@/components/user/Log";

async function getLogs(searchParams: any) {
    let { searchText } = searchParams
    let { page } = searchParams
    let response = await fetch(`${SERVER_BASE_URL}/api/user/log?page=${page}&searchText=${searchText}`, { cache: 'no-store' });




    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    return await response.json();

}






export default async function page({ searchParams }: any) {


    const logs = await getLogs(searchParams)

    let data = { logs }

    // console.log(data);




    return <Log data={data} />


}
