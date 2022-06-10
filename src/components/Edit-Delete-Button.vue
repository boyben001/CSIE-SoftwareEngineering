<template>
    <n-button-group>
        <n-button ghost>
            <template #icon>
                <n-icon>
                    <Edit16Regular />
                </n-icon>
            </template>
            編輯
        </n-button>
        <n-button ghost>
            <template #icon>
                <n-icon>
                    <DeleteDismiss28Regular />
                </n-icon>
            </template>
            刪除
        </n-button>
    </n-button-group>
</template>

<script>
import { NButton, NButtonGroup } from 'naive-ui'
import { Edit16Regular, DeleteDismiss28Regular } from '@vicons/fluent'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        Edit16Regular,
        NButton,
        NButtonGroup,
        DeleteDismiss28Regular
    }
})
</script>