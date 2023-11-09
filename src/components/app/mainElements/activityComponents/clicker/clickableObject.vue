<template>
  <img
    class="card"
    :src="imageSource"
    :width="imgWidth"
    :height="imgHeight"
    :alt="altText"
    @click="submitClick"
  />
</template>

<script>
export default {
  name: "clickableObject",
  props: {
    imageSource: {
      type: String,
      required: false,
      default: "https://via.placeholder.com/50",
    },
    imgWidth: {
      type: Number,
      required: false,
      default: 50,
    },
    imgHeight: {
      type: Number,
      required: false,
      default: 50,
    },
    altText: {
      type: String,
      required: false,
      default: "Clicker Image",
    },
  },
  methods: {
    submitClick() {
      this.$emit("clickSubmitted");
    },
  },
};
</script>
