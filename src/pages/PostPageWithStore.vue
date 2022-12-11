<script lang="">
import { toRefs, toRef } from "vue";
import axios from 'axios'
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyDialog from '@/components/UI/MyDialog.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  components: {
     PostForm,
    PostList,
    MyDialog,
    MyButton,
    MySelect,
  },
  data() {
    return {
      // posts: [],
      dialogVisible: false,
      // isPostsLoading: false,
      // selectedSort: '',
      // searchQuery: '',
      // page: 1,
      // limit: 10,
      // totalPages: 0,
      // sortOptions: [
      //   {value: 'title', name: 'По названию'},
      //   {value: 'body', name: 'По содержимому'},
      // ]
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    // changePage(pageNumber) {
    //    this.page = pageNumber
    //   //  this.fetchPosts()
    // },
    // async fetchPosts() {
    //   try {
    //     this.isPostsLoading = true
    //     const response = await axios('https://jsonplaceholder.typicode.com/posts', {
    //       params: {
    //         _page: this.page,
    //         _limit: this.limit
    //       }
    //     })
    //     this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
    //     this.posts = response.data
    //   } catch (e) {
    //     alert("Error")
    //   } finally {
    //     this.isPostsLoading = false
    //   }
    // },
    // async loadMorePosts() {
    //   try {
    //     this.page += 1
    //     const response = await axios('https://jsonplaceholder.typicode.com/posts', {
    //       params: {
    //         _page: this.page,
    //         _limit: this.limit
    //       }
    //     })
    //     this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
    //     this.posts = [...this.posts, ...response.data]
    //   } catch (e) {
    //     alert("Error")
    //   }
    // }
  },
  mounted() {
    this.fetchPosts()
    console.log(this.$refs.observer)
  },
  computed: {
    // sortedPosts() {
    //   return [...this.posts].sort((a, b) => {
    //     return a[this.selectedSort]?.localeCompare(b[this.selectedSort])
    //   })
    // },
    // sortedAndSearchedPosts() {
    //   return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    // }
    ...mapState({
        posts: state => state.post.posts,
        isPostsLoading: state => state.post.isPostsLoading,
        selectedSort: state => state.post.selectedSort,
        searchQuery: state => state.post.searchQuery,
        page: state => state.post.page,
        limit: state => state.post.limit,
        totalPages: state => state.post.totalPages,
        sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
  },
  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort((a, b) => {
    //     return a[newValue]?.localeCompare(b[newValue])
    //   })
    // }
    // page() {
    //   this.fetchPosts()
    // }
  }
};
</script>

<template>
  <div>
    <!-- <h1>{{ $store.state.isAuth ? "Пользователь авторизован" : "Пожайлуста авторизуйтесь"}} </h1>
    <h1>{{ $store.getters.doubleLikes }} </h1>
    <div>
      <my-button @click="$store.commit('incrementLikes')">Лайк</my-button>
      <my-button @click="$store.commit('decrementLikes')">Дизлайк</my-button>
    </div> -->
    <h1 class="text-[30px] ">Страница с постами</h1>
    <my-input
    v-focus
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск..."
    />
    <div class="flex justify-between mt-[15px] mb-[15px] ">
      <my-button
        class=""
        @click="showDialog">
        Создать пост
      </my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      >
      </my-select>
    </div>

    <my-dialog
    v-model:show="dialogVisible"
    >
      <post-form
        @create="createPost"
      />
    </my-dialog>
    <post-list
    :posts="sortedAndSearchedPosts"
    @remove="removePost"
    v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="h-[30px] bg-green-500 "></div>
    <div class="flex mt-[15px] ">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="border-2 p-[10px] cursor-pointer "
        :class="{
          'current-page': page === pageNumber
          }"
        @click="changePage(pageNumber)"
      >
      {{ pageNumber }}
      </div>
    </div>
  </div>
</template>

<style>
  .current-page {
    border: 2px solid teal;
  }
</style>
