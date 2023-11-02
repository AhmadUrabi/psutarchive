<template>
    <div class="flex items-center justify-center">
        {{ $t("messages.authenticating") }}
        <span class="loading loading-dots loading-sm relative -bottom-2 ml-2" />
    </div>
</template>
<script setup lang="ts">
// The google authentication button on the upload page will redirect to this page after a successful login.
// It will include a code query that needs to be traded for a jwt from the api.
import { storeJwt } from '@/utils/jwt';
const route = useRoute()
const router = useRouter()

const goToHome = () => {
    router.replace("/");
}

onMounted(() => {
    const query = route.query;
    console.log(query)

    if (!query?.code) {
        goToHome();
        return;
    }

    const response = fetch("https://api.psutarchive.com/strapi-google-auth/user-profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            code: query.code,
        })
    }).then((res) => {
        if (res.status != 200) {
            return;
        }
        res.json().then((response) => { storeJwt(response.data.token) })
    })

    goToHome();
})
</script>
<style scoped></style>