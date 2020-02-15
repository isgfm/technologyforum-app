<template>
  <div id="Rightbar">
    <div class="sep20"></div>
    <empty-right/>
  </div>
</template>

<script>
import EmptyRight from '@frontdesk/common/emptyRight/EmptyRight'
export default {
    name:'LoginRight',
    components:{
        'empty-right':EmptyRight
    }
}
</script>

<style>

</style>