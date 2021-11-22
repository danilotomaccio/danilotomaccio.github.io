<template>
  <div id="chat">
    <div id="senderInfo" class="foregr onTop">
      <div class="circularImage">
        <img src="https://download.flaticon.com/download/icon/2793269?icon_id=2793269&author=1&team=1&keyword=Cyborg&pack=2793197&style=Lineal+color&style_id=15&format=png&color=%23000000&colored=2&size=128&selection=1&premium=0&type=standard&token=03AGdBq24bd_VHHpvrAX4WRjoMwIDRnOP2qIzJw5q2aIvP41JrRKWQZ4OWDwY5kbshZPNazPJTgOp4TwekCH7w_xk7nmkFPpdApSizxcDtLRyWk9aIzOoLu8_a07sBg4WvIh-pUyUJUuBFR2ko7ZUQdKa3sXsIo7dcB4LC36nO8pp6S1IvDrE4W6Li_xuy4_WqUE8d0IB67fgdPEohCxSVBobloLrLJxYGbNCG3j7jnHznE-y3-uw09HnzDIkaDh3truKLs_wEx6cKnuwRp2DgQZSBwwCWB9HagCSKZPa0mpAUXnwHG_6pGxTYX0lu5LlxOhXYG0XIDcX7CiI0nZCKPKzNp8n5xrnV0tlWxUVfalbM_pCOeSr6V1MlTm-iCn_8LQd-DV1LfIZF-4kUtLy24LQWeqPTC-nmYG6dPR5UBlk9WWlMo7e0isMtuYNwuYA-hXi_tx0UtEcVRwwZoyY30YiJx5eWS2s5owPnCdbFdahki8p3p2LseSinAzmnnlFV0pD4HxfrRVypxrpsfDK-B3LecP-GjmHqsvry1UFNnO5nLruTgq9r0JMTY8jYJX72IASquOvvoS84tbAUdec1pw_bCmQcfvHYBn71Z8yqEePjUrwHElwk8pAhz_TSarGw0W5-A3f4KHiDccK7PZBEQQ6ZeDHn7DvrgZ7KPro_tQBCzh-uydGmc5boIRErDE0UhgUwdWlE-Ho82UF1vGwCnloAuHB0gBoJpjZBD_gA0K1b46ddA8FhS9ZyEcqRfv3HRRs51rdpVciqJ5g-pKvcaiQBiJf9NoJ9okeSZHlgC4FSYyIf9QbvXbOhHC8kcSZ6AqrDyZeiXsHZOIbrW2LdW935DTORaJqzB1wbBhYvwItG6TOuiY7lXh0fNe6LHZkCzoTMv6891QRHNluaByr0W8y-BMt-W7fWlGawJbczaiXYXx6Q2Rh0ib228uvZn0b2JM355X14ezC3isZt5jtEU5CCFNGKRpsvx0myLWkt0SDWGax8bUXTytVjH_bYKWpkH7xqvyQHyY5-BgYnM43iZKHcH5MILKyeeOByb6KBrN88S8xjS5DqIjEyHwQT39_9jub4eVi7ZtMTLoz5JYRakfRaFrj1b9J5zDs_J3-jzkIaTUu3n_196ViTlwjVbQJ6jC9uuBdQqzylEC9UbzA751ZVDCkFXxTqcZXCjLcXmjMFnLNQtmUElpa3iB4ooC1RIm7JiA_ZblKoKeH4tH3SqJyNS3wOedQgoi63UvYTkt7WfKioKla8gV4tLNDlVrRT6rTC2_aNAAewMDYV7icsBPmTzBZllOCWQw&_gl=1*1gq39w9*test_ga*MjUyMTQxMzA1LjE2Mzc0OTYyMTE.*test_ga_523JXC6VL7*MTYzNzU0MjIwNS4yLjEuMTYzNzU0MjI2NC4x*_ga*MjUyMTQxMzA1LjE2Mzc0OTYyMTE.*_ga_3Q8LH3P0VP*MTYzNzU0MjIwNS4yLjEuMTYzNzU0MjI2NC4w*xp_0*QkFTRUxJTkU." alt="Jerry" />
      </div>
      <div id="nameText">Jerry</div>
    </div>
    <div id="send_slot" class="foregr onBottom">
      <input
        id="send-msg"
        type="text"
        v-model="msg"
        placeholder="Scrivi messaggio"
        autocomplete="off"
      />

      <div id="send-btn" @click="sendMessage(msg)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </div>
    </div>
    <ChatHistory class="background" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChatHistory from "./ChatHistory.vue";

@Options({
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    sendMessage(message: string) {
      console.log(message);
      this.msg = "";
      this.$store.dispatch("sendMessage", message);
    },
  },
  components: {
    ChatHistory,
  },
})
export default class HomePage extends Vue {}
</script>


<style scoped lang="scss">
$accent-color: #f72585;
$color1: #7209b7;
$backgroundColor: #3a0ca3;
$color2: #4361ee;
$color3: #4cc9f0;

#chat {
  color: #f0fbff;
  background-image: linear-gradient(45deg, #3a0ca3 0%, #7209b7 75%);
  min-height: 100%;
}

.foregr {
  position: fixed;
  z-index: 20;
  left: 0;
  right: 0;

  &.onTop {
    top: 0;
    box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%), 0 10px 14px 1px rgb(0 0 0 / 14%), 0 4px 18px 3px rgb(0 0 0 / 12%);
  }
  &.onBottom {
    bottom: 0;
    box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%), 0 10px 14px 1px rgb(0 0 0 / 14%), 0 4px 18px 3px rgb(0 0 0 / 12%);
  }

  input {
    -webkit-appearance: none;
    outline: none;
    background-color: #00000000;
    border: none;
    color: #f0fbff;
  }
}

.background {
  z-index: 5;
}

#senderInfo {
  background: #4a0c72f4;
  min-height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 18px;
  margin: 6px;

  #nameText {
    flex: 3;
    align-content: center;
  }

  .circularImage {
    margin: 16px;
    width: 55px;
    height: 55px;
    overflow: hidden;
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: auto;
  }
}
#chat_history {
  height: 100%;
  overflow: scroll;
}

#send_slot {
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 80px;
  display: flex;
  background: #2f0e7afa;
  align-items: center;
  justify-content: space-between;

  #send-msg {
    padding: 0 20px;
    width: 100%;
    background-color: rgb(255 255 255 / 4%);
    height: 55%;
    border-radius: 1em;
    margin: 16px;
  }
  #send-btn {
    padding: 0 22px;
    height: 24px;
  }
}
</style>
