<script lang="ts">
import {defineComponent, ref} from 'vue'
import tableRow from './components/tableRow.vue'
import circleIcon from './components/circleIcon.vue'
import lines from './components/lines.vue'
import dialogEvent from './components/dialogEvent.vue'

export default defineComponent({
  components: {
    tableRow,
    circleIcon,
    lines,
    dialogEvent
  },
  setup() {
    let data = {
      loanAmount: '1,700.00',
      loanPeriod: 36,
      monthPayment: '95,27',
      interestRate: '12,90',
      margin: '8,90',
      euribor: 0
    }
    let dialogOpen = ref(false)

    return {data, dialogOpen}
  }
})


</script>

<template>
<dialog-event  v-if="dialogOpen" @close="dialogOpen=false" />

  <header class="bg-hero lg:bg-none h-65 lg:h-20">
    <div class="container mx-auto max-w-5xl pt-[22px]">
      <img src="/pcs/Vector.svg" class="mx-auto mb-[71px] "/>
      <lines class="absolute right-[29px] top-[38px] lg:right-[139px] lg:top-[37px]"/>
    </div>

  </header>

  <div class="container mx-auto max-w-5xl rounded-t-xl lg:rounded-none bg-white -mt-5 lg:mt-0 " v-if="!dialogOpen">


    <!--left side-->
    <div class="grid lg:grid-cols-2 h-full gap-2 ">
      <div class="image-shadow-container hidden lg:block">


        <img src="/pcs/muffin2.jpg" alt="Muffin image" class="image-shadow rounded-lg mb-[115px] ">

      </div>


      <!--   right side -->
      <div>
        <div class="grid grid-cols-1 pl-0 lg:pl-28 ">

          <div class="divide-y divide-solid">

            <div class="text-center pb-[27px] pt-[75px]">
              <h1 class="heading">Good news!</h1>
              <span class="approval ">Your loan has been approved.</span>

            </div>
            <div class="grid grid-cols-2 gap-x-8 pt-5">

              <table-row rowlabel="Personal loan offer"
                         :rowvalue="data.loanAmount + ' <span class=table-value-prefix> € </span>'"
              />
              <table-row rowlabel="Loan period"
                         :rowvalue="data.loanPeriod + ' <span class=table-value-prefix-secondary> months </span>'"
              />
              <table-row rowlabel="Monthly payment"
                         :rowvalue="data.monthPayment + ' <span class=table-value-prefix> € </span>'"
              />


            </div>

            <div class="grid grid-cols-2 gap-x-8 pt-5">
              <table-row rowlabel="Interest rate"
                         :rowvalue="data.interestRate + ' <span class=table-value-prefix-primary> % </span>'"
              />
              <table-row rowlabel="Margin"
                         :rowvalue="data.margin + ' <span class=table-value-prefix-primary> % </span> <span class=table-value-prefix-third>+ 6 months EURIBOR ('+data.euribor+'<span class=table-value-prefix-fourth>%</span>)</span>'"
              />

            </div>
            <div>

              <div class="grid grid-cols-1 pt-5 pb-5 text-center">

                <span class="table-promocode">
                  <circle-icon class="inline-block mr-2"/> Promo code applied
                </span>
              </div>

            </div>


            <div class="grid grid-cols-1 pt-[33px] ">
              <div class="text-center">
                <button
                    class="rounded hover:bg-violet-800 hover:color-white bg-violet-900 px-5 py-2 mb-0.5 primary-button">
                  View offer details
                </button>

                <button class="rounded bg-transparent px-5 py-2 mb-[36px] secondary-button" @click="dialogOpen = true">
                  Not interested
                </button>

              </div>
            </div>

          </div>


        </div>

      </div>
    </div>
  </div>

</template>
<!--<script>
export default {
  name: 'App',
  // Your Vue component options here
}
</script>-->

<style>
.image-shadow {
  -webkit-box-shadow: -30px -35px 0 0 rgba(248, 245, 252, 1);
  -moz-box-shadow: -30px -35px 0 0 rgba(248, 245, 252, 1);
  box-shadow: -30px -35px 0 0 rgba(248, 245, 252, 1);
}

.image-shadow-container {
  padding-top: 35px;
  padding-left: 30px;
}

.primary-button {
  color: #FDFDFD;
  font-weight: 600;
}

.secondary-button {
  color: #2B0A57;
  font-weight: 400;
}

button {
  min-width: 316px;
}

.table-value-prefix {
  color: #413C3C;
  font-weight: 300;
  font-size: 14px;
  line-height: 30px;
  vertical-align: text-bottom;
}

.table-value-prefix-primary {
  color: #413C3C;
  font-weight: 300;
  font-size: 12px;
  line-height: 30px;
  vertical-align: text-bottom;
}

.table-value-prefix-secondary {
  color: #413C3C;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  vertical-align: text-bottom;
}

.table-value-prefix-third {
  color: #413C3C;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  vertical-align: text-bottom;
}

.table-value-prefix-fourth {
  color: #413C3C;
  font-weight: 300;
  font-size: 10px;
  line-height: 20px;
  vertical-align: text-bottom;
}

.table-promocode {
  color: #413C3C;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
}

.heading {
  color: #413C3C;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 5px;
}

.approval {
  color: #413C3C;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

}



header {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}


</style>


