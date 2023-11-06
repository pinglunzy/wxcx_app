var app_url = 'https://blog.capalot.cn';
// 如果是本地测试环境
if(process.env.NODE_ENV === 'development'){
    //#ifdef H5
	app_url = '/api';
	//#endif
}
// 如果是生产环境，h5环境下直接读取url
if(process.env.NODE_ENV === 'production'){
    //#ifdef H5
	app_url = window.location.protocol+'//' + window.location.host;
	//#endif
}
export default {
	/*服务器地址*/
	app_url: app_url,
	/*appid*/
	app_id: 10001,
	//h5发布路径
	h5_addr: '/h5',
	//inonfont 字体url
	font_url: 'https://at.alicdn.com/t/font_2184879_i7r5f24ts0d.ttf',
	/* 腾讯地图Key*/
	mpKey:'R37BZ-RWO3D-NER4T-PLYZD-W2I27-6IB32'
} 


