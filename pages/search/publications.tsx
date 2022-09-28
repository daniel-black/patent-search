import PublicationSearchForm from "../../components/PublicationSearchForm";


const Publications = (): JSX.Element => {
  return (
    <div className="flex h-full">
      <section className="bg-stone-600 w-1/3 p-2 space-y-2">
        <h2 className="font-bold text-lg">Patent Search</h2>
        <PublicationSearchForm />
      </section>

      <main>
        Results
      </main>
    </div>
  );
}

export default Publications;