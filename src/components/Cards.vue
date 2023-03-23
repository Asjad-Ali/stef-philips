<template>
  <div class="py-12">
    <div class="mx-auto max-w-5xl px-6 text-center lg:px-8">
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <li v-for="person in people" :key="person.name" class="bg-sky-50">
          <img class="h-40 w-full object-cover" :src="person.imageUrl" alt />
          <div class="py-4 px-6">
            <h3
              class="mt-0 text-xl whitespace-nowrap font-semibold leading-7 tracking-tight text-left text-trisec"
            >{{ person.name }}</h3>
            <p class="text-sm leading-6 text-gray-700 text-left">{{ person.role }}</p>
            <div class="w-full h-full flex">
              <button
                type="button"
                class="bg-sky-600 py-4 mt-32 px-8 text-sm font-semibold mt-8 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >Find out more</button>
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
    name: "Help in your home",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Quick report form",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#"
  },
  {
    name: "Report repair or maintainance",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#"
  }
  // More people...
];
</script>