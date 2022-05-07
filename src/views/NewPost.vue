/* eslint-disable vue/no-parsing-error */
<template>
  <div class="center borderWidth">
        <main>
            <section class="mr-16">
                <div class="followList verticalAlignMiddle textAlignCenter">
                    <span>張貼動態</span>
                </div>
                <article>
                    <div class="p32 textAlignLeft">
                        <div class="mb-16">
                            <div class="inlineBlock verticalAlignMiddle">
                                <p class="name">貼文內容</p>
                                <textarea name="" id="" cols="60" rows="10"></textarea>
                            </div>
                        </div>
                        <button class="uploadBtn mb-16">上傳圖片</button>
                        <div class="mb-16">
                            <img src="../assets/images/image.png" alt="">
                        </div>
                        <div class="textAlignCenter">
                            <button class="sendBtn mb-32">送出貼文</button>
                        </div>
                    </div>
                </article>
            </section>
            <SideBar/>
        </main>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'NewPost',
  components: {
    SideBar
  }
}
</script>
<style scoped>

    .followList{
        width: 533px;
        height: 64px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 2px solid #000400;
        margin-bottom: 16px;
        font-size: 20px;
        line-height:64px;
    }

    article{
        width: 533px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 0px #000400;
        border: 2px solid #000400;
        border-radius: 8px;
        margin-bottom: 16px;
    }
    .inlineBlock{
        display: inline-block
    }
    .name{
        font: normal normal bold 16px/24px Noto Sans TC;
        font-weight: bold;
    }
    .name:hover{
        color:#03438D;
        text-decoration: underline;
    }
    .date{
        font: normal normal normal 12px/20px Baloo Da 2;
        font-size: 12px;
        color: #9B9893;
    }
    .uploadBtn{
        width: 128px;
        height: 32px;
        font-size: 16px;
        color: #FFFFFF;
        background-color: #000400;
        border-radius: 4px;
    }
    .sendBtn{
        background: #A8B0B9 0% 0% no-repeat padding-box;
        border: 2px solid #000400;
        border-radius: 8px;
        width: 323px;
        height: 54px;
        font-size: 16px;
        font-weight: bold;
    }
</style>
