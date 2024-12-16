<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>This one is task {{ route.params?.id }}</template>
