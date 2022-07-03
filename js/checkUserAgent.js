const userAgent = navigator.userAgent.toLowerCase()
if(!/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent)) {
	window.stop()
	document.body.innerHTML = `<h1 style="text-align: center;">请使用移动设备浏览页面</h1>`
}
