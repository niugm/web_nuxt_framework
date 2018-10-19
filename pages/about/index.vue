<template>
  <section class="container">
    <div>
      hello world! <span v-text="name"/>
    </div>
    <div>
      <input
        v-model="name" 
        type="text">
    </div>
  </section>
</template>
<script>
export default {
  data: function() {
    return {
      name: 'niugm'
    }
  },

  methods: {
    changeName(name) {
      this.name = name
    }
  }
}
</script>
