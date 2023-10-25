<template>
  <div :class="['form-button', formPosition === 'above' ? 'reverse' : '']">
    <button class="action-button" @click="toggleForm">
      <span v-if="icon.showIcon" class="icon" v-html="icon.imageClass"></span>
      {{ !isFormVisible ? prompt : antiPrompt }}
    </button>

    <transition name="fade">
      <div v-if="isFormVisible" class="form-container">
        <slot></slot>

        <button v-if="showSend" @click="send" class="send-button">
          {{ sendMessage }}
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "UnfoldForm",
  data() {
    return {
      isFormVisible: false,
      message: "",
    };
  },
  props: {
    antiPrompt: {
      type: String,
      default: "Close Form",
    },
    prompt: {
      type: String,
      default: "Open Form",
    },
    icon: {
      type: Object,
      default: () => ({
        showIcon: false,
        imageClass: "",
      }),
    },
    sendMessage: {
      type: String,
      default: "Send Form",
    },
    formPosition: {
      type: String,
      default: "above",
      validator: (value) => ["above", "below"].includes(value),
    },
    showSend: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["send"],
  methods: {
    toggleForm() {
      this.isFormVisible = !this.isFormVisible;
    },
    send() {
      this.$emit("send", this.message);
      this.message = "";
      this.toggleForm();
    },
  },
};
</script>

<style scoped>
.form-button {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  vertical-align: middle;
}

.form-container {
  display: flex;
  flex-direction: column;
  max-width: 95%;
}

.reverse {
  flex-direction: column-reverse;
}

.reverse .action-button {
  margin-top: 0.5rem;
  margin-bottom: 0;
}

.send-button {
  margin: 0.5rem auto;
}
</style>
