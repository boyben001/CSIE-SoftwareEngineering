<template>
    <n-button-group>
        <n-button ghost>
        <template #icon>
            <n-icon><CommentNote20Regular /></n-icon>
        </template>
        寄送會議通知
        </n-button>
        <n-button ghost>
        <template #icon>
            <n-icon><Send20Regular /></n-icon>
        </template>
        寄送會議結果
        </n-button>
    </n-button-group>
</template>

<script lang="ts">
import { NButton, NButtonGroup } from 'naive-ui'
import { CommentNote20Regular, Send20Regular } from '@vicons/fluent'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        CommentNote20Regular,
        NButton,
        NButtonGroup,
        Send20Regular
    }
})
</script>