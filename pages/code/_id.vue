<template>
  <main
    class="pt-12 min-h-screen dark:bg-blue-dark dark:text-gray-DEFAULT bg-gray-light"
  >
    <nuxt-link
      to="/"
      class="text-blue-light dark:text-gray-DEFAULT flex border justify-center items-center m-10 pl-2 pr-4 pt-2 pb-2 rounded w-32"
    >
      &larr; Back</nuxt-link
    >
    <div
      class="flex mt-12 flex-wrap justify-start sm:justify-center items-start"
    >
      <img :src="country.flag" class="w-3/4 sm:w-1/4 sm:pl-0 pl-10" />
      <div class="w-full sm:w-2/4 sm:pl-20 pl-10">
        <h1
          class="sm:text-2xl text-xl sm:w-1/2 w-full font-bold mt-10 sm:mt-0 dark:text-gray-DEFAULT"
        >
          {{ country.name }}
        </h1>
        <div class="flex flex-wrap w-2/2">
          <p class="sm:w-1/2 w-2/2 dark:text-gray-DEFAULT">
            <b>Native Name:</b>
            {{ country.nativeName }} <br />
            <b>Population:</b> {{ country.population }}
            <br />
            <b>Region:</b> {{ country.region }} <br />
            <b>Sub Region:</b> {{ country.subregion }}
            <br />
            <b>Capital:</b> {{ country.capital }} <br />
          </p>
          <p class="sm:w-1/2 sm:pl-4 w-2/2 dark:text-gray-DEFAULT">
            <b>Top Level Domain:</b>
            <template v-for="domain in country.topLevelDomain"
              >{{ domain }}
            </template>
            <br />
            <b>Currencies:</b>
            <template v-for="currency in country.currencies"
              >{{ currency.code }}
            </template>
            <br />
            <b>Languages:</b>
            <template v-for="lang in country.languages"
              >{{ lang.name }}
            </template>
          </p>
          <br />
          <div>
            <p class="mb-8 sm:mb-2 dark:text-gray-DEFAULT">
              <b> Border countries: </b><br />
              <br />
              <nuxt-link
                class="text-blue-light dark:text-gray-DEFAULT inline-block shadow bg-gray-DEFAULT dark:bg-blue-DEFAULT text-center items-center m-1 pl-1 pr-1 pt-2 pb-2 rounded w-24"
                v-for="border in country.borders"
                :key="border"
                :to="'/code/' + border"
              >
                {{ border }}
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  async asyncData({ params, $axios }) {
    const country = await $axios.$get(
      `https://restcountries.eu/rest/v2/alpha/${params.id}`
    );
    return {
      country,
    };
  },
  head() {
    return {
      title: "Details",
    };
  },
};
</script>