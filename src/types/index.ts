export interface AudioPlayerOptions {
  audioUrl: string; // 音频URL
  onPlay?: () => void; // 播放时的回调函数
  onStop?: () => void; // 停止时的回调函数
}

export interface AudioPlayerInstance {
  play: (options: AudioPlayerOptions) => void; // 播放音频
  stop: () => void; // 停止当前音频
  isPlaying: () => boolean; // 判断是否正在播放
}
