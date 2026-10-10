import { siteConfig } from '../config';

export type TopicLang = 'en' | 'th' | 'zh';

export interface TopicSection {
  heading: string;
  body: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  /** URL slug, identical across all languages for clean hreflang parity */
  slug: string;
  /** page <title> */
  title: Record<TopicLang, string>;
  /** meta description */
  description: Record<TopicLang, string>;
  /** visible H1 */
  h1: Record<TopicLang, string>;
  /** lead paragraph under the H1 */
  intro: Record<TopicLang, string>;
  /** in-depth sections */
  sections: Record<TopicLang, TopicSection[]>;
  /** FAQ shown as <details> and emitted as FAQPage JSON-LD */
  faq: Record<TopicLang, TopicFaq[]>;
  /** slugs of related topics for cross-linking */
  related: string[];
}

export const topics: TopicContent[] = [
  {
    slug: 'location-map',
    title: {
      en: 'River Kwai Bridge Location & Map | Kanchanaburi',
      th: 'แผนที่และที่ตั้งสะพานข้ามแม่น้ำแคว | กาญจนบุรี',
      zh: '桂河大桥位置与地图 | 北碧府',
    },
    description: {
      en: 'Exact location of the River Kwai Bridge in Kanchanaburi: coordinates, Plus Code 2GR3+RM, how to get there from town and Bangkok, plus an interactive map and nearby stations.',
      th: 'ที่ตั้งแน่ชัดของสะพานข้ามแม่น้ำแคว จังหวัดกาญจนบุรี：พิกัด Plus Code 2GR3+RM วิธีเดินทางจากตัวเมืองและกรุงเทพฯ แผนที่แบบโต้ตอบ และสถานีโดยรอบ',
      zh: '桂河大桥在泰国北碧府的精确位置：坐标、Plus Code 2GR3+RM、从市区与曼谷前往的方式，以及可交互地图与附近车站。',
    },
    h1: {
      en: 'River Kwai Bridge — Location & Map',
      th: 'สะพานข้ามแม่น้ำแคว — ที่ตั้งและแผนที่',
      zh: '桂河大桥 — 位置与地图',
    },
    intro: {
      en: 'The River Kwai Bridge spans the Khwae Yai River in Tha Ma Kham, about 3 km south of central Kanchanaburi in western Thailand. Below are the exact coordinates, Plus Code, and the easiest ways to reach the bridge from town or from Bangkok.',
      th: 'สะพานข้ามแม่น้ำแคว ข้ามแม่น้ำแควใหญ่ที่ท่ามะขาม ห่างจากใจกลางจังหวัดกาญจนบุรีไปทางใต้ประมาณ 3 กม. ทางตะวันตกของประเทศไทย ด้านล่างนี้คือพิกัดที่แน่ชัด Plus Code และวิธีเดินทางที่สะดวกที่สุดจากตัวเมืองหรือจากกรุงเทพฯ',
      zh: '桂河大桥横跨北碧府他玛堪（Tha Ma Kham）的桂河（Khwae Yai），位于泰国西部北碧府市区以南约 3 公里。以下提供精确坐标、Plus Code，以及从市区或曼谷前往大桥的最便捷方式。',
    },
    sections: {
      en: [
        {
          heading: 'Exact coordinates & Plus Code',
          body: 'Latitude 14.0419, longitude 99.5041. Google Maps Plus Code: 2GR3+RM Tha Ma Kham, Mueang Kanchanaburi District, Kanchanaburi. The bridge sits on River Kwai Road, on the south bank of the Khwae Yai, and is clearly signposted within town.',
        },
        {
          heading: 'From Kanchanaburi town',
          body: 'The bridge is a short taxi, songthaew (shared two-row truck) or bicycle ride from the centre — roughly 3 km, about 10 minutes. Many visitors walk or rent a bike and follow the riverside path.',
        },
        {
          heading: 'Nearby stations & landmarks',
          body: 'Kanchanaburi Railway Station is about 2 km away. Within 2–3 km you will also find the Kanchanaburi War Cemetery (Don Rak), the JEATH War Museum and the Thailand–Burma Railway Centre, all useful orientation points.',
        },
        {
          heading: 'Map & navigation',
          body: 'Use the interactive map above or open Google Maps with the link to get live, turn-by-turn directions. Most navigation apps recognise “River Kwai Bridge” or the Plus Code directly.',
        },
      ],
      th: [
        {
          heading: 'พิกัดที่แน่ชัดและ Plus Code',
          body: 'ละติจูด 14.0419 ลองจิจูด 99.5041 Plus Code ของ Google Maps: 2GR3+RM ท่ามะขาม อำเภอเมืองกาญจนบุรี จังหวัดกาญจนบุรี สะพานตั้งอยู่บนถนนแม่น้ำแคว ฝั่งตะวันออกของแม่น้ำแควใหญ่ และมีป้ายบอกทางชัดเจนในตัวเมือง',
        },
        {
          heading: 'จากตัวเมืองกาญจนบุรี',
          body: 'สะพานอยู่ห่างจากใจกลางเมืองเพียงรถแท็กซี สองแถว หรือจักรยานประมาณ 3 กม. ใช้เวลาเกือบ 10 นาที ผู้เยี่ยมชมจำนวนมากเลือกเดินหรือเช่าจักรยานแล้วปั่นตามทางเลียบแม่น้ำ',
        },
        {
          heading: 'สถานีและสถานที่ใกล้เคียง',
          body: 'สถานีรถไฟกาญจนบุรีอยู่ห่างออกไปประมาณ 2 กม. ภายในระยะ 2–3 กม. ยังมีสุสานทหารกาญจนบุรี (ดอนรัก) พิพิธภัณฑ์ JEATH และศูนย์รถไฟไทย–พม่า ซึ่งเป็นจุดสังเกตที่ใช้หาทิศทางได้ดี',
        },
        {
          heading: 'แผนที่และการนำทาง',
          body: 'ใช้แผนที่แบบโต้ตอบด้านบนหรือเปิด Google Maps ผ่านลิงก์เพื่อรับเส้นทางแบบทีละจังหวะแบบเรียลไทม์ แอปนำทางส่วนใหญ่รู้จักชื่อ “สะพานข้ามแม่น้ำแคว” หรือ Plus Code โดยตรง',
        },
      ],
      zh: [
        {
          heading: '精确坐标与 Plus Code',
          body: '纬度 14.0419，经度 99.5041。Google 地图 Plus Code：2GR3+RM Tha Ma Kham, Mueang Kanchanaburi District, Kanchanaburi。大桥位于 River Kwai Road、桂河南岸，在市区内有清晰路牌指引。',
        },
        {
          heading: '从北碧府市区出发',
          body: '从市中心搭乘出租车、双条车（songthaew）或骑单车即可到达，约 3 公里、10 分钟左右。许多游客选择步行或租自行车沿河岸前往。',
        },
        {
          heading: '附近车站与地标',
          body: '北碧府火车站（Kanchanaburi Railway Station）距此约 2 公里。2–3 公里范围内还有北碧府战争公墓（Don Rak）、JEATH 战争博物馆与泰缅铁路中心，都是很好的方位参照。',
        },
        {
          heading: '地图与导航',
          body: '可使用上方交互式地图，或点开 Google 地图链接获取实时逐步导航。多数导航 App 都能直接识别“River Kwai Bridge”或该 Plus Code。',
        },
      ],
    },
    faq: {
      en: [
        { q: 'What is the exact address of the River Kwai Bridge?', a: 'River Kwai Rd, Tha Ma Kham, Mueang Kanchanaburi District, Kanchanaburi 71000, Thailand.' },
        { q: 'What is the Plus Code?', a: '2GR3+RM Tha Ma Kham, Mueang Kanchanaburi District, Kanchanaburi.' },
        { q: 'How far is the bridge from Bangkok?', a: 'About 130 km west of Bangkok, roughly 2–3 hours by train, bus or car.' },
        { q: 'Is there parking near the bridge?', a: 'Street and riverside parking are available close to the bridge, but they can fill up on weekends and public holidays.' },
        { q: 'Can I walk across the bridge?', a: 'Yes. The bridge is free to walk across and is still used by trains several times a day, so mind the gaps between sleepers.' },
      ],
      th: [
        { q: 'ที่อยู่ที่แน่ชัดของสะพานข้ามแม่น้ำแควคืออะไร?', a: 'ถนนแม่น้ำแคว ท่ามะขาม อำเภอเมืองกาญจนบุรี จังหวัดกาญจนบุรี 71000 ประเทศไทย' },
        { q: 'Plus Code คืออะไร?', a: '2GR3+RM ท่ามะขาม อำเภอเมืองกาญจนบุรี จังหวัดกาญจนบุรี' },
        { q: 'สะพานห่างจากกรุงเทพฯ เท่าใด?', a: 'อยู่ห่างจากกรุงเทพฯ ไปทางตะวันตกประมาณ 130 กม. ใช้เวลาเกือบ 2–3 ชม. ด้วยรถไฟ รถบัส หรือรถยนต์' },
        { q: 'มีที่จอดรถใกล้สะพานหรือไม่?', a: 'มีที่จอดรถริมถนนและริมแม่น้ำใกล้สะพาน แต่ในวันหยุดสุดสัปดาห์และวันหยุดนักขัตฤกษ์ที่จอดอาจเต็ม' },
        { q: 'เดินข้ามสะพานได้หรือไม่?', a: 'ได้ สะพานเปิดให้เดินข้ามฟรี และยังมีรถไฟวิ่งผ่านหลายเที่ยวต่อวัน จึงควรระวังช่องว่างระหว่างหมอนรองราง' },
      ],
      zh: [
        { q: '桂河大桥的精确地址是什么？', a: 'River Kwai Rd, Tha Ma Kham, Mueang Kanchanaburi District, Kanchanaburi 71000, Thailand（泰国北碧府）。' },
        { q: 'Plus Code 是什么？', a: '2GR3+RM Tha Ma Kham, Mueang Kanchanaburi District, Kanchanaburi。' },
        { q: '大桥距离曼谷多远？', a: '约在曼谷以西 130 公里，乘火车、巴士或自驾约 2–3 小时。' },
        { q: '大桥附近有停车场吗？', a: '桥边有路边与河岸停车空间，但周末和公共假期容易停满。' },
        { q: '可以步行过大桥吗？', a: '可以。大桥免费步行开放，每天仍有数次列车通过，行走时请注意轨枕之间的空隙。' },
      ],
    },
    related: ['history', 'bangkok-to-river-kwai-bridge', 'train-guide', 'visiting-guide'],
  },

  {
    slug: 'history',
    title: {
      en: 'River Kwai Bridge History | Death Railway & WWII',
      th: 'ประวัติศาสตร์สะพานข้ามแม่น้ำแคว | รถไฟสายมรณะและสงครามโลกครั้งที่ 2',
      zh: '桂河大桥历史 | 死亡铁路与二战',
    },
    description: {
      en: 'The history of the River Kwai Bridge: part of the Thailand–Burma Death Railway built by WWII prisoners of war and forced labourers, its destruction, reconstruction and memory today.',
      th: 'ประวัติศาสตร์สะพานข้ามแม่น้ำแคว：ส่วนหนึ่งของรถไฟสายมรณะ ไทย–พม่า ที่สร้างโดยเชลยศึกและกรรมกรบังคับจากสงครามโลกครั้งที่ 2 เรื่องการทำลาย การสร้างใหม่ และการระลึกถึงในปัจจุบัน',
      zh: '桂河大桥的历史：作为泰缅「死亡铁路」的一部分，由二战战俘与强制劳工修建，以及它的被毁、重建与今日的纪念意义。',
    },
    h1: {
      en: 'River Kwai Bridge — History',
      th: 'สะพานข้ามแม่น้ำแคว — ประวัติศาสตร์',
      zh: '桂河大桥 — 历史',
    },
    intro: {
      en: 'The bridge is one of the most recognisable symbols of the Thailand–Burma Death Railway. Built during World War II under harsh conditions, it carries a sobering history of prisoners of war and forced labourers.',
      th: 'สะพานแห่งนี้เป็นสัญลักษณ์ที่รู้จักดีที่สุดแห่งหนึ่งของรถไฟสายมรณะ ไทย–พม่า สร้างขึ้นในช่วงสงครามโลกครั้งที่ 2 ท่ามกลางสภาพที่เลวร้าย และเป็นประวัติศาสตร์อันน่าสะเทือนใจของเชลยศึกและกรรมกรบังคับ',
      zh: '这座桥是泰缅「死亡铁路」最具代表性的象征之一。它建于二战期间极端艰苦的条件下，承载着战俘与强制劳工令人痛心的历史。',
    },
    sections: {
      en: [
        {
          heading: 'Origins of the Death Railway',
          body: 'In 1942 Japan began building a 415 km railway linking Thailand and Burma to supply its southern front. The route crossed the Khwae Yai, and a bridge was needed at Kanchanaburi.',
        },
        {
          heading: 'Forced labour & sacrifice',
          body: 'The line was built by Allied prisoners of war and thousands of civilian forced labourers from across Asia. Disease, malnutrition and dangerous work led to enormous loss of life — the origin of the name “Death Railway”.',
        },
        {
          heading: 'War, destruction & reconstruction',
          body: 'Sections of the bridge were damaged in 1945 Allied air raids. After the war the bridge was repaired using original and replacement spans, and it remains in use by trains today.',
        },
        {
          heading: 'Memory & the film',
          body: 'The 1957 film The Bridge on the River Kwai spread the bridge’s name worldwide, though it was filmed elsewhere. Today the bridge, the cemeteries and museums commemorate those who suffered.',
        },
        {
          heading: 'Visiting the historical sites',
          body: 'Pair your visit with the Kanchanaburi War Cemetery, the JEATH War Museum and the Thailand–Burma Railway Centre to understand the full story. See the visiting guide for practical tips.',
        },
      ],
      th: [
        {
          heading: 'จุดกำเนิดรถไฟสายมรณะ',
          body: 'ในปี 1942 ญี่ปุ่นเริ่มสร้างทางรถไฟยาว 415 กม. เชื่อมไทยและพม่าเพื่อสนับสนุนแนวรบทางใต้ เส้นทางตัดข้ามแม่น้ำแควใหญ่จึงต้องมีสะพานที่กาญจนบุรี',
        },
        {
          heading: 'กรรมกรบังคับและการเสียสละ',
          body: 'สายนี้สร้างโดยเชลยศึกฝ่ายสัมพันธมิตรและกรรมกรพลเรือนบังคับหลายพันคนจากทั่วเอเชีย โรคภัย การขาดอาหาร และงานที่อันตรายก่อให้เกิดการสูญเสียชีวิตมหาศาล นั่นคือที่มาของชื่อ “รถไฟสายมรณะ”',
        },
        {
          heading: 'สงคราม การทำลาย และการสร้างใหม่',
          body: 'ส่วนหนึ่งของสะพานเสียหายจากการโจมตีทางอากาศของฝ่ายสัมพันธมิตรในปี 1945 หลังสงครามสะพานได้รับการซ่อมแซมโดยใช้ชิ้นส่วนเดิมและชิ้นส่วนทดแทน และยังใช้รถไฟวิ่งจนถึงทุกวันนี้',
        },
        {
          heading: 'การระลึกถึงและภาพยนตร์',
          body: 'ภาพยนตร์เรื่อง The Bridge on the River Kwai (1957) เผยแพร่ชื่อสะพานไปทั่วโลก แม้จะถ่ายทำที่อื่น ปัจจุบันสะพาน สุสาน และพิพิธภัณฑ์ต่างระลึกถึงผู้ที่ได้รับความทุกข์ทรมาน',
        },
        {
          heading: 'การเยี่ยมชมสถานที่ทางประวัติศาสตร์',
          body: 'ควรเที่ยวคู่กับสุสานทหารกาญจนบุรี พิพิธภัณฑ์ JEATH และศูนย์รถไฟไทย–พม่า เพื่อเข้าใจเรื่องราวทั้งหมด ดูคู่มือการเข้าชมสำหรับเคล็ดลับที่เป็นประโยชน์',
        },
      ],
      zh: [
        {
          heading: '死亡铁路的由来',
          body: '1942 年，日本开始修建一条全长 415 公里的铁路，连接泰国与缅甸，以补给其南方战线。线路需跨越桂河，因此在北碧府必须建桥。',
        },
        {
          heading: '强制劳工与牺牲',
          body: '这条铁路由盟军战俘以及来自亚洲各地的数千名平民强制劳工修建。疾病、营养不良与危险的作业造成大量人员死亡，这正是「死亡铁路」之名的由来。',
        },
        {
          heading: '战争、损毁与重建',
          body: '1945 年盟军空袭使大桥部分受损。战后用原有与替换的钢梁修复，至今仍有列车通行。',
        },
        {
          heading: '纪念与电影',
          body: '1957 年电影《桂河大桥》（The Bridge on the River Kwai）让这座桥名扬世界，尽管影片并非在此拍摄。如今大桥、公墓与博物馆共同纪念当年的受难者。',
        },
        {
          heading: '参观历史景点',
          body: '建议将大桥与北碧府战争公墓、JEATH 战争博物馆及泰缅铁路中心一并参观，以了解完整故事。实用提示见参观攻略页。',
        },
      ],
    },
    faq: {
      en: [
        { q: 'Why is it called the Death Railway?', a: 'Because of the enormous loss of life among prisoners of war and forced labourers who built the line under brutal conditions.' },
        { q: 'Was the bridge in the 1957 film real?', a: 'The film made the name famous, but it was shot elsewhere; the real bridge is at Kanchanaburi.' },
        { q: 'Who built the bridge?', a: 'It was built during WWII by Allied POWs and Asian civilian forced labourers under Japanese military direction.' },
        { q: 'Is the original bridge still there?', a: 'The current bridge uses original and replacement spans repaired after WWII damage; it still carries trains.' },
        { q: 'Where can I learn more on site?', a: 'The Kanchanaburi War Cemetery, JEATH War Museum and Thailand–Burma Railway Centre all tell the story.' },
      ],
      th: [
        { q: 'ทำไมจึงเรียกว่ารถไฟสายมรณะ?', a: 'เพราะมีการสูญเสียชีวิตอย่างมหาศาลของเชลยศึกและกรรมกรบังคับที่สร้างสายนี้ภายใต้สภาพที่โหดร้าย' },
        { q: 'สะพานในภาพยนตร์ปี 1957 ใช่สะพานจริงหรือไม่?', a: 'ภาพยนตร์ทำให้ชื่อนี้โด่งดัง แต่ถ่ายทำที่อื่น สะพานจริงอยู่ที่กาญจนบุรี' },
        { q: 'ใครเป็นผู้สร้างสะพาน?', a: 'สร้างขึ้นในช่วงสงครามโลกครั้งที่ 2 โดยเชลยศึกฝ่ายสัมพันธมิตรและกรรมกรพลเรือนบังคับชาวเอเชียภายใต้การนำของทหารญี่ปุ่น' },
        { q: 'สะพานเดิมยังอยู่หรือไม่?', a: 'สะพานปัจจุบันใช้ชิ้นส่วนเดิมและชิ้นส่วนทดแทนที่ซ่อมแซมหลังความเสียหายในสงครามโลกครั้งที่ 2 และยังใช้รถไฟวิ่งอยู่' },
        { q: 'จะเรียนรู้เพิ่มเติมที่หน้างานได้จากที่ใด?', a: 'สุสานทหารกาญจนบุรี พิพิธภัณฑ์ JEATH และศูนย์รถไฟไทย–พม่า ล้วนเล่าเรื่องราวนี้' },
      ],
      zh: [
        { q: '为何称为「死亡铁路」？', a: '因为在极其恶劣的条件下，大量战俘与强制劳工在修建中丧生。' },
        { q: '1957 年电影中的桥是真实的吗？', a: '电影让桥名广为人知，但影片是在别处拍摄的；真正的桥位于北碧府。' },
        { q: '大桥由谁修建？', a: '二战期间由盟军战俘与亚洲平民强制劳工在日本军方指挥下修建。' },
        { q: '原来的桥还在吗？', a: '现存大桥使用二战受损后修复的原始与替换钢梁，至今仍有列车通行。' },
        { q: '在现场还能从哪里了解更多？', a: '北碧府战争公墓、JEATH 战争博物馆与泰缅铁路中心都讲述了这段历史。' },
      ],
    },
    related: ['location-map', 'train-guide', 'visiting-guide', 'bangkok-to-river-kwai-bridge'],
  },

  {
    slug: 'bangkok-to-river-kwai-bridge',
    title: {
      en: 'Bangkok to River Kwai Bridge | Train, Bus & Car',
      th: 'จากกรุงเทพฯ ไปสะพานข้ามแม่น้ำแคว | รถไฟ รถบัส และรถยนต์',
      zh: '从曼谷到桂河大桥 | 火车、巴士与自驾',
    },
    description: {
      en: 'How to get from Bangkok to the River Kwai Bridge: train and bus schedules, driving directions, tours and day trips, plus typical duration and cost.',
      th: 'วิธีเดินทางจากกรุงเทพฯ ไปสะพานข้ามแม่น้ำแคว：ตารางรถไฟและรถบัส เส้นทางขับรถ ทัวร์และวันเดย์ทริป พร้อมระยะเวลาและค่าใช้จ่ายโดยทั่วไป',
      zh: '从曼谷前往桂河大桥的方式：火车与巴士班次、自驾路线、跟团与一日游，以及大致耗时与费用。',
    },
    h1: {
      en: 'Bangkok to River Kwai Bridge',
      th: 'จากกรุงเทพฯ ไปสะพานข้ามแม่น้ำแคว',
      zh: '从曼谷到桂河大桥',
    },
    intro: {
      en: 'Kanchanaburi is about 130 km west of Bangkok. You can travel by train, by bus, by car or on an organised tour — most options take 2–3 hours. Here is what to expect.',
      th: 'กาญจนบุรีอยู่ห่างจากกรุงเทพฯ ไปทางตะวันตกประมาณ 130 กม. คุณสามารถเดินทางด้วยรถไฟ รถบัส รถยนต์ หรือทัวร์จัดเตรียม ส่วนใหญ่ใช้เวลา 2–3 ชม. นี่คือสิ่งที่ควรทราบ',
      zh: '北碧府位于曼谷以西约 130 公里。可乘火车、巴士、自驾或参加旅行社行程前往，多数方式需 2–3 小时。以下为详情。',
    },
    sections: {
      en: [
        {
          heading: 'By train',
          body: 'Trains to Kanchanaburi depart from Bangkok’s Thon Buri (Bangkok Noi) station, not Hua Lamphong. The ride takes roughly 2.5–3 hours and arrives close to the bridge area.',
        },
        {
          heading: 'By bus',
          body: 'Frequent buses and minivans run from Bangkok’s Southern Bus Terminal (Sai Tai Mai) to Kanchanaburi. The trip takes about 2–2.5 hours and drops you at the provincial bus station.',
        },
        {
          heading: 'By car or taxi',
          body: 'Driving takes about 2–2.5 hours via Route 4 (Phetkasem) then Route 323/338. A private taxi or ride-hailing car from Bangkok is faster but more expensive.',
        },
        {
          heading: 'Tours & day trips',
          body: 'Many Bangkok operators sell guided day trips to the bridge, often combining the Death Railway train ride, the cemetery and the Erawan waterfalls.',
        },
        {
          heading: 'Duration & cost',
          body: 'Budget train/bus fares are inexpensive; tours and private taxis cost more but save planning time. From the Kanchanaburi bus or train station, the bridge is a short songthaew or taxi ride.',
        },
      ],
      th: [
        {
          heading: 'โดยรถไฟ',
          body: 'รถไฟไปกาญจนบุรีออกจากสถานีกรุงเทพอภิวัฒน์ (บางกอกน้อย) ไม่ใช่หัวลำโพง การเดินทางใช้เวลาเกือบ 2.5–3 ชม. และจอดใกล้บริเวณสะพาน',
        },
        {
          heading: 'โดยรถบัส',
          body: 'รถบัสและรถตู้วิ่งบ่อยจากสถานีขนส่งสายใต้ใหม่ (ไทรน้อย) ไปกาญจนบุรี ใช้เวลาเกือบ 2–2.5 ชม. และส่งคุณที่สถานีขนส่งจังหวัด',
        },
        {
          heading: 'โดยรถยนต์หรือแท็กซี่',
          body: 'การขับรถใช้เวลาเกือบ 2–2.5 ชม. ผ่านทางหลวงหมายเลข 4 (เพชรเกษม) แล้วต่อด้วยหมายเลข 323/338 แท็กซี่เช่าหรือรถแอปเรียกจากกรุงเทพฯ เร็วกว่าแต่ค่าใช้จ่ายสูงกว่า',
        },
        {
          heading: 'ทัวร์และวันเดย์ทริป',
          body: 'ผู้ให้บริการในกรุงเทพฯ จำนวนมากขายทัวร์ guid เดินทางไปสะพาน มักรวมการนั่งรถไฟสายมรณะ สุสาน และน้ำตกเอราวัณ',
        },
        {
          heading: 'ระยะเวลาและค่าใช้จ่าย',
          body: 'ค่าโดยสารรถไฟ/รถบัสแบบประหยัดไม่แพง ทัวร์และแท็กซี่เช่าสูงกว่าแต่ประหยัดเวลาวางแผน จากสถานีขนส่งหรือสถานีรถไฟกาญจนบุรี สะพานอยู่ห่างออกไปเพียงสองแถวหรือแท็กซี่สั้นๆ',
        },
      ],
      zh: [
        {
          heading: '乘火车',
          body: '前往北碧府的火车从曼谷的吞武里（Bangkok Noi）车站发车，而非华南蓬站。车程约 2.5–3 小时，到站后离大桥片区很近。',
        },
        {
          heading: '乘巴士',
          body: '曼谷南部长途汽车站（Sai Tai Mai）有频繁发往北碧府的巴士与小型厢型车，车程约 2–2.5 小时，抵达府级巴士站。',
        },
        {
          heading: '自驾或打车',
          body: '自驾经 4 号公路（Phetkasem）再转 323/338 号公路约 2–2.5 小时。从曼谷包出租车或叫车更快但费用更高。',
        },
        {
          heading: '跟团与一日游',
          body: '曼谷许多运营商出售导览一日游，常结合死亡铁路乘车、战争公墓与爱侣湾瀑布。',
        },
        {
          heading: '耗时与费用',
          body: '火车/巴士的平价票价不高；跟团与包车更贵但省去规划时间。从北碧府巴士或火车站出发，再搭双条车或短途出租车即到大桥。',
        },
      ],
    },
    faq: {
      en: [
        { q: 'Which Bangkok station goes to Kanchanaburi?', a: 'Trains leave from Thon Buri (Bangkok Noi) station, not Hua Lamphong.' },
        { q: 'How long is the trip from Bangkok?', a: 'About 2–3 hours by train or bus, similar by car depending on traffic.' },
        { q: 'Is a day trip from Bangkok possible?', a: 'Yes. Many guided day trips cover the bridge, the Death Railway and nearby sights.' },
        { q: 'How do I reach the bridge from the station?', a: 'A short songthaew or taxi ride — the bridge is only about 2–3 km from the centre.' },
        { q: 'Which is cheapest?', a: 'The local train or bus is the cheapest; private taxis and tours cost more.' },
      ],
      th: [
        { q: 'สถานีใดในกรุงเทพฯ ที่ไปกาญจนบุรีได้?', a: 'รถไฟออกจากสถานีกรุงเทพอภิวัฒน์ (บางกอกน้อย) ไม่ใช่หัวลำโพง' },
        { q: 'การเดินทางจากกรุงเทพฯ ใช้เวลาเท่าใด?', a: 'เกือบ 2–3 ชม. ด้วยรถไฟหรือรถบัส และใกล้เคียงกันหากขับรถขึ้นอยู่กับการจราจร' },
        { q: 'สามารถเที่ยวไปกลับวันเดียวจากกรุงเทพฯ ได้หรือไม่?', a: 'ได้ ทัวร์ guid จำนวนมากครอบคลุมสะพาน รถไฟสายมรณะ และสถานที่ใกล้เคียง' },
        { q: 'จะไปสะพานจากสถานีได้อย่างไร?', a: 'นั่งสองแถวหรือแท็กซี่สั้นๆ สะพานห่างจากใจกลางเมืองเพียงเกือบ 2–3 กม.' },
        { q: 'วิธีใดประหยัดที่สุด?', a: 'รถไฟหรือรถบัสท้องถิ่นประหยัดที่สุด ส่วนแท็กซี่เช่าหรือทัวร์มีค่าใช้จ่ายสูงกว่า' },
      ],
      zh: [
        { q: '曼谷哪个车站有去北碧府的火车？', a: '火车从吞武里（Bangkok Noi）车站发车，不是华南蓬站。' },
        { q: '从曼谷出发要多久？', a: '乘火车或巴士约 2–3 小时，自驾视路况相近。' },
        { q: '可以从曼谷当天往返吗？', a: '可以。许多导览一日游涵盖大桥、死亡铁路与周边景点。' },
        { q: '从车站怎么去大桥？', a: '搭短途双条车或出租车即可，大桥距市中心仅约 2–3 公里。' },
        { q: '哪种方式最便宜？', a: '本地火车或巴士最便宜；包车与跟团更贵。' },
      ],
    },
    related: ['location-map', 'train-guide', 'visiting-guide', 'history'],
  },

  {
    slug: 'train-guide',
    title: {
      en: 'River Kwai Bridge Train Guide | Death Railway Rides',
      th: 'คู่มือรถไฟสะพานข้ามแม่น้ำแคว | นั่งรถไฟสายมรณะ',
      zh: '桂河大桥火车攻略 | 死亡铁路乘车',
    },
    description: {
      en: 'Riding the train across the River Kwai Bridge: the Death Railway line, schedule, where to sit for the best views, photography tips and nearby stations.',
      th: 'การนั่งรถไฟข้ามสะพานข้ามแม่น้ำแคว：เส้นทางรถไฟสายมรณะ ตารางเวลา จุดนั่งชมวิวที่ดีที่สุด เคล็ดลับถ่ายรูป และสถานีใกล้เคียง',
      zh: '乘坐火车跨越桂河大桥：死亡铁路线路、班次、最佳观景座位、摄影技巧与附近车站。',
    },
    h1: {
      en: 'River Kwai Bridge — Train Guide',
      th: 'สะพานข้ามแม่น้ำแคว — คู่มือรถไฟ',
      zh: '桂河大桥 — 火车攻略',
    },
    intro: {
      en: 'A train still crosses the River Kwai Bridge several times a day on the surviving section of the Death Railway. Riding it is the highlight of any visit — here is how to make the most of it.',
      th: 'รถไฟยังคงวิ่งข้ามสะพานข้ามแม่น้ำแควหลายเที่ยวต่อวันบนช่วงที่เหลืออยู่ของรถไฟสายมรณะ การนั่งรถไฟคือไฮไลต์ของการมาเยือน นี่คือวิธีใช้ประโยชน์ให้คุ้มค่าที่สุด',
      zh: '至今每天仍有数次列车沿死亡铁路现存路段驶过桂河大桥。乘车是此行的最大亮点——以下教您如何充分体验。',
    },
    sections: {
      en: [
        {
          heading: 'The Death Railway line today',
          body: 'The line from Kanchanaburi runs west towards the Burma border. The bridge is one of its most famous spans, still carrying passenger and tourist trains.',
        },
        {
          heading: 'Schedule & frequency',
          body: 'Several trains run each day, generally in the morning and early afternoon. Times change by season, so check at Kanchanaburi station or your hotel before you go.',
        },
        {
          heading: 'Where to sit',
          body: 'For the bridge crossing, sit on the left side when heading away from Kanchanaburi for river views, or on the open-sided cars for unobstructed photos. Arrive early to get a seat.',
        },
        {
          heading: 'Photography tips',
          body: 'Position yourself on the bridge or riverside just before the train passes. A telephoto or zoom lens helps capture the train on the curved steel span; mind the gaps.',
        },
        {
          heading: 'Stations & extensions',
          body: 'From Kanchanaburi you can ride further to Wang Po, Tham Krasae and Nam Tok, with dramatic cliffside sections and the famous Tham Krasae Bridge.',
        },
      ],
      th: [
        {
          heading: 'เส้นทางรถไฟสายมรณะในปัจจุบัน',
          body: 'เส้นทางจากกาญจนบุรีวิ่งไปทางตะวันตกสู่ชายแดนพม่า สะพานเป็นหนึ่งในโครงสร้างที่มีชื่อเสียงที่สุด และยังวิ่งรถไฟโดยสารและรถไฟท่องเที่ยว',
        },
        {
          heading: 'ตารางเวลาและความถี่',
          body: 'มีรถไฟวิ่งหลายเที่ยวต่อวัน โดยทั่วไปในตอนเช้าและตอนบ่ายต้นๆ เวลาอาจเปลี่ยนตามฤดูกาล จึงควรตรวจสอบที่สถานีกาญจนบุรีหรือโรงแรมก่อนออกเดินทาง',
        },
        {
          heading: 'นั่งจุดใด',
          body: 'สำหรับการข้ามสะพาน ให้ม้านั่งฝั่งซ้ายเมื่อวิ่งออกจากกาญจนบุรีเพื่อชมวิวแม่น้ำ หรือนั่งรถไฟฝั่งเปิดโล่งสำหรับถ่ายรูปแบบไม่มีสิ่งบดบัง ควรมาก่อนเพื่อได้ที่นั่ง',
        },
        {
          heading: 'เคล็ดลับถ่ายรูป',
          body: 'ยืนบนสะพานหรือริมแม่น้ำก่อนรถไฟจะผ่าน เลนส์เทเลหรือซูมช่วยจับภาพรถไฟบนโครงเหล็กโค้ง และควระวังช่องว่าง',
        },
        {
          heading: 'สถานีและเส้นทางต่อขยาย',
          body: 'จากกาญจนบุรีคุณสามารถนั่งต่อไปยังวังโพ ถ้ำกระแซ และน้ำตก พร้อมช่วงริมหน้าผาที่ตระการตาและสะพานถ้ำกระแซอันโด่งดัง',
        },
      ],
      zh: [
        {
          heading: '今日的死亡铁路',
          body: '从北碧府向西通往缅甸边境的线路仍在使用，大桥是其中最著名的桥梁之一，仍行驶着客运与旅游列车。',
        },
        {
          heading: '班次与频率',
          body: '每天有多班列车，通常在上午与午后早段。班次随季节调整，出发前请向北碧府车站或旅馆确认。',
        },
        {
          heading: '坐哪边',
          body: '过大桥时，若从北碧府向外行驶，坐左侧可欣赏河景；坐敞开式车厢则便于无遮挡拍照。请提早到场占座。',
        },
        {
          heading: '摄影技巧',
          body: '在列车通过前站到桥上或河岸。长焦或变焦镜头有助于捕捉列车驶过弯曲钢梁的画面；注意轨枕间隙。',
        },
        {
          heading: '车站与延伸',
          body: '从北碧府可继续乘车前往汪波（Wang Po）、探咖舍（Tham Krasae）与南托（Nam Tok），沿途有惊险的崖壁路段与著名的探咖舍桥。',
        },
      ],
    },
    faq: {
      en: [
        { q: 'Does a train still cross the bridge?', a: 'Yes — several passenger and tourist trains cross the bridge each day.' },
        { q: 'How much does the train cost?', a: 'Fares are inexpensive, especially for local trains; tourist trains may cost a little more.' },
        { q: 'When is the best time to photograph the train?', a: 'Just before a scheduled crossing, from the bridge or riverside, with a zoom lens.' },
        { q: 'Can I ride further than the bridge?', a: 'Yes — continue to Wang Po, Tham Krasae and Nam Tok for scenic cliffside sections.' },
        { q: 'Where do trains depart?', a: 'From Kanchanaburi Railway Station, about 2 km from the bridge.' },
      ],
      th: [
        { q: 'ยังมีรถไฟข้ามสะพานหรือไม่?', a: 'ใช่ — รถไฟโดยสารและรถไฟท่องเที่ยววิ่งข้ามสะพานหลายเที่ยวต่อวัน' },
        { q: 'ค่ารถไฟเท่าใด?', a: 'ค่าโดยสารไม่แพง โดยเฉพาะรถไฟท้องถิ่น รถไฟท่องเที่ยวอาจแพงกว่าเล็กน้อย' },
        { q: 'เวลาใดเหมาะถ่ายรูปรถไฟที่สุด?', a: 'ก่อนรถไฟวิ่งตามตารางเล็กน้อย จากบนสะพานหรือริมแม่น้ำ ด้วยเลนส์ซูม' },
        { q: 'นั่งต่อไปไกลกว่าสะพานได้หรือไม่?', a: 'ได้ — ไปต่อยังวังโพ ถ้ำกระแซ และน้ำตก เพื่อชมช่วงริมหน้าผาที่สวยงาม' },
        { q: 'รถไฟออกจากที่ใด?', a: 'จากสถานีรถไฟกาญจนบุรี ห่างจากสะพานเกือบ 2 กม.' },
      ],
      zh: [
        { q: '现在还有列车过大桥吗？', a: '有——每天有多班客运与旅游列车驶过桥上。' },
        { q: '火车票价多少？', a: '票价不高，本地列车尤甚；旅游列车可能略贵。' },
        { q: '什么时间拍火车最好？', a: '在列车按班次通过前，于桥上或河岸用变焦镜头拍摄最佳。' },
        { q: '能坐得比大桥更远吗？', a: '可以——继续前往汪波、探咖舍与南托，欣赏崖壁景观。' },
        { q: '列车从哪里发车？', a: '从北碧府火车站发车，距大桥约 2 公里。' },
      ],
    },
    related: ['location-map', 'history', 'bangkok-to-river-kwai-bridge', 'visiting-guide'],
  },

  {
    slug: 'visiting-guide',
    title: {
      en: 'River Kwai Bridge Visiting Guide | Hours, Tips & Itinerary',
      th: 'คู่มือการเที่ยวสะพานข้ามแม่น้ำแคว | เวลาเปิด เคล็ดลับ และแผนการเที่ยว',
      zh: '桂河大桥参观攻略 | 开放时间、提示与行程',
    },
    description: {
      en: 'Plan your visit to the River Kwai Bridge: opening hours, free entry, best time to go, what to do, facilities, safety tips and a sample half-day itinerary.',
      th: 'วางแผนเที่ยวสะพานข้ามแม่น้ำแคว：เวลาเปิด เข้าชมฟรี เวลาที่ดีที่สุด สิ่งที่ควรทำ สิ่งอำนวยความสะดวก เคล็ดลับความปลอดภัย และแผนเที่ยวครึ่งวัน',
      zh: '规划您的桂河大桥之行：开放时间、免费入场、最佳时段、可做的事、设施、安全提示与半日行程建议。',
    },
    h1: {
      en: 'River Kwai Bridge — Visiting Guide',
      th: 'สะพานข้ามแม่น้ำแคว — คู่มือการเที่ยว',
      zh: '桂河大桥 — 参观攻略',
    },
    intro: {
      en: 'The bridge is free to visit and open around the clock, but a little planning makes the experience better. Here is how to time your visit, what to bring and how to combine it with nearby sights.',
      th: 'สะพานเปิดให้เข้าชมฟรีและเปิดตลอดเวลา แต่การวางแผนเล็กน้อยทำให้ประสบการณ์ดีขึ้น นี่คือวิธีเลือกเวลา สิ่งที่ควรเตรียม และการรวมกับสถานที่ใกล้เคียง',
      zh: '大桥免费开放、全天可参观，但稍作规划体验更佳。以下说明如何安排时间、携带什么，以及如何与周边景点串联。',
    },
    sections: {
      en: [
        {
          heading: 'Opening hours & entry',
          body: 'The bridge and riverside are accessible at any time and free to walk across. Nearby museums and the train have their own hours and small fees.',
        },
        {
          heading: 'Best time to visit',
          body: 'Early morning and the hour before sunset are coolest, calmest and best for photos. Avoid midday heat. The dry season (Nov–Feb) is most comfortable.',
        },
        {
          heading: 'What to do',
          body: 'Walk the curved steel span, watch a train pass, photograph the river at golden hour, and visit the war cemetery and museums nearby.',
        },
        {
          heading: 'Facilities',
          body: 'You will find food stalls, small shops, riverfront cafés, toilets and parking near the bridge. Larger services are in Kanchanaburi town, 2–3 km away.',
        },
        {
          heading: 'Safety & etiquette',
          body: 'The walkway has open sleepers and no barriers — wear closed shoes and supervise children. Be respectful: this is a memorial site.',
        },
        {
          heading: 'Sample half-day itinerary',
          body: 'Arrive mid-afternoon, walk the bridge, explore the riverside stalls, catch the train crossing at dusk, then visit the war cemetery before it closes.',
        },
      ],
      th: [
        {
          heading: 'เวลาเปิดและการเข้าชม',
          body: 'สะพานและริมแม่น้ำเข้าถึงได้ตลอดเวลาและเดินข้ามฟรี พิพิธภัณฑ์ใกล้เคียงและรถไฟมีเวลาและค่าธรรมเนียมเป็นของตน',
        },
        {
          heading: 'เวลาที่ดีที่สุดในการเที่ยว',
          body: 'ตอนเช้าและชั่วโมงก่อนพระอาทิตย์ตกเย็นที่สุด สงบที่สุด และดีที่สุดสำหรับการถ่ายรูป หลีกเลี่ยงความร้อนยามเที่ยง ฤดูแล้ง (พ.ย.–ก.พ.) สบายที่สุด',
        },
        {
          heading: 'สิ่งที่ควรทำ',
          body: 'เดินบนโครงเหล็กโค้ง ชมรถไฟวิ่งผ่าน ถ่ายรูปแม่น้ำยามแสงทอง และเยี่ยมชมสุสานทหารและพิพิธภัณฑ์ใกล้เคียง',
        },
        {
          heading: 'สิ่งอำนวยความสะดวก',
          body: 'คุณจะพบแผงอาหาร ร้านค้าเล็กๆ คาเฟ่ริมน้ำ ห้องน้ำ และที่จอดรถใกล้สะพาน บริการที่ใหญ่กว่าอยู่ในตัวเมืองกาญจนบุรีห่าง 2–3 กม.',
        },
        {
          heading: 'ความปลอดภัยและมารยาท',
          body: 'ทางเดินมีหมอนรองรางแบบเปิดและไม่มีราวกั้น จึงควรใส่รองเท้าปิดเท้าและดูแลเด็ก เคารพสถานที่เพราะนี่คือสถานที่ระลึก',
        },
        {
          heading: 'แผนเที่ยวครึ่งวันตัวอย่าง',
          body: 'เดินทางถึงช่วงบ่าย เดินบนสะพาน ชมแผงริมแม่น้ำ ชมรถไฟข้ามยามเย็น แล้วเยี่ยมชมสุสานทหารก่อนปิด',
        },
      ],
      zh: [
        {
          heading: '开放时间与入场',
          body: '大桥与河岸任何时间都可进入，步行过桥免费。附近博物馆与列车各有开放时间与小额收费。',
        },
        {
          heading: '最佳游览时段',
          body: '清晨与日落前一小时最凉爽、最安静，也最适合拍照。避开正午高温。干季（11 月–2 月）最为舒适。',
        },
        {
          heading: '可以做什么',
          body: '行走弯曲的钢梁桥、观看列车通过、在黄金时刻拍摄河景，并参观附近的战争公墓与博物馆。',
        },
        {
          heading: '设施',
          body: '桥边有小吃摊、小店、河岸咖啡馆、厕所与停车场。更完善的服务在北碧府市区，距此 2–3 公里。',
        },
        {
          heading: '安全与礼仪',
          body: '步道为开放式轨枕且无护栏——请穿包趾鞋并看管好儿童。请保持尊重：这是一处纪念地。',
        },
        {
          heading: '半日行程示例',
          body: '下午抵达，步行过大桥，逛河岸摊位，黄昏看列车通过，再于关闭前参观战争公墓。',
        },
      ],
    },
    faq: {
      en: [
        { q: 'Is the River Kwai Bridge free to visit?', a: 'Yes, walking across the bridge is free and it is accessible at any time.' },
        { q: 'What are the opening hours?', a: 'The bridge is open 24 hours; nearby museums keep daytime hours.' },
        { q: 'When is the best time to go?', a: 'Early morning or the hour before sunset; the dry season (Nov–Feb) is most comfortable.' },
        { q: 'Is it safe to walk the bridge?', a: 'Yes, but mind the open sleepers and lack of barriers — wear closed shoes and watch children.' },
        { q: 'How long should I plan for?', a: 'A focused visit is about 1–2 hours; allow half a day to add the museum and cemetery.' },
      ],
      th: [
        { q: 'สะพานข้ามแม่น้ำแควเข้าชมฟรีหรือไม่?', a: 'ใช่ การเดินข้ามสะพานฟรีและเข้าถึงได้ตลอดเวลา' },
        { q: 'เวลาเปิดทำการคือเมื่อใด?', a: 'สะพานเปิดตลอด 24 ชม. พิพิธภัณฑ์ใกล้เคียงเปิดเวลากลางวัน' },
        { q: 'เวลาใดเหมาะไปที่สุด?', a: 'ตอนเช้า หรือชั่วโมงก่อนพระอาทิตย์ตก ฤดูแล้ง (พ.ย.–ก.พ.) สบายที่สุด' },
        { q: 'เดินบนสะพานปลอดภัยหรือไม่?', a: 'ปลอดภัย แต่ระวังหมอนรองรางแบบเปิดและไม่มีราวกั้น ใส่รองเท้าปิดเท้าและดูแลเด็ก' },
        { q: 'ควรวางแผนเวลาเท่าใด?', a: 'การเที่ยวแบบเน้นๆ ใช้เวลาเกือบ 1–2 ชม. วางแผนครึ่งวันหากเพิ่มพิพิธภัณฑ์และสุสาน' },
      ],
      zh: [
        { q: '桂河大桥免费参观吗？', a: '是的，步行过桥免费，且任何时间都可进入。' },
        { q: '开放时间是几点？', a: '大桥全天 24 小时开放；附近博物馆为日间开放。' },
        { q: '什么时间最好去？', a: '清晨或日落前一小时最佳；干季（11 月–2 月）最舒适。' },
        { q: '步行过大桥安全吗？', a: '安全，但注意开放式轨枕与无护栏——请穿包趾鞋并看护儿童。' },
        { q: '应预留多少时间？', a: '专注游览约 1–2 小时；若加上博物馆与公墓，请预留半日。' },
      ],
    },
    related: ['location-map', 'train-guide', 'history', 'bangkok-to-river-kwai-bridge'],
  },
];

export const topicBySlug = (slug: string): TopicContent | undefined =>
  topics.find((t) => t.slug === slug);

export const topicSlugs = topics.map((t) => t.slug);

export const siteNameFor = (lang: TopicLang): string => siteConfig.baseUrl;
