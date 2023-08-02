<template>
home
</template>
<script>
import {onMounted } from 'vue'
export default {
    setup(props,context){
        onMounted(() => {
            context.emit('id-menu', 0 );
        })
    }
}

</script>