<template>
  <div>

  </div>
</template>

<script>
import { Ftime } from "@util/themeUtil";
import Pagination from "@common/pagination/Pagination";
import VRuntimeTemplate from "v-runtime-template";
import {getNotifyList,readAllNotify} from "@api/notify/notifyApi"
export default {
    created(){

    },
    data(){
        return {
            notifyList:[]
        }
    },
    methods:{
        getReadedNotifyList()
    }
}
</script>

<style>

</style>