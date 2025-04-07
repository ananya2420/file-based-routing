import Link from "next/link";


function ClientPage(){
    const clients=[
        {id:'max',name:'Maximilian'},
        {id:'manu',name:'Manuel'},
    ]
    return(
        <div>
            <h1>The Clients Page</h1>
            <ul>
               {clients.map()}
            </ul>
        </div>
    )
}
export default ClientPage;