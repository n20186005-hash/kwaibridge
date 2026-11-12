import type { TopicLang } from './topics';

type Tri = Record<TopicLang, string>;
const tri = (en: string, th: string, zh: string): Tri => ({ en, th, zh });

export const attractionNotes: Record<string, { features: Tri; photo: Tri; steward: Tri }> = {
  'erawan-national-park': {
    features: tri(
      'Follow the marked path through the forest towards the waterfall tiers. Look for the limestone stream beds, shaded vegetation and changing water flow. The upper levels require more effort, and trail access can be limited by conditions.',
      'เดินตามทางที่อุทยานกำหนดผ่านป่าไปยังชั้นน้ำตก สังเกตลำธารบนหินปูน พืชพรรณในร่มเงา และระดับน้ำที่เปลี่ยนตามฤดู ชั้นบนใช้แรงเดินมากขึ้นและอาจมีข้อจำกัดตามสภาพอากาศ',
      '沿公园标示步道穿过森林，观察多层瀑布、石灰岩溪床、遮荫植被以及随季节变化的水流；较高层步道更耗体力，也可能因天气限制通行。',
    ),
    photo: tri(
      'Photograph the waterfall pools and forest trail only from permitted viewpoints. Keep camera gear dry and avoid stepping into protected or slippery stream edges for a picture.',
      'ถ่ายภาพแอ่งน้ำตกและทางเดินป่าจากจุดที่อนุญาต ป้องกันอุปกรณ์เปียก และอย่าลงขอบลำธารลื่นหรือพื้นที่หวงห้ามเพื่อถ่ายรูป',
      '在允许的观景点拍摄瀑布水潭与森林步道，注意设备防水；不要为了取景踏入湿滑溪岸或封闭保护区域。',
    ),
    steward: tri(
      'Erawan National Park is part of Thailand’s national-park system under the Department of National Parks, Wildlife and Plant Conservation (DNP). Park officers manage entry, trails and conservation rules.',
      'อุทยานแห่งชาติเอราวัณอยู่ภายใต้กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช (DNP) เจ้าหน้าที่อุทยานดูแลทางเข้า เส้นทาง และกฎอนุรักษ์',
      '爱侣湾国家公园属于泰国国家公园体系，由国家公园、野生动植物保护厅（DNP）管理；园方人员负责入口、步道及生态保护规定。',
    ),
  },
  'thailand-burma-railway-centre': {
    features: tri('Inside, follow the historical maps and the sequence from railway planning to construction and its aftermath. Models and personal accounts make the scale of the undertaking easier to grasp.', 'ภายในให้ดูแผนที่ลำดับประวัติจากการวางแผน สร้างทางรถไฟ จนถึงผลหลังสงคราม แบบจำลองและคำบอกเล่าช่วยให้เห็นขนาดของโครงการ', '可沿展厅地图依次了解铁路筹划、施工及战后影响；模型与个人叙述有助于理解工程规模。'),
    photo: tri('Photograph the exterior and permitted exhibit areas without flash where prohibited. A wider view showing the museum entrance helps distinguish it from other local war museums.', 'ถ่ายภาพด้านหน้าอาคารและจุดจัดแสดงที่อนุญาต ปิดแฟลชเมื่อมีป้ายห้าม ภาพที่เห็นป้ายทางเข้าช่วยแยกจากพิพิธภัณฑ์อื่น', '可拍建筑外观及允许拍摄的展区，禁闪光处请遵守；包含入口标牌的广角画面便于识别该馆。'),
    steward: tri('The Thailand–Burma Railway Centre is an independently operated research and interpretive museum. The museum team manages exhibitions and admissions; the neighbouring cemetery is maintained separately by CWGC.', 'ศูนย์รถไฟไทย–พม่าเป็นพิพิธภัณฑ์และศูนย์ศึกษาที่ดำเนินงานแยกต่างหาก ทีมพิพิธภัณฑ์ดูแลนิทรรศการและการเข้าชม ส่วนสุสานข้างเคียงดูแลโดย CWGC', '泰缅铁路中心是独立运营的研究及展览机构，馆方负责展览和入场安排；旁边的公墓则由 CWGC 另行维护。'),
  },
  'kanchanaburi-war-cemetery': {
    features: tri('Rows of pale headstones, broad lawns and carefully arranged planting create a quiet memorial landscape. Read individual inscriptions to connect the larger railway story with human lives.', 'แถวป้ายหลุมศพสีอ่อน สนามหญ้า และสวนที่จัดอย่างเป็นระเบียบสร้างบรรยากาศรำลึก ลองอ่านจารึกเพื่อเห็นเรื่องราวของแต่ละชีวิต', '整齐的浅色墓碑、草坪与花木构成安静的纪念景观；阅读墓志能把铁路历史与具体生命联系起来。'),
    photo: tri('Use a restrained wide view along the headstone rows; avoid close portraits of mourners and disruptive posing. Soft morning light preserves the quiet atmosphere.', 'ถ่ายภาพแนวหลุมศพด้วยมุมกว้างอย่างสำรวม หลีกเลี่ยงถ่ายผู้ไว้อาลัยใกล้ ๆ หรือโพสท่ารบกวน แสงเช้าให้บรรยากาศสงบ', '宜取墓碑排列的克制广角构图，避免近拍悼念者或摆拍；晨光更符合纪念场所气氛。'),
    steward: tri('The Commonwealth War Graves Commission (CWGC) maintains Kanchanaburi War Cemetery and preserves the graves and their records.', 'คณะกรรมาธิการสุสานทหารเครือจักรภพ (CWGC) ดูแลสุสานทหารกาญจนบุรีและข้อมูลผู้เสียชีวิต', '北碧府战争公墓由英联邦战争墓地委员会（CWGC）维护，并保存墓葬与人员记录。'),
  },
  'jeath-war-museum': {
    features: tri('The original JEATH exhibition emphasises the wartime camp experience through reconstructed spaces and documentary material. Inspect the location name carefully: several local museums use similar WWII descriptions.', 'พิพิธภัณฑ์ JEATH เดิมเน้นชีวิตในค่ายช่วงสงครามผ่านพื้นที่จำลองและเอกสาร ควรตรวจชื่อให้ชัดเพราะมีพิพิธภัณฑ์สงครามอื่นชื่อคล้ายกัน', '原 JEATH 展览通过营地场景复原与史料呈现战时生活；当地存在名称近似的二战展馆，务必区分。'),
    photo: tri('A photograph of the entrance sign and the reconstructed building communicates the museum identity better than unrelated bridge photographs. Respect photography restrictions inside.', 'ภาพป้ายทางเข้าและอาคารจำลองสื่อถึงพิพิธภัณฑ์นี้ดีกว่าภาพสะพานที่ไม่เกี่ยวข้อง เคารพข้อจำกัดการถ่ายภาพภายใน', '入口标识及复原建筑比无关的桥梁照片更能呈现博物馆身份；室内遵守摄影限制。'),
    steward: tri('The original JEATH War Museum is associated with Wat Chai Chumphon Chana Songkhram (Wat Tai). Check the local museum desk for current access and visitor arrangements.', 'พิพิธภัณฑ์ JEATH เดิมเกี่ยวข้องกับวัดไชยชุมพลชนะสงคราม (วัดใต้) ควรสอบถามจุดบริการพิพิธภัณฑ์เรื่องการเข้าชมล่าสุด', '原 JEATH 博物馆与柴春蓬寺（Wat Tai）有关；具体开放及参观安排以馆方现场服务处为准。'),
  },
  'hellfire-pass': {
    features: tri('The rock cutting, historical track alignment and memorial interpretation reveal the physical demands of railway construction. The exposed cutting is best understood slowly rather than as a quick photo stop.', 'ร่องหิน แนวทางรถไฟเดิม และนิทรรศการทำให้เห็นความหนักของงานก่อสร้าง ควรค่อย ๆ เดินชมมากกว่ามาเพียงถ่ายรูป', '岩壁切口、旧轨道线与纪念解说展现了筑路的艰难；值得慢慢阅读，不宜只停留拍照。'),
    photo: tri('Frame the steep rock walls from the marked walking track and keep the path clear. Do not climb the cutting or enter closed sections.', 'ถ่ายผนังหินสูงจากทางเดินที่กำหนด ไม่กีดขวางเส้นทาง และอย่าปีนหรือเข้าพื้นที่ปิด', '从标示步道拍摄陡峭岩壁，不阻挡通行，不攀爬岩壁或进入封闭路段。'),
    steward: tri('The Hellfire Pass Memorial Museum and interpretation programme are supported by the Australian Government, with on-site staff overseeing the visitor experience and memorial trail.', 'พิพิธภัณฑ์อนุสรณ์ช่องเขาขาดและงานตีความประวัติได้รับการสนับสนุนจากรัฐบาลออสเตรเลีย เจ้าหน้าที่ดูแลการเข้าชมและทางเดินรำลึก', '地狱火通道纪念馆及历史解说项目由澳大利亚政府支持，现场工作人员管理参观与纪念步道。'),
  },
  'tham-krasae-railway': {
    features: tri('Timber trestlework clings to the hillside while the train rounds the cliffside curve beside the river. Observe how the line was fitted into difficult terrain instead of treating it as a static bridge.', 'โครงไม้ยึดตามไหล่เขาและทางรถไฟโค้งเลียบแม่น้ำ สังเกตวิธีวางรางผ่านภูมิประเทศยาก ไม่ใช่มองเป็นสะพานธรรมดา', '木质栈桥贴着山体，列车沿河谷悬崖弯行；可重点观察铁路如何适应险峻地形。'),
    photo: tri('The viewpoint near the rail curve shows the timber structure and Khwae Noi valley together. Stay in designated safe areas and never stand on a live track for a shot.', 'มุมใกล้ทางโค้งเห็นทั้งโครงไม้และหุบแม่น้ำแควน้อย อยู่ในจุดปลอดภัยที่กำหนดและห้ามยืนบนรางเพื่อถ่ายภาพ', '弯道附近可把木栈桥和桂河谷地一同入镜；只在指定安全区域取景，绝不站在运营轨道上。'),
    steward: tri('The operational track and railway movements fall under the State Railway of Thailand (SRT). Follow railway staff directions; nearby tourist businesses are independently operated.', 'ทางรถไฟและการเดินรถอยู่ในความรับผิดชอบของการรถไฟแห่งประเทศไทย (รฟท.) ให้ทำตามเจ้าหน้าที่ ส่วนร้านค้าใกล้เคียงดำเนินงานแยกกัน', '运营轨道与列车运行由泰国国家铁路局（SRT）负责；应听从铁路人员指示，附近商铺另行经营。'),
  },
  'nam-tok-station': {
    features: tri('Look for the station sign and the local rail terminus atmosphere. This is a practical railway stop more than an elaborate heritage building; its value is in the journey and onward connections.', 'สังเกตป้ายสถานีและบรรยากาศปลายทางรถไฟ อาคารไม่ได้เป็นอนุสรณ์ขนาดใหญ่ คุณค่าคือการเดินทางและการต่อรถ', '可观察站牌与支线终点氛围；这里并非宏大的历史建筑，价值更多来自铁路旅程与接驳。'),
    photo: tri('Include the station name board and platform context. Photograph arriving trains from permitted platform areas only, away from the track edge.', 'ถ่ายป้ายชื่อสถานีคู่กับชานชาลา ถ่ายขบวนรถจากพื้นที่ที่อนุญาตและอยู่ห่างขอบชานชาลา', '将站名牌与站台一同构图；只在允许的站台区域拍列车，远离边缘。'),
    steward: tri('Nam Tok Station is part of the State Railway of Thailand network. SRT manages train operations, platforms and current timetable information.', 'สถานีน้ำตกเป็นส่วนหนึ่งของเครือข่ายการรถไฟแห่งประเทศไทย รฟท.ดูแลการเดินรถ ชานชาลา และข้อมูลเวลา', 'Nam Tok 站属于泰国国家铁路（SRT）网络，列车运营、站台及最新时刻由铁路部门管理。'),
  },
  'chungkai-war-cemetery': {
    features: tri('The original camp burial setting, rows of commemorative headstones and landscaped grounds connect Chungkai with a wartime hospital and church established by prisoners.', 'พื้นที่ฝังศพจากค่ายเดิม แถวป้ายหลุมศพ และสวนเชื่อมเรื่องของช่องไก่กับโรงพยาบาลและโบสถ์ที่เชลยศึกสร้าง', '原营地墓区、排列整齐的墓碑与园林景观，连接起当年战俘修建的医院和教堂历史。'),
    photo: tri('Take respectful landscape views showing the symmetry and planting; avoid intrusive photography of other visitors.', 'ถ่ายภาพสวนและแนวหลุมศพอย่างสำรวม ไม่รบกวนหรือถ่ายผู้เยี่ยมชมคนอื่นใกล้ ๆ', '可拍墓区对称布局与植栽景观，避免对其他访客进行侵扰性拍摄。'),
    steward: tri('Chungkai War Cemetery is maintained by the Commonwealth War Graves Commission (CWGC), which also provides historical records about the burial ground.', 'สุสานช่องไก่อยู่ในการดูแลของ CWGC ซึ่งเก็บข้อมูลประวัติพื้นที่ฝังศพด้วย', 'Chungkai 战争公墓由英联邦战争墓地委员会（CWGC）维护，该机构亦提供墓区史料。'),
  },
  'erawan-waterfall': {
    features: tri('A succession of limestone terraces forms distinct pools and cascades. The forest paths climb between levels, making the upper falls a different experience from the first viewpoints.', 'ชั้นหินปูนต่อเนื่องก่อเป็นแอ่งน้ำและสายน้ำหลายระดับ ทางเดินป่าไต่ขึ้นไปจึงได้ประสบการณ์ต่างจากจุดแรก', '层层石灰岩台地形成不同的瀑布与水潭；林道逐级上升，高层景观与入口附近迥异。'),
    photo: tri('Use forest-filtered light to capture the turquoise pools and limestone cascades, but shoot from stable paths rather than slippery rocks.', 'ใช้แสงลอดป่าถ่ายแอ่งน้ำสีฟ้าและชั้นหินปูน โดยยืนบนทางมั่นคงไม่ใช่โขดหินลื่น', '可利用林间散射光拍摄碧色水潭与石灰岩瀑布，但应在稳固步道上取景。'),
    steward: tri('Erawan Waterfall is within Erawan National Park, administered by Thailand’s Department of National Parks, Wildlife and Plant Conservation. Park staff set access and safety rules.', 'น้ำตกเอราวัณอยู่ในอุทยานแห่งชาติเอราวัณ ภายใต้กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช เจ้าหน้าที่กำหนดกฎการเข้าชม', '爱侣湾瀑布位于爱侣湾国家公园，由泰国国家公园、野生动物及植物保护厅管理，入园与安全规则以园方为准。'),
  },
  'sai-yok-noi-waterfall': {
    features: tri('Water slides over a broad limestone face beneath trees, with the visual character changing strongly by season. The cascade is more approachable than remote forest trails but still requires care.', 'น้ำไหลผ่านหน้าผาหินปูนกว้างใต้ร่มไม้ ภาพเปลี่ยนมากตามฤดูกาล เข้าถึงง่ายกว่าทางป่าลึกแต่ต้องระวัง', '水流沿树荫下宽阔石灰岩坡面滑落，景观随季节变化明显；虽易抵达仍需谨慎。'),
    photo: tri('A wide image including the limestone face and trees shows the waterfall’s shape. Avoid standing on wet rocks or blocking other visitors.', 'ถ่ายมุมกว้างให้เห็นหน้าผาหินปูนกับต้นไม้ ไม่ยืนบนหินเปียกหรือกีดขวางผู้คน', '广角纳入石灰岩坡面和树林能表现瀑布形态，勿站湿岩或挡住他人通道。'),
    steward: tri('Sai Yok Noi is associated with the Sai Yok National Park visitor area and local park administration. Follow the posted site rules and current park notices.', 'น้ำตกไทรโยคน้อยอยู่ในเขตแหล่งท่องเที่ยวที่เกี่ยวข้องกับอุทยานแห่งชาติไทรโยค ให้ทำตามป้ายและประกาศของเจ้าหน้าที่', '赛育诺瀑布与赛育国家公园游览区域相关，参观遵循当地公园管理方的现场规定和公告。'),
  },
  'sai-yok-national-park': {
    features: tri('Limestone hills, caves, wooded banks and the Khwae Noi river system form a varied park landscape. Different entrances lead to different experiences rather than a single central viewpoint.', 'ภูเขาหินปูน ถ้ำ ป่าริมน้ำ และระบบแม่น้ำแควน้อยทำให้ภูมิประเทศหลากหลาย ทางเข้าต่างกันนำไปยังสถานที่คนละแบบ', '石灰岩山地、洞穴、森林河岸与桂河水系构成多样景观；不同入口通往不同体验，并无单一中心观景点。'),
    photo: tri('Photograph a specific signed waterfall, cave entrance or riverside viewpoint and identify that location accurately. Do not reuse a photo of Erawan as Sai Yok.', 'ถ่ายน้ำตก ปากถ้ำ หรือจุดชมแม่น้ำที่มีป้ายชัดและระบุชื่อให้ถูก ไม่ใช้รูปเอราวัณแทนไทรโยค', '拍摄有明确标示的瀑布、洞口或河景，并准确标注地点；不能拿爱侣湾照片代替赛育。'),
    steward: tri('Sai Yok National Park is administered by Thailand’s Department of National Parks, Wildlife and Plant Conservation, through the park office and rangers.', 'อุทยานแห่งชาติไทรโยคอยู่ในการดูแลของกรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช ผ่านสำนักงานและเจ้าหน้าที่อุทยาน', '赛育国家公园由泰国国家公园、野生动物及植物保护厅通过园区办公室及巡护人员管理。'),
  },
  'mueang-sing-historical-park': {
    features: tri('Laterite walls, the rectilinear enclosure and Khmer-style sanctuary reveal historic town planning and religious architecture along the western frontier.', 'กำแพงศิลาแลง ผังพื้นที่สี่เหลี่ยม และปราสาทแบบขอมแสดงผังเมืองและศาสนสถานในอดีต', '红土石墙、方形城址与高棉风格宗教建筑呈现了西部边疆的历史城市规划。'),
    photo: tri('Frame the laterite gateway and sanctuary with the surrounding ground plan visible. Morning light reveals the texture of stone without harsh overhead shadows.', 'ถ่ายประตูศิลาแลงและปราสาทให้เห็นผังโดยรอบ แสงเช้าช่วยแสดงผิวหินโดยไม่เกิดเงาแข็ง', '可将红土石入口和圣殿与外围布局同框；晨光有利于表现石材纹理。'),
    steward: tri('Mueang Sing is a designated historical park under the Fine Arts Department of Thailand. The heritage authority oversees conservation and archaeological interpretation.', 'เมืองสิงห์เป็นอุทยานประวัติศาสตร์ในความดูแลของกรมศิลปากร ซึ่งรับผิดชอบอนุรักษ์และอธิบายโบราณสถาน', '孟辛属于泰国艺术厅（Fine Arts Department）管理的历史公园，文物保护及考古解说由遗产主管部门负责。'),
  },
  'wat-tham-suea': {
    features: tri('The enormous seated Buddha, tiered temple buildings and elevated terraces are the main visual landmarks. Surrounding rice fields form the broad landscape backdrop.', 'พระพุทธรูปองค์ใหญ่ อาคารวัดหลายชั้น และระเบียงสูงเป็นจุดเด่น โดยมีทุ่งนาเป็นฉากหลัง', '巨型坐佛、层叠殿堂和高处平台是主要视觉地标，外围稻田形成开阔背景。'),
    photo: tri('A wide temple view from the terrace can include both the Buddha and rice fields. Avoid obstructing worship and ask before photographing ceremonies.', 'ถ่ายมุมกว้างจากระเบียงให้เห็นองค์พระและทุ่งนา ไม่ขวางผู้สักการะและขออนุญาตก่อนถ่ายพิธี', '在露台可把佛像与稻田同框；不要阻挡礼佛者，拍摄宗教仪式前先询问。'),
    steward: tri('Wat Tham Suea is an active Buddhist temple. Its religious community and temple administration oversee worship spaces and visitor conduct.', 'วัดถ้ำเสือเป็นวัดที่ยังประกอบศาสนกิจ คณะสงฆ์และฝ่ายบริหารวัดดูแลพื้นที่สักการะและระเบียบผู้มาเยือน', '虎穴寺是仍在使用的佛教寺院，由僧团及寺务管理方负责礼佛空间和访客秩序。'),
  },
  'wat-ban-tham': {
    features: tri('The dragon-mouth entrance and ascending stairs lead toward the cave sanctuary, combining playful exterior symbolism with a traditional hillside religious setting.', 'ทางเข้าปากมังกรและบันไดขึ้นสู่ถ้ำผสานรูปแบบภายนอกที่โดดเด่นกับสถานที่ศาสนาบนเขา', '龙口造型入口与向上的长阶通往洞窟佛殿，融合鲜明的外部意象与传统山寺环境。'),
    photo: tri('Photograph the dragon-shaped stairway from below, then document the hill views from safe landings. Avoid flash and disruption inside worship areas.', 'ถ่ายบันไดรูปมังกรจากด้านล่างและวิวจากชานพักที่ปลอดภัย หลีกเลี่ยงแฟลชหรือรบกวนในพื้นที่สักการะ', '可从下方拍龙形阶梯，再从安全平台拍山景；佛殿内避免闪光与干扰。'),
    steward: tri('Wat Ban Tham is an active Buddhist temple. The temple community manages the shrine and entrance arrangements; follow its posted rules.', 'วัดบ้านถ้ำเป็นวัดที่ประกอบศาสนกิจ ชุมชนวัดดูแลศาลาและการเข้าชม ให้ปฏิบัติตามป้ายประกาศ', '班探寺为仍在使用的佛教寺院，寺务方负责佛殿和入场安排，请遵守现场告示。'),
  },
  'kanchanaburi-skywalk': {
    features: tri('The raised transparent walkway opens views of the meeting rivers and riverfront townscape. Its modern structure is best understood as a town viewpoint, not a WWII railway memorial.', 'ทางเดินกระจกยกระดับเปิดวิวจุดบรรจบแม่น้ำและเมืองริมน้ำ เป็นจุดชมวิวสมัยใหม่ไม่ใช่อนุสรณ์ทางรถไฟสงคราม', '高架透明步道可以俯瞰河道交汇与河畔市景，属于现代城市观景设施，并非二战铁路纪念地。'),
    photo: tri('Use the platform edges and river confluence in one composition when permitted; follow staff rules for glass-surface footwear and camera equipment.', 'ถ่ายขอบทางเดินกับจุดบรรจบแม่น้ำเมื่ออนุญาต ทำตามกฎรองเท้าบนกระจกและอุปกรณ์ถ่ายภาพ', '获准时可把步道轮廓与河流汇合点同框；遵守玻璃地板的鞋履及摄影设备规定。'),
    steward: tri('The skywalk is a municipal visitor facility in Kanchanaburi town. On-site municipal staff manage tickets, access sessions and visitor safety.', 'สกายวอล์คเป็นสถานที่ท่องเที่ยวของเมืองกาญจนบุรี เจ้าหน้าที่ท้องถิ่นดูแลบัตร เวลาเข้า และความปลอดภัย', '天空步道是北碧府市区的市政游览设施，现场市政工作人员负责票务、入场时段与安全秩序。'),
  },
  'pak-phraek-heritage-street': {
    features: tri('Old shopfronts, timber shutters, narrow plots and decorative façades show successive layers of the town’s commercial architecture. Many buildings remain private premises.', 'หน้าร้านเก่า บานไม้ แปลงอาคารแคบ และลวดลายหน้าตึกแสดงสถาปัตยกรรมการค้าหลายยุค อาคารจำนวนมากเป็นทรัพย์สินส่วนบุคคล', '老店面、木窗板、狭长地块与装饰立面呈现不同时代的商业建筑层次；许多建筑仍属私人产权。'),
    photo: tri('Take streetscape pictures from public footpaths, highlighting façades and signs. Ask before photographing inside occupied shops or homes.', 'ถ่ายแนวอาคารจากทางเท้าสาธารณะให้เห็นหน้าตึกและป้าย ขออนุญาตก่อนถ่ายในร้านหรือบ้านที่มีผู้อยู่อาศัย', '从公共人行道拍街景与招牌；进入营业店铺或住家内部摄影前请先征得同意。'),
    steward: tri('Pak Phraek is a living historic street, not a single ticketed attraction. Public roads fall under local authorities while individual historic properties have their own owners and occupants.', 'ถนนปากแพรกเป็นย่านประวัติศาสตร์ที่ยังมีคนใช้ชีวิต ไม่ใช่สถานที่ขายบัตรแห่งเดียว ถนนสาธารณะอยู่ในความดูแลท้องถิ่น ส่วนอาคารมีเจ้าของแต่ละราย', 'Pak Phraek 是仍有人生活的历史街区，并非单一售票景点；公共道路归地方部门管理，各历史建筑则由其业主及使用者负责。'),
  },
  'river-kwai-bridge-station': {
    features: tri('Station signage, low platforms and the adjoining track provide a clear sense of railway travel beside the landmark. The railway is operational, not a reconstructed museum display.', 'ป้ายสถานี ชานชาลาเตี้ย และรางข้างสะพานทำให้เห็นบรรยากาศรถไฟจริง ไม่ใช่ฉากจำลองพิพิธภัณฑ์', '站牌、低站台及邻接轨道保留真实铁路旅行感，这里是运营中的铁路而非博物馆复原设施。'),
    photo: tri('Show the station name board and stopped train from a legal platform position. Do not use a bridge-only image as proof of the station entrance.', 'ถ่ายป้ายชื่อสถานีและรถไฟจอดจากชานชาลาที่อนุญาต อย่าใช้ภาพสะพานอย่างเดียวแทนทางเข้าสถานี', '在合法站台位置拍站牌与停靠列车；单独的铁桥照片不能代表车站入口。'),
    steward: tri('The State Railway of Thailand (SRT) manages this station and the trains using the line. Observe platform rules and confirm schedules with SRT.', 'การรถไฟแห่งประเทศไทย (รฟท.) ดูแลสถานีและขบวนรถบนสายนี้ ทำตามกฎชานชาลาและตรวจตารางกับ รฟท.', '桂河大桥站与列车由泰国国家铁路局（SRT）管理；须遵守站台规则并向铁路部门核实时刻。'),
  },
  'kanchanaburi-railway-station': {
    features: tri('The station’s platforms, track arrangement and town setting make it a working regional rail gateway. Compare the signage with the smaller River Kwai Bridge stop farther along the line.', 'ชานชาลา ผังราง และบรรยากาศในเมืองสะท้อนสถานีภูมิภาคที่ใช้งานจริง ต่างจากสถานีสะพานแควใหญ่ที่อยู่ถัดไป', '站台、轨道布局与城镇环境显示其作为区域铁路门户的功能，可与沿线规模较小的桂河大桥站比较。'),
    photo: tri('Photograph the station building and nameplate in daylight, keeping clear of train movements and passenger queues.', 'ถ่ายอาคารสถานีและป้ายชื่อในเวลากลางวัน หลีกทางรถไฟและผู้โดยสารที่รอขึ้นรถ', '日间拍站房与站名牌，避开列车运行区域及候车队伍。'),
    steward: tri('Kanchanaburi Railway Station is operated by the State Railway of Thailand (SRT), responsible for rail service and station operations.', 'สถานีรถไฟกาญจนบุรีดำเนินงานโดยการรถไฟแห่งประเทศไทย (รฟท.) ซึ่งดูแลการเดินรถและการใช้สถานี', '北碧府火车站由泰国国家铁路局（SRT）运营，负责铁路服务及车站管理。'),
  },
};
