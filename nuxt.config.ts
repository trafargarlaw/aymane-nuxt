// https://v3.nuxtjs.org/api/configuration/nuxt.config
// tailwind css config
export default defineNuxtConfig({
      build: {
        postcss: {
            postcssOptions:{
                plugins: {
                    tailwindcss:{},
                    autoprefixer:{},
                }
            }
        },
      },
      css: [
        '~/assets/css/main.css',
        ],
        ssr:true,
        target: "static"
})
