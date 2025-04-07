import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();
  const { projectid } = router.query;

  return (
    <div>
      <h1>The portfolio project page</h1>
      <p>Project ID: {projectid}</p>
    </div>
  );
}

export default PortfolioProjectPage;
