<template>
  <div id="app" class="pr">
    <router-view/>
    <global-loading/>
  </div>
</template>

<script>
	import globalLoading from '@c/global-loading'
	export default {
		components: {
			globalLoading
		}
	}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
