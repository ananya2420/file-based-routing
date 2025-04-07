import Link from "next/link";


function ClientPage(){
    
    return(
        <div>
            <h1>The Clients Page</h1>
            <ul>
                <li>
                    <Link href="/clients/max">Maximilian</Link>
                    <Link href="/clients/max">Ma</Link>
                </li>
            </ul>
        </div>
    )
}
export default ClientPage;