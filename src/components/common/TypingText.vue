<template>
  <div class="flex flex-col items-center justify-center h-full">
    <el-result icon="success" title="注册成功" class="w-full">
      <template #sub-title>
        <div class="text-sm text-gray-500 typing">
          <p class="typing">{{ typingText }}</p>
        </div>
      </template>
    </el-result>
  </div>
</template>

<style scoped lang="scss">
.typing {
  font-family: "Courier";
  font-size: 15px;
  margin: 6px 0 0 6px;
  white-space: nowrap;
  overflow: hidden;
  width: 30em;
  animation: type 4s steps(60, end);
}

.typing:nth-child(2) {
  animation: type2 8s steps(60, end);
}

.typing a {
  text-decoration: none;
}

span {
  animation: blink 1s infinite;
}

@keyframes type {
  from {
    width: 0;
  }
}

@keyframes type2 {
  0% {
    width: 0;
  }

  50% {
    width: 0;
  }

  100% {
    width: 100;
  }
}

@keyframes blink {
  to {
    opacity: .0;
  }
}

::selection {
  background: black;
}
</style>

<script lang="ts" setup>
import { ref } from 'vue';
const typingText = defineModel('typingText', {
  type: String,
  default: ''
});
</script>