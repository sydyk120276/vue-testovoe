import { createRouter, createWebHashHistory } from 'vue-router'

import Main from '../pages/Main.vue'
import PostPage from '../pages/PostPage.vue'
import About from '../pages/About.vue'
import PostIdPage from '../pages/PostIdPage.vue'
import PostPageWithStore from '../pages/PostPageWithStore.vue'
import PostPageCompositionApi from '../pages/PostPageCompositionApi.vue'

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
  {
    path: "/store",
    component: PostPageWithStore,
  },
  {
    path: "/composition",
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(import.meta.env.BASE_URL),
  //   routes: [)
});

export default router