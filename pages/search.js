import { useRouter } from 'next/router';

function SearchPage() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      <h1>Search Results for "{q}" will be done later</h1>
      <h2>Fuck Yourself</h2>
      {/* display search results here */}
    </div>
  );
}

export default SearchPage;
