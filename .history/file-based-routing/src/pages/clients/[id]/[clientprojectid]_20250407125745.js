import { useRouter } from "next/router";

function SelectedClientProjectPage(){

    const router = useRouter();

    console.log(router.query)
    return(
        <div>
            <h1>The project for a specific project for a secific clients.</h1>
        </div>
    )
}
export default SelectedClientProjectPage;