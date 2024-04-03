<script setup>
import PrettyComponent from "@/components/PrettyComponent.vue";
</script>

<template>
  <div>
    <PrettyComponent :msg="msg" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Pretty component!",
    };
  },
};
</script>
