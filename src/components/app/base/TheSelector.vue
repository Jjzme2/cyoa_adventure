<template>
  <div class="select-form" :class="customClass ? customClass : 'pop'">
    <label v-if="label" for="customSelectMenu">{{ label }}</label>

    <select id="customSelectMenu" v-model="selected" @change="emitSelection">
      <option :value="0" disabled>
        {{ selectionOptions.defaultMessage }}
      </option>

      <option
        v-for="option in selectionOptions.options"
        :key="option.id"
        :value="option.id"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TheSelector",
  props: {
    selectionOptions: {
      type: Object,
      default: () => ({
        defaultMessage: "---Select an option---",
        options: [
          { id: "1", name: "One" },
          { id: "2", name: "Two" },
        ],
      }),
    },
    label: String,
    customClass: String,
  },
  setup(props, { emit }) {
    const selected = ref("0");

    const emitSelection = () => {
      console.log("Emitting selection:", selected.value);
      emit("selectionMade", selected.value);
    };

    return {
      selected,
      emitSelection,
    };
  },
};
</script>
