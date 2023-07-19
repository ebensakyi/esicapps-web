
import Role from "@/components/user/Role";
async function getPages() {
    // const res = await fetch(`http://localhost:3000/api/primary-data/pages`)
    // console.log(res.json());


    // if (!res.ok) {
    //     throw new Error('Failed to fetch data')
    // }

    let response = await fetch(`http://localhost:3000/api/primary-data/pages`);
    return await response.json();

}



export default async function page() {
    const pages = await getPages()

    console.log(pages);


    return (

        <Role data={pages} />
    )
}
