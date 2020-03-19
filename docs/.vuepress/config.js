module.exports = {
  "title": "言否",
  "description": "Enjoy myself,do what I want to do",
  "dest": "myfile",
   base: '/blog/',
   locales: {
     '/': {
       lang: 'zh-CN',
     }
   },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  plugins:[
	  [
	    require('./plugins/KanBanNiang'),
	    {
	      theme: ['blackCat'],
	      width: 200,
	      height: 470,
	      modelStyle: {
	        position: 'fixed',
	        right: '110px',
	        bottom: '50px',
	        opacity: '0.9' 
	      },
	      messageStyle: {
	        position: 'fixed',
	        right: '110px',
	        bottom: '370px'
	      },
	      btnStyle: {
	        bottom: '60px',
	        right: '80px'
	      }
	    }
	  ],
	  [   "@vuepress-reco/vuepress-plugin-bgm-player",
        {
            audios:[
                {
                    name: '公子向北走',
                    artist: '李春花',
					url: './gzxbz.mp3',
                    cover: 'http://p2.music.126.net/EeCOXlqwFfuY4vHsS0foKA==/109951163876806880.jpg?param=300x300'
                },
				{
				    name: '果汁分你一半',
				    artist: '小菜头',
					url: './gzfnyb.mp3',
					cover: 'http://p2.music.126.net/k0C0pZG4Soq86gXfXy38QQ==/109951164742942259.jpg'
				},
				{
				    name: '世间美好与你环环相扣',
				    artist: '柏松',
				    url: './sjmhynhhxk.mp3',
				    cover: 'http://p1.music.126.net/DK1_4sP_339o5rowMdPXdw==/109951164071024476.jpg?param=300x300'
				},
				{
				    name: '微光',
				    artist: '袁野夕',
				    url: './wg.mp3',
				    cover: 'http://y.gtimg.cn/music/photo_new/T002R300x300M0000001FV2R1MJxUW.jpg'
				}
            ],
            position:{
                left: '10px',
                bottom: '10px',
                'z-index': '999999'
            }
        }
    ]
],
  "theme": "reco",
  "themeConfig": {
	   type: 'blog',
	   huawei: false,
	  themePicker: {
	    colorName1: '#0033FF', // 极浓海蓝
	    colorName2: '#8B00FF', // 紫罗兰色
	    colorName3: '#00BFFF', // 深天蓝
	    colorName4: '#FF8C00' // 暗橙
	  },
	   valineConfig: {
	        appId: 'JRf4yBvvUvQHwgtfE7OojGMw-gzGzoHsz',// your appId
	        appKey: 'UMjGbTL6NmkiTpnd1BPq5lGD', // your appKey
			placeholder: 'please tell me your advice',
			avatar: 'wavatar',
			visitor: true 
	      },
	  // 密钥
	/* keyPage: {
      keys: ['7f39f8317fbdb1988ef4c628eba02591'], // 1.3.0 版本后需要设置为密文
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    }, */
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/liuyi6161",
            "icon": "reco-github"
          },
		  {
		    "text": "码云",
		    "link": "http://yanfou.gitee.io/blog/",
		    "icon": "reco-mayun"
		  },
          {
            "text": "散文",
            "link": "https://mp.weixin.qq.com/s/l0qGgBlxBv1n7Tc4WRb5IA",
            "icon": "reco-wechat"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "木叶村",
        "desc": "想做一条会飞的咸鱼",
        "email": "xihuangou@qq.com",
        "link": "https://chengxinkaicxk.github.io/blog/"
      },{
		  "title": "木叶村",
		  "desc": "想做一条会飞的咸鱼",
		  "email": "xihuangou@qq.com",
		  "link": "http://madmanxk.gitee.io/blog/"
	  }
    ],
    "logo": "/logo.png",
	// 搜索设置
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "sixone",
    "authorAvatar": "/avatar.png",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  }
}