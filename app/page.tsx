import { Hero, SearchBar, CustomFilter } from "@/components/index";


export default function Home() {
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
              <CustomFilter title="price" />
            </div>
        </div>

      </div>
    </main>
  )
}
