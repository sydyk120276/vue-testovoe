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
import usePosts from '../hooks/usePosts.ts'
import useSortedPosts from '../hooks/useSortedPosts.ts'
import useSortedAndSeach from '../hooks/useSortedAndSeach.ts'
import { ref } from 'vue'
export default {
  components: {
     PostForm,
    PostList,
    MyDialog,
    MyButton,
    MySelect
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    };
  },
  setup(props) {
    const {posts, isPostsLoading, totalPages} = usePosts(10)
    const {sortedPosts, selectedSort} = useSortedPosts(posts)
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSeach(sortedPosts)
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts
    }
  }
};
</script>

<template>
  <div>
    <h1>{{ likes }} </h1>
    <my-button @click="addLike">add Like</my-button>
    <h1 class="text-[30px] ">Страница с постами</h1>
    <my-input
    v-focus
      v-model="searchQuery"
      placeholder="Поиск..."
    />
    <div class="flex justify-between mt-[15px] mb-[15px] ">
      <my-button
        class="">
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
      />
    </my-dialog>
    <post-list
    :posts="sortedAndSearchedPosts"
    v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>

<style>
  .current-page {
    border: 2px solid teal;
  }
</style>
