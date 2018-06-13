<template>
  <div id="container" style="margin: 30px">
    <h2>YU.UI---2</h2>
    <div class="sub-title">步骤条----基础用法</div>
    <yu-steps :active="active2">
      <yu-step title="步骤一"/>
      <yu-step title="步骤二"/>
      <yu-step title="步骤三"/>
    </yu-steps>
    <yu-button @click="base">下一步</yu-button>
    <div class="sub-title">步骤条----有描述</div>
    <yu-steps :active="active1">
      <yu-step title="步骤一" description="这是步骤条中的第一步,哈哈哈哈"/>
      <yu-step title="步骤二" description="这是步骤条中的第二步,哈哈哈哈"/>
      <yu-step title="步骤三" description="这是步骤条中的第三步,哈哈哈哈"/>
      <yu-step title="步骤四" description="这是步骤条中的第三步,哈哈哈哈"/>
      <yu-step title="步骤五" description="这是步骤条中的第三步,哈哈哈哈"/>
    </yu-steps>
    <yu-button @click="next">下一步</yu-button>
    <div style="height: 20px;width: 100%"></div>
    <div class="sub-title">步骤条---无描述,带有状态</div>
    <yu-steps :active="2">
      <yu-step title="完成"/>
      <yu-step title="进行中"/>
      <yu-step title="步骤三"/>
    </yu-steps>
    <div class="sub-title">步骤条---关于active</div>
    <yu-steps :active="2" >
      <yu-step icon="icon-edit" title="编辑"/>
      <yu-step icon="icon-upload" title="上传"/>
      <yu-step icon="icon-check-" title="完成"/>
    </yu-steps>
    <div class="sub-title">步骤条---给定宽</div>
    <div style="width: 500px">
      <yu-steps simple>
        <yu-step icon="icon-edit" title="编辑" status="success"/>
        <yu-step icon="icon-upload" title="上传" status="success"/>
        <yu-step icon="icon-check-" title="完成" status="error"/>
      </yu-steps>
    </div>
    <div class="sub-title">步骤条---居中</div>
    <div>
      <yu-steps center>
          <yu-step title="步骤一" description="这是步骤条中的第一步,哈哈哈哈"/>
          <yu-step title="步骤二" description="这是步骤条中的第二步,哈哈哈哈"/>
          <yu-step title="步骤三" description="这是步骤条中的第三步,哈哈哈哈"/>
          <yu-step title="步骤四" description="这是步骤条中的第三步,哈哈哈哈"/>
          <yu-step title="步骤五" description="这是步骤条中的第三步,哈哈哈哈"/>
      </yu-steps>
    </div>
    <div class="sub-title">步骤条---固定大小居中</div>
    <div style="width: 500px;">
      <yu-steps center>
        <yu-step title="步骤一" description="这是步骤条中的第一步,哈哈哈哈"/>
        <yu-step title="步骤二" description="这是步骤条中的第二步,哈哈哈哈"/>
        <yu-step title="步骤三" description="这是步骤条中的第三步,哈哈哈哈"/>
      </yu-steps>
    </div>
    <div class="sub-title" style="margin-top: 50px">文字提示框---按钮大小变化</div>
    <div class="box" style="margin-left: 100px">
      <yu-tool-tip content="TOP 这是位于顶部的" :show-arrow="true">
       <yu-button size="small" >上边</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="TOP 这是位于顶部的" :show-arrow="true" >
        <yu-button size="mini" >上边</yu-button>
      </yu-tool-tip>
    </div>
    <div class="box" style="margin-left: 100px">

    </div>
    <div class="box" style="margin-left: 100px">
    </div>
    <div class="sub-title" style="margin-top: 100px">文字提示框---方位变化</div>
    <div class="box" style="margin-left: 100px">
      <!--<yu-tool-tip content="哈哈哈哈哈哈" :show-arrow="true">-->
        <!--<yu-button type="warning">左侧</yu-button>-->
      <!--</yu-tool-tip>-->
      <yu-tool-tip content="与君歌一曲，请君为我侧耳听。" :show-arrow="true" effect="light" placement="top">
        <yu-button >上左</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="钟鼓馔玉不足贵，但愿长醉不复醒。" :show-arrow="true" effect="light" placement="top-right">
        <yu-button >上右</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="古来圣贤皆寂寞，惟有饮者留其名" :show-arrow="true" effect="light" placement="bottom">
        <yu-button>下面</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="陈王昔时宴平乐，斗酒十千恣欢谑。" :show-arrow="true" effect="light" placement="bottom-left">
        <yu-button>下左</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="主人何为言少钱，径须沽取对君酌。" :show-arrow="true" effect="light" placement="bottom-right">
        <yu-button>下右</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。" effect="light"  :show-arrow="true" placement="right">
        <yu-button>右侧</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="哈哈哈哈哈哈哈哈哈哈" effect="light"  :show-arrow="true" placement="right">
        <yu-button>右侧</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="君不见黄河之水天上来，奔流到海不复回。" :show-arrow="true"  placement="top">
        <yu-button>上左</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="君不见高堂明镜悲白发，朝如青丝暮成雪。" :show-arrow="true" placement="top-right">
        <yu-button>上右</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="人生得意须尽欢，莫使金樽空对月。" :show-arrow="true"  placement="bottom">
        <yu-button>下面</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="天生我材必有用，千金散尽还复来。" :show-arrow="true" placement="bottom-left">
        <yu-button>下左</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="烹羊宰牛且为乐，会须一饮三百杯。" :show-arrow="true" placement="bottom-right">
        <yu-button>下右</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="岑夫子，丹丘生，将进酒，杯莫停。"  :show-arrow="true" placement="right">
        <yu-button>右侧</yu-button>
      </yu-tool-tip>
    </div>
    <div class="sub-title" style="margin-top: 100px">文字提示框---方位变化</div>
    <div class="box" style="margin-left: 100px">
      <!--<yu-tool-tip content="哈哈哈哈哈哈" :show-arrow="true">-->
      <!--<yu-button type="warning">左侧</yu-button>-->
      <!--</yu-tool-tip>-->
      <yu-tool-tip content="与君歌一曲，请君为我侧耳听。" :show-arrow="true" effect="light" placement="top">
        <yu-button >上左</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="钟鼓馔玉不足贵，但愿长醉不复醒。" :show-arrow="true" effect="light" placement="top-right">
        <yu-button >上右</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="古来圣贤皆寂寞，惟有饮者留其名" :show-arrow="true" effect="light" placement="bottom">
        <yu-button>下面</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="陈王昔时宴平乐，斗酒十千恣欢谑。" :show-arrow="true" effect="light" placement="bottom-left">
        <yu-button>下左</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="主人何为言少钱，径须沽取对君酌。" :show-arrow="true" effect="light" placement="bottom-right">
        <yu-button>下右</yu-button>
      </yu-tool-tip>
      <yu-tool-tip content="五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。" effect="light"  :show-arrow="true" placement="right">
        <yu-button>右侧</yu-button>
      </yu-tool-tip>
    </div>
    <div style="height: 100px;"></div>
    <div class="sub-title" style="margin-top: 100px">tabs------>tablan效果</div>
    <!--<yu-tabs type="card">-->
      <!--<yu-tabs-nav slot="nav">用户管理</yu-tabs-nav>-->
      <!--<yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>-->
      <!--<yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>-->
      <!--<yu-tabs-nav slot="nav">定时任补偿</yu-tabs-nav>-->
      <!--<yu-tabs-item slot="item">第一个辗转一流年，时光穿梭，悄然从指缝间溜走，岁月如水，轻轻地蒸发，光景却是一样的安之若素。站在岁月的渡口，我将四季的光阴，裁剪成五光十色，编织成最美的花环，待你经过我的身边，送与你，最馨香的美好。-->
        <!--红尘的冷暖，已渐看透，任性的脚步，亦不再游走。择一隅清幽，修篱，种菊，安度一世春秋。一个人的时候，善待自己，两个人的时候，善待对方。最好的幸福，就是选择自己所爱的，爱自己所选择的。喜欢就该去珍惜，珍惜就不要轻易放弃。</yu-tabs-item>-->
      <!--<yu-tabs-item slot="item">第二个</yu-tabs-item>-->
      <!--<yu-tabs-item slot="item">第三个</yu-tabs-item>-->
      <!--<yu-tabs-item slot="item">第四个时任补偿</yu-tabs-item>-->
    <!--</yu-tabs>-->
    <!--<div style="height: 100px;"></div>-->
    <!--<div class="sub-title" style="margin-top: 100px">tabs&#45;&#45;&#45;&#45;&ndash;&gt;borderCard效果</div>-->
    <!--<yu-tabs type="border-card">-->
      <!--<yu-tabs-nav slot="nav">用户管理</yu-tabs-nav>-->
      <!--<yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>-->
      <!--<yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>-->
      <!--<yu-tabs-nav slot="nav">定时任补偿</yu-tabs-nav>-->
      <!--<yu-tabs-item slot="item">第一个辗转一流年，时光穿梭，悄然从指缝间溜走，岁月如水，轻轻地蒸发，光景却是一样的安之若素。站在岁月的渡口，我将四季的光阴，裁剪成五光十色，编织成最美的花环，待你经过我的身边，送与你，最馨香的美好。-->
        <!--红尘的冷暖，已渐看透，任性的脚步，亦不再游走。择一隅清幽，修篱，种菊，安度一世春秋。一个人的时候，善待自己，两个人的时候，善待对方。最好的幸福，就是选择自己所爱的，爱自己所选择的。喜欢就该去珍惜，珍惜就不要轻易放弃。</yu-tabs-item>-->
      <!--<yu-tabs-item slot="item">第二个</yu-tabs-item>-->
      <!--<yu-tabs-item slot="item">第三个</yu-tabs-item>-->
      <!--<yu-tabs-item slot="item">第四个时任补偿</yu-tabs-item>-->
    <!--</yu-tabs>-->
    <!--<div class="sub-title" style="margin-top: 100px">tabs&#45;&#45;&#45;&#45;&ndash;&gt;自定义标签效果</div>-->
    <yu-tabs   width="900px" tab-position="right">
    <yu-tabs-nav slot="nav">用户管理</yu-tabs-nav>
    <yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>
    <yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>
    <yu-tabs-nav slot="nav">定时任补偿</yu-tabs-nav>
    <yu-tabs-item slot="item">第一个辗转一流年，时光穿梭，悄然从指缝间溜走，岁月如水，轻轻地蒸发，光景却是一样的安之若素。站在岁月的渡口，我将四季的光阴，裁剪成五光十色，编织成最美的花环，待你经过我的身边，送与你，最馨香的美好。
    红尘的冷暖，已渐看透，任性的脚步，亦不再游走。择一隅清幽，修篱，种菊，安度一世春秋。一个人的时候，善待自己，两个人的时候，善待对方。最好的幸福，就是选择自己所爱的，爱自己所选择的。喜欢就该去珍惜，珍惜就不要轻易放弃。</yu-tabs-item>
    <yu-tabs-item slot="item">第二个</yu-tabs-item>
    <yu-tabs-item slot="item">第三个</yu-tabs-item>
    <yu-tabs-item slot="item">第四个时任补偿</yu-tabs-item>
    </yu-tabs>
    <yu-tabs   width="900px" tab-position="left">
      <yu-tabs-nav slot="nav">用户管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">定时任补偿</yu-tabs-nav>
      <yu-tabs-item slot="item">第一个辗转一流年，时光穿梭，悄然从指缝间溜走，岁月如水，轻轻地蒸发，光景却是一样的安之若素。站在岁月的渡口，我将四季的光阴，裁剪成五光十色，编织成最美的花环，待你经过我的身边，送与你，最馨香的美好。
        红尘的冷暖，已渐看透，任性的脚步，亦不再游走。择一隅清幽，修篱，种菊，安度一世春秋。一个人的时候，善待自己，两个人的时候，善待对方。最好的幸福，就是选择自己所爱的，爱自己所选择的。喜欢就该去珍惜，珍惜就不要轻易放弃。</yu-tabs-item>
      <yu-tabs-item slot="item">第二个</yu-tabs-item>
      <yu-tabs-item slot="item">第三个</yu-tabs-item>
      <yu-tabs-item slot="item">第四个时任补偿</yu-tabs-item>
    </yu-tabs>
    <yu-tabs   width="900px" tab-position="bottom">
      <yu-tabs-nav slot="nav">用户管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">配置管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">角色管理</yu-tabs-nav>
      <yu-tabs-nav slot="nav">定时任补偿</yu-tabs-nav>
      <yu-tabs-item slot="item">第一个辗转一流年，时光穿梭，悄然从指缝间溜走，岁月如水，轻轻地蒸发，光景却是一样的安之若素。站在岁月的渡口，我将四季的光阴，裁剪成五光十色，编织成最美的花环，待你经过我的身边，送与你，最馨香的美好。
        红尘的冷暖，已渐看透，任性的脚步，亦不再游走。择一隅清幽，修篱，种菊，安度一世春秋。一个人的时候，善待自己，两个人的时候，善待对方。最好的幸福，就是选择自己所爱的，爱自己所选择的。喜欢就该去珍惜，珍惜就不要轻易放弃。</yu-tabs-item>
      <yu-tabs-item slot="item">岁月如水，轻轻地蒸发，悄秋然从指缝间溜走，岁月如水，轻轻地蒸发，光景却是一样的安之若素。站在岁月的渡口，我将四季的光阴，裁剪成五光十色，编织成最美的花环，待你经过我的身边，送与你，最馨香的美好。
        红尘的冷暖，已渐看透，任性的脚步，亦不再游走。择一隅清幽，修篱，种菊，安度一世春秋。一个人的时候，善待自己，两个人的时候，善待对方。最好的幸福，就是选择自己所爱的，爱自己所选择的。喜欢就该去珍惜，珍惜就不要轻易放弃。</yu-tabs-item>
      <yu-tabs-item slot="item">篱，种菊，安度一世春秋待自己，两个人的时候，善待对方。最好的幸福，待自己，两个人的时候，善待对方。最好的幸福，待自己，两个人的时候，善待对方。最好的幸福，待自己，两个人的时候，善待对方。最好
        待自己，两个人的时候，善待对方。最好的幸福，待自己，两个人的时候，善待对方。最好的幸福，待自己，两个人的时候，善待对方。最好的幸福，待自己，两个人的时候，善待对方。最好的幸福，的幸福，待自己，两个人的时候，善待对方。最好的幸福，</yu-tabs-item>
      <yu-tabs-item slot="item">第悄然从指缝间溜走，岁月如水，轻轻地蒸发，悄然从指缝间溜走，岁月如水，轻轻地蒸发，悄然从指缝间溜走，岁月如水，轻轻地蒸发，悄然从指缝间溜走，岁月如水，轻轻地蒸发，悄然从指缝间溜走，岁月如水，轻轻地蒸发，
        悄然从指缝间溜走，岁月如水，轻轻地蒸发，悄然从指缝间溜走，岁月如水，轻轻地蒸发，悄然从指缝间溜走，岁月如水，轻，轻轻地蒸发，悄然从指缝间溜走，岁月如水，轻轻地蒸发，悄然从指缝间溜走，岁月如水，轻轻地蒸发，</yu-tabs-item>
    </yu-tabs>
    <div class="sub-title" style="margin-top: 100px">Carousel----轮播图效果</div>
    <yu-carousel width="600px" height="300px">
      <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522125173912&di=379eb2a8b6f9442fa4cd5105dff9255b&imgtype=0&src=http%3A%2F%2Fpic40.nipic.com%2F20140427%2F12728082_192158112000_2.png"/>
      <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522125173910&di=baabab0cc88a73d7f0538b95826c1ed8&imgtype=0&src=http%3A%2F%2Fpic8.nipic.com%2F20100716%2F5372314_005516302742_2.jpg"/>
      <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522125173902&di=b59ab8a5ec759a78854d8dd407a5e630&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8718367adab44aedad9a0930b91c8701a08bfb0a.jpg"/>
      <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522126451245&di=c23e9a0ee71c9ea455461b4a4041b27c&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F5%2F2560x1600%2F1413270044320.jpg"/>
      <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522126517861&di=4869b08f577db1f3c61eae7fef95180d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8694a4c27d1ed21b4c049c31a76eddc450da3f10.jpg"/>
    </yu-carousel>
    <div class="sub-title" style="margin-top: 100px">Carousel----轮播图效果---自动播放</div>
    <yu-carousel width="600px" height="300px" :autoplay="true" :interval="1000">
      <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522125173912&di=379eb2a8b6f9442fa4cd5105dff9255b&imgtype=0&src=http%3A%2F%2Fpic40.nipic.com%2F20140427%2F12728082_192158112000_2.png"/>
      <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522125173910&di=baabab0cc88a73d7f0538b95826c1ed8&imgtype=0&src=http%3A%2F%2Fpic8.nipic.com%2F20100716%2F5372314_005516302742_2.jpg"/>
      <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522125173902&di=b59ab8a5ec759a78854d8dd407a5e630&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8718367adab44aedad9a0930b91c8701a08bfb0a.jpg"/>
      <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522126451245&di=c23e9a0ee71c9ea455461b4a4041b27c&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F5%2F2560x1600%2F1413270044320.jpg"/>
      <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522126517861&di=4869b08f577db1f3c61eae7fef95180d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8694a4c27d1ed21b4c049c31a76eddc450da3f10.jpg"/>
    </yu-carousel>
    <div class="sub-title" style="margin-top: 100px">Carousel----轮播图效果--旋转木马播放</div>
    <yu-carousel width="1200px" height="500px"  :position="arr"  type="card">
    <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522125173912&di=379eb2a8b6f9442fa4cd5105dff9255b&imgtype=0&src=http%3A%2F%2Fpic40.nipic.com%2F20140427%2F12728082_192158112000_2.png"/>
    <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522125173910&di=baabab0cc88a73d7f0538b95826c1ed8&imgtype=0&src=http%3A%2F%2Fpic8.nipic.com%2F20100716%2F5372314_005516302742_2.jpg"/>
    <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522125173902&di=b59ab8a5ec759a78854d8dd407a5e630&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8718367adab44aedad9a0930b91c8701a08bfb0a.jpg"/>
    <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522126451245&di=c23e9a0ee71c9ea455461b4a4041b27c&imgtype=0&src=http%3A%2F%2Fb.zol-img.com.cn%2Fdesk%2Fbizhi%2Fimage%2F5%2F2560x1600%2F1413270044320.jpg"/>
    <yu-carousel-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522126517861&di=4869b08f577db1f3c61eae7fef95180d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F8694a4c27d1ed21b4c049c31a76eddc450da3f10.jpg"/>
    </yu-carousel>
    <div class="sub-title" style="margin-top: 100px">通知</div>
    <yu-notification title="提示" content="这是一条不会自动关闭的提示"  position="top-left">
      <yu-button>不可自动关闭</yu-button>
    </yu-notification>
    <yu-notification title="提示" content="这是一条不会自动关闭的提示" :duration="3" position="bottom-right">
      <yu-button>可自动关闭</yu-button>
    </yu-notification>
    <yu-notification title="提示" content="这是一条不会自动关闭的提示" :duration="3" :showClose="true" position="top-right">
      <yu-button>右上</yu-button>
    </yu-notification>
    <yu-notification title="提示" content="这是一条不会自动关闭的提示" :duration="3" position="bottom-left">
      <yu-button>左下</yu-button>
    </yu-notification>
    <yu-notification title="提示" content="这是一条不会自动关闭的提示" :duration="3" :showClose="false" position="top-right" type="success">
      <yu-button>隐藏关闭按钮</yu-button>
    </yu-notification>
    <yu-notification title="提示" content="这是一条不会自动关闭的提示" :showClose="true" position="top-right"  offset="200px" iconClass="icon-commenting">
      <yu-button>自定义图标</yu-button>
    </yu-notification>
    <div class="sub-title" style="margin-top: 100px">警告</div>
    <yu-alert title="成功提示的文案" type="success"/>
    <yu-alert title="信息提示的文本" type="info"/>
    <yu-alert title='警告提示的文本' type='warning'/>
    <yu-alert title="错误提示的文本" type='error' />
      <div class="sub-title" style="margin-top: 100px">警告---带有icon</div>
       <yu-alert title="成功提示的文案" type="success" show-icon/>
       <yu-alert title="成功提示的文案" type="error" show-icon/>
       <yu-alert title="成功提示的文案" type="info" show-icon/>
       <yu-alert title="成功提示的文案" type="warning" show-icon/>
     <div class="sub-title" style="margin-top: 100px">警告---居中</div>
       <yu-alert title="成功提示的文案" type="success" show-icon center/>
       <yu-alert title="成功提示的文案" type="error" show-icon center/>
       <yu-alert title="成功提示的文案" type="info" show-icon center/>
       <yu-alert title="成功提示的文案" type="warning" show-icon center/>
      <div class="sub-title" style="margin-top: 100px">警告---带有辅助性文字</div>
       <yu-alert title="成功提示的文案" type="success" description='这是一段辅助性的文字啊,哈哈哈哈哈哈哈' />
       <yu-alert title="成功提示的文案" type="error" description='哈哈哈哈哈哈哈啊,这是辅助性文字'/>
       <yu-alert title="成功提示的文案" type="info" description='啦啦啦啦啦啦啦,这是辅助性文字'/>
       <yu-alert title="成功提示的文案" type="warning" description='尕尕尜尜过过,这是辅助性文字'/>
         <div class="sub-title" style="margin-top: 100px">警告---带有辅助性文字和icon</div>
       <yu-alert title="成功提示的文案" type="success" show-icon description='这是一段辅助性的文字啊,哈哈哈哈哈哈哈' />
       <yu-alert title="成功提示的文案" type="error" show-icon description='哈哈哈哈哈哈哈啊,这是辅助性文字'/>
       <yu-alert title="成功提示的文案" type="info" show-icon description='啦啦啦啦啦啦啦,这是辅助性文字'/>
       <yu-alert title="成功提示的文案" type="warning" show-icon description='尕尕尜尜过过,这是辅助性文字'/>
    <div class="sub-title" style="margin-top: 100px">警告---关闭按钮为自定义文本</div>
    <yu-alert title="成功提示的文案" type="success" show-icon description='这是一段辅助性的文字啊,哈哈哈哈哈哈哈'  close-text="知道了"/>
    <yu-alert title="成功提示的文案" type="error" show-icon description='哈哈哈哈哈哈哈啊,这是辅助性文字'/>
    <yu-alert title="成功提示的文案哈哈哈哈哈哈" type="info" show-icon description='啦啦啦啦啦啦啦,这是辅助性文字' closable/>
    <yu-alert title="成功提示的文案" type="warning" show-icon description='尕尕尜尜过过,这是辅助性文字' @click="alert"/>
    <div class="sub-title" style="margin-top: 100px">警告---不能关闭的警告框</div>
    <yu-alert title="成功提示的文案哈哈哈哈哈哈" type="info" show-icon description='啦啦啦啦啦啦啦,这是辅助性文字' closeable/>
    <yu-alert title="成功提示的文案" type="success" show-icon description='这是一段辅助性的文字啊,哈哈哈哈哈哈哈'  closeable close-text="知道了"/>
    <yu-alert title="成功提示的文案" type="error" show-icon description='哈哈哈哈哈哈哈啊,这是辅助性文字' closeable/>
    <div class="sub-title" style="margin-top: 100px">message</div>
    <yu-message  message="这是一条消息提示" type="success">
      <yu-button :plain="true" >打开消息提示</yu-button>
    </yu-message>
    <div class="sub-title" style="margin-top: 100px">message----自定义图标</div>
    <yu-message  message="这是一条消息提示" icon-class="icon-lantern" :duration="3">
      <yu-button :plain="true" >打开消息提示</yu-button>
    </yu-message>
    <div class="sub-title" style="margin-top: 100px">message----HTML片段</div>
    <yu-message  message="<h1>哈哈哈哈</h1>" icon-class="icon-lantern" dangerouslyUseHTMLString :duration="3">
      <yu-button :plain="true" >HTML片段</yu-button>
    </yu-message>
    <div class="sub-title" style="margin-top: 100px">message----居中+自定义图标</div>
    <yu-message  message="这是一条消息提示" center icon-class="icon-lantern" :duration="3">
      <yu-button :plain="true" >打开消息提示</yu-button>
    </yu-message>
    <div class="sub-title" style="margin-top: 100px">message----warning</div>
    <yu-message  message="这是一条消息提示" type="warning">
      <yu-button :plain="true" >打开消息提示</yu-button>
    </yu-message>
    <div class="sub-title" style="margin-top: 100px">messagebox---基本用法</div>
    <yu-message-box showCancelButton
                    cancelButtonText="取消"
                    confirmButtonText="确定"
                    showConfirmButton
                    message="人生几何春已夏"
                    title="提示"
                    :event="messageBox"
                    iswarning
    >
      点击打开message-box
    </yu-message-box>

    <div class="sub-title" style="margin-top: 100px">messagebox---input框</div>
    <yu-message-box showCancelButton
                    cancelButtonText="取消"
                    confirmButtonText="确定"
                    showConfirmButton
                    message="请输入邮箱地址"
                    title="提示"
                    :event="messageBoxEvent"
                    isInput
                    inputErrorMessage="您输入的邮箱地址格式不正确"
                    :inputPattern="/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/"
                    inputValue="请在此处输入邮箱地址"
    >
      点击打开message-box
    </yu-message-box>
    <div class="sub-title" style="margin-top: 100px">messagebox---居中</div>
    <yu-message-box showCancelButton
                    cancelButtonText="取消"
                    confirmButtonText="确定"
                    showConfirmButton
                    message="人生几何春已夏"
                    title="提示"
                    :event="messageBox"
                    iswarning
                    center
                    input-type="text"
    >
      点击打开message-box
    </yu-message-box>
    <div class="sub-title" style="margin-top: 100px">messagebox---不出现删除符号</div>
    <yu-message-box showCancelButton
                    cancelButtonText="取消"
                    confirmButtonText="确定"
                    showConfirmButton
                    message="人生几何春已夏"
                    title="提示"
                    :event="messageBox"
                    iswarning
                    center
                    showClose
    >
      点击打开message-box
    </yu-message-box>
    <div class="sub-title" style="margin-top: 100px">messagebox---锁屏</div>
    <yu-message-box showCancelButton
                    cancelButtonText="取消"
                    confirmButtonText="确定"
                    showConfirmButton
                    message="人生几何春已夏"
                    title="提示"
                    :event="messageBox"
                    iswarning
                    center
                    showClose
                    lockScroll
                    type="warning"
    >
      点击打开message-box
    </yu-message-box>
    <div class="sub-title" style="margin-top: 100px">badge---标记---基本用法</div>
    <yu-badge value="99">
      <yu-button type="small">评价</yu-button>
    </yu-badge>
    <yu-badge value="99" :max="10">
      <yu-button type="small">评价</yu-button>
    </yu-badge>
    <yu-badge value="New">
      <yu-button type="small">评价</yu-button>
    </yu-badge>
    <yu-badge value="Hot">
      <yu-button>评价</yu-button>
    </yu-badge>
    <yu-badge is-dot>
     数据查询
    </yu-badge>
    <yu-badge is-dot hidden>
      <yu-button>评价</yu-button>
    </yu-badge>
    <div class="sub-title" style="margin-top: 100px">progress---进度条  ---line</div>
    <yu-progress type="line" stroke-height="10px" :percentage="80"/>
    <yu-progress type="line" stroke-height="10px" :percentage="0"/>
    <yu-progress type="line" stroke-height="10px" :percentage="100"/>
    <yu-progress type="line" stroke-height="10px" :percentage="50" status="exception"/>
    <div class="sub-title" style="margin-top: 100px">progress---进度条  ---line----文字在内部</div>
    <yu-progress type="line" stroke-height="20px" :percentage="80" :text-inside="true"/>
    <yu-progress type="line" stroke-height="20px" :percentage="0" :text-inside="true"/>
    <yu-progress type="line" stroke-height="20px" :percentage="100" :text-inside="true"/>
    <yu-progress type="line" stroke-height="20px" :percentage="50" status="exception" :text-inside="true"/>
    <div class="sub-title" style="margin-top: 100px">progress---进度条  ---Cricle</div>
    <yu-progress type="cricle" stroke-height="10px" color="rgb(142, 113, 199)" :percentage="80"/>
    <yu-progress type="cricle" stroke-height="10px" :percentage="50"/>
    <yu-progress type="cricle" stroke-height="10px" status = "exception" :percentage="50"/>
    <yu-progress type="cricle" stroke-height="10px" :percentage="100"/>
    <div class="sub-title" style="margin-top: 100px">tag----标签---基本用法</div>
    <yu-tag>标签一</yu-tag>
    <yu-tag type="info">标签一</yu-tag>
    <yu-tag type="success">标签一</yu-tag>
    <yu-tag type="warning">标签一</yu-tag>
    <yu-tag type="error">标签一</yu-tag>
    <div class="sub-title" style="margin-top: 100px">tag----标签---可关闭</div>
    <yu-tag closable>标签一</yu-tag>
    <yu-tag closable type="info">标签一</yu-tag>
    <yu-tag closable type="success">标签一</yu-tag>
    <yu-tag closable type="warning">标签一</yu-tag>
    <yu-tag closable type="error">标签一</yu-tag>
    <div class="sub-title" style="margin-top: 100px">tag----标签---不同尺寸的</div>
    <yu-tag closable>标签一</yu-tag>
    <yu-tag closable type="info" size="medium">标签一</yu-tag>
    <yu-tag closable type="success" size="small">标签一</yu-tag>
    <yu-tag closable type="warning" size="mini">标签一</yu-tag>
    <yu-tag closable type="error">标签一</yu-tag>
    <div class="sub-title" style="margin-top: 100px">tag----标签---没有边框的</div>
    <yu-tag closable hit>标签一</yu-tag>
    <yu-tag closable hit type="info" size="medium">标签一</yu-tag>
    <yu-tag closable hit type="success" size="small">标签一</yu-tag>
    <yu-tag closable hit type="warning" size="mini">标签一</yu-tag>
    <yu-tag closable hit type="error" @close="handleClose">标签一</yu-tag>
    <div class="sub-title" style="margin-top: 100px">tag----标签---关闭时出现动画----可删除</div>
    <yu-tag v-for="item in tags"
           closable
           :disable-transitions="false"
           @close="Close(item)">{{item}}</yu-tag>
    <yu-tag closable hit type="error" @close="handleClose" colo="pink">标签一</yu-tag>
    <div class="sub-title" style="margin-top: 100px">table</div>
    <yu-table :widths="width1"  :data="tabItem"/>
    <div class="sub-title" style="margin-top: 100px">table----带有斑马纹</div>
    <yu-table :data="tabItem" stripe/>
    <div class="sub-title" style="margin-top: 100px">table----带边框的表格</div>
    <yu-table :data="tabItem" border />
    <div class="sub-title"  style="margin-top: 100px">table----带状态的表格</div>
    <yu-table  :data="tabItem" border :widths="width1" status/>
    <div class="sub-title"  style="margin-top: 100px">table----固定表头</div>
    <yu-table :data="tabItem" :widths="width1"  border height="300px"/>
    <div class="sub-title"  style="margin-top: 100px;">table---固定列</div>
    <yu-table  :data="Item" border width="800px"/>
    <div class="sub-title" style="margin-top: 100px;">table---单选</div>
    <yu-table  :data="Items"/>
    <div style="margin-top: 10px">
      <yu-button @click="slectTwo(2)">选择第二行</yu-button>
      <yu-button @click="cancleSelect(2)">取消选择</yu-button>
    </div>
    <div class="sub-title" style="margin-top: 100px;">pagination---分页--超多个</div>
    <yu-pagination @change="currentpage" :total="500" background :showSize="size" changeSize goTo/>
    <div>当前是第{{current}}页</div>
    <div class="sub-title" style="margin-top: 100px;">弹出框----基础</div>
    <yu-popover title="标题" content="这是一段文字,这是一段文字这是一段文字" left="0" top="-90px">
      <yu-button slot="trigger">点击激活</yu-button>
    </yu-popover>
    <div class="sub-title" style="margin-top: 100px;">弹出框----不同方位</div>
    <yu-popover title="标题" content="这是一段文字,这是一段文字这是一段文字" position="bottom" left="0" top="55px">
      <yu-button slot="trigger">点击激活</yu-button>
    </yu-popover>
    <div class="sub-title" style="margin-top: 100px;">弹出框----不同方位</div>
    <yu-popover title="标题" content="这是一段文字,这是一段文字这是一段文字" position="right" left="0" top="55px">
      <yu-button slot="trigger">点击激活</yu-button>
    </yu-popover>
    <div class="sub-title">dialog对话框</div>
    <yu-dialog content="点击打开弹框"
               title="提示"
               inner="这是一条提示信息"/>
    <div class="sub-title">dial有表格的对话框</div>
    <yu-dialog content="<h1>点击打开弹框</h1>" title="提示">
      <yu-table :widths="width1"  :data="tabItem"/>
    </yu-dialog>
    <yu-dialog content="<h1>点击打开弹框</h1>" showConfirm title="提示">
      <yu-form>
        <yu-field label="活动动物" >
          <yu-select name="animal" placeholder="请选择动物" overflow multi>
            <yu-option label="猫" value="1"/>
            <yu-option label="狗" value="2" disabled/>
            <yu-option label="狗" value="3"/>
            <yu-option label="狗" value="4"/>
            <yu-option label="狗" value="5"/>
          </yu-select>
        </yu-field>
        <yu-field label="选择日期"  inline >
          <yu-date-picker name="date"/>
        </yu-field>
      </yu-form>
    </yu-dialog>
    <div class="sub-title">居中显示</div>
    <yu-dialog content="<h1>点击打开弹框</h1>" showConfirm showCancle center title="提示" lockScroll inner="这是一条提示信息">
    </yu-dialog>
    <!--下拉框-->
    <div class="sub-title">下拉框--->基本用法</div>
    <yu-drop-down>
      <span>下拉菜单<i class="iconfont icon-angle-down"></i></span>
      <yu-dropdown-menu>
        <yu-dropdown-item>狮子头</yu-dropdown-item>
        <yu-dropdown-item>黄金糕</yu-dropdown-item>
        <yu-dropdown-item>螺蛳粉</yu-dropdown-item>
        <yu-dropdown-item>臭豆腐</yu-dropdown-item>
        <yu-dropdown-item>铁板烧</yu-dropdown-item>
      </yu-dropdown-menu>
    </yu-drop-down>
    <div class="sub-title">下拉框--->disable</div>
    <yu-drop-down>
      <span>下拉菜单<i class="iconfont icon-angle-down"></i></span>
      <yu-dropdown-menu>
        <yu-dropdown-item command="a">狮子头</yu-dropdown-item>
        <yu-dropdown-item command="b">黄金糕</yu-dropdown-item>
        <yu-dropdown-item command="c">螺蛳粉</yu-dropdown-item>
        <yu-dropdown-item command="d" :disabled="true">臭豆腐</yu-dropdown-item>
        <yu-dropdown-item command="e">铁板烧</yu-dropdown-item>
      </yu-dropdown-menu>
    </yu-drop-down>
