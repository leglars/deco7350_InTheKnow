/**
 * Created by leglars on 2015/10/19.
 */

var CM = new CommentManager(document.getElementById('my-comment-stage'));
CM.init(); // 初始化

// 载入弹幕列表
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

// 插入弹幕
var someDanmakuAObj = {
    "mode":1,
    "text":"Hello CommentCoreLibrary",
    "stime":1000,
    "size":30,
    "color":0xff0000
};
CM.insert(someDanmakuAObj);

// 启动播放弹幕（在未启动状态下弹幕不会移动）
CM.start();

// 停止播放（停止弹幕移动）
CM.stop();

// 更新时间轴时间
CM.time(500);
CM.time(1000);