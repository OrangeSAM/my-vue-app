<template>
  <!-- 音频播放器不需要UI元素 -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAudioPlayer } from "../composables/useAudioPlayer";
import type { AudioPlayerOptions } from "../types";

export default defineComponent({
  name: "AudioPlayer",
  emits: ["play", "stop"],
  setup(_, { expose }) {
    const { play: playAudio, stop, isPlaying } = useAudioPlayer();

    const play = (options: AudioPlayerOptions) => {
      playAudio(options);
    };

    // 暴露方法给父组件
    expose({
      play,
      stop,
      isPlaying,
    });

    return {};
  },
});
</script>
