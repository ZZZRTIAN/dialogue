<template>
    <div>
        <div class="cell">
            <div class="cell-left-help">帮助</div>
            <div class="cell-right-tips-switch">
                <div>提示</div>
                <input type="checkbox" class="tips-switch" @click="currentValue = !currentValue">
            </div>
        </div>

        <div class="help-modal" v-show="false">
            <div class="help-close"></div>
            <div class="help-content">
                <p>11111111</p>
            </div>
        </div>

        <div class="tips-modal">
            <p>11111111</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tips-and-help",
        data(){
            return{
                currentValue: false
            }
        },
        watch:{
            currentValue(val){

            }
        }
    }
</script>

<style scoped lang="scss">

    @import "../styles/px2rem";
    @import "../styles/mixin";

    .cell{
        display: flex;
        justify-content: space-between;
        font-size: px2rem(30);
        height: px2rem(70);
        line-height: px2rem(70);
        margin-bottom: px2rem(20);

        .cell-left-help{
            color: #ffffff;
            background: #42AF1B;
            border-radius: 3px;
        }
        .cell-right-tips-switch{
            position: relative;
        }
    }

    .tips-switch{
        appearance: none;
        -webkit-appearance: none;
        position: relative;
        width: 52px;
        height: 32px;
        background: #dfdfdf;
        border-radius: 16px;
        border: 1px solid #dfdfdf;
        outline: 0;
        box-sizing: border-box;
        &:checked{
            border-color: #42AF1B;
            background-color: #42AF1B;
        }
        &:after, &:before{
            content: " ";
            position: absolute;
            top: 0;
            left: 0;
            height: 30px;
            border-radius: 15px;
            transition: transform 0.3s;
            transition: -webkit-transform 0.3s;
            transition: transform 0.3s, -webkit-transform 0.3s;
            -webkit-transition: -webkit-transform 0.3s;
        }
        &:before{
            width: 50px;
            background-color: #fdfdfd;
        }
        &:after{
            width: 30px;
            background-color: white;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        }
        &:checked:before{
            transform: scale(0);
            -webkit-transform: scale(0);
        }
        &:checked:after{
            transform: translateX(20px);
            -webkit-transform: translateX(20px);
        }
    }


    .help-modal{
        background: #F5EDE2;
        border-radius: 3px;
        font-size: px2rem(30);

        .help-content{
            padding: px2rem(30);
            text-align: center;
        }
    }
    .help-close{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        color: #ED8C00;
        width: px2rem(24);
        height: px2rem(24);
        float: right;
        margin-top: px2rem(14);
        margin-right: px2rem(14);

        &:before, &:after{
            content: '';
            position: absolute;
            left: 0;
            top: px2rem(11);
            width: px2rem(24);
            height: 1px;
            background-color: currentColor;
            transform: rotate(-45deg);
        }
        &:after{
            transform: rotate(45deg);
        }
    }

    .tips-modal{
        margin: 0 auto;
        width: 100%;
        max-width: px2rem(560);
        background: #F5EDE2;
        border-radius: px2rem(22);
    }

</style>