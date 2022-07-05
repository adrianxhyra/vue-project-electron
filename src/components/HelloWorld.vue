<template>
  <div class=”hello”>
    <h1>{{ msg }}</h1>
    <p>Updates State: {{ state }}</p>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  mounted() {
  window.ipcRenderer.on('updater', (event, message) => {
    switch (message) {
      case 'update_available':
        this.state = 'Available';
        break;
      case 'update_not_available':
        this.state = 'Not Available';
        break;
    }
  });
},
  data: function() {
    return {
      state: 'Thinking…',
    };
  },
  props: {
    msg: String
  }
}
</script>