<script setup>
import { RouterLink } from "vue-router";
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="min-h-[60vh] px-4 pt-12 text-center">
    <p class="mt-2 text-base text-muted-foreground">
      ページが見つかりませんでした
    </p>

    <div class="mt-6 flex justify-center">
      <Button as-child>
        <RouterLink to="/">ホームへ戻る</RouterLink>
      </Button>
    </div>
  </div>
</template>
