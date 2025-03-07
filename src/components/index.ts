import TestButton from "./button/index.vue";

import AudioPlayer from "../components/AudioPlayer.vue";
import { useAudioPlayer } from "../composables/useAudioPlayer";
import type { AudioPlayerOptions, AudioPlayerInstance } from "../types/index";

// 按需引入
export { TestButton, AudioPlayer, useAudioPlayer };
// 导出类型
export type { AudioPlayerOptions, AudioPlayerInstance };

const component = [TestButton, AudioPlayer];

// @ts-expect-error
const install = function (App) {
  component.forEach((item) => {
    console.log("come in item", item);
    App.component(item.name, item);
  });
};

export default { install };
