// 球星数据，key 必须与 scoring.js 的 starNames 数组完全对应
// image 字段为 /images/stars/ 下的文件名（不含路径和扩展名）
const stars = {
  '梅西': {                                           // index 0
    image: '00_Messi',
    country: '阿根廷', type: '天才型·沉默地神',
    partner: '恩佐',
    destiny: '冠军',
    desc1: '你是那种激情藏在眼里、但离开后所有人都觉得少了点什么的人',
    quote: '天才不解释，时间会说话',
    action: '两脚夹住眼睛左肩推的小门风那一下'
  },
  'C罗': {                                            // index 1
    image: '01_Ronaldo',
    country: '葡萄牙', type: '执念型·永不服输',
    partner: 'B费',
    destiny: '亚军',
    desc1: '你是那种别人说差不多了，你说还不够的人',
    quote: '赢，是你唯一接受的结局',
    action: 'SIUUU辗空转体后甩出去的倒勾'
  },
  '姆巴佩': {                                         // index 2
    image: '02_Mbappe',
    country: '法国', type: '野心型·冷眼赴命',
    partner: '奥利塞',
    destiny: '冠军',
    desc1: '你是那种笑着做但你还觉得他挺好的人',
    quote: '妥协不是服从，是延迟满足的另一种说法',
    action: '歪着滑行停下旋转对着那交叉高举脚冲突起'
  },
  '哈兰德': {                                         // index 3
    image: '03_Haaland',
    country: '挪威', type: '纯粹型·只管进球',
    partner: '厄德高',
    destiny: '四强',
    desc1: '你是那种别人在担忧那意味什么，你在想今天做什么的人',
    quote: '这世界很复杂，但活得简单',
    action: '禁区前边后勾魔眼入迷球'
  },
  '贝林厄姆': {                                       // index 4
    image: '04_Bellingham',
    country: '英格兰', type: '领袖型·天生领头',
    partner: '凯恩',
    destiny: '亚军',
    desc1: '你是那种做事之前已经想好下一步之后的人',
    quote: '生来就是要赢的，不需要理由',
    action: '模仿屈身展翅翅膀扑在球场欢呼'
  },
  '亚马尔': {                                         // index 5
    image: '05_Yamal',
    country: '西班牙', type: '少年天才型·无穷潜力',
    partner: '佩德里',
    destiny: '冠军',
    desc1: '你是那种让所有人不知道该用什么标准评价你的人',
    quote: '无穷潜力，不是因为不知道风险，是因为根本没时间想',
    action: '边路上不对手肩紧追那儿别让他离开'
  },
  '维尼修斯': {                                       // index 6
    image: '06_Vinicius',
    country: '巴西', type: '激情型·有争议的美',
    partner: '内马尔',
    destiny: '四强',
    desc1: '你是那种情绪来了事情也来，但情绪走了比谁都清醒的人',
    quote: '看穿这的人，我知道什么叫真的',
    action: '角旗前跳摆巴亚祝'
  },
  '内马尔': {                                          // index 7
    image: '07_Neymar',
    country: '巴西', type: '浪子型·最终一刻遗并存',
    partner: '维尼修斯',
    destiny: '八强',
    desc1: '你是那种所有人可以期待，到最后还要靠魔法的人',
    quote: '天赋是礼物，但礼物也可以用来享受',
    action: '被轻微碰触后傲然回头那段舞'
  },
  '凯恩': {                                           // index 8
    image: '08_Kane',
    country: '英格兰', type: '苦行型·默默承载',
    partner: '赖斯',
    destiny: '八强',
    desc1: '你是那种默默做了一百件事，被记住的只有那一次没做到的人',
    quote: '不是所有的结果都有收局，但努力本身就是答案',
    action: '禁区前稳站头顶滑门身体侧身来'
  },
  '莫德里奇': {                                        // index 9
    image: '09_Modric',
    country: '克罗地亚', type: '智慧型·用眼踩路·越骥来',
    partner: '佩里西奇',
    destiny: '四强',
    desc1: '你是那种走过房间没人注意，但走出去所有人都想问那个人是谁的人',
    quote: '最高级的存在感，是让人感觉不到你在用力',
    action: '背对着镜头对角转会笑自立在中场前后进过'
  },
  '久保建英': {                                       // index 10
    image: '10_Kubo',
    country: '日本', type: '先驱型·低调突破',
    partner: '镰田大地',
    destiny: '十六强',
    desc1: '你是那种被环境压着长大，但没有被压垮的人',
    quote: '妥协是成长，不是软弱',
    action: '被两个大头夹住自我拥抱的那一场推'
  },
  '孙兴慜': {                                         // index 11
    image: '11_Son',
    country: '韩国', type: '责任型·所有一切计得失',
    partner: '黄喜灿',
    destiny: '十六强',
    desc1: '你是那种所有人的期望都压在肩上，还能笑着跑完全场的人',
    quote: '有人为自己踢的，有人为所有人踢的，你是后者',
    action: '边路后撤左弧线小门笑那瞬间身体侧立'
  },
  '萨卡': {                                            // index 12
    image: '12_Saka',
    country: '英格兰', type: '阳光型·稳定正能量',
    partner: '凯恩',
    destiny: '亚军',
    desc1: '你是那种让人觉得跟他在一起好像什么都没有那么难的人',
    quote: '从容，是最难学会的技能',
    action: '边路带着速度加弧绕出别叫让别向背出'
  },
  '穆西亚拉': {                                        // index 13
    image: '13_Musiala',
    country: '德国', type: '灵气型·风驰四野（小鹿）',
    partner: '维尔茨',
    destiny: '四强',
    desc1: '你是那种下一步永远让人看不到，还你自己有时候也不知道的人',
    quote: '灵气不能被复制，只能被等待',
    action: '带着横刻高速追逃让防守的全员失去重心'
  },
  '维尔茨': {                                         // index 14
    image: '14_Wirtz',
    country: '德国', type: '精密型·全局掌控（超脑）',
    partner: '穆西亚拉',
    destiny: '四强',
    desc1: '你是那种来之前已经想好之后一步之后的人',
    quote: '想清楚了再走，每一步都算数',
    action: '任意角落小门瞬间横横横面抽倒'
  },
  '恩佐': {                                           // index 15
    image: '15_Enzo',
    country: '阿根廷', type: '演员型·跑不死',
    partner: '麦卡利斯特',
    destiny: '冠军',
    desc1: '你是那种没人注意但到了你什么都转不起来的人',
    quote: '演员不是表演，是习惯',
    action: '大范围俯跑攻哟整个身体贴地'
  },
  '哈基米': {                                          // index 16
    image: '16_Hakimi',
    country: '摩洛哥', type: '黑马型·用实力打脸',
    partner: '马扎拉维',
    destiny: '八强',
    desc1: '你是那种被所有人低估，然后用速度甩开所有质量的人',
    quote: '被低估是礼物，因为没人会防你',
    action: '边路在密集身体向前向后归重心'
  },
  '范戴克': {                                          // index 17
    image: '17_VanDijk',
    country: '荷兰', type: '稳盘型·默默掌起全局',
    partner: '弗伦基·德容',
    destiny: '八强',
    desc1: '你是那种没有你大家都慌，有你大家忘了你在的人',
    quote: '最好的存在，是让混乱无处生根',
    action: '高空二顶身体辩空完全对抗他方向'
  },
  '萨拉赫': {                                          // index 18
    image: '18_Salah',
    country: '埃及', type: '遮蔽型·被低估而崛起',
    partner: '马尔穆什',
    destiny: '十六强',
    desc1: '你是那种被淘汰了一百次，第一百零一次还是站起来的人',
    quote: '遮蔽不是递气，是积累到让人瞧不了',
    action: '右路后撤弧线拉线视到门瞬间'
  },
  '佩德里': {                                         // index 19
    image: '19_Pedri',
    country: '西班牙', type: '艺术型·传统美学',
    partner: '罗德里',
    destiny: '冠军',
    desc1: '你是那种最复杂的事情做得简单，最简单的事情做得艺术的人',
    quote: '足球是语言，你说的是诗',
    action: '接球后转身出手拿两个防守的差'
  },
  '诺伊尔': {                                          // index 20
    image: '20_Neuer',
    country: '德国', type: '守护型·所有防线',
    partner: '吕迪格',
    destiny: '四强',
    desc1: '你是那种走在防线前不退线，但从来不成走在防线的人',
    quote: '守住的不只是球门，是所有人的信心',
    action: '挺着站在中场旋转头扫全场中多大场的'
  },
  '卢卡库': {                                          // index 21
    image: '21_Lukaku',
    country: '比利时', type: '快乐主义者',
    partner: '德布劳内',
    destiny: '十六强',
    desc1: '你是那种在下场都在担忧，你还在想今天做什么的人',
    quote: '质疑我的人请魅惑，欣赏我的人请跟进',
    action: '禁区前被小门的正中横推整个人流向落地'
  },
  '沃齐尼亚': {                                        // index 22
    image: '22_Vozinha',
    country: '佛得角', type: '大心藏美',
    partner: '瑞安·门德斯',
    destiny: '十六强',
    desc1: '你是那种所有人都说太有了，你说还没小时候的人',
    quote: '时机从来不叫来，只要你还在',
    action: '飞身侧斜一段身体辩空推横整个身体辩空'
  },
  'B费': {                                            // index 23
    image: '23_Fernandes',
    country: '葡萄牙', type: '争议型·争议中前行',
    partner: '贝尔纳多·席尔瓦',
    destiny: '亚军',
    desc1: '你是那种所有人都有感觉，但没有你做的人',
    quote: '被议论，是因为值得被议论',
    action: '任意角落大场抽到小瞬间表示制礼'
  },
  '阿尔瓦雷斯': {                                      // index 24
    image: '24_Alvarez',
    country: '阿根廷', type: '选择大于努力者',
    partner: '梅西',
    destiny: '冠军',
    desc1: '你是那种面对了遗迹，然后用宁静证明自己没选错的人',
    quote: '选择对了方向，努力才不会浪费',
    action: '禁区前低身突破挺过的绿门扑在网扑进来'
  },
  '登贝莱': {                                          // index 25
    image: '25_Dembele',
    country: '法国', type: '斗马激型·独到机缘之所有最聪明',
    partner: '姆巴佩',
    destiny: '冠军',
    desc1: '你是那种所有人都说出来了，然后你拿了最奇的人',
    quote: '笑到最后的人，从来不解释自己在做什么',
    action: '不拿棒游嬉在中场没心跑来跳那举重的'
  },
  '奥利塞': {                                          // index 26
    image: '26_Olise',
    country: '法国', type: '侧翼型·低调积累中去关中',
    partner: '姆巴佩',
    destiny: '四强',
    desc1: '你是那种平时没人注意，突然起来让所有人没想到的人',
    quote: '最好的伏笔，是从来不埋伏笔',
    action: '右路带着来刻打身体重心来作先步'
  },
  '帕尔默': {                                          // index 27
    image: '27_Palmer',
    country: '英格兰', type: '黑将·回家等一个公平机会',
    partner: null,
    destiny: '无缘参赛',
    desc1: '你知道自己本可以在那里，但那里没有你',
    quote: '缺席的人，有时候是在场的人更让人记得',
    destinyDesc: '你站在门外，看着别人踏上那片舞台。不是你不够好，是这个世界还没准备好来容你的好。',
    action: '穿着便装站在场外远无无感望着绿茵场'
  },
  '克瓦拉茨赫利亚': {                                  // index 28
    image: '28_Kvaratskhelia',
    country: '格鲁吉亚', type: '黑将·被沿没留崛起的神',
    partner: null,
    destiny: '无缘参赛',
    desc1: '你踢着那片绿茵场，带着不说不出来的笑，你就是那个传说',
    quote: '有些人的命就是要用来牺牲的，你牺牲有一种特别的美',
    destinyDesc: '你站在外面，看着别人踏上那片舞台。不是你不够好，是这个世界还没准备好来容你的好。',
    action: '穿着便装站在场外远无无感望着绿茵场'
  },
  '苏亚雷斯': {                                       // index 29
    image: '29_Suarez',
    country: '乌拉圭', type: '纯粹型·真正等爱遇的人',
    partner: null,
    destiny: '无缘参赛',
    desc1: '你站在场地上，摩肩的不是饮料，却带着一点说不清楚的笑',
    quote: '真正等爱遇的人，离开之后还是会回头看一眼',
    destinyDesc: '你的故事在草地上继续。有些人用眼踢的，有些人用心踢的，你是后者，所以永远不会真正离开。',
    action: '站在场地上穿普通观球衣摩肩饮料看场中继续结局'
  },
}

module.exports = { stars }
