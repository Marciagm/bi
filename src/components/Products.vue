<template>
    <div>
        <el-row class="tac">
            <el-tabs :tab-position="tabPosition" style="height: 100%;"  @tab-click="tabClick">
                <el-tab-pane v-for="(item, index) in tabList" :label="item.label" :key="index">
                    <div class="tabContent">
                        <pro-table />
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-row>
    </div>
</template>
<script>
 import ProTable from './ProTable'
  export default {
      components: {
          ProTable
      },
      data() {
       return {
           selectTabName: '',
           tabPosition: 'left',
           tabList: [
               {
                   label: 'Memory'
               },
               {
                   label: 'Linear'
               },
               {
                   label: 'Logic'
               },
               {
                   label: 'Diodes/Transistors'
               }
           ]
       }
      },
      watch: {
          selectTabName(){
              if(this.selectTabName === 'tab1'){
                  alert(this.selectTabName)
              }
              if(this.selectTabName === 'tab2'){
                  alert(this.selectTabName)
              }
              if(this.selectTabName === 'tab3'){
                  alert(this.selectTabName)
              }
              if(this.selectTabName === 'tab4'){
                  alert(this.selectTabName)
              }
          }
      },
    methods: {
      tabClick(tab){
          this.selectTabName = tab.label
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
   /deep/ .el-tabs--left .el-tabs__header.is-left {
        float: left;
        margin-bottom: 0;
        margin-right: 10px;
        width: 30%;
    }
   /deep/ .el-tabs--left .el-tabs__item.is-left {
       text-align: right;
       color: #ffffff;
       display: block;
       font-weight: 900;
       letter-spacing: 0.5px;
       line-height: 1.2;
       padding: 1.125em 32px;
       border-bottom: 0px solid white;
       width: 287px;
       float: right;
   }
    .tabContent{
        color: white;
    }
</style>
