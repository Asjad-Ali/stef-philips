<template>
<div id="loading" style="text-align: center">
    <div class="loadin-icon"></div>
</div>
</template>

<style scoped>
#loading {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(253, 253, 253, 0.7);
    z-index: 999;
    cursor: pointer;
    /* background-image: url('/project/resources/assets/images/loading.gif'); */
    background-image: url("../assets/loader.gif");
    background-position: center;
    background-repeat: no-repeat;
    /* background-size: 220px 50px; */
    background-size: 150px 130px;
}
</style>