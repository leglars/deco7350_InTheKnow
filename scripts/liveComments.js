/**
 * Created by leglars on 2015/10/19.
 */

var CM = new CommentManager(document.getElementById('my-comment-stage'));
CM.init(); // ��ʼ��

// ���뵯Ļ�б�
var danmakuList = [
    {
        "mode":1,
        "text":"Hello World",
        "stime":0,
        "size":25,
        "color":0xffffff
    }
];
CM.load(danmakuList);

// ���뵯Ļ
var someDanmakuAObj = {
    "mode":1,
    "text":"Hello CommentCoreLibrary",
    "stime":1000,
    "size":30,
    "color":0xff0000
};
CM.insert(someDanmakuAObj);

// �������ŵ�Ļ����δ����״̬�µ�Ļ�����ƶ���
CM.start();

// ֹͣ���ţ�ֹͣ��Ļ�ƶ���
CM.stop();

// ����ʱ����ʱ��
CM.time(500);
CM.time(1000);