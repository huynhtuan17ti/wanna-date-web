<template>
    <div>
        <div class="container" v-loading="!fetchDone" element-loading-background="transparent">
            <vue-tinder
                v-if="fetchDone"
                ref="tinder"
                key-name="key"
                v-model:queue="queue"
                :max="3"
                :offset-y="10"
                allow-down
                @submit="onSubmit"
            >
                <template #default="{ data }">
                    <user-card v-model="data.user" card-type="normal"></user-card>
                </template>
                <template #like></template>
                <template #nope></template>
                <template #super></template>
                <template #down></template>
                <template v-slot:rewind>
                    <span>REWIND</span>
                </template>
            </vue-tinder>
            <div class="btns">
                <img src="../assets/rewind.png" @click="decide('rewind')" />
                <img src="../assets/nope.png" @click="decide('nope')" />
                <img src="../assets/super-like.png" @click="decide('super')" />
                <img src="../assets/like.png" @click="decide('like')" />
                <img src="../assets/help.png" @click="decide('help')" />
            </div>
        </div>
        <img class="logout" :src="imageData.logout" @click="onLogout()" />
    </div>
</template>

<script lang="ts" setup>
import VueTinder from 'vue-tinder'
import { useRouter } from 'vue-router'
import { useAccountStore } from '../stores/account'
import { useManageStore } from '../stores/manage'
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import { User } from '~/models/user'
import { imageData } from '../constants/image'

const router = useRouter()
const accountStore = useAccountStore()
const manageStore = useManageStore()
const suggest_list = computed(() => manageStore.suggestUserData)

onMounted(async () => {
    await initializeUsers()
})

const onLogout = async () => {
    await accountStore.handleLogout()
    router.push('/login')
}

// tinder
const queue = ref<{ key: number; user: User }[]>([])
const history = ref<{ key: number; user: User | undefined }[]>([])
const tinder = ref(null)
const fetchDone = ref(false)
const initializeUsers = async () => {
    for (let index = 0; index < suggest_list.value.length; index++) {
        queue.value.push({ key: index, user: suggest_list.value[index] })
    }
    fetchDone.value = true
}

const onSubmit = ({ type, key, item }) => {
    history.value.push(item)
}
const decide = (choice: string) => {
    if (choice === 'rewind') {
        if (history.value.length) {
            const item = history.value.pop()
            tinder.value.rewind([item])
        }
        return
    } else if (choice == 'help') {
        // TODO: handle help
        return
    } else if (choice == 'like' || choice == 'super') {
        // console.log(queue.value[0].user)
        accountStore.likeUser(queue.value[0].user.user)
    }
    tinder.value.decide(choice)
}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    height: 100vh;
    .vue-tinder {
        margin-top: 5vh;
        position: relative;
        margin-bottom: 10vh;
        height: 75vh;
        width: 22vw;
        :deep(.tinder-card) {
            position: absolute;
        }
    }
    .btns {
        position: fixed;
        bottom: 5vh;
        margin: auto;
        margin-left: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 7vh;
            border-radius: 50%;
            margin-right: 2vw;
            box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
        }
    }
}
.logout {
    cursor: pointer;
    position: absolute;
    width: 3vw;
    top: 1vh;
    right: 1vw;
}
</style>
