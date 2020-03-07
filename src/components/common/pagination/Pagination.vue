<template>
  <div class="cell pagination">
    <el-pagination
      background
      layout="prev, pager, next, jumper"
      @current-change="handleCurrentChange"
      :total="total"
      :current-page.sync="current_page"
      :page-size="pageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
      pageSize:{
          type:Number,
          default:1
      },
      total:{
          type:Number,
          default:0
      },
      currentPage:{
          type:Number,
          default:1
      }
  },
  data() {
    return {
        current_page:this.currentPage
    };
  },
  methods:{
      handleCurrentChange(newPage){
          this.$emit("currentChange",newPage)
      }
  }
};
</script>

<style>
.pagination {
  background-image: url(~@/assets/img/shadow_light.png);
  background-size: 20px 20px;
  background-repeat: repeat-x;
}

.page_current {
  display: inline-block;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  padding: 3px 6px;
  background-color: #f0f0f0;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin: 0 1px;
  border: 1px solid #bbb;
  color: #000;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.page_normal:active,
.page_normal:link,
.page_normal:visited {
  display: inline-block;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
  padding: 2px 5px;
  background-color: #fff;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin: 0 1px;
  text-decoration: none;
  border: 1px solid #e2e2e2;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
