function $(element){
    // ��ȡ DOM ����Ķ�д����������� jQuery Ҳ���Բ������Ƶķ���
    return document.getElementById(element);
}

window.addEventListener('load', function(){
    // �ڴ���������Ϻ��ٰ�
    var CM = new CommentManager($('my-comment-stage'));
    CM.init();

    // �����õ�Ļ���ţ�֮�����ֹͣ��
    CM.start();

    // �󶨰�ť��
    $('btnLoadTimeline').addEventListener('click', function(e){
        e.preventDefault(); // ����Ĭ�ϲ���
        var danmakuTimeline = [
            {
                "mode":1,
                "text":"Hello World",
                "stime":0,
                "size":25,
                "color":0xffffff
            }
        ];
        CM.load(danmakuTimeline);
    });

    $('btnInsertTimeline').addEventListener('click', function(e){
        e.preventDefault(); // ����Ĭ�ϲ���
        var danmaku = {
            "mode":1,
            "text":"Hello CommentCoreLibrary",
            "stime":1000,
            "size":30,
            "color":0xff0000
        };
        CM.insert(danmaku);
    });

    var startTime = 0, iVal = -1;
    $('btnTimer').addEventListener('click', function(e){
        e.preventDefault(); // ����Ĭ�ϲ���
        startTime = Date.now(); // �趨��ʼʱ��
        if(iVal >= 0){
            clearInterval(iVal); // ���֮ǰ���ж�ʱ��������ͣ��
        }
        //�����µĶ�ʱ��
        iVal = setInterval(function(){
            var playTime = Date.now() - startTime; // ����ʼʱ�������ʱ��Ĳ�ģ�ⲥ��
            CM.time(playTime); // ͨ������ʱ��
            $('txPlayPos').textContent = playTime; // ��ʾ����ʱ��
        }, 100); // ģ�ⲥ����ÿ 100ms ͨ������ʱ��
    });

    // ���� CM ����ȫ�������Ϳ����� console �ն���ٿ�
    window.CM = CM;
});
