<template>
  <div>
    <goToButton></goToButton>
    {{ selectedVideo }}
    <videoPlayer
      :videoLink="selectedVideo.videoId ? selectedVideo.videoId : 't0I4mTEdAf8'"
    ></videoPlayer>
  </div>
</template>

<script>
import VideoPlayer from "@/components/app/common/cards/video/VideoPlayer.vue";
import goToButton from "@/components/app/common/buttons/GoToButton.vue";

export default {
  name: "videoDisplay",
  components: {
    VideoPlayer,
    goToButton,
  },
  props: {
    selectedVideo: {
      type: Object,
      required: true,
    },
  },
};
</script>
