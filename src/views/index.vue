<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <swiper :effect="'cube'" :grabCursor="true" :cubeEffect='{
                    "shadow": true,
                    "slideShadows": true,
                    "shadowOffset": 20,
                    "shadowScale": 0.94
                    }' :pagination="true" class="mySwiper">
                    <swiper-slide v-for="(item,index) in slideList" :key="index" v-slot="{}">
                        <a :href="'/#/product/'+item.id"><img :src="item.imgs" alt=""></a>
                    </swiper-slide>
                </swiper>

            </div>
            <div class="asd-box"></div>
            <div class="banner"></div>
            <div class="produc-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
    import ServiceBar from '../components/ServiceBar.vue'
    import {
        Swiper,
        SwiperSlide
    } from 'swiper/vue/swiper-vue.js'
    import SwiperCore, {
        Autoplay,
        Pagination,
        Navigation,
        EffectCube,
    } from "swiper";

    import 'swiper/swiper.scss';
    import "swiper/modules/effect-cube/effect-cube.scss"
    import 'swiper/modules/navigation/navigation.scss';
    import 'swiper/modules/navigation/navigation.scss';
    import 'swiper/modules/pagination/pagination.scss';

    SwiperCore.use([EffectCube, Pagination, Autoplay, Navigation]);

    export default {
        name: 'index',
        components: {
            ServiceBar,
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                slideList: [{
                        id: '42',
                        imgs: '/imgs/slider/slide-1.jpg'
                    },
                    {
                        id: '45',
                        imgs: '/imgs/slider/slide-2.jpg'
                    },
                    {
                        id: '46',
                        imgs: '/imgs/slider/slide-3.jpg'
                    },
                    {
                        id: '46',
                        imgs: '/imgs/slider/slide-3.jpg'
                    },
                    {
                        id: '46',
                        imgs: '/imgs/slider/slide-3.jpg'
                    },
                ],
            }
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
            };
        }
    }
</script>


<style lang="scss" scoped>
    .index {
        .swiper-box {
            .swiper {
                height: 451px;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .container {
        width: 1200px;
        margin: 0 auto;
    }

    .swiper {}
</style>