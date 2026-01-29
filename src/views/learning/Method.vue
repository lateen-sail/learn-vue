<template>
  <div class="flex flex-col gap-8">
    <Button @click="sayHello" class="w-20">Hello</Button>
    <div class="flex items-center gap-2">
      <Button @click="add(5)" class="w-20">5</Button>
      <p>{{ count }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button } from "@/components/ui/button";

const sayHello = () => {
  alert("Hello Vue!");
};

const count = ref(0);
const add = (num) => {
  count.value += num;
};
</script>
