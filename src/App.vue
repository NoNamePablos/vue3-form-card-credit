<script setup>
import Layout from '@/components/Layout/Layout.vue';
import cardPaymentVue from '@/components/card-payment/cardPayment.vue';
import { ref, watch, computed, reactive, onMounted } from 'vue';
import CardTotal from '@/components/cardTotal.vue';
import CardGlasm from '@/components/cardGlasm.vue';
import CardPlan from '@/components/cardPlan.vue';
import { usePlanStore } from '@/store.js';
import MyModal from '@/components/mymodal.vue';
import { storeToRefs } from 'pinia';

components: {
  Layout, cardPaymentVue, CardTotal, CardGlasm, CardPlan;
}

const store = usePlanStore();
const planeStore = computed(() => store.getAll);
const planActive = ref({});
const stateCheckbox = ref(false);
const formPayment = reactive({
  email: '',
  cardNumber: '',
  expireDate: '',
  CVV: '',
  promocode: '',
});

const total = ref(0);

const modalPlanSelect = ref();

const planSelected = () => {
  const activePlans = store.getPlanById;
  planActive.value = activePlans(store.getActiveIndex);
};

const handlerSelectModal = () => {
  try {
    store.setActiveIndex(modalPlanSelect.value);
    planSelected();
    calculateTotal();
  } catch (err) {
    throw new ReferenceError('undefind');
  }
};

onMounted(() => {
  planSelected();
  calculateTotal();
});

const calculateTotal = () => {
  total.value = planActive.value.price + store.getPlatformFee;
};
watch(
  () => formPayment.promocode,
  (prom) => {
    isPromoValid.value = prom == store.getPromo.title ? true : false;
  }
);

const isModalOpen = ref(false);
const isPromoValid = ref(false);

const handlerCloseModal = () => {
  isModalOpen.value = false;
};
const totalPrice = () => {};
</script>

<template>
  <Layout>
    <MyModal :isShow="isModalOpen" @close="handlerCloseModal">
      <template v-slot:body>
        <div class="select__body">
          <select v-model="modalPlanSelect">
            <option
              v-for="plan in planeStore"
              :key="plan.idPlan"
              :value="plan.idPlan"
            >
              {{ plan.title }}
            </option>
          </select>
          <mybutton :clases="['button-primary']" @click="handlerSelectModal"
            >Select Plan</mybutton
          >
        </div>
      </template>
    </MyModal>
    <cardPaymentVue>
      <template v-slot:card-right>
        <div class="card-form">
          <div class="card-form__wrapper">
            <h4 class="card-form-title">Payment details</h4>
            <form @submit.prevent class="card-form__form">
              <myinputgroup :name="'Email'">
                <myinput
                  :typeField="'email'"
                  :value="formPayment.email"
                  :mask="'test@mail.ru'"
                  :customClass="['cls-1']"
                  v-model="formPayment.email"
                />
              </myinputgroup>
              <myinputgroup :name="'Card Number'">
                <myinput
                  :typeField="'text'"
                  :value="formPayment.cardNumber"
                  :mask="'xxxx xxxx xxxx xxxx'"
                  v-model="formPayment.cardNumber"
                />
              </myinputgroup>

              <div class="group-column">
                <myinputgroup :name="'Expire date'">
                  <myinput
                    :typeField="'text'"
                    :value="formPayment.expireDate"
                    :mask="'MM / YY'"
                    v-model="formPayment.expireDate"
                  />
                </myinputgroup>
                <myinputgroup :name="'CVV'">
                  <myinput
                    :typeField="'password'"
                    :value="formPayment.CVV"
                    :mask="'xxx'"
                    v-model="formPayment.CVV"
                  />
                </myinputgroup>
              </div>
              <myinputgroup :name="`I ha've promocode.`" :isCheckbox="true">
                <mycheckbox :value="stateCheckbox" v-model="stateCheckbox" />
              </myinputgroup>
              <myinputgroup :name="'Promocode'" v-if="stateCheckbox">
                <myinput
                  :typeField="'text'"
                  :value="formPayment.promocode"
                  :mask="'xxx'"
                  v-model="formPayment.promocode"
                />
              </myinputgroup>
              <CardTotal :text="'Subtotal'" :value="planActive.price" />
              <CardTotal :text="'Platform Fee'" :value="store.getPlatformFee" />
              <CardTotal
                :text="'Promocode'"
                :value="store.getPromo.price"
                v-if="isPromoValid"
              />
              <CardTotal :text="'Total Amount'" :value="total" />
              <mybutton :type="'submit'" :clases="['button-primary']"
                >Make payment</mybutton
              >
            </form>
          </div>
        </div>
      </template>

      <template v-slot:card-left>
        <div class="card-feature">
          <div class="card-feature__img">
            <CardGlasm
              :img="'favicon.ico'"
              :title="'Subcribe and save money every month!'"
            />
          </div>
          <div class="card-feature__body">
            <CardPlan
              :img="'1.png'"
              :typePlan="planActive.title"
              :price="planActive.price"
            />
            <ul class="card-feature__list">
              <li
                class="list-item"
                v-for="adv in planActive.adventages"
                :key="adv"
              >
                <p>{{ adv.message }}</p>
              </li>
            </ul>
            <mybutton
              @click="isModalOpen = !isModalOpen"
              :clases="['button-transparent', 'card-feature__button']"
              >Modify plan</mybutton
            >
          </div>
        </div>
      </template>
    </cardPaymentVue>
  </Layout>
</template>

<style lang="scss" scoped>
.select__body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.list-item {
  display: flex;
  align-items: center;
  &:before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    flex: 0 0 6px;
    background-color: var(--color-blue-primary);
  }
  & p {
    padding-left: 10px;
    color: var(--color-dark-grey);
    & span {
      font-weight: 500;
      color: var(--color-text);
    }
  }
}
.card-feature {
  width: 100%;
  height: 100%;
  &__img {
    height: 200px;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    overflow: hidden;
    background-color: #111927;
    background-image: radial-gradient(
        at 47% 33%,
        hsl(155, 11%, 40%) 0,
        transparent 59%
      ),
      radial-gradient(at 82% 65%, hsl(32.31, 9%, 30%) 0, transparent 55%);
    background-repeat: no-repeat;
  }
  &__body {
    position: relative;
    background-color: var(--color-border);
    padding: 100px 30px 25px 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: calc(100% - 200px);
    display: flex;
    flex-direction: column;
  }
  &__list {
    list-style: none;
    & > * + * {
      margin-top: 20px;
    }
  }
  &__button {
    padding-top: 20px;
    margin-top: auto;
    cursor: pointer;
  }
}

.group-column {
  display: flex;
  gap: 20px;
}

.card-form {
  &__wrapper {
    padding: 10px;
  }
  &__form {
    & > * + * {
      margin-top: 15px;
    }
  }
  &-title {
    color: var(--color-text);
    font-weight: 600;
    font-size: 25px;
    line-height: 25px;
    margin-bottom: 30px;
  }
}
</style>
