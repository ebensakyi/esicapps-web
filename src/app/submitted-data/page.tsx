import Data from '@/src/components/submitted-data/Data';
import { SERVER_BASE_URL } from '@/config';

async function getSubmittedData(searchParams: any) {

    let { formId } = searchParams
    let { published } = searchParams
    let { deleted } = searchParams

    let { filterBy } = searchParams
    let { filterValue } = searchParams
    let { from } = searchParams
    let { to } = searchParams
    let { searchText } = searchParams
    let { page } = searchParams




    const res = await fetch(`${SERVER_BASE_URL}/api/submitted-data?published=${published}&deleted=${deleted}&formId=${formId}&page=${page}&filterBy=${filterBy}&filterValue=${filterValue}&from=${from}&to=${to}&searchText=${searchText}`, { cache: "no-store" })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default async function Page({ searchParams }: any) {
    const submittedData = await getSubmittedData(searchParams)



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



    let data = { submittedData: submittedData }



    return <Data data={data} />


}

