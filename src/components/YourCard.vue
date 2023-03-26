<template>
  <div class="py-20 w-[60%] mx-auto">
    <div class="mx-auto max-w-5xl px-6 text-center">
      <ul
        role="list"
        class="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none  lg:gap-8"
      >
        <li v-for="person in people" :key="person.name" class="bg-white ">
          <img class="h-40 w-full object-cover" :src="person.imageUrl" alt />
          <div class="py-4 px-6">
            <h3
              class="h-20 mt-0 text-xl font-semibold leading-7 tracking-tight text-left text-trisec"
            >{{ person.name }}</h3>
            <p class="text-sm leading-6 text-gray-700 text-left">{{ person.role }}</p>
            <div class="w-full h-full flex">
              <button
                type="button"
                class="bg-sky-600 xxs:py-2 md:ju md:py-4 xxs:px-2 md:px-8 text-sm font-semibold mt-8 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >Report Now</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: "Temporary accommodation",
    role: "Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Private rented sector",
    role: "Excerpt for the page goes in here like so lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  // More people...
];
</script>