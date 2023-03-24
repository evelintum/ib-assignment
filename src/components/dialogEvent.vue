<template>

  <div class="h-full w-full backdrop-blur-sm bg-white/30 dialog-backdrop " @click = "$emit('close')">
    <dialog open
            class="h-full w-full md:w-[505px] md:h-[667px] md:mt-[175px] md:rounded-xl pl-[27px] pt-[41px] pr-[42px] drop-shadow-lg">
      <cross @click = "$emit('close')" />

      <h1 class="dialog-header mt-[44px]"> Help us improve </h1>

      <span class="dialog-text mt-[11px] mb-[32px] block">We want to offer our clients the best experience. Your feedback will help us get better. You can select multiple answers.</span>
      <template v-for="item in data">
        <div class="lg:pl-[84px] pl-[15px] pb-[20px]  ">
          <input type="checkbox" :value="item.key" :id="item.key" class="rounded-md w-[24px] h-[24px] border-[#413C3C]">
          <label :for="item.key" class="dialog-options ml-[24px]"> {{ item.value }} </label>
        </div>
      </template>

      <div class="text-center">
        <button
            class="rounded hover:bg-violet-800 hover:color-white bg-violet-900 px-5 py-2 mb-0.5 primary-button mt-[22px]">
          Cancel loan application
        </button>

      </div>
    </dialog>

  </div>

</template>

<script>
import {defineComponent, defineEmits} from "vue";
import cross from './crossIcon.vue'

export default defineComponent({
  components: {
    cross
  },
  name: "dialog event",
  emits: ['close'],
  setup() {
    // const emit = defineEmits(['close'])
    let data = [{
      key: "loan-amount-is-too-small",
      value: "Loan amount is too small"
    },
      {
        key: "interest-is-too-high",
        value: "Interest is too high"
      },
      {
        key: "contract-fee-is-too-high",
        value: "Contract fee is too high"
      },
      {
        key: "not-sure-if-i-should-take-a-loan",
        value: "Not sure if I should take a loan"
      },
      {
        key: "i-prefer-another-bank",
        value: "I prefer another bank"
      },
      {
        key: "timing-is-not-right",
        value: "Timing is not right"
      },
      {
        key: "other",
        value: "Other"
      },
    ]

    const closeDialog = () => emit('close');

    return {data, closeDialog}
  }
})

</script>

<style scoped>

.dialog-backdrop {
  position: absolute;
  left: 0;
  top: 0;
}

.dialog-header {
  color: #413C3C;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
}

.dialog-text {
  color: #413C3C;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
}

.dialog-options {
  color: #413C3C;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

</style>