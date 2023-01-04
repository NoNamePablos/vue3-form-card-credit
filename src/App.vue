<script setup>
import Layout from '@/components/Layout/Layout.vue';
import cardPaymentVue from '@/components/card-payment/cardPayment.vue';
import { ref } from 'vue';
components: {
  Layout, cardPaymentVue;
}
const stateCheckbox = ref(false);
const formPayment = ref({
  email: '',
  cardNumber: '',
  expireDate: '',
  CVV: '',
  promocode: '',
});
</script>

<template>
  <Layout>
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
              <div class="total">
                <div class="total__text">Subtotal</div>
                <div class="total__value">$64</div>
              </div>
              <div class="total">
                <div class="total__text">Platform Fee</div>
                <div class="total__value">$4</div>
              </div>
              <div class="total">
                <div class="total__text">Promocode</div>
                <div class="total__value">- $12</div>
              </div>
              <div class="total total-summary">
                <div class="total__text">Total Amount</div>
                <div class="total__value">$100</div>
              </div>
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
            <div class="card-glasm">
              <div class="card-glasm__ico">
                <img src="@/assets/img/favicon.ico" alt="" />
              </div>
              <p class="card-glasm__title">
                Subscribe and start saving your money today
              </p>
            </div>
          </div>
          <div class="card-feature__body">
            <div class="card-plan">
              <div class="card-plan__img">
                <img src="@/assets/img/1.png" alt="" />
              </div>
              <div class="card-plan__block">
                <p class="card-plan__type">Professional plan</p>
                <div class="card-plan__cost">$96 / month</div>
              </div>
            </div>
            <ul class="card-feature__list">
              <li class="list-item">
                <p>all features in <span>basic includes</span></p>
              </li>
              <li class="list-item">
                <p>all features in <span>basic includes</span></p>
              </li>
              <li class="list-item">
                <p>all features in <span>basic includes</span></p>
              </li>
              <li class="list-item">
                <p>all features in <span>basic includes</span></p>
              </li>
            </ul>
            <mybutton :clases="['button-transparent', 'card-feature__button']"
              >Make payment</mybutton
            >
          </div>
        </div>
      </template>
    </cardPaymentVue>
  </Layout>
</template>

<style lang="scss" scoped>
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
  & .card-glasm {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(11px) saturate(190%);
    -webkit-backdrop-filter: blur(11px) saturate(190%);
    background-color: rgba(17, 25, 40, 0.44);
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
  &__button {
    padding-top: 20px;
    margin-top: auto;
    cursor: pointer;
  }
}
.card-plan {
  height: 100px;
  width: calc(100% - 40px);
  padding: 20px 30px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-white);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  &__img {
    width: 80px;
    border-radius: 12px;
    height: 100%;
    object-fit: cover;
  }
  &__type {
    margin-bottom: 10px;
    color: var(--color-dark-grey);
  }
  &__cost {
    font-weight: 500;
    color: var(--color-text);
  }
  &__block {
    display: flex;
    flex-direction: column;
  }
}
.card-glasm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__ico {
    margin-bottom: 10px;
  }
  &__title {
    color: var(--color-white);
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }
}

.total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__text {
    color: var(--color-dark-grey);
    font-size: 13px;
  }
  &__value {
    font-weight: 500;
  }
  &-summary {
    border-top: 1px solid var(--color-dark-grey);
    padding-top: 15px;
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
