!function () {
    var duration = 50
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.slice(0, n)
            container.scrollTop = container.scrollHeight
            styleTag.innerHTML = code.slice(0, n)
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }


    let code = `
    /*首先画皮卡丘的皮*/
    .preview{
        height: 100%;
        border:1px solid green;
        display:flex;
        justify-content:center;
        align-items:center;
        background:yellow;
      }
      .wrapper{
        width:100%;
        height:200px;
        
        position: relative;
      }
      .wrapper > :not(:last-child){
          z-index: 1;
      }
       /*接着画皮卡丘鼻子*/
      .nose{
        
        border:11px solid red;
        border-width:15px 14px;
        border-radius:50%;
        border-color:black transparent transparent transparent;
        
        position: absolute;
        left:50%;
        top:48px;
        transform:translateX(-50%)
      }
       /*画两只眼睛和眼珠子*/
      .eye{
        width:49px;
        height:49px;
        background:#2E2E2E;
        position: absolute;
        border-radius:50%;
        border:2px solid #000000;
        top:20px;
      }
      .eye::before{
        content:'';
        display: block;
        width:24px;
        height:24px;
        background:white;
        border-radius:50%;
        position: absolute;
        left:5px;
        top:1px;
        border:2xp solid #000000;
      }
      .eye.left{
        right:50%;
        transform:translateX(-90px)
      }
      .eye.right{
        left:50%;
        transform:translateX(90px)
      }
       /*然后画皮卡丘的脸*/
      .face{
        width:68px;
        height:68px;
        background:#FC0D1C;
        border:2px solid black;
        border-radius:50%;
        position: absolute;
        top:105px;
      }
      .face.left{
        right:50%;
        transform:translateX(-116px);
      }
      .face.right{
        left:50%;
        transform:translateX(116px);
      }
      /*画嘴唇*/
      .upperLip{
        width:68px;
        height:25px;
        border:2px solid black;
        position: absolute;
        top:80px;
        background:yellow;
      }
      .upperLip.left{
        right:50%;
        border-bottom-left-radius:40px 25px;
        border-top:none;
        border-right:none;
        transform:rotate(-25deg);
      }
      .upperLip.right{
        left:50%;
        border-bottom-right-radius:40px 25px;
        border-top:none;
        border-left:none;
        transform:rotate(25deg);
      }
      .lowerLip-wrapper{
        bottom:0;
        position: absolute;
        left:50%;
        margin-left:-100px; 
       
        
        overflow:hidden;
        width:200px;
        height:110px;
        
      }
      .lowerLip{
         width:200px;
        height:4400px; 
        background:#d225e7;
        border:2px solid black;
        bottom:0;
        position: absolute;
        border-radius: 200px/2000px;
        overflow:hidden;
        }
      .lowerLip::after{
        content:'';
        position: absolute;
        width:100px;
        height:100px;
        background:#FC4A62;
        bottom:-15px;
        left:50%;
        transform:translateX(-50%);
        border-radius:50%;
      }
     /*好了，这只皮卡丘送给你*/
      `
    writeCode('', code)
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
}.call()