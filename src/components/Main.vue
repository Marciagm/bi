<template>
 <div class="main">
     <div style="padding-top: 150px;">
        <input type="text" value="" placeholder="Search the world’s largest semiconductor inventory…">
        <button @click="jump">Search</button>
     </div>
 </div>
</template>

<style lang="scss">
.main {
    background-image: url('../images/bg.png');
    background-size: cover;
    background-position: center center;
    height: 500px;
    input {
        font-size: 1.25em;
        padding: 0.5em;
        height: 2em;
        width: 30em;
    }
    button {
        background: $p2;
        color: $light-color;
        padding: 1em;
        font-size: 1.25em;
    }
}
</style>
<<script>
export default {
    methods: {
        jump () {
            this.$router.push('/products')
        }
    },
}
</script>