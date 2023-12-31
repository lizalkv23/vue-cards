import { createRouter, createWebHistory } from "vue-router"
import CardView from "@/views/CardView.vue"
const routes = [
  {
    path: "/",
    name: "card-view",
    component: CardView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