<div class="sub-title">下拉框--->button</div>
    <yu-drop-down>
      <yu-button>更多菜单</yu-button>
      <yu-dropdown-menu>
        <yu-dropdown-item command="a">狮子头</yu-dropdown-item>
        <yu-dropdown-item command="b">黄金糕</yu-dropdown-item>
        <yu-dropdown-item command="c">螺蛳粉</yu-dropdown-item>
        <yu-dropdown-item command="d" :disabled="true">臭豆腐</yu-dropdown-item>
        <yu-dropdown-item command="e" divided>铁板烧</yu-dropdown-item>
      </yu-dropdown-menu>
    </yu-drop-down>
    <div style="height: 200px;width: 30px"></div>
  </div>
</template>

<script>
import 'whatwg-fetch'
import YuButton from '../components/button'
import YuSteps from '../components/steps'
import YuStep from '../components/step'
import YuToolTip from '../components/tooltip'
import YuTabs from '../components/tabs'
import YuTabsItem from '../components/tabs-item'
import YuTabsNav from '../components/tabs-nav'
import YuCarousel from '../components/carousel'
import YuCarouselItem from '../components/carousel-item'
import YuNotification from '../components/notification'
import YuAlert from '../components/alert'
import YuMessage from '../components/message'
import YuMessageBox from '../components/message-box'
import YuBadge from '../components/badge'
import YuProgress from '../components/progress'
import YuTag from '../components/tag'
import YuTable from '../components/table'
import YuPagination from '../components/pagination'
import YuPopover from '../components/popover'
import YuDropDown from '../components/dropdown'
import YuDropdownItem from '../components/dropdown-item'
import YuDropdownMenu from '../components/dropdown-menu'
import YuMenuItem from '../components/menu-item'
import YuDialog from '../components/dialog'
import YuButtons from '../components/buttons'
import YuInput from '../components/input'
import YuOption from '../components/option'
import YuRadio from '../components/radio'
import YuRadios from '../components/radios'
import YuSelect from '../components/select'
import YuCounter from '../components/counter'
import YuCheckbox from '../components/checkbox'
import YuCard from '../components/card'
import YuCollapseItem from '../components/collapse-item'
import YuCollapse from '../components/collapse'
import YuCheckboxs from '../components/checkboxs'
import YuLoading from '../components/loading'
import YuCounterSide from '../components/counter-side'
import YuCascader from '../components/cascader'
import YuSwitch from '../components/switch'
import YuBreadcrumb from '../components/breadcrumb'
import YuBreadcrumbItem from '../components/breadcrumb-item'
import YuSlider from '../components/slider'
import YuTimePicker from '../components/time-picker'
import YuScrollSelect from '../components/scroll-select'
import YuDatePicker from '../components/date-picker'
import YuUpload from '../components/upload'
import YuRate from '../components/rate'
import YuForm from '../components/form'
import YuField from '../components/field'


export default {
  name: 'ViewContainer',
  directives: {
    popover: {
      inserted(el, binding) {
        console.log(binding.arg)
      },
    },
  },
  data() {
    return {
      active1: 0,
      active2: 0,
      arr: [
        {
          width: 400,
          top: 20,
          left: 50,
          opacity: 0.2,
          zIndex: 2,
        }, // 0
        {
          width: 600,
          top: 70,
          left: 0,
          opacity: 0.8,
          zIndex: 3,
        }, // 1
        {
          width: 800,
          top: 100,
          left: 200,
          opacity: 1,
          zIndex: 4,
        }, // 2
        {
          width: 600,
          top: 70,
          left: 600,
          opacity: 0.8,
          zIndex: 3,
        }, // 3
        {
          width: 400,
          top: 20,
          left: 750,
          opacity: 0.2,
          zIndex: 2,
        }, // 4
      ],
      messageBoxEvent: {
        confirm: () => ({
          messagePopverType: 'success',
          messagePopverText: '您输入得邮箱地址为:',
        }),
        cancle: () => ({
          messagePopverType: 'info',
          messagePopverText: '已取消删除',
        }),

      },
      messageBox: {
        confirm: () => ({
          messagePopverType: 'success',
          messagePopverText: '删除成功',
        }),
        cancle: () => ({
          messagePopverType: 'info',
          messagePopverText: '已取消删除',
        }),
      },
      tags: ['标签一', '标签二', '标签三'],
      // widths: {
      //   date: '200px',
      //   name: '180px',
      //   address: '460px',
      // },
      width: {
        date: '200px',
        age: '180px',
        name: '180px',
        money: '180px',
        a: '180px',
        b: '180px',
        c: '180px',
        address: '460px',
        operation: '100px',
      },
      width1: {
        date: '200px',
        name: '180px',
        address: '460px',
      },
      tabItem: [
        {
          date: '日期',
          name: '姓名',
          address: '地址',
        },
        {
          date: '2016-05-03',
          name: '王小虎22222',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎哈哈哈哈哈哈',
          address: '上海市普陀区金沙江路 1518 弄',
          type: 'warning',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          type: 'success',
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          type: 'info',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          type: 'danger',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      Item: [
        {
          date: '日期',
          name: '姓名',
          age: '年龄',
          money: '金额',
          a: '出售',
          b: '哈哈',
          c: '嘎嘎',
          address: '地址',
          operation: '操作',
        },
        {
          date: '2018-08-16',
          name: '王小虎',
          age: '20',
          money: '20',
          a: '56',
          b: '36',
          c: '99',
          address: '上海市浦东新区999号',
          operation: {
            operation1: '删除',
            operation2: '编辑',
          },
        },
        {
          date: '2018-08-16',
          name: '王小虎',
          age: '20',
          money: '20',
          a: '56',
          b: '36',
          c: '99',
          address: '上海市浦东新区999号',
          operation: {
            operation1: '删除',
            operation2: '编辑',
          },
        },
        {
          date: '2018-08-16',
          name: '王小虎',
          age: '20',
          money: '20',
          a: '56',
          b: '36',
          c: '99',
          address: '上海市浦东新区999号',
          operation: {
            operation1: '删除',
            operation2: '编辑',
          },
        },
      ],
      Items: [
        {
          date: '日期',
          name: '姓名',
          address: '地址',
        },
        {
          date: '2016-05-03',
          name: '王小虎22222',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      current: 1,
      size: [
        { label: '100条每页',
          value: 100,
        },
        { label: '200条每页',
          value: 200,
        },
        { label: '300条每页',
          value: 300,
        },
        { label: '400条每页',
          value: 400,
        },
      ],
    }
  },
  methods: {
    next() {
      this.active1 += 1
      if (this.active1 >= 5) this.active1 = 0
    },
    base() {
      this.active2 += 1
      if (this.active2 >= 3) this.active2 = 0
    },
    alert() {
      alert(99)
    },
    handleClose() {
      alert('哈哈哈哈哈哈')
    },
    Close(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    setCurrent() {
      alert(999)
    },
    currentpage(current) {
      this.current = current
    },
    slectTwo(num) {
      this.Items[num].type = 'info'
    },
    cancleSelect(num) {
      this.Items[num].type = ''
    },
  },
  mounted() {
  },
  components: {
    YuButton,
    YuSteps,
    YuStep,
    YuToolTip,
    YuTabs,
    YuTabsNav,
    YuTabsItem,
    YuCarousel,
    YuCarouselItem,
    YuNotification,
    YuAlert,
    YuDialog,
    YuMessage,
    YuMessageBox,
    YuBadge,
    YuProgress,
    YuTag,
    YuTable,
    YuPagination,
    YuPopover,
    YuButtons,
    YuInput,
    YuOption,
    YuRadio,
    YuRadios,
    YuSelect,
    YuCounter,
    YuCheckbox,
    YuCard,
    YuCollapseItem,
    YuCollapse,
    YuMenuItem,
    YuCheckboxs,
    YuLoading,
    YuCounterSide,
    YuCascader,
    YuSwitch,
    YuDropDown,
    YuDropdownMenu,
    YuDropdownItem,
    YuBreadcrumb,
    YuBreadcrumbItem,
    YuSlider,
    YuTimePicker,
    YuScrollSelect,
    YuDatePicker,
    YuUpload,
    YuRate,
    YuForm,
    YuField,
  },
}
</script>

<style lang="scss" type="text/scss">
@import "../assets/css/varible";
.title {
  color: $text;
  padding: 14px 0;
  margin: 20px 0;
  border-bottom: 1px solid $border;
}
.sub-title {
  color: $text;
  padding: 0 8px;
  margin: 20px 0;
  border-left: 4px solid $primary;
}
.dropdown-list {
  .list-content {
    display: inline-block;
    float: left;
    margin-right: 50px;
  }
}
.box {
  float: left;
}
</style>
