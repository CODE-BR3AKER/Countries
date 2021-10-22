<template>
  <header
    class="flex justify-between items-center pl-6 pr-6 sm:pl-16 sm:pr-16 pt-6 pb-6 shadow-md dark:bg-blue-DEFAULT dark:text-gray-DEFAULT"
  >
    <h4 class="font-bold text-xs sm:text-xl dark:text-gray-DEFAULT">
      Countries App
    </h4>
    <div class="cursor-pointer text-xs sm:text-base">
      <img src="../static/light-mood.svg" class="inline mr-2 inverting" />
      <select
        v-model="$colorMode.preference"
        class="w-24 h-8 px-4 shadow dark:bg-blue-DEFAULT dark:text-gray-DEFAULT bg-gray-DEFAULT"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </header>
</template>
<style>
.dark-mode .inverting {
  filter: invert(100%);
}
</style>