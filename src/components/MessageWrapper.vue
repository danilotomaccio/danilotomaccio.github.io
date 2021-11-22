<template>
  <div v-if="sent" class="msg_container sent_msg_container">
    {{ msg }}
  </div>
  <div v-else class="msg_container received_msg_container">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
    sent: Boolean,
  },
})
export default class MessageWrapper extends Vue {
  msg!: string;
  sent = false;
}
</script>

<style scoped lang="scss">
.msg_container {
  background-color: #ffffff30;
  padding: 14px;
  margin: 12px 0 12px 0;
  width: fit-content;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);

  &.sent_msg_container {
    border-radius: 14px 14px 0 14px;
    background-color: #ffffff30;
    margin-right: 0;
    margin-left: auto;
  }

  &.received_msg_container {
    border-radius: 14px 14px 14px 0;
    background-color: #ffffff80;
  }
}
</style>