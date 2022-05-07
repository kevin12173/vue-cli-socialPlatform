<template>
    <section class="rightList verticalAlignTop">

        <div class="p24">
            <button class="btn mb-24">張貼動態</button>
            <div class="mb-22 textAlignLeft">
                <img class="verticalAlignMiddle mr-16" src="../assets/images/user.png" alt="">
                <div class="inlineBlock verticalAlignMiddle">
                    <p class="name">邊緣小杰</p>
                </div>
            </div>
            <div class="mb-22 textAlignLeft">
                <img class="verticalAlignMiddle mr-16" src="../assets/images/user.png" alt="">
                <div class="inlineBlock verticalAlignMiddle">
                    <p class="rightUsage">追蹤名單</p>
                </div>
            </div>
            <div class="mb-22 textAlignLeft">
                <img class="verticalAlignMiddle mr-16" src="../assets/images/user.png" alt="">
                <div class="inlineBlock verticalAlignMiddle">
                    <p class="rightUsage">我按讚的文章</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
    .rightList{
        width: 309px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 0px #000400;
        border: 2px solid #000400;
        border-radius: 8px;
        margin-bottom: 16px;
    }
    .btn{
        background: #03438D 0% 0% no-repeat padding-box;
        box-shadow: -2px 2px 0px #000400;
        border: 2px solid #000400;
        border-radius: 8px;
        width: 260px;
        height: 54px;
        color: #FFFFFF;
        font-size: 16px;
    }
    .btn:hover{
        background: #EEC32A 0% 0% no-repeat padding-box;
        color: #000400;
    }
</style>
