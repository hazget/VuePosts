<template>
  <div id="app">
    <PostForm/>
    <h1>{{postsCount}}</h1>
    <div>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p class="text">{{post.body}}</p>
      <button type="button" @click="deletePostDb(post.id)">Delete</button>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostForm from "./components/PostForm";
export default {
  name: "app",
  computed: mapGetters(["validPosts", "postsCount"]),
  methods: mapActions(["fetchPosts",'deletePostDb']),
  components: { PostForm },
  async mounted() {
    // this.$store.dispatch("fetchPosts");
    this.fetchPosts();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

</style>
