<script setup>
const portfolioProjects = ref([
  {
    image:
      "https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg",
    title: "Venice, Italy",
    subtitle: "Travelling into the popular river in Italy",
  },
  {
    image:
      "https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg",
    title: "Venice, Italy",
    subtitle: "Travelling into the popular river in Italy",
  },
  {
    image:
      "https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg",
    title: "Venice, Italy",
    subtitle: "Travelling into the popular river in Italy",
  },
  {
    image:
      "https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg",
    title: "Venice, Italy",
    subtitle: "Travelling into the popular river in Italy",
  },
  {
    image:
      "https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg",
    title: "Venice, Italy",
    subtitle: "Travelling into the popular river in Italy",
  },
  {
    image:
      "https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg",
    title: "Venice, Italy",
    subtitle: "Travelling into the popular river in Italy",
  },
  {
    image:
      "https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg",
    title: "Venice, Italy",
    subtitle: "Travelling into the popular river in Italy",
  },
  {
    image:
      "https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg",
    title: "Venice, Italy",
    subtitle: "Travelling into the popular river in Italy",
  },
  {
    image:
      "https://cdn.lemon-interactive.fr/wp-content/uploads/2022/09/Image-ressources-humaines-500x309.jpg",
    title: "Venice, Italy",
    subtitle: "Travelling into the popular river in Italy",
  },
]);
</script>

<template>
  <div class="max-w-[1512px] mx-auto">
    <Navbar class="font-poppins" />
    <section
      class="mt-16 gap-y-14 gap-x-[90px] grid grid-cols-2 font-poppins px-[157px] text-paragraph text-xl"
    >
      <div>
        <h1 class="text-[#1C2536] text-6xl font-extrabold mb-5">Nos Clients</h1>

        <p>
          Le point commun de nos clients ? Considérer le site Internet comme un
          véritable outil e-business en plus d’être un moyen de communication
          incontournable
        </p>
      </div>
      <p class="py-[30px]">
        ME, TPE ou grand compte, quel que soit votre projet, nous vous
        accompagnerons dans la démarche de mieux comprendre vos clients en
        ligne, pour mieux les attirer puis leur faire passer les messages
        souhaités ou acheter vos produits !
      </p>
      <img class="col-span-2" src="/images/hero.png" alt="hero image" />
    </section>

    <section class="">
      <div class="font-poppins mt-20 flex flex-col items-center w-full">
        <h2 class="text-paragraph">POURQUOI NOUS CHOISIR</h2>
        <h1 class="text-title text-[40px] font-bold mb-[58px]">
          Un portefeuille client diversifié
        </h1>
      </div>
      <div
        class="flex flex-col items-center w-full overflow-x-hidden mb-[30px]"
      >
        <div class="font-poppins overflow-x-auto">
          <div class="flex gap-[30px]">
            <PortfolioCard
              v-for="project in portfolioProjects"
              :key="project.title"
              :image="project.image"
              :title="project.title"
              :subtitle="project.subtitle"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center w-full overflow-x-hidden">
        <div class="font-poppins overflow-x-auto">
          <div class="flex gap-[30px]">
            <PortfolioCard
              v-for="project in portfolioProjects"
              :key="project.title"
              :image="project.image"
              :title="project.title"
              :subtitle="project.subtitle"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="font-poppins mt-20 flex flex-col items-center w-full">
        <h2 class="text-paragraph">TÉMOIGNAGES</h2>
        <h1 class="text-title text-[40px] font-bold mb-[58px]">
          Ce que les gens disent sur nous
        </h1>
      </div>
    </section>
  </div>
</template>
