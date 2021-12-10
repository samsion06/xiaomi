<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7day"></span>7day</li>
                <li><span class="icon-15day"></span>15天免费换后</li>
                <li><span class="icon-setting"> </span>150元包邮</li>
            </ul>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .service {
        padding: 33px 0;
        color: #666666;
        font-size: 16px;

        li {
            display: inline-block;
            width: 24.9%;
            text-align: center;
            border-right: 1px solid #e5e5e5;

            span {
                display: inline-block;
                width: 20px;
                height: 20px;
                vertical-align: middle;
                margin-right: 8px;
            }
        }

        li:last-child {
            border-right: none;
        }

        .icon-setting {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url('/imgs/icon-setting.png') no-repeat center;
            background-size: contain;
        }

        .icon-7day {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url('/imgs/icon-7day.png') no-repeat center;
            background-size: contain;
        }

        .icon-15day {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url('/imgs/icon-15day.png') no-repeat center;
            background-size: contain;
        }
    }
</style>

<script>
    export default {
        name: 'service-bar',
        setup() {

        },
    }
</script>