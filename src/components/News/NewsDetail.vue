<template>
    <div class="tmp1">
        <nav-bar title="新闻详情"></nav-bar>
        <div class="news-title">
            <p>{{message.title}}</p>
            <div>
                <span>单击{{message.clickamount}}次</span>
                <span>分类：民生经济</span>
                <span>添加时间：{{message.time|dateConvert('YYYY年-MM月-DD日')}}</span>
            </div>
        </div>
        <div class="news-content" v-html="message.content"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                message:{
                    //require('@/assets/lun01.jpg')
                    title:'十三届全国人大三次会议举行二次通过',
                    time:'2012-12-21 23:01:02',
                    clickamount:3000,
                    content:"<img src='https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1591269090&t=e2f90f1f37dbdcf3ca87cf1a4394cf17' alt='这是一个图片'/>"+
                            `<p>新华社北京5月25日电 题：脚踏实地 逐梦前行——十三届全国人大三次会议第二场“代表通道”扫描

新华社记者韩洁、孙少龙

千万次技艺打磨成就18年无差错、亚丁湾上不曾中断的护航承诺、走出大山又回到大山只为高原孩子有学上……

25日下午2时许，十三届全国人大三次会议第二场“代表通道”如约开启。6位全国人大代表分享奋斗故事，畅谈履职心声，话语间充满奋进的信心。

世界百年未有之大变局下，实现中华民族伟大复兴，唯有不断探索，不断奋斗，才能攻坚克难、逐梦前行。

对中国航发沈阳黎明航空发动机有限责任公司职工栗生锐代表而言，从一名学徒，到中华技能大奖得主，背后是无数个日夜的坚守。

“高超的技艺都是练出来的，没有任何捷径。”栗生锐回忆自己刚工作时的一次失误，刀具在零件上划下的那道刻痕，也深深刻进他的心里。

为了不再犯错，栗生锐反复训练，直到手能感知误差和变化，耳能听出加工的细微异常，眼能直接判断对错，练得“就像一部机器”，至今连续18年没出过一件废品。

如今，以他名字命名的技能大师工作室每年都承担着重要科研生产任务，他所在企业涌现出一大批年轻“金蓝领”。

“只要坚持梦想、刻苦钻研，有多大担当就能干多大事业，尽多大责任就能有多大的成就。”栗生锐坦言。

随舰远航，筑梦深蓝。海军某导弹驱逐舰舰长赵岩泉代表曾两次参加索马里护航行动。

“中国海军在亚丁湾护航，是为了积极履行国际义务和责任，保障国际航道安全。”赵岩泉介绍，从2008年底以来，中国海军已累计派出35批护航编队，为6700多艘中外船舶护航。

“我是中国海军，我正在此区域护航，如需要帮助，请在16频道呼叫我！”

赵岩泉说，这句庄严的承诺从未中断。一次驱离海盗后，从电台听到中国船长“祖国万岁”的高呼，那一刻，他由衷感受到身后祖国的强大，以及作为军人沉甸甸的责任。

千帆过尽，初心不改。

如果说赵岩泉的梦想在蓝色深海，周义哲代表的梦想，就在内蒙古大兴安岭那片万木葱茏的绿色林海。

作为大兴安岭北岸林场职工，周义哲经历了从伐木工到护林人的转变。2015年，国家号召全面停伐，砍了35年树的周义哲转为护林员，原本担心丢饭碗的他不仅四季有活干，收入还增加不少。

“绿水青山就是金山银山。”周义哲说，从前砍树是做贡献，现在护林也是做贡献，林区生态环境越来越好，日子也越过越美。他希望，更多年轻人能到林区来，一起守护好大兴安岭这道绿色的风景线。

在传承中创新，在创新中发展。

“互联网+”时代，如何用新技术新理念为脱贫攻坚、乡村振兴添柴加火？

在通道上，四川省苍溪县白驿镇岫云村党支部书记李君代表谈得最多的，是他们村的抖音直播间。

位于秦巴山区的岫云村，近几年搭乘互联网快车，解决了农产品卖难的问题，一度穷得“全是茅草屋”的村子在2014年成功脱贫。到2019年，村里264户人家有153户买了小汽车。

在村里建农产品加工流通中心、到成都繁华商圈开店、实现连锁化经营……李君对未来信心满满：“我希望让世界看到岫云村的幸福。”

创新发展，离不开教育。民族复兴，更需要人才支撑。

西藏墨脱县完全小学副校长格桑德吉代表，通过内地西藏班走出了大山，毕业后却又选择回家乡教学。

格桑德吉说，回到家乡之初发现失学孩子很多，劝学成为老师们的主要工作。有个小姑娘小学快毕业时辍学了，格桑德吉拿自身经历上门做工作，孩子最终复学并考入内地西藏班，毕业后也回家乡当了老师。

2013年墨脱通了公路，乡亲们观念转变了，办学条件也改善了。“曾经我们的教育目标是‘来得了、留得住、有学上’，现在变成了‘上好学’。”格桑德吉动情地说，如今门巴族孩子入学率和小升初升学率都达到100%，越来越多孩子正走出大山、改变命运。

奋斗创造未来。上世纪50年代，也有一批人响应党的号召，“打起背包就出发”，从上海迁到西安，建成西安交通大学。

在西安交通大学校长王树国代表看来，“西迁精神”的核心是爱国主义。折射到今天，就是要敢于直面挑战，勇于创新担当，做出不负于时代的贡献。

西安以西，由西安交大建设的“中国西部科技创新港”，聚来一大批世界顶级学术机构，建立了若干国际联合实验室，一大批世界五百强企业到此签约……人才在此汇聚，发展在此蓄能。

发展5G通信等前沿学科、创建未来技术实验班、设立储能新专业……王树国说，迎接第四次工业革命浪潮，当务之急是培养高端人才，依靠科技创新抢抓未来机遇。

短短半小时，代表们有力的话语在通道上激荡。全面小康的百年梦想近在咫尺，越到关键时刻，越要脚踏实地，肩负时代使命，用奋斗书写未来。</p>`

                    
                }
            }
        },
        created() {
            console.log(this.$route.query.param+" "+this.$route.query.id)
        },
        //该方法中使用axios调用服务端数据进行显示
        // created() {
        //     /*打印路由参数值*/
        //     console.log(this.$route.query.id)
        //     this.axios.get(url,[params])
        //     .then(res => {
        //         this.message=res.data;
        //     })
        //     .catch(err => {
        //         console.error(err); 
        //     })
        // },
    }
</script>

<style scoped>
.news-title p{
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}
.news-title span{
    margin-right: 30px;
}
.news-title{
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
/* 主体文章的左右padding */
.news-content{
    padding: 10px 5px;
}
.news-content img{
    float: left;
    padding-right:11px;
    padding-bottom: 5px;
}
</style>