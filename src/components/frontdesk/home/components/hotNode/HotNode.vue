<template>
  <div class="box">
      <div class="cell">
          <span>最热节点</span>
      </div>
      <div class="cell" v-for="node in hotNodeList" v-bind:key="node.nId">
          <a :href="nodeUrl(node.cRouter)" v-text="node.cName" class="item_node"></a>
      </div>
  </div>
</template>

<script>
import {getHotNode} from '@api/theme/themeClassApi'
import {hotNodeCount} from '@constant/themeConstant'
export default {
    name:'HotNode',
    created:function(){
        this.getHotNodeFromServer();
    },
    data:function(){
        return {
            hotNodeList:[]
        }
    },
    methods:{
        nodeUrl:function(router){
            return "#go/"+router;
        },
        getHotNodeFromServer(){
            getHotNode(hotNodeCount).then(data=>{
                this.hotNodeList = data.data;
            }).catch(error=>{
                this.$message({type:'error',message:error+':'+'最热节点加载失败',showClose: true});
            });
        }
    }
}
</script>

<style>

</style>