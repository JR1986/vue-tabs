<template>
  <div class="tab-menu">
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: activeTab === index }]"
        @click="activateTab(index)"
      >
        {{ tab.title }}
      </div>
    </div>

    <div class="submenus" v-if="activeTab !== null">
      <router-link
        v-for="(submenu, index) in tabs[activeTab].submenus"
        :key="index"
        :to="`/submenus/${submenu}`"
        class="submenu"
      >
        {{ submenu }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: null,
      tabs: [
        {
          title: 'Tab 1',
          submenus: ['Submenu-1-1', 'Submenu-1-2', 'Submenu-1-3', 'Submenu-1-4'],
        },
        {
          title: 'Tab 2',
          submenus: ['Submenu 2-1', 'Submenu 2-2', 'Submenu 2-3', 'Submenu 2-4'],
        },
        {
          title: 'Tab 3',
          submenus: ['Submenu 3-1', 'Submenu 3-2', 'Submenu 3-3', 'Submenu 3-4'],
        },
        {
          title: 'Tab 4',
          submenus: ['Submenu 4-1', 'Submenu 4-2', 'Submenu 4-3', 'Submenu 4-4'],
        },
      ],
    };
  },
  created() {
    this.activeTab = 0;
    const firstSubmenu = this.tabs[0].submenus[0];
    this.$router.push(`/submenus/${firstSubmenu}`);
  },
  methods: {
    activateTab(index) {
      this.activeTab = index;
      const firstSubmenu = this.tabs[index].submenus[0];
      this.$router.push(`/submenus/${firstSubmenu}`);
    },
  },
};
</script>

<style scoped>
.tab-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.tabs {
  display: flex;
}

.tab {
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
}

.tab.active {
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
}

.submenus {
  margin-top: 10px;
}

.submenu {
  margin-bottom: 5px;
  text-decoration: none;
  color: #000;
}

.submenu:hover {
  text-decoration: underline;
}
</style>
