<template>
  <div class="simple-component">
    <p>{{ templateMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "activityViewer",
  data() {
    return {
      templateMessage: "Welcome to the Activity Viewer.",
    };
  },
};
</script>
