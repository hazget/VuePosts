export default {
  actions: {
    async fetchPosts({ commit, getters, dispatch }, limit = 10) {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      )
      const posts = await res.json()

      dispatch('sayHello')

      commit('updatePosts', posts)
    },
    
    sayHello() { },
    async deletePostDb({
      commit
    }, post_id) {
      const post = await fetch(`http://jsonplaceholder.typicode.com/posts/${post_id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then((json) => {
          commit('deletePost', post_id)
        })
        .catch(e => console.error(e))
      return post
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    },
    deletePost(state, id) {
      state.posts = state.posts.filter((post) => post.id !== id)
    },
  },
  state: {
    posts: []
  },
  getters: {
    validPosts(state) {
      return state.posts.filter(p => {
        return p.title && p.body
      })
    },
    allPosts(state) {
      return state.posts
    },
    postsCount(state, getters) {
      return getters.validPosts.length
    }
  }
}
