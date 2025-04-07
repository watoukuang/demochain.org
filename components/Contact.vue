<template>
  <!-- 右侧社交按钮 -->
  <div class="button-container">
    <!-- Twitter按钮 -->
    <a-tooltip placement="left" :title="twitterTooltip">
      <div class="contact twitter">
        <QqOutlined class="icon"/>
      </div>
      <template #title>
        <div class="qr-tooltip">
          <img src="/public/qrcode/qq.png" alt="QQ QR Code">
          <p>QQ扫码加好友</p>
        </div>
      </template>
    </a-tooltip>

    <!-- 聊天按钮 -->
    <a-tooltip placement="left" :title="chatTooltip">
      <div class="contact chat">
        <WechatOutlined class="icon"/>
      </div>
      <template #title>
        <div class="qr-tooltip">
          <img src="/public/qrcode/wechat.png" alt="WeChat QR Code">
          <p>微信扫码加好友</p>
        </div>
      </template>
    </a-tooltip>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* 右侧社交按钮样式 */
.button-container {
  position: fixed;
  top: 70%;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;
}

.contact {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 二维码工具提示样式 */
.qr-tooltip {
  padding: 8px;
  text-align: center;
}

.qr-tooltip img {
  width: 120px;
  height: 120px;
  display: block;
  margin: 0 auto;
}

.qr-tooltip p {
  margin: 8px 0 0;
  font-size: 12px;
  color: #666;
}

/* Twitter 按钮专业配色 */
.twitter {
  background: linear-gradient(135deg, #1DA1F2, #0d8ecf);
}

.twitter:hover {
  background: linear-gradient(135deg, #0d8ecf, #1DA1F2);
}

/* 聊天按钮专业配色 */
.chat {
  background: linear-gradient(135deg, #25D366, #128C7E);
}

/* 图标大小 */
.icon {
  font-size: 25px;
  color: white;
}
</style>