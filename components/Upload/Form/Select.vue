<template>
  <!-- NOTE: Use this for select inputs with few options 
    e.g: semester or resource type. -->
  <div class="w-56">
    <label
      :class="{ 'label flex-col items-start gap-2': labelText }"
    >
      <span
        v-if="labelText"
        class="label-text"
      >
        {{ labelText }}
        <span
          v-if="required"
          class="text-error px-1"
          :title="$t('submit.form.required')"
        >*</span>
      </span>
      <select
        :value="modelValue"
        class="select select-bordered select-secondary w-full"
        :class="{ 'text-error text-opacity-75': !modelValue }"
        :required="required"
        v-bind="$attrs"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
      >
        <option
          v-if="title"
          selected
          disabled
          value=""
        >
          {{ title }}
        </option>
        <option
          v-for="opt in optionsList"
          :key="opt.value"
          :value="opt.value"
        >
          {{ opt.title }}
        </option>
      </select>
    </label>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    title: {
      type: String,
      default: null,
    },
    labelText: {
      type: String,
      default: null,
    },
    optionsList: {
      type: Array as PropType<UploadFormSelectListItem[]>,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String as PropType<string | null>,
      default: null
    }
  })
  defineEmits(['update:modelValue'])
</script>
<style scoped lang="postcss"></style>