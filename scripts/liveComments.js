function q(element){
    // ��ȡ DOM ����Ķ�д����������� jQuery Ҳ���Բ������Ƶķ���
    return document.getElementById(element);
}

window.addEventListener('load', function(){
    // �ڴ���������Ϻ��ٰ�
    var CM = new CommentManager(q('my-comment-stage'));
    CM.init();

    // �����õ�Ļ���ţ�֮�����ֹͣ��
    CM.start();

    // �󶨰�ť��
    //q('btnLoadTimeline').addEventListener('click', function(e){
    //    e.preventDefault(); // ����Ĭ�ϲ���
    //    $.getJSON("data/comments/sampleComments.json", function(data) {
    //        CM.load(data)
    //    });
    //});

    //q('btnInsertTimeline').addEventListener('click', function(e){
    //    e.preventDefault(); // ����Ĭ�ϲ���
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
    startTime = Date.now(); // �趨��ʼʱ��
    var playTime;
    iVal = setInterval(function(){
        playTime = Date.now() - startTime; // ����ʼʱ�������ʱ��Ĳ�ģ�ⲥ��
        CM.time(playTime); // ͨ������ʱ��
        q('txPlayPos').textContent = playTime; // ��ʾ����ʱ��
    }, 100); // ģ�ⲥ����ÿ 100ms ͨ������ʱ��

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
    //    e.preventDefault(); // ����Ĭ�ϲ���
    //    startTime = Date.now(); // �趨��ʼʱ��
    //    if(iVal >= 0){
    //        clearInterval(iVal); // ���֮ǰ���ж�ʱ��������ͣ��
    //    }
    //    //�����µĶ�ʱ��
    //    iVal = setInterval(function(){
    //        var playTime = Date.now() - startTime; // ����ʼʱ�������ʱ��Ĳ�ģ�ⲥ��
    //        CM.time(playTime); // ͨ������ʱ��
    //        q('txPlayPos').textContent = playTime; // ��ʾ����ʱ��
    //    }, 100); // ģ�ⲥ����ÿ 100ms ͨ������ʱ��
    //});

    // ���� CM ����ȫ�������Ϳ����� console �ն���ٿ�
    window.CM = CM;
});
