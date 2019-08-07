<template>
  <div id="app">
    <div class="nav">
      <Nav />
    </div>
    
    <div class="routerView">
      <router-view></router-view>
    </div>
    <div class="foot">
      <Foot/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    Nav,
    Foot
  }
}
</script>

<style lang="scss">
    *{
        padding: 0;
        margin: 0;
        border: 0;
    }
    .el-row{
        margin: auto;
    }
  .routerView{
    // min-height: calc(100% - 300px);
    background: $p1;
  }
  .routerView>div{
    min-height: calc(100% - 30px);
  }
  .routerView>div>div{
    height: 100%;
  }
  .el-row{
    margin: auto!important;
    padding: 0 20px;
  }
#app {
  font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;

}
</style>
