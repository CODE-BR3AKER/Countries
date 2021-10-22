<template>
  <main class="dark:bg-blue-dark bg-gray-light text-blue-light min-h-screen">
    <section
      class="flex flex-col md:flex-row items-center justify-center md:justify-between md:ml-10 md:mr-10 pt-8"
    >
      <div
        class="bg-gray-DEFAULT dark:bg-blue-DEFAULT h-16 shadow flex items-center rounded mb-8 md:mb-0 focus:outline-none text-l px-3 focus:shadow-lg"
      >
        <img src="../static/search.svg" class="inverting" />
        <input
          v-model="search"
          class="ml-2 dark:bg-blue-DEFAULT dark:text-gray-DEFAULT"
          type="search"
          placeholder="Search"
        />
      </div>
      <select
        @change="clickFilter($event)"
        class="w-40 h-12 px-4 dark:bg-blue-DEFAULT dark:text-gray-DEFAULT bg-gray-DEFAULT shadow"
      >
        <option value="">Filter by region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
    <div class="flex flex-wrap justify-center">
      <Card
        v-for="country in filteredCountries"
        :key="country.numericCode"
        :title="country.name.common"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
        :where="'/name/' + country.name.common"
      >
        <template v-slot:picture>
          <img :src="country.flags.svg" class="block h-56 md:h-40 w-full object-cover" />
        </template>
      </Card>
    </div>
  </main>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const countries = await $axios.$get("https://restcountries.com/v3.1/all");
    return {
      countries,
    };
  },
  data() {
    return {
      search: "",
      selected: "",
    };
  },
  computed: {
    filteredCountries: function () {
      return this.countries.filter((country) => {
        return (
          country.name.common.toUpperCase().match(this.search.toUpperCase()) &&
          country.region.toUpperCase().match(this.selected.toUpperCase())
        );
      });
    },
  },
  methods: {
    clickFilter: function (event) {
      this.selected = event.target.value;
    },
  },
};
</script>