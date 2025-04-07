import { useRouter } from "next/router";

function ClientsProjectsPage(){
   const router =  useRouter();
    return(
        <div>
            <h1>The projects of a given clients.</h1>
            <button>Load Project A</button>
        </div>
    )
}
export default ClientsProjectsPage;