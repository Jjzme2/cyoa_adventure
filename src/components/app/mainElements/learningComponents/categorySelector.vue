<template>
  <div class="simple-component">
    <selectionTool
      customClass="light w-sm centered separated-v-3 spaced-2 flat rounded"
      label=""
      :selectionOptions="{
        defaultMessage: '---Select a category---',
        options: categories,
      }"
      @selectionMade="emitSelection"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import selectionTool from "@/components/app/base/TheSelector.vue";

export default {
  name: "categorySelector",
  components: { selectionTool },
  setup() {
    const store = useStore();
    const getterString = "flashCards/getCategories";
    const dispatchString = "flashCards/fetchCategories";

    const categories = computed(() => store.getters[getterString]);

    onMounted(async () => {
      await store.dispatch(dispatchString);
    });
    return { categories };
  },
  methods: {
    emitSelection(selection) {
      this.$emit("selected", selection);
    },
  },
};
</script>
