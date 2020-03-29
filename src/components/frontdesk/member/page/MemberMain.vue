<template>
  <div>
    <MemberHeader />
    <div class="sep20"></div>
    <div class="box">
      <div class="cell_tabs">
        <v-tabs>
          <v-tab :to="`/member/` + userId">全部主题</v-tab>
          <v-tab :to="`/member/` + userId + `/profile`">个人信息</v-tab>
        </v-tabs>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MemberHeader from "../components/memberHeader/MemberHeader";

export default {
  components: {
    MemberHeader
  },
  props: {
    userId: {}
  },
  data() {
    return {};
  },
  methods: {
    changeTabs(tabName) {
      this.activeTab = tabName;
    }
  }
};
</script>

<style>
.cell_tabs {
  padding: 10px 10px 0;
  border-bottom: 1px solid var(--box-border-color);
  text-align: center;
}
</style>
