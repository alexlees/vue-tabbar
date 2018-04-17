import Vue from 'vue'

let a = 0
export default () => {
  return a++
}

export const bus = new Vue()
