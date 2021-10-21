<template>
  <div>
    <Head />
    <Nuxt />
    <Foot />
  </div>
</template>
<style>
html,
body {
  height: 100%;
  font-family: "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  color: #2d2d2d;
  font-weight: 500;
}

h1 {
  font-size: 70px;
}

h2 {
  font-size: 40px;
}

h3 {
  font-size: 30px;
}

h4 {
  font-size: 24px;
}

h5 {
  font-size: 18px;
}
p {
  font-size: 14px;
  color: #696969;
  line-height: 2;
}

img {
  max-width: 100%;
}
ul,
ol {
  padding: 0;
  margin: 0;
}
.nuxt-content p {
  line-height: 1.75rem;
}
.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4,
.nuxt-content h5 {
  margin: 1rem 0;
}
@media only screen and (max-width: 479px) {
  body {
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
