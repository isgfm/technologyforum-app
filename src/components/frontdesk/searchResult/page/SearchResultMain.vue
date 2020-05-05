<template>
  <div class="box">
    <content-header :tip="`搜索结果`"></content-header>
    <SearchResultList :searchContent="searchContent" />
  </div>
</template>

<script>
import ContentHeader from "@common/contentHeader/ContentHeader";
import SearchResultList from "../components/searchResultList/SearchResultList";
export default {
  components: {
    ContentHeader,
    SearchResultList,
  },
  props: {
    searchContent: {},
  },
};
</script>

<style></style>
