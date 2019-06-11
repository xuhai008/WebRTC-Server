/*
* 推送SDP消息类
* Author: Max.Chiu
* */

// 项目公共库
const Common = require('../../../../lib/common');
// 在线用户
const OnlineUserManager = require('../../../../user/online-users').OnlineUserManager;
// 业务管理器
const BaseNotice = require('./base-notice');

module.exports = class SendSdpAnswerNotice extends BaseNotice {
    constructor(fromUserId, toUserId, sdp) {
        super();

        this.obj.noticeData.req_data.userId = fromUserId;
        this.obj.noticeData.req_data.sdp = sdp;
    }

    static getRoute() {
        return 'imShare/sendSdpAnswerNotice';
    }
}