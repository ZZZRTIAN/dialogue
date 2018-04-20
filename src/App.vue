<template>
  <div id="app">
    <div class="wrapper">
      <div class="top-bar">
        <div class="title">Mission Card</div>
      </div>
      <div class="scene">
        <div class="scene-intro" v-if="false">
          <img src="./assets/scene1.png">
          <div class="intro">
            <p v-for="(item, index) in scene" :key="index">
              {{item}}
            </p>
          </div>
        </div>
        <div class="scene-card">
          <div class="scene-card-img">
            <img src="./assets/scene1.png">
          </div>
          <p>Next in line, please. Can I have your passport please? What’s your destination today?</p>
        </div>
        <tips-and-help></tips-and-help>
      </div>

      <div class="report">

      </div>
    </div>
    <div class="bottom">
      <!--<div class="start-btn" v-if="true">GO</div>-->
      <record v-if="true"></record>
    </div>
  </div>
</template>

<script>
  import './styles/common.scss';
  import Record from "./components/Record";
  import TipsAndHelp from "./components/tipsAndHelp";

  export default {
    name: 'app',
    data(){
      return{
        scene:[
          'Today you are flying to Shanghai from Los Angeles; connecting through Tokyo. You have one piece of luggage to check in and one bag to carry on.',
          'At the airport, you need to check in the luggage and get your boaring pass.'
        ],

      }
    },
    mounted(){

    },
    components: {
        TipsAndHelp,
        Record
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles/px2rem';
  @import './styles/mixin';

  $green-color: #7E8633;
  $orange-color: #c85715;
  $bg-color: #FFFCF8;
  $btn-color: #42AF1B;

  #app{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $bg-color;
    color: $orange-color;

    .wrapper{
      flex-grow: 1;
    }
    .bottom{
      height: px2rem(180);
      width: 100%;
    }
  }

  .top-bar{
    height: px2rem(88);
    width: 100%;
    background: rgba(249,242,235,0.82);
    box-shadow: 0 1px 2px 0 #E0CBB9;
    position: relative;

    .title{
      @include cl;
      line-height: px2rem(88);
      font-size: px2rem(34);
    }
  }

  .scene{
    padding: px2rem(40);

    &>img{
      width: 100%;
      margin-bottom: px2rem(30);
    }

    .intro{
      font-size: px2rem(30);
      line-height: px2rem(42);
      background: #F5EDE2;
      padding: px2rem(30);
      p{
        margin-bottom: px2rem(30);
      }
    }
  }

  .scene-card{
    padding: px2rem(30);
    background: #FFFFFF;
    box-shadow: 0 2px 18px 0 rgba(221,198,167,0.49);
    color: #000;
    font-size: px2rem(30);
    line-height: px2rem(42);
    text-align: justify;

    .scene-card-img{
      height: px2rem(400);
      overflow: hidden;
      text-align: center;
      position: relative;
      margin-bottom: px2rem(30);

      img{
        height: 100%;
        @include cl;
      }
    }
  }

  .start-btn{
    margin: 0 auto;
    width: px2rem(420);
    height: px2rem(90);
    line-height: px2rem(90);
    text-align: center;
    color: #ffffff;
    background: $btn-color;
    border-radius: 3px;
  }

</style>