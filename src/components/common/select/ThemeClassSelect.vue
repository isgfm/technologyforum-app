<template>
  <el-select v-model="optionValue" placeholder="选择主题分类">
        <el-option v-for="option in options" :key="option.nId" :label="option.cName" :value="option.nId"></el-option>
</el-select>
</template>

<script>
import {getThemeClassByDepth} from '@api/theme/themeClassApi'

export default {
    props:{
        value:{
            type:Number,
            default:1
        },
        depth:{
            type:Number,
            default:2
        }
    },
    created(){
        this.getClassByDepth(this.depth);
    },
    data(){
        return {
            options:'',
            optionValue:this.value
        }  
    },
    methods:{
        getClassByDepth(depth){
            getThemeClassByDepth(depth).then(data=>{
                this.options = data.data;
            }).catch(error=>{
                this.$message({
                  message: error+'select分类加载失败',
                  type: "error",
                  showClose: true
                });
            })
        }
    },
    watch:{
        optionValue:function(newVal,oldVal){
            this.$emit('update:value', newVal);
        }
    }
}
</script>

<style>

</style>