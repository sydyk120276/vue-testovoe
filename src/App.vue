<script lang="ts">
import { toRefs, toRef } from "vue";
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import MyDialog from './components/UI/MyDialog.vue';
import MyButton from './components/UI/MyButton.vue';
export default {
  components: {
     PostForm,
    PostList,
    MyDialog,
    MyButton,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript", body: "описание поста" },
        { id: 2, title: "JavaScript 2", body: "описание поста 2" },
        { id: 3, title: "JavaScript 3", body: "описание поста 3" },
      ],
      dialogVisible: false,
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
    }
  },
};
</script>

<template>
  <div>
    <h1 class="text-[30px] ">Страница с постами</h1>
    <my-button class="mt-[15px] mb-[15px] " @click="showDialog">Создать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </my-dialog>
    <post-list
    :posts="posts"
    @remove="removePost"
    />
  </div>
</template>

<style>

</style>
