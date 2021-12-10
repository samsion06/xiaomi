<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <!--javascript:;防止页面刷新-->
                    <a href="javascript:;">小米商城</a>
                    <a href="">MUI</a>
                    <a href="">云服务</a>
                    <a href="">小米商城</a>
                </div>
                <div class="topbar-user">
                    <a href="" v-if="username">{{username}}</a>
                    <a href="" v-if="username">登陆</a>
                    <a href="" v-if="username">我的订单</a>
                    <a href="">注册</a>
                    <a href="" class="my-cart"><span class="icon-cart" @click="goToCart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header" style="">
            <div class="container">
                <div class="header-logo">
                    <a href=""></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phonelist" :key="index">
                                    <!--属性使用：号双引号里面的内容就变成了js内容-->
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" alt="">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{currency(item.price)}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>






<style scoped lang="scss">
    @import '../assets/base.scss';

    .header {
        .nav-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;

            .container {
                display: flex;
                justify-content: space-between;

                a {
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;
                }

                .my-cart {
                    width: 110px;
                    background-color: #666666;
                    text-align: center;
                    color: #ffffff;
                }

                .icon-cart {
                    /**
                        background-size:
                        cover：图片宽高比不变、铺满整个容器的宽高，而图片多出的部分则会被截掉；
                        contain:图片自身的宽高比不变，缩放至图片自身能完全显示出来，所以容器会有留白区域
                    **/
                    background: url('/imgs/icon-cart-checked.png')no-repeat center;
                    background-size: contain;
                    display: inline-block;
                    width: 16px;
                    height: 12px;
                    margin-right: 4px;
                }
            }
        }

        .nav-header {
            .container {
                height: 112px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;

                .header-logo {
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #ff6600;

                    a {
                        display: inline-block;
                        width: 110px;
                        height: 55px;

                        &:before {
                            content: ' ';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url('/imgs/mi-logo.png') no-repeat center;
                            background-size: 55px;
                            transition: margin .2s;
                        }

                        &:after {
                            content: ' ';
                            display: inline-block;
                            width: 55px;
                            height: 55px;
                            background: url('/imgs/mi-home.png') no-repeat center;
                            background-size: 55px;
                        }

                        &:hover::before {
                            margin-left: -55px; //这个地方白色地方盖住了
                            transition: margin .2s;
                        }

                    }

                }

                .header-menu {
                    //display: inline-block;
                    padding-left: 209px;
                    width: 643px;

                    .item-menu {
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        //line-height: 112px;
                        margin-right: 20px;

                        span {
                            cursor: pointer;
                        }

                        &:hover {
                            color: #ff6600;

                            .children {
                                height: 220px;
                                opacity: 1;
                                //display: block;
                                background-color: #ffffff;
                            }
                        }

                        .children {
                            //display: none;
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            opacity: 0;
                            border-top: 1px solid #e5e5e5;
                            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                            z-index: 10;
                            text-align: center;
                            overflow: hidden; //这里height设置0 ，但其实内容已经溢出，所以要设置overflow:hidden
                            transition: all .5s;

                            .product {
                                position: relative;
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;

                                a {
                                    display: inline-block;

                                }

                                img {
                                    width: auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }

                                .pro-img {
                                    height: 137px;
                                }

                                .pro-name {
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color: #333333;
                                }

                                .pro-price {
                                    color: #FF6600;
                                }

                                //线
                                &:before {
                                    content: ' ';
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 1px solid #d7d7d7;
                                    height: 100px;
                                    width: 1px;
                                }

                                &:last-child:before {
                                    display: none;
                                }





                            }
                        }
                    }
                }

                .header-search {
                    width: 310px;

                    .wrapper {
                        //height: 50px;
                        border: 1px solid #e0e0e0;
                        display: flex;
                        align-items: center;

                        input {
                            border-right: 1px solid #e0e0e0;
                            width: 264px;
                            height: 50px;
                            border: none;
                            padding-left: 14px;
                            box-sizing: border-box;
                        }

                        a {
                            display: inline-block;
                            width: 18px;
                            height: 18px;
                            background: url('/imgs/icon-search.png')no-repeat center;
                            background-size: contain;
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>


<script>
    export default {
        name: 'nav-header',
        data() {
            return {
                username: 'jack',
                phonelist: []
            }
        },
        filters: {
            capitalize: function (val) {
                if (!val) return '0.00';
                return '$' + val.toFixed(2) + '元'
            }
        },
        mounted() {
            this.getproductlist();
        },
        //?
        // filters: {
        //     currency: function (val) {
        //         if (!val) return '0.00';
        //         return '$' + val.toFixed(2) + '元'
        //     }
        // },

        methods: {
            currency(val) {
                if (!val) return '0.00';
                return '$' + val.toFixed(2) + '元'
            },
            getproductlist() {
                let a = this.axios.get('/products', {
                    params: {
                        categoryId: '100012',
                    }
                }).then((res) => {
                    if (res.list.length > 6) {
                        this.phonelist = res.list.slice(0, 6)
                    }
                })
            },
            goToCart() {
                this.$router.push('/cart')
            },
            login() {
                this.$router.push('/login')
            }
        }
    }
</script>