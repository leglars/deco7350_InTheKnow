function q(element){
    // 获取 DOM 对象的短写，如果你在用 jQuery 也可以采用类似的方法
    return document.getElementById(element);
}

window.addEventListener('load', function(){
    // 在窗体载入完毕后再绑定
    var CM = new CommentManager(q('my-comment-stage'));
    CM.init();

    // 先启用弹幕播放（之后可以停止）
    CM.start();

    // 绑定按钮们
    //q('btnLoadTimeline').addEventListener('click', function(e){
    //    e.preventDefault(); // 抑制默认操作
    //    $.getJSON("data/comments/sampleComments.json", function(data) {
    //        CM.load(data)
    //    });
    //});

    //q('btnInsertTimeline').addEventListener('click', function(e){
    //    e.preventDefault(); // 抑制默认操作
    //    var danmaku = {
    //        "mode":1,
    //        "text":"Hello CommentCoreLibrary",
    //        "stime":5000,
    //        "size":30,
    //        "color":0xff0000
    //    };
    //    CM.insert(danmaku);
    //});

    $.getJSON("../../data/comments/sampleComments.json", function(data) {
        CM.load(data)
    });

    var startTime = 0, iVal = -1;
    startTime = Date.now(); // 设定起始时间
    var playTime;
    iVal = setInterval(function(){
        playTime = Date.now() - startTime; // 用起始时间和现在时间的差模拟播放
        CM.time(playTime); // 通报播放时间
        q('txPlayPos').textContent = playTime; // 显示播放时间
    }, 100); // 模拟播放器每 100ms 通报播放时间

    $("#submit").click(function(e) {
        e.preventDefault();

        console.log("iam submit");
        var comment = $("#commentInput").val();
        $("#commentInput").val("");
        console.log(comment);
        if(comment) {
            console.log("this is form danmaku file");
            var showTime = playTime + 1000;

            var danmaku = {
                "mode":7,
                "x":150,
                "y":175,
                "alpha": {"from": 1.0, "to":0.0},
                "dur": 2000,
                "text":comment,
                "stime":showTime,
                "size":30,
                "color":0xff0000
            };
            CM.insert(danmaku);
        }
    });

    var toggle = document.querySelector("paper-toggle-button");
    toggle.addEventListener('change', function () {
        if (this.checked) {
            CM.start()
            $('#my-comment-stage').removeClass("hidden").fadeIn(200);
        } else {
            $('#my-comment-stage').fadeOut(500).addClass("hidden");
            CM.stop()
        }
    });



    //q('btnTimer').addEventListener('click', function(e){
    //    e.preventDefault(); // 抑制默认操作
    //    startTime = Date.now(); // 设定起始时间
    //    if(iVal >= 0){
    //        clearInterval(iVal); // 如果之前就有定时器，把它停掉
    //    }
    //    //建立新的定时器
    //    iVal = setInterval(function(){
    //        var playTime = Date.now() - startTime; // 用起始时间和现在时间的差模拟播放
    //        CM.time(playTime); // 通报播放时间
    //        q('txPlayPos').textContent = playTime; // 显示播放时间
    //    }, 100); // 模拟播放器每 100ms 通报播放时间
    //});

    // 开放 CM 对象到全局这样就可以在 console 终端里操控
    window.CM = CM;
});
