<template>
  <div id="chat_history">
    <div v-for="msg in messages" :key="msg.id" ref="messages">
      <MessageWrapper :msg="msg.text" :sent="msg.sender === 'me'" />
    </div>
  </div>
</template>

<script lang="ts">
import { NigmaMessage } from "@/model/Message";
import { key } from "@/store";
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import MessageWrapper from "./MessageWrapper.vue";

@Options({
  components: {
    MessageWrapper,
  },

  /* setup() {
    const store = useStore(key);
    return {
      messages: store.state.messageHistory
    }
  }, */
  computed: {
    messages(): NigmaMessage[] {
      return useStore(key).state.messageHistory;
    },
  },
})
export default class ChatHistory extends Vue {}
</script>

<style lang="scss" scoped>
#chat_history {
  padding: 95px 18px 80px 18px;
}
</style>