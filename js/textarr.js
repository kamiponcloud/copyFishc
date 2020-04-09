let textArr = [{
    name: 'h2',
    class: 'inten',
    text: '19级软件新生'
}, {
    name: 'h4',
    class: 'text-title',
    text: '个人信息'
}, {
    name: 'div',
    class: 'base-info',
    children: [{
        name: 'div',
        children: [{
            name: 'div',
            text: '姓名：kamipon'
        }, {
            name: 'div',
            text: '年龄：20'
        }]
    }, {
        name: 'div',
        children: [{
            name: 'div',
            text: '毕业院校：浙江邮电职业技术学院'
        }, {
            name: 'div',
            text: '联系邮箱：1906219821@qq.com'
        }]
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '教育背景'
}, {
    name: 'div',
    class: 'school',
    children: [{
        name: 'span',
        class: 'mr',
        text: '学历：专科'
    }, {
        name: 'span',
        text: '专业：计算机科学与技术'
    }, {
        name: 'div',
        text: '主修课程：C++、Java、HTML、CSS、JavaScript、Linux',
    }]
}, {
    name: 'h4',
    class: 'text-title',
    text: '专业技能'
}, {
    name: 'ul',
    class: 'ul-list',
    children: [{
        name: 'li',
        text: '熟练掌握',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'C++、java的单词拼写'
        }]
    }, {
        name: 'li',
        text: '精通',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'Html、css、JavaScript的单词拼写'
        }]
    }, {
        name: 'li',
        text: '熟练掌握',
        children: [{
            name: 'span',
            class: 'tag',
            text: 'Linux操作系统的安装与卸载'
        }]
    }]
}]
let style = `
    /*
    * 老师您好，我是kamipon
    * 特此准备了一份从鱼C整到的网页
    * 先准备一些样式
    */
    *{
        transition: all .8s;
    }
    /* 容器中要添加点样式 */
    #codeEdit{
        color: #fff;
        background: #1E1E1E;
    }
    #resume{
        box-shadow: -1px 4px 9px 3px rgba(0, 0, 0, .15);
    }
    /* 再来点代码高亮 */
    pre#codeEdit{
        color: #CE9e78;
    }
    .token.selector{
        color: rgb(230, 155, 43);
    }
    .token.comment{
        color: #2eb996;
        font-size: 14px;
    }
    .token.property{
        color: #60C8FE;
    }
    .token.function {
        color: #DD4A68;
    }
    /* 好啦,右边就是我的个人信息，望查阅指正 */
`
let balloon = `
    <div class="balloon-wrap">
        <img src="img/balloon.png" id="bg-balloon-small">
        <img src="img/balloon.png" id="bg-balloon-large">
        <img src="img/logo.png" id="bg-balloon-logo">
    </div>
    <div class="connect" style="width: 100%; display: flex;"></div>`
let line = `
    <div class="line-wrap">
        <div class="line-left"></div>
        <div class="line-right">
            <p class="line-defColor line-item1"></p>
            <p class="line-darkColor line-item2"></p>
            <p class="line-defColor line-item3"></p>
            <p class="line-midColor line-item4"></p>
            <p class="line-darkColor line-item5"></p>
            <p class="line-midColor line-item6"></p>
            <p class="line-darkColor line-item7"></p>
            <p class="line-midColor line-item7"></p>
        </div>
    </div>
    <div class="connect"></div>`
let text = `
    <div class="text-wrap"></div>
`