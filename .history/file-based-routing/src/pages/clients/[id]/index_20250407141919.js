import { useRouter } from "next/router";

function ClientsProjectsPage(){
   const router =  useRouter();

   function loadProjectHandler(){
    router.push({
        pathname:
    })

   }
    return(
        <div>
            <h1>The projects of a given clients.</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}
export default ClientsProjectsPage;