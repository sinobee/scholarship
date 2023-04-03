import { useRouter } from 'next/router';

function SearchPage() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      <h1>Search Results for "{q}"</h1>
      {/* display search results here */}
    </div>
  );
}

export default SearchPage;
