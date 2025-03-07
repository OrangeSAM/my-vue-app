import { ref } from "vue";
import type { AudioPlayerOptions, AudioPlayerInstance } from "../types";

export function useAudioPlayer(): AudioPlayerInstance {
  const audio = ref<HTMLAudioElement | null>(null);
  const currentOptions = ref<AudioPlayerOptions | null>(null);
  const isPlayingAudio = ref(false);

  // 播放方法
  const play = (options: AudioPlayerOptions) => {
    // 如果有正在播放的音频，需要先停止
    if (isPlayingAudio.value && audio.value) {
      // 保存当前的options，以便调用它的onStop
      const prevOptions = currentOptions.value;

      // 停止当前音频
      audio.value.pause();
      audio.value.currentTime = 0;

      // 通知之前的音频已被停止
      if (prevOptions && prevOptions.onStop) {
        prevOptions.onStop();
      }
    }

    // 更新当前options
    currentOptions.value = options;

    // 创建新的Audio实例
    audio.value = new Audio(options.audioUrl);

    // 设置结束事件监听
    audio.value.onended = () => {
      isPlayingAudio.value = false;
      if (options.onStop) {
        options.onStop();
      }
    };

    // 开始播放
    audio.value
      .play()
      .then(() => {
        isPlayingAudio.value = true;
        if (options.onPlay) {
          options.onPlay();
        }
      })
      .catch((error) => {
        console.error("音频播放失败:", error);
        isPlayingAudio.value = false;
      });
  };

  // 停止方法
  const stop = () => {
    if (audio.value && isPlayingAudio.value) {
      audio.value.pause();
      audio.value.currentTime = 0;
      isPlayingAudio.value = false;

      if (currentOptions.value && currentOptions.value.onStop) {
        currentOptions.value.onStop();
      }
    }
  };

  // 判断是否正在播放
  const isPlaying = () => isPlayingAudio.value;

  return {
    play,
    stop,
    isPlaying,
  };
}
