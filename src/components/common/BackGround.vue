<template>
  <!-- 白色遮罩层 -->
  <div
    class="bg-[url(@/assets/img/pasture.png)] absolute top-0 left-0 inset-0 bg-no-repeat bg-center bg-cover blur-sm opacity-80 bg-fixed"
  />
  <div class="white-overlay" />
</template>
<style scoped lang="scss">
.white-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.5;
  z-index: 0;
}

@keyframes float-left {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-20px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes float-right {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
