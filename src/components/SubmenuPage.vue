<template>
  <div class="submenu-page">
    <h2>{{ submenu }}</h2>
    <!-- Your submenu page content goes here -->
  </div>
</template>

<script>
export default {
  props: {
    submenu: {
      type: String,
      required: true,
    },
  },
};
</script>
