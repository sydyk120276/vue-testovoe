<script lang="ts">
import { toRefs, toRef } from "vue";
import axios from 'axios'
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import MyDialog from './components/UI/MyDialog.vue';
import MyButton from './components/UI/MyButton.vue';
import MySelect from './components/UI/MySelect.vue';
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
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    };
  },
  methods: {
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
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const respons = await axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = respons.data
      } catch (e) {
        alert("Error")
      } finally {
        this.isPostsLoading = false
      }
    }
  },
  mounted() {
    this.fetchPosts()
  },
};
</script>

<template>
  <div>
    <h1 class="text-[30px] ">Страница с постами</h1>
    <div class="flex justify-between">
      <my-button
        class=""
        @click="showDialog">
        Создать пост
      </my-button>
      <my-select
        v-model="selectedSort"
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
    :posts="posts"
    @remove="removePost"
    v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>

<style>

</style>
