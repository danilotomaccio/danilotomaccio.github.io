import { NigmaMessage } from '@/model/Message'
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex'

export interface State {
  messageHistory: NigmaMessage[],
  sessionId: string
}

export const key: InjectionKey<Store<State>> = Symbol();


export const ADD_MESSAGE = "ADD_MESSAGE";
export const SEND_MESSAGE_REQ = "SEND_MESSAGE_REQ";
export const SEND_MESSAGE_RES = "SEND_MESSAGE_RES";
export const SEND_MESSAGE_ERR = "SEND_MESSAGE_ERR";
export const SAVE_ON_LOCAL = "SAVE_ON_LOCAL";


const loadFromLocal = function (objKey: string) : any {
  return JSON.parse(localStorage.getItem(objKey)!);
}

export const store = createStore<State>({
  state: {
    messageHistory: loadFromLocal("messages") ? [...loadFromLocal("messages")] : [],
    sessionId: "159790955"
  },
  mutations: {
    [ADD_MESSAGE](state, message: NigmaMessage) {
      state.messageHistory = [...state.messageHistory, message];
    },
    [SEND_MESSAGE_REQ](state, request) {
      console.log(request);
      //
    },
    [SEND_MESSAGE_RES](state, resMessages) {
      console.log(resMessages);
      state.messageHistory = [...state.messageHistory, ...resMessages];
    },
    [SEND_MESSAGE_ERR](state, error) {
      console.error(error);
      //
    }
  },
  actions: {
    async sendMessage({ commit, state, dispatch }, message) {
      commit(ADD_MESSAGE, { text: message, sender: 'me' });
      const head = { "Content-Type": "application/json" };
      const req = {
        method: 'POST',
        body: JSON.stringify({
          sessionId: state.sessionId,
          message,
          headers: head,
          redirect: 'follow'
        })
      };
      commit(SEND_MESSAGE_REQ, req);
      try {
        const res = await (await fetch("https://i9y86y0v1l.execute-api.eu-west-2.amazonaws.com/prod/elaborateMessage", req)).json();
        const resMessages = res.messages.map((msg: { text: string }) => ({ text: msg.text, sender: 'other' }));
        dispatch(SAVE_ON_LOCAL, { objKey: "messages", obj: [...state.messageHistory, ...resMessages] });
        commit(SEND_MESSAGE_RES, resMessages);
      } catch (error) {
        commit(SEND_MESSAGE_ERR, error);
      }

    },
    [SAVE_ON_LOCAL](state, { objKey, obj }) {
      console.log(obj);
      localStorage.setItem(objKey, JSON.stringify(obj));
    }   

  },
  modules: {
  }
})

