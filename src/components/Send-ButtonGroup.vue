<template>
    <n-button-group>
        <n-button :loading="inform" @click="handleClickSend">
            <template #icon>
                <n-icon>
                    <CommentNote20Regular />
                </n-icon>
            </template>
            寄送會議通知
        </n-button>
        <n-button ghost :loading="result" @click="handleClickResult">
            <template #icon>
                <n-icon>
                    <Send20Regular />
                </n-icon>
            </template>
            寄送會議結果
        </n-button>
    </n-button-group>
</template>

<script>
import { NButton, NButtonGroup } from 'naive-ui'
import { CommentNote20Regular, Send20Regular } from '@vicons/fluent'
import { defineComponent, ref } from 'vue'

export default defineComponent({
    components: {
        CommentNote20Regular,
        NButton,
        NButtonGroup,
        Send20Regular
    },
    setup() {
        const informRef = ref(false);
        const resultRef = ref(false);
        return {
            handleClickSend() {
                informRef.value = true;
                setTimeout(() => {
                    informRef.value = false;
                }, 2000);
            },
            inform: informRef,
            handleClickResult() {
                resultRef.value = true;
                setTimeout(() => {
                    resultRef.value = false;
                }, 2000);
            },
            result: resultRef,
        };
    }
})
</script>

<style>
.dasd {
    color: #0000ff
}
</style>