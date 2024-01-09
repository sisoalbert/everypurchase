export default function SearchBar({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  return (
    <div className="mb-4">
      <form className="flex flex-col space-y-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Search for a purchase
        </label>
        <input
          name="q"
          defaultValue={searchParams.q}
          placeholder="Search..."
          className="w-full rounded-lg p-2 dark:text-purple-950"
        />
      </form>
    </div>
  );
}
