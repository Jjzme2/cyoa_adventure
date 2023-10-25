<template>
  <div>
    <div class="dashboard-view">
      <adventureCard
        v-for="item in storeData"
        :key="item.id"
        :item="item"
        @click="openAdventure(item.id)"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import adventureCard from "@/components/app/common/cards/api/adventureCard.vue";

export default {
  name: "dashboardAdventure",
  components: { adventureCard },
  data() {
    return {
      someData: "",
    };
  },
  setup() {
    const store = useStore();
    const getterString = "adventures/getAll";
    const dispatchString = "adventures/fetchAll";

    const storeData = computed(() => store.getters[getterString]);

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch(dispatchString);
    });

    return { storeData };
  },
  methods: {
    openAdventure(id) {
      //   this.$loggerUtils.sendLog(id);
      this.$router.push({ name: "adventure", params: { adventureId: id } });
    },
  },
};
</script>
