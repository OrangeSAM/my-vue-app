import TestButton from "./button/index.vue";

// 按需引入
export { TestButton };

const component = [TestButton];

// @ts-expect-error
const install = function (App) {
  component.forEach((item) => {
    console.log("come in item", item);
    App.component(item.name, item);
  });
};

export default { install };
