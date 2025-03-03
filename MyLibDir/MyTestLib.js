import { defineComponent as e, createElementBlock as o, openBlock as c, toDisplayString as a } from "vue";
const s = /* @__PURE__ */ e({
  name: "SamBtn",
  __name: "index",
  props: {
    btnText: {
      type: String,
      default: "确认"
    }
  },
  setup(t) {
    return (n, m) => (c(), o("button", null, a(t.btnText), 1));
  }
}), l = [s], r = function(t) {
  l.forEach((n) => {
    console.log("come in item", n), t.component(n.name, n);
  });
}, i = { install: r };
export {
  s as TestButton,
  i as default
};
