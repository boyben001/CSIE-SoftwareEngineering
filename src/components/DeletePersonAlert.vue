<template>
    <n-alert style="background-color:white; border:1px solid" :show-icon="false" title="刪除人員" closable>
        <hr/>
        <div style="padding-left: 5px">警告!即將刪除『{{ deletedname }}』的所有資料 </div>
        <n-space justify="end" style="margin-top: 10px">
            <n-button color="#bfb3b2" size="small" >取消</n-button>
            <n-button size="small" type="error">刪除</n-button>
        </n-space>
    </n-alert>
</template>

<script>
import { NAlert, NButton, NSpace } from 'naive-ui';
export default {
    name: "DeletePersonAlert",
    props: {
        deletedname: {
            type: String,
            required: true
        },
    },
    components: {
        NAlert,
        NSpace,
        NButton
    }
};
</script>