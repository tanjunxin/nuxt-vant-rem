<template>
  <div>
    <van-nav-bar :fixed="true" :placeholder="true" @click-right="onClickRight">
      <template #right>
        <van-icon name="bars" size="18" />
      </template>
    </van-nav-bar>
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '30%', background: 'red' }"
      >内容</van-popup
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onClickRight() {
      this.show = true;
      console.log(this.show);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>