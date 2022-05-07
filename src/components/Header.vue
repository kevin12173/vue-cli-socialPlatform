<template>
  <header class="navbar backgroundWhite boxShadow">
        <div class="h100 flex spaceBetween alignItemsCenter center borderWidth">
            <img class="h-60" src="../assets/images/MetaWall.svg" alt="">
            <div>
                <img class="verticalAlignMiddle avatarSmallSize" src="../assets/images/user.png" alt="">
                <span class="verticalAlignMiddle boxShadow">Member</span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
    .borderWidth{
            width: 900px;
        }
    .navbar{
        height: 60px;

        margin-bottom: 49px;
    }
</style>
