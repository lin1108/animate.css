//记录随机的字母
var char;
//记录正确数目
var right = 0;
//记录错误数目
var error = 0;

function getAChar() {

    //charArray:字符数组
    var charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    //随机一个数字，范围[0,35]
    var num = Math.floor(Math.random() * 36);
    console.log(num);
    //根据随机数从数组中获取一个字母
    char = charArray[num];
    console.log(char);
    //把字幕显示到页面上
    $('div:eq(0)').html(char);

}

//调用方法,保证页面上最开始会出现一个字符
getAChar();



//监听用户的键盘按键事件
//keyup：按键松开
$(window).keyup(function (event) {0
    console.log('按键松开了...');
    console.log(event);
    //比较随机的字母与用户输入的字母是否一致
    var inputChar = event.originalEvent.key;//获取用户输入读的字符
    if (char == inputChar.toUpperCase()) { //toUpperCase()表示转换成大写字母
        //一致，正确数+1
        right++;
        //添加动画，出现下一个字母
        getAChar();
        $('div:eq(0)').addClass('animated zoomIn').css('color','lightgreen');

    } else {
        //不一致，错误数+1
        error++;
        //原字母震动，且颜色变红
        $('div:eq(0)').addClass('animated shake').css('color','red');
    }
    setTimeout(function () {
        $('div:eq(0)').removeClass();
    }, 500)
    //计算正确率
    var rate = right / (right + error) * 100;
    $('div:eq(1)').html('正确' + right + '个，错误' + error + '个，正确率是' + rate.toFixed(2) + '%' + '.');//rate:比率 toFixed(2)表示保留两位小数
})  