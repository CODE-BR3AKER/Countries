<template>
  <div class="Padding w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <nuxt-link
      class="
        block
        h-full
        shadow-lg
        rounded-lg
        overflow-hidden
        mt-10
        ml-2
        mr-2
        sm:mt-0 sm:mr-0 sm:ml-0
        bg-gray-DEFAULT
        dark:bg-blue-DEFAULT
      "
      :to="where"
    >
      <slot name="picture"> </slot>
      <div class="p-6">
        <h1
          class="
            title-font
            text-lg
            font-bold
            text-gray-900
            mb-2
            dark:text-gray-DEFAULT
          "
        >
          {{ title }}
        </h1>
        <h2
          class="tracking-widest text-xs title-font mb-2 dark:text-gray-DEFAULT"
        >
          <b>Population:</b> {{ population }}
        </h2>
        <h2
          class="tracking-widest text-xs title-font mb-2 dark:text-gray-DEFAULT"
        >
          <b>Region:</b> {{ region }}
        </h2>
        <h2
          class="tracking-widest text-xs title-font mb-2 dark:text-gray-DEFAULT"
        >
          <b>Capital:</b> {{ capital }}
        </h2>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["title", "population", "region", "capital", "where"],
};
</script>
<style>
.Padding {
  padding: 2.5rem;
}
@media screen and (max-width: "640px") {
  .Padding {
    padding: 2rem;
    margin-bottom: 1em;
  }
}
</style>