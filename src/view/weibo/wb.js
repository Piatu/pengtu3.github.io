var wb = () => {
    // maxlength 是一个表单属性, 作用是给表单设置一个最大长度

    // 模拟数据
    let dataArr = [
      { uname: '司马懿', imgSrc: './images/9.5/01.jpg' },
      { uname: '女娲', imgSrc: './images/9.5/02.jpg' },
      { uname: '百里守约', imgSrc: './images/9.5/03.jpg' },
      { uname: '亚瑟', imgSrc: './images/9.5/04.jpg' },
      { uname: '虞姬', imgSrc: './images/9.5/05.jpg' },
      { uname: '张良', imgSrc: './images/9.5/06.jpg' },
      { uname: '安其拉', imgSrc: './images/9.5/07.jpg' },
      { uname: '李白', imgSrc: './images/9.5/08.jpg' },
      { uname: '阿珂', imgSrc: './images/9.5/09.jpg' },
      { uname: '墨子', imgSrc: './images/9.5/10.jpg' },
      { uname: '鲁班', imgSrc: './images/9.5/11.jpg' },
      { uname: '嬴政', imgSrc: './images/9.5/12.jpg' },
      { uname: '孙膑', imgSrc: './images/9.5/13.jpg' },
      { uname: '周瑜', imgSrc: './images/9.5/14.jpg' },
      { uname: '老夫子', imgSrc: './images/9.5/15.jpg' },
      { uname: '狄仁杰', imgSrc: './images/9.5/16.jpg' },
      { uname: '扁鹊', imgSrc: './images/9.5/17.jpg' },
      { uname: '马可波罗', imgSrc: './images/9.5/18.jpg' },
      { uname: '露娜', imgSrc: './images/9.5/19.jpg' },
      { uname: '孙悟空', imgSrc: './images/9.5/20.jpg' },
      { uname: '黄忠', imgSrc: './images/9.5/21.jpg' },
      { uname: '百里玄策', imgSrc: './images/9.5/22.jpg' },
    ]

    //     需救:检测用户输入字数1。注册input事件
    // 2．将文本的内容的长度赋值给对应的数值
    // 3．表单的maxLength属性可以直接限制在200个数之间
    let textarea = document.querySelector('textarea')
    let useCount = document.querySelector('.useCount')
    // 发布send
    let send = document.querySelector('#send')
    let ul = document.querySelector('#list')
    textarea.addEventListener('input', function () {
      useCount.innerHTML = this.value.length
    })

    //     需求2:输入不能为空点击button之后判断
    // 判断如果内容为空，则提示不能输入为空，并且直接return不能为空防止输入无意义空格，使用字符串.trim()去掉首尾空格
    // 并将表单的value值设置为空字符串
    // 同时下面红色为设置为0
    // 防止输入无意义空格，使用字符串.trim()去掉首尾空格

    send.addEventListener('click', function () {

      if (textarea.value.trim() === '') {
        textarea.value = ''
        useCount.innerHTML = 0
        return alert('输入的内容不能空')
      }


      //     需求3:
      // 新增留言写到send 的里面
      // 创建一个小Li，然后里面通过innerHTML追加数据

      // 随机数
      function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      let random = getRandom(0, dataArr.length - 1)
      let li = document.createElement('li')
      //随机获取数据数组里面的内容，替换newNode的图片和名字以及留言内容
      li.innerHTML = `
    <div class="info" style=" position: absolute;top: 15px;left: 100px;font: bold 16px '宋体';">  
       <img class="userpic"  style=" width: 80px;border-radius: 50%;">
      <span class="username" style="position: absolute; top: 15px;left: 100px;font: bold 16px '宋体';>${dataArr[random].uname}</span>
      <p class="send-time" style="position: absolute;top: 40px;left: 100px;color: #aaa;font-size: 12px;">${new Date().toLocaleString()}</p>
    </div>
    <div class="content">${textarea.value}</div>
    <span class="the_del">X</span>
    `
      // console.log('li')
      //     利用时间对象将时间动态化
      // new Date().toLocaLestring()
      // 追加给ul用父元素.insertBefore(子元素，那个元素的前面)
      // ul.insertBefore(li, ul.children[0])
      let del = li.querySelector('.the_del')
      del.addEventListener('click', function () {
        ul.removeChild(li)
      })

      ul.insertBefore(li, ul.children[0])
      textarea.value = ''
      useCount.innerHTML = 0


    })
    textarea.addEventListener('keyup', function (e) {
      if (e.key === 'Enter') {
        //发布新闻
        send.click()

      }

    })
}

export default wb