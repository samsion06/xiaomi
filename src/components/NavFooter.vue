<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="">xxxx主页</a> <span>|</span>
            <a href="">vue前瞻课程</a> <span>|</span>
            <a href="">react全家桶</a> <span>|</span>
            <a href="">微信支付专项课程</a><span>|</span>
        </div>
        <div class="copyright">copyright<span class="domain">copyrightcopyright</span></div>
    </div>
</template>
<script>
    export default {
        name: 'nav-footer',
        setup() {},
    }
</script>

<style lang="scss" scoped>
    .footer {
        height: 234px;
        border-top: 4px solid #ff6600;
        background-color: #333333;
        color: #999999;
        font-size: 16px;
        text-align: center;

        .footer-logo {
            margin-top: 46px;
            margin-bottom: 31px;

            img {
                width: 53px;
                height: 36px;
                margin-bottom: 13px;

            }
        }

        .footer-link {
            a {
                color: #999999;
                display: inline-block;
            }

            span {
                margin: 0 10px;
            }

            margin-bottom: 13px;
        }

        .copyright {
            .domain {
                color: #ff6000;
            }
        }
    }
</style>