<template>
    <div class="record" ref="record">

        <transition name="fade">
            <canvas ref="waves" id="waves" v-show="isListening"></canvas>
        </transition>
    </div>
</template>

<script>
    import SineWaves from 'sine-waves';
    export default {
        name: "record",
        data(){
            return{
                isListening: false
            }
        },
        mounted(){
            let vm = this;
            let myWaves = new SineWaves({
                el: vm.$refs.waves,
                speed: 4,
                ease: 'SineInOut',
                wavesWidth: '100%',
                waves: [
                    {
                        timeModifier: 4,
                        lineWidth: 2,
                        amplitude: -20,
                        wavelength: 100,
                        strokeStyle: 'rgba(66,175,27,1)'
                    }
                ],
                width: function() {
                    return vm.$refs.record.clientWidth;
                },

                height: function() {
                    return vm.$refs.record.clientHeight;
                },
            })
        },
        methods:{
            startRecord(){
                let vm = this;
                wx.startRecord({
                    success() {
                        vm.isListening = true
                    }
                });
            },
            stopRecord(){
                let vm = this
                wx.stopRecord({
                    success (res) {

                        let localId = res.localId
                        vm.uploadVoice({
                            localId: localId,
                            isShowProgressTips: 1, // 显示进度
                            success (res) {

                            }
                        })

                    },
                    complete(){
                        vm.$emit('listen',false)
                    }
                })

            }
        }
    }
</script>

<style scoped lang="scss">

    @import "../styles/mixin.scss";
    @import "../styles/px2rem.scss";

    .record{
        position: relative;
        width: 100%;
        height: 100%;
    }

    #waves{
        @include ct;
    }


    // reset
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>