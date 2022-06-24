<template>
    <n-layout>
        <n-scrollbar style="max-height: 95vh; padding: 3% 5% " trigger="none">
            <n-h1 style="font-weight: bold;">封存會議</n-h1>
            <n-tabs type="line" animated>
                <n-tab-pane name="draft" tab="尚未封存">
                    <n-data-table :columns="draft_columns" :data="draft_data" :pagination="pagination" :bordered="false" />
                </n-tab-pane>
                <n-tab-pane name="archive" tab="已封存">
                    <n-data-table :columns="archive_columns" :data="archive_data" :pagination="pagination" :bordered="false" />
                </n-tab-pane>
            </n-tabs>
        </n-scrollbar>
    </n-layout>
</template>

<script>
import { h, defineComponent } from "vue";
import { NButton, useMessage } from "naive-ui";


const createDraftColumns = ({
    Archive
}) => {
    return [
        {
            title: "Id",
            key: "id"
        },
        {
            title: "標題",
            key: "title"
        },
        {
            title: "主席",
            key: "chairman"
        },
        {
            title: "紀錄",
            key: "minutetaker"
        },
        {
            title: "開會時間",
            key: "time"
        },
        {
            title: "封存",
            key: "archive",
            render(row) {
                return h(NButton, {
                    strong: true,
                    tertiary: true,
                    size: "small",
                    type: "success",
                    onClick: () => Archive(row)
                }, { default: () => "封存" });
            }
        }
    ];
};

const createArchiveColumns = ({
    Download
}) => {
    return [
        {
            title: "Id",
            key: "id"
        },
        {
            title: "標題",
            key: "title"
        },
        {
            title: "主席",
            key: "chairman"
        },
        {
            title: "紀錄",
            key: "minutetaker"
        },
        {
            title: "開會時間",
            key: "time"
        },
        {
            title: "下載",
            key: "download",
            render(row) {
                return h(NButton, {
                    strong: true,
                    tertiary: true,
                    size: "small",
                    type: "info",
                    onClick: () => Download(row)
                }, { default: () => "下載" });
            }
        }
    ];
};

const draft_data = [
    { id: 3, title: "Wonderwall", chairman: "王大明", minutetaker: "王曉明", time: "2022 06 24" },
    { id: 4, title: "Don't Look Back in Anger", chairman: "陳小一", minutetaker: "王曉明", time: "2022 06 24" },
    { id: 12, title: "Champagne Supernova", chairman: "吳一郎", minutetaker: "王曉明", time: "2022 06 24" }
];

const archive_data = [
    { id: 3, title: "Wonderwall", chairman: "王大明", minutetaker: "王曉明", time: "2022 06 24" },
    { id: 4, title: "Don't Look Back in Anger", chairman: "陳小一", minutetaker: "王曉明", time: "2022 06 24" },
    { id: 12, title: "Champagne Supernova", chairman: "吳一郎", minutetaker: "王曉明", time: "2022 06 24" }
];

export default defineComponent({
    setup() {
        const message = useMessage();
        return {
            draft_data,
            archive_data,
            draft_columns: createDraftColumns({
                Archive(row) {
                    message.info(`封存 ${row.title}`);
                }
            }),
            archive_columns: createArchiveColumns({
                Download(row) {
                    message.info(`封存 ${row.title}`);
                }
            }),
            pagination: false
        };
    }
});
</script>