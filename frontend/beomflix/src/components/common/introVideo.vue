<template>
  <div>
    <video ref="videoPlayer" width="100%" height="100%" autoplay>
      <source src="@/components/common/video/intro.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: "introVideo",
  mounted() {
  const videoElement = this.$refs.videoPlayer;

  // 동영상 로드 완료 시점에 페이지 이동
  videoElement.addEventListener('loadedmetadata', () => {
    setTimeout(() => {
      this.navigateToMainView();
    }, 3000); // 5초 후에 페이지 이동 
  });

  // 동영상 로드 시작
  videoElement.load();
},
  methods: {
    playVideo() {
      this.$refs.videoPlayer.play();
    },
    pauseVideo() {
      this.$refs.videoPlayer.pause();
    },
    navigateToMainView() {
      this.$router.push({ name: "mainView" });
    },
  },
};
</script>

<style>
/* 필요한 스타일을 추가하세요. */
</style>
