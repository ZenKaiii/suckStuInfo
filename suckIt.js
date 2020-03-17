// ==UserScript==
// @name         suckStuInfo
// @namespace    https://github.com/ZenKaiii/suckStuInfo
// @version      0.1
// @description  导员喊你来打卡 
// @author       某不愿透露姓名的jojo
// @match        http://stuinfo.neu.edu.cn/cloud-xxbl/studentinfo?tag=*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
window.onload =function () {

        let q1 = this.document.getElementById("sfgcyiqz");
        q1.value = "否";
        let q2 = this.document.getElementsByName("hjnznl")[0];
        q2.value = "家";
        let q3 = this.document.getElementsByName("qgnl")[0];
        q3.value = "家";
        let q4 = this.document.getElementById("sfqtdqlxs");
        q4.value = "否";
        let q5 = this.document.getElementById("sfjcgbr");
        q5.value = "否";
        let q6 = this.document.getElementById("sfjcglxsry");
        q6.value = "否";
        let q7 = this.document.getElementById("sfjcgysqzbr");
        q7.value = "否";
        let q8 = this.document.getElementById("sfjtcyjjfbqk");
        q8.value = "否";
        let q9 = this.document.getElementById("sfqgfrmz");
        q9.value = "否";
        let q10 = this.document.getElementById("sfygfr");
        q10.value = "无";
        let q11 = this.document.getElementById("sfyghxdbsy");
        q11.value = "无";
        let q12 = this.document.getElementById("sfygxhdbsy");
        q12.value = "无";
        let btn = this.document.getElementsByTagName("button")[0];
        btn.click();
      }
  }
)();