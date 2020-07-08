import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  people = [
    {name:"步行街主干道", title:"世纪悬案！江南皮革厂的黄鹤到底跑了没？zt", count:"345", src:"../../assets/images/logo1.jpg"},
    {name:"影视区", title:"【影评人】 第156期 周星驰剑走偏锋《回魂夜》 你的评分是多少？", count:"34", src:"../../assets/images/logo2.jpg"},
    {name:"湿乎乎的话题", title:"【流言板】 詹姆斯已经和湖人达成4年1.54亿美元的加盟协议", count:"67", src:"../../assets/images/logo4.jpg"},
    {name:"步行街主干道", title:"你在游戏里听过最让人胆寒的台词是什么？", count:"99", src:"../../assets/images/logo1.jpg"},
    {name:"湿乎乎的话题", title:"【流言板】 詹姆斯及其崇敬湖人，卢得知转会消息时很震惊", count:"678", src:"../../assets/images/logo4.jpg"},
    {name:"英雄联盟", title:"无限火力碰到这个皮肤，什么水平？", count:"124", src:"../../assets/images/logo5.jpg"},
    {name:"中国篮球", title:"NBA冠军内线驾到！斯贝茨会像萨林杰那样大杀四方吗？", count:"1789", src:"../../assets/images/logo3.jpg"},
    {name:"步行街主干道", title:"就因为一句话，女朋友就把我拉黑了，是她太作了吗？", count:"89", src:"../../assets/images/logo1.jpg"},
    {name:"步行街主干道", title:"世界杯激战正酣，那么谁是中国足球第一人？", count:"300", src:"../../assets/images/logo1.jpg"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
