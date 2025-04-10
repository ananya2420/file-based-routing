import Link from "next/link";

function ClientPage() {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manu', name: 'Manuel' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map(client => (
          <li key={client.id}>
            {/* Correcting ref to href */}
            <Link href={{
                pathname:'/clients/[id]',
                query: {id:client.id},
            }}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
