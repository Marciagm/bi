<template>
    <div class="nav">
        <el-row :gutter="20">
            <el-col :span="12">
                <img src="../images/logo.png" style="width: 278px; margin-top: 5px;" @click="goHome"/>
            </el-col>
            <el-col :span="3" v-for="(Item, index) in navNew" :key="index" style="margin-top: 80px;">
                <div class="ChildrenMenu" v-if="Item.children && Item.children.length > 0" :class="{activeMenu: activeMenuName === Item.title}">
                    <h3 class="nav-link" @click="jump(Item)">{{Item.title.toUpperCase()}}</h3>
                    <ul>
                        <li v-for="(submenu, i) in Item.children" :key="i" @click="jump(submenu)">
                            {{submenu.title}}
                        </li>
                    </ul>
                </div>
                <div v-else class="noChildrenMenu" :class="{activeMenu: activeMenuName === Item.title}">
                    <h3 class="nav-link" @click="jump(Item)">{{Item.title.toUpperCase()}}</h3>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { navNew } from '../config';
export default {
    data () {
        return {
            activeMenuName: '',
            navNew: navNew
        }
    },
    methods: {
        jump (value) {
            console.log(value);
            // 判断哪一个父菜单被选中
            this.activeMenuName = value.parent || value.title
            // 路由跳转
            this.$router.push(value.routePath)
        },
        goHome () {
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
    .nav {
        margin-bottom: 20px;
        vertical-align: bottom;
        border-top: 6px solid $p1;
        .nav-link {
            font-size: 1.125em;
            color: #0a0a0a;
            font-weight: 900;
            cursor: pointer;
            padding: 0.7rem 0;
            line-height: 1;
            text-align: center;
        };
        .activeMenu{
            h3{
                box-sizing: border-box;
            }
        }
        ul{
            position: absolute;
            top: 0;
            left: 100%;
            z-index: 1;
            display: none;
            min-width: 13.625em;
            border: none;
            background: #f3f3f3;
            text-align: left;
            padding-left: 1em;
            li{
                display: block;
                padding: 0.7rem 1rem;
                line-height: 1;
                cursor: pointer;
                font-weight: 900;
                color: #0a0a0a;
            }
        };
        .noChildrenMenu:hover{
            border-top: 2px solid #4e2d66;
            .nav-link{
                background: #f3f3f3;
                -webkit-box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
                box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
            };
        };
        .ChildrenMenu{
            position: relative;
        };
        .ChildrenMenu:hover{
            border-top: 2px solid #4e2d66;
            ul{
                display: block;
                top: 40px;
                right: 0;
                left: auto;
                box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
            };
            .nav-link{
                background: #f3f3f3;
                border-top-color: #4e2d66;
                -webkit-box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
                box-shadow: 0.25em 0.25em 0.25em rgba(0, 0, 0, 0.25);
            };
        }
    }
</style>

