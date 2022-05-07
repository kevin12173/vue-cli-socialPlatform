/* eslint-disable vue/no-parsing-error */
<template>
    <div class="center borderWidth">
        <main>
            <section class="mr-16">
                <div class="fz0 mb-16">
                    <select class="selectPost verticalAlignMiddle">
                        <option value="最新貼文">最新貼文</option>
                    </select>
                    <div class="searchPost">
                        <input class="inputPost verticalAlignMiddle" type="text" placeholder="搜尋貼文">
                        <button class="buttonPost verticalAlignMiddle"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <article>
                    <div class="p24 textAlignLeft">
                        <div class="mb-16">
                            <img class="verticalAlignMiddle mr-16" src="../assets/images/user.png" alt="">
                            <div class="inlineBlock verticalAlignMiddle">
                                <p class="name">邊緣小杰</p>
                                <p class="date">2022/1/10 12:00</p>
                            </div>
                        </div>
                        <div class="mb-16">
                            <p>外面看起來就超冷...</p>
                            // eslint-disable-next-line vue/no-parsing-error
                            <p>我決定回被窩繼續睡...>.</p>
                        </div>
                        <img src="../assets/images/image.png" alt="">
                    </div>
                </article>
                <article>
                    <div class="p24 textAlignLeft">
                        <div class="mb-16">
                            <img class="verticalAlignMiddle mr-16" src="../assets/images/user6.png" alt="">
                            <div class="inlineBlock verticalAlignMiddle">
                                <p class="name">波吉</p>
                                <p class="date">2022/1/10 12:00</p>
                            </div>
                        </div>
                        <div class="mb-16">
                            <p>我一定要成為很棒棒的國王</p>
                        </div>
                    </div>
                </article>
                <article>
                    <div class="p24 textAlignLeft">
                        <div class="mb-16">
                            <img class="verticalAlignMiddle mr-16" src="../assets/images/user5-4.png" alt="">
                            <div class="inlineBlock verticalAlignMiddle">
                                <p class="name">阿爾敏</p>
                                <p class="date">2022/1/10 12:00</p>
                            </div>
                        </div>
                        <div class="mb-16">
                            <p>各位我有一個作戰計畫</p>
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
  name: 'Activity',
  components: {
    SideBar
  }
}
</script>
<style scoped>

    .selectPost{
        width: 168px;
        height: 46px;
        padding-left: 6px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 2px solid #000400;
        margin-right: 12px;
    }
    .inputPost{
        width: 301px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 2px solid #000400;
        height: 40px;
        padding-left: 8px;
    }
    .buttonPost{
        width: 46px;
        height: 46px;
        background: #03438D 0% 0% no-repeat padding-box;
        border: 2px solid #000400;
    }
    .searchPost{
        display: inline-block;
        width: 365px;
    }
    article{
        width: 533px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 0px #000400;
        border: 2px solid #000400;
        border-radius: 8px;
        margin-bottom: 16px;
    }
    .name{
        font: normal normal bold 16px/24px Noto Sans TC;
        font-weight: bold;
    }
    .name:hover{
        color:#03438D;
        text-decoration: underline;
    }
    .rightUsage{
        font: normal normal bold 16px/24px Noto Sans TC;
        font-weight: bold;
    }
    .rightUsage:hover{
        color:#03438D;
    }
    .date{
        font: normal normal normal 12px/20px Baloo Da 2;
        font-size: 12px;
        color: #9B9893;
    }
</style>
