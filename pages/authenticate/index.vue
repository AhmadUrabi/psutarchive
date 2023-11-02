<template>
    <div class="flex items-center justify-center">
        {{ $t("messages.authenticating") }}
        <span class="loading loading-dots loading-sm relative -bottom-2 ml-2" />
    </div>
</template>
<script setup lang="ts">
// The google authentication button on the upload page will redirect to this page after a successful login.
// It will include a code query that needs to be traded for a jwt from the api.
const route = useRoute()
const router = useRouter()

onMounted(() => {
    const query = route.query;

    if (!query?.code) {
        router.replace("/");
        return;
    }

    // Trade code with jwt https://market.strapi.io/plugins/strapi-google-auth

    // If code is valid store response jwt in localstorage with storeJwt

    // If invalid, invalidateJwt() then redirect to home page
})
</script>
<style scoped></style>