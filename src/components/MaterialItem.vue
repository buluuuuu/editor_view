<script setup>
import { ref, computed } from 'vue'

const imgRef = ref() // 图片元素
const props = defineProps({
    img: {
        required: false,
        default: {
            id: Math.round(Math.random()*10000),
            img_url: '../assets/pika.png'
        }
    },
    img_name: {
        required: false,
        default: '图层'
    }
})

const handleDragStart = (e) => {
    const item = {
        name: props.img_name,
        img_id: props.img.id,
        img_url: props.img.img_url, 
        height: imgRef.value.offsetHeight,
        width: imgRef.value.offsetWidth
    }
    e.dataTransfer.setData('item', JSON.stringify(item))
}

const src = computed(() => {
    return props.img.img_url
})
</script>

<template>
    <div class="flex flex-col w-full h-full justify-center items-center bg-[#F6F4F0] rounded-lg">
        <img
         ref="imgRef"
         draggable
         @dragstart="handleDragStart"
         @dragend="handleDragEnd"
         class="w-[80%] h-[80%] object-contain text-xs" 
         src="../assets/pika.png" 
         alt="加载失败">
    </div>
</template>