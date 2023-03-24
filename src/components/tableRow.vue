<template>


  <div class="text-right pb-[12px]">
                <span class="table-label">
                  {{ props.rowlabel }}
                </span>
  </div>
  <div class="text-left pb-[12px]">
                <span class="table-value whitespace-break-word lg:whitespace-nowrap" v-html="props.rowvalue">
                </span>


  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({

  name: "table row",
  props: {
    rowvalue: {
      type: String
    },
    rowlabel: {
      type: String
    }
  },
  setup(props) {
    return {props}
  }
})

</script>

<style scoped>

.table-label {
  color: #9C9C9C;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.table-value {
  color: #413C3C;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
}


</style>