<template>
  <div class="container py-8">
    <form
      class="flex flex-col gap-4"
      @submit.prevent="submit"
    >
      <!-- resource type -->
      <div class="flex gap-4 flex-wrap">
        <UploadFormSelect
          v-model="userInputs.resType"
          :label-text="$t('submit.form.choose-type')"
          :title="$t('submit.form.select')"
          :options-list="resourceTypes"
          required
        />
        <Transition name="fade">
          <UploadFormSelect
            v-if="userInputs.resType"
            v-model="userInputs.resSpecificType"
            :label-text="$t(`submit.form.choose-${userInputs.resType.toLowerCase()}-type`)"
            :title="$t('submit.form.select')"
            :options-list="resourceSpecificTypes"
            required
          />
        </Transition>
      </div>
      <!-- year and semester -->
      <label class="flex flex-col gap-2">
        <span class="label-text">
          {{ $t('submit.form.year-semester-label') }}
          <span
            class="text-error px-1"
            :title="$t('submit.form.required')"
          >*</span>
        </span>
        <div class="sm:join max-sm:flex flex-wrap max-sm:gap-2">
          <input
            v-model="userInputs.year"
            type="number"
            min="2008"
            :max="new Date().getFullYear() + 1"
            class="input input-bordered input-secondary sm:join-item sm:!rounded-s-lg sm:!rounded-e-none placeholder:text-error placeholder:text-opacity-75"
            :placeholder="$t('submit.form.year')"
            required
            title="Please enter a valid year between 2008 and the current year"
          >
          <UploadFormSelect
            v-model="userInputs.semester"
            :title="$t('submit.form.choose-semester')"
            :options-list="semesters"
            class="join-item sm:!rounded-e-lg sm:rounded-s-none"
            required
          />
        </div>
      </label>
      <button
        type="submit"
        class="btn btn-secondary w-max"
        aria-label="submit button"
      >
        {{ $t('submit.form.submit') }}
      </button>
    </form>
  </div>
</template>
<script lang="ts" setup>
  import { ResourceTypes, NoteTypes, ExamTypes, Semesters } from '@/types/strapi/enums'
  const { t } = useI18n()

  const userInputs = reactive({
    resType: null as keyof typeof ResourceTypes | null,
    resSpecificType: null as keyof typeof ExamTypes | keyof typeof NoteTypes | null,
    semester: null as keyof typeof Semesters | null,
    year: null as number | null,
  })

  // list of resource types
  const resourceTypes: UploadFormSelectListItem[] = Object.keys(ResourceTypes).map((type) => {
    return {
      title: t(`material.resource.type.${type.toLowerCase()}`),
      value: type
    } as UploadFormSelectListItem
  })
  // list of resource-specific types
  const resourceSpecificTypes = computed<UploadFormSelectListItem[]>(() => Object.keys(
    userInputs.resType && userInputs.resType === 'Note' ?
    NoteTypes : ExamTypes
  ).map((type) => {
    return {
      title: t(`material.resource.${userInputs.resType?.toLowerCase()}.type.${type.toLowerCase()}`),
      value: type
    } as UploadFormSelectListItem
  }))
  // list of semesters
  const semesters: UploadFormSelectListItem[] = Object.keys(Semesters).map((semester) => {
    return {
      title: t(`material.semesters.${semester?.toLowerCase()}`),
      value: semester
    }
  })

  const submit = () => {
    console.info('submitted')
    console.info(userInputs.resType, userInputs.resSpecificType)
    console.log(userInputs.year, userInputs.semester)
  }
</script>
<style lang="postcss" scoped></style>
