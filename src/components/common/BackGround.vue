<template>
  <!-- 白色遮罩层 -->
  <div class="bg-pasture-bg absolute top-0 left-0 inset-0 bg-no-repeat bg-center bg-cover blur-sm opacity-80 bg-fixed" />
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

.bush {
  z-index: 0;
  width: 90px;
  height: 40px;
  bottom: 0px;
  left: 0;
  background-color: #268a02;
  border-radius: 50px 50px 0 0;
}

.cloud-t {
  z-index: 0;
  width: 120px;
  height: 40px;
  bottom: 0px;
  left: 0;
  background-color: #ffffff;
  border-radius: 50px;
  animation: float-left 5s infinite;
}

.cloud-b {
  z-index: 0;
  width: 150px;
  height: 50px;
  bottom: 0px;
  left: 0;
  background-color: #ffffff;
  border-radius: 50px;
  animation: float-right 5s infinite;
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