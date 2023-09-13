import { Hero, SearchBar, CustomFilter, PropertyCard } from "@/components/index";
import { fetchProperties } from "@/utils";
import { PropertyProps } from "@/Types/index";


export default async function Home() {

  const allProperties = await fetchProperties()
  // console.log(allProperties.results);

  const isDataEmpty = !Array.isArray(allProperties) || allProperties.length < 1 || !allProperties;  

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">

        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Property Index
          </h1>
          <p>Explore all the properties you definetely can't afford</p>
        </div>

        <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter />
            </div>
        </div>

        {!isDataEmpty ? (
          <div className="home__properties-wrapper">
            {allProperties?.map((property: PropertyProps) => (
              <PropertyCard property={property} />
            ))}
          </div>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results found</h2>
            <p>{allProperties.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}
