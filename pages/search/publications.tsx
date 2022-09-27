import PublicationSearchForm from "../../components/PublicationSearchForm";


const Publications = (): JSX.Element => {
  return (
    <div className="flex h-full">
      <section className="bg-stone-600 w-1/3">
        <PublicationSearchForm />
      </section>

      <main>
        Results
      </main>
    </div>
  );
}

export default Publications;