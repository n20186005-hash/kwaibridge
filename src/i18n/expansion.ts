import type { TopicContent, TopicLang } from './topics';
import { attractionNotes } from './placeEnhancements';

/**
 * Focused, independent searches: the location is NOT inherited from the bridge.
 * Each record carries original copy in all three supported languages.
 */
type Place = {
  slug: string;
  name: [string, string, string];
  story: [string, string, string];
  visit: [string, string, string];
  map?: string;
};

const places: Place[] = [
  {
    slug: 'thailand-burma-railway-centre', name: ['Thailand–Burma Railway Centre', 'ศูนย์รถไฟไทย–พม่า', '泰缅铁路中心'],
    story: ['This interpretive museum near Don Rak cemetery explains the railway through records, maps and personal testimony. Its exhibits provide the human context missing from a quick photograph of the bridge.', 'ศูนย์เรียนรู้ใกล้สุสานดอนรักจัดแสดงเอกสาร แผนที่ และเรื่องเล่าของผู้เกี่ยวข้องกับทางรถไฟ ช่วยให้เข้าใจชีวิตผู้คนมากกว่าการถ่ายรูปสะพานเพียงอย่างเดียว', '这座位于盟军公墓附近的展馆，以档案、地图和个人证言解释泰缅铁路，使游客理解铁桥照片背后的人类经历。'],
    visit: ['Pair the museum with the cemetery across the road; read the introductory exhibits before visiting the memorial grounds. Check admission and opening hours directly before travelling.', 'ควรชมพิพิธภัณฑ์ก่อนเดินไปสุสานฝั่งตรงข้ามเพื่อเชื่อมโยงข้อมูลกับสถานที่จริง ตรวจสอบค่าเข้าและเวลาเปิดล่าสุดก่อนเดินทาง', '建议先看展览再步行至对面的战争公墓，将史料和纪念空间联系起来；门票与开馆时间请出发前核实。'],
    map: 'Thailand Burma Railway Centre Kanchanaburi Thailand',
  },
  {
    slug: 'kanchanaburi-war-cemetery', name: ['Kanchanaburi War Cemetery (Don Rak)', 'สุสานทหารสัมพันธมิตรดอนรัก', '北碧府战争公墓（Don Rak）'],
    story: ['The carefully maintained graves commemorate Allied prisoners who died while building the railway. This is a place of remembrance, not a backdrop for playful photographs.', 'หลุมศพที่ได้รับการดูแลอย่างดีเป็นสถานที่รำลึกถึงเชลยศึกฝ่ายสัมพันธมิตรที่เสียชีวิตระหว่างสร้างทางรถไฟ ควรเข้าชมอย่างสำรวม', '这里安葬着修筑铁路期间遇难的盟军战俘，整齐维护的墓区是一处庄重的纪念空间，不宜作为娱乐拍摄背景。'],
    visit: ['Read the entrance information and observe cemetery etiquette. The Thailand–Burma Railway Centre is nearby, making this a useful half-day historical pair.', 'อ่านข้อมูลบริเวณทางเข้าและรักษาความสงบ ศูนย์รถไฟไทย–พม่าอยู่ใกล้กัน เหมาะกับแผนเที่ยวประวัติศาสตร์ครึ่งวัน', '入园先阅读说明并保持安静，可与邻近的泰缅铁路中心组合成半日战史路线。'],
    map: 'Kanchanaburi War Cemetery Don Rak Thailand',
  },
  {
    slug: 'jeath-war-museum', name: ['JEATH War Museum', 'พิพิธภัณฑ์สงครามอักษะและเชลยศึก', 'JEATH 战争博物馆'],
    story: ['The original JEATH museum near Wat Chai Chumphon interprets wartime detention and railway labour. Do not confuse it with the separate private war museum beside the bridge.', 'พิพิธภัณฑ์ JEATH เดิมใกล้วัดไชยชุมพลนำเสนอประสบการณ์เชลยศึกและแรงงานสร้างทางรถไฟ ไม่ใช่พิพิธภัณฑ์เอกชนอีกแห่งข้างสะพาน', '位于柴春蓬寺附近的原 JEATH 博物馆讲述战俘生活及铁路劳役；它与桥旁另一家私人战争展馆并非同一地点。'],
    visit: ['Confirm the exact museum on the map before setting off. Allow time to read the displays, then return to the riverfront or continue to the cemetery.', 'ตรวจสอบชื่อพิพิธภัณฑ์บนแผนที่ให้ตรงก่อนออกเดินทาง เผื่อเวลาอ่านนิทรรศการ แล้วต่อไปยังริมน้ำหรือสุสาน', '导航时务必辨认博物馆的准确名称，预留阅读展板时间，再接河岸或战争公墓。'],
    map: 'JEATH War Museum Wat Chai Chumphon Kanchanaburi',
  },
  {
    slug: 'hellfire-pass', name: ['Hellfire Pass Memorial', 'ช่องเขาขาดและอนุสรณ์สถาน', '地狱火通道纪念馆'],
    story: ['The deep railway cutting at Hellfire Pass illustrates the harsh manual labour imposed during the railway construction. The interpretation centre and trail are well beyond Kanchanaburi town.', 'ช่องเขาขาดเป็นร่องตัดหินทางรถไฟที่สะท้อนการใช้แรงงานหนักในสงคราม ศูนย์เรียนรู้และเส้นทางเดินอยู่ไกลจากตัวเมืองกาญจนบุรี', '地狱火通道的深切岩壁展现了战时铁路开凿的艰苦劳动；纪念馆与步道距离北碧府市区较远。'],
    visit: ['Plan a separate half-day or combine it with the Nam Tok area rather than treating it as a short walk from the bridge. Wear walking shoes and carry water.', 'ควรจัดเป็นทริปครึ่งวันหรือรวมกับน้ำตก ไม่ใช่เดินต่อจากสะพาน ใส่รองเท้าเดินและพกน้ำ', '适合单独安排半日或与 Nam Tok 一带同行，不可当作桥边步行景点；准备步行鞋与饮水。'],
    map: 'Hellfire Pass Interpretive Centre Kanchanaburi',
  },
  {
    slug: 'tham-krasae-railway', name: ['Tham Krasae Railway & Viaduct', 'ทางรถไฟถ้ำกระแซ', '探卡赛悬崖铁路'],
    story: ['The surviving railway curves along a cliff above the Khwae Noi River, providing one of the most recognisable landscapes of the Death Railway route.', 'ทางรถไฟช่วงนี้เลียบหน้าผาเหนือแม่น้ำแควน้อย เป็นทิวทัศน์สำคัญของเส้นทางรถไฟสายมรณะ', '铁路沿桂河支流的峭壁弯行，是死亡铁路沿线最具辨识度的景观之一。'],
    visit: ['Travel by train or road to the Tham Krasae area, and stay clear of the active tracks when trains approach. The narrow walkway requires careful footing.', 'เดินทางด้วยรถไฟหรือรถยนต์ไปยังถ้ำกระแซ ระวังขบวนรถบนทางที่ยังใช้งานและก้าวอย่างระมัดระวังบนทางแคบ', '可乘火车或公路抵达；轨道仍在运营，列车来时必须退到安全位置，狭窄步道需谨慎。'],
    map: 'Tham Krasae Railway Bridge Kanchanaburi Thailand',
  },
  {
    slug: 'nam-tok-station', name: ['Nam Tok Railway Station', 'สถานีรถไฟน้ำตก', 'Nam Tok 火车站'],
    story: ['Nam Tok is a common endpoint for passenger journeys along the surviving section of the Death Railway. It is a useful transfer point for visits farther into Sai Yok district.', 'สถานีน้ำตกเป็นปลายทางยอดนิยมของรถไฟโดยสารบนช่วงทางรถไฟสายมรณะที่ยังเดินรถอยู่ และเป็นจุดต่อรถไปอำเภอไทรโยค', 'Nam Tok 是现存死亡铁路客运线路常见的终点站，也是继续探索赛育地区的换乘点。'],
    visit: ['Check the State Railway of Thailand timetable for both directions and arrange onward transport in advance; do not assume frequent return trains.', 'ตรวจสอบตารางรถไฟขาไปและขากลับกับการรถไฟแห่งประเทศไทย และเตรียมรถต่อไว้ก่อน เพราะเที่ยวกลับมีจำกัด', '出发前核对泰国国家铁路双向时刻与后续接驳，切勿假设返程列车密集。'],
    map: 'Nam Tok Railway Station Sai Yok Kanchanaburi',
  },
  {
    slug: 'chungkai-war-cemetery', name: ['Chungkai War Cemetery', 'สุสานทหารสัมพันธมิตรช่องไก่', 'Chungkai 战争公墓'],
    story: ['Chungkai is another Commonwealth war cemetery connected with the railway and wartime hospital camps. Its quieter setting differs from central Don Rak.', 'สุสานช่องไก่เป็นอีกสถานที่รำลึกถึงเชลยศึกที่เกี่ยวข้องกับทางรถไฟและค่ายโรงพยาบาลในสงคราม บรรยากาศสงบกว่าดอนรักในเมือง', 'Chungkai 公墓与战时铁路及营地医院历史有关，环境相较市中心的 Don Rak 更为安静。'],
    visit: ['Arrange road transport, observe the memorial setting respectfully and check the location before starting; it is not beside the main bridge.', 'ใช้รถเดินทางและสำรวมในพื้นที่อนุสรณ์ ตรวจสอบแผนที่ก่อนออกเดินทาง เพราะไม่ได้อยู่ติดสะพานหลัก', '建议安排车辆前往并保持肃静；它不在桂河大桥旁，出发前先核对位置。'],
    map: 'Chungkai War Cemetery Kanchanaburi Thailand',
  },
  {
    slug: 'erawan-waterfall', name: ['Erawan Waterfall', 'น้ำตกเอราวัณ', '爱侣湾瀑布'],
    story: ['The multi-tiered waterfall in Erawan National Park offers a nature-focused contrast to Kanchanaburi’s war history. Some upper pools require a longer forest walk.', 'น้ำตกหลายชั้นในอุทยานแห่งชาติเอราวัณเป็นแผนเที่ยวธรรมชาติที่ต่างจากแหล่งประวัติศาสตร์ บางชั้นต้องเดินป่าไกลขึ้น', '爱侣湾国家公园的多层瀑布为战史行程增添自然体验；较高层水潭需要更多林间步行。'],
    visit: ['Leave early, check park admission and trail conditions, and allow most of a day if travelling from the bridge. Follow park rules around swimming and wildlife.', 'ออกเช้า ตรวจสอบค่าเข้าและสภาพเส้นทาง เผื่อเวลาเกือบเต็มวันจากสะพาน และปฏิบัติตามกฎเรื่องเล่นน้ำและสัตว์ป่า', '宜早出发，核对门票与步道情况；从大桥往返建议预留大半天，并遵守游泳与野生动物规定。'],
    map: 'Erawan Waterfall Erawan National Park Kanchanaburi',
  },
  {
    slug: 'sai-yok-noi-waterfall', name: ['Sai Yok Noi Waterfall', 'น้ำตกไทรโยคน้อย', '赛育诺瀑布'],
    story: ['Sai Yok Noi is a roadside waterfall area in Sai Yok district, often paired with a journey to Nam Tok station and the Death Railway.', 'น้ำตกไทรโยคน้อยอยู่ใกล้ถนนในอำเภอไทรโยค จึงมักเที่ยวร่วมกับสถานีน้ำตกและรถไฟสายมรณะ', '赛育诺瀑布位于赛育地区公路附近，适合与 Nam Tok 车站和死亡铁路组合。'],
    visit: ['Check seasonal water flow and road transfers. In the rainy season, slippery paths and stronger water require additional care.', 'ตรวจสอบปริมาณน้ำตามฤดูกาลและการเดินทางต่อ ช่วงฝนตกทางลื่นและกระแสน้ำแรงต้องระวัง', '留意季节性水量与道路接驳；雨季湿滑且水流更急，需提高警惕。'],
    map: 'Sai Yok Noi Waterfall Kanchanaburi Thailand',
  },
  {
    slug: 'sai-yok-national-park', name: ['Sai Yok National Park', 'อุทยานแห่งชาติไทรโยค', '赛育国家公园'],
    story: ['Sai Yok National Park protects river, forest and limestone landscapes north-west of Kanchanaburi. It is a separate nature excursion from the city bridge.', 'อุทยานแห่งชาติไทรโยคดูแลผืนป่า แม่น้ำ และภูมิประเทศหินปูนทางตะวันตกเฉียงเหนือของกาญจนบุรี เป็นทริปธรรมชาติแยกจากสะพานในเมือง', '赛育国家公园保护北碧府西北部的森林、河流和石灰岩地貌，属于远离市区大桥的独立自然行程。'],
    visit: ['Verify which entrance, waterfall or trail you plan to use before setting the map route. Park operating conditions vary by area and season.', 'เลือกทางเข้า น้ำตก หรือเส้นทางเดินให้ชัดก่อนนำทาง เพราะสภาพการเปิดบริการแตกต่างกันตามพื้นที่และฤดูกาล', '先选定具体入口、瀑布或步道再导航，园区不同区域及季节的开放条件可能不同。'],
    map: 'Sai Yok National Park Kanchanaburi Thailand',
  },
  {
    slug: 'mueang-sing-historical-park', name: ['Mueang Sing Historical Park', 'อุทยานประวัติศาสตร์เมืองสิงห์', '孟辛历史公园'],
    story: ['The surviving Khmer-influenced sanctuary and walls reveal an earlier chapter of the region, centuries before the wartime railway.', 'โบราณสถานที่ได้รับอิทธิพลศิลปะขอมและกำแพงเมืองสะท้อนอดีตของภูมิภาคก่อนยุคทางรถไฟสงครามหลายร้อยปี', '这里的高棉风格遗址与城墙记录了比二战铁路早数百年的地方历史。'],
    visit: ['This archaeological site is away from central Kanchanaburi; arrange transport and allow time for the site museum and shaded rests.', 'โบราณสถานอยู่ห่างตัวเมือง ควรเตรียมรถและเผื่อเวลาเข้าชมพื้นที่จัดแสดงพร้อมพักในร่ม', '遗址距北碧府市中心有一段距离，需安排交通，并为展陈及休息预留时间。'],
    map: 'Mueang Sing Historical Park Kanchanaburi',
  },
  {
    slug: 'wat-tham-suea', name: ['Wat Tham Suea (Tiger Cave Temple)', 'วัดถ้ำเสือ กาญจนบุรี', '虎穴寺（北碧府）'],
    story: ['This hilltop temple in Tha Muang district is known for its large Buddha image and views across cultivated plains. It is distinct from similarly named temples elsewhere in Thailand.', 'วัดบนเนินในอำเภอท่าม่วงมีพระพุทธรูปองค์ใหญ่และวิวทุ่งนา ต้องแยกจากวัดชื่อคล้ายกันในจังหวัดอื่น', '位于 Tha Muang 的山丘寺院以大型佛像与田野景色闻名，注意不要与泰国其他同名寺院混淆。'],
    visit: ['Dress modestly for a functioning religious site, be prepared for stairs and check temple access before leaving town.', 'แต่งกายสุภาพสำหรับสถานที่ศาสนา เตรียมเดินขึ้นบันได และตรวจสอบการเข้าชมก่อนออกจากเมือง', '参观仍在使用的宗教场所须着装得体，做好登阶准备并事先确认参观安排。'],
    map: 'Wat Tham Suea Tha Muang Kanchanaburi',
  },
  {
    slug: 'wat-ban-tham', name: ['Wat Ban Tham', 'วัดบ้านถ้ำ', '班探寺'],
    story: ['Wat Ban Tham is associated with a hillside cave shrine and a distinctive dragon-shaped stair entrance. The climb is part of the visit.', 'วัดบ้านถ้ำมีศาลาถ้ำบนเขาและบันไดทางเข้ารูปมังกรอันโดดเด่น การเดินขึ้นเขาเป็นส่วนหนึ่งของประสบการณ์', '班探寺以山洞佛殿和龙形入口阶梯著称，攀登本身就是参观的一部分。'],
    visit: ['Expect steps, heat and uneven surfaces. Wear suitable footwear, carry water and respect worshippers inside the shrine.', 'มีบันได อากาศร้อน และพื้นต่างระดับ ควรใส่รองเท้าที่เหมาะสม พกน้ำ และเคารพผู้มาสักการะ', '阶梯较多且炎热、地面高低不平；穿合适鞋履、备饮水并尊重礼佛者。'],
    map: 'Wat Ban Tham Kanchanaburi Thailand',
  },
  {
    slug: 'kanchanaburi-skywalk', name: ['Kanchanaburi Skywalk', 'สกายวอล์คกาญจนบุรี', '北碧府天空步道'],
    story: ['A modern riverside viewing platform overlooks the meeting of waterways near Kanchanaburi town. It offers a different perspective from the historic railway bridge.', 'จุดชมวิวริมแม่น้ำสมัยใหม่มองเห็นบริเวณจุดบรรจบของลำน้ำใกล้ตัวเมือง ให้มุมมองต่างจากสะพานรถไฟประวัติศาสตร์', '市区河畔的现代观景平台可欣赏河道交汇，与历史铁路桥提供截然不同的视角。'],
    visit: ['Check ticketing, footwear rules and operating hours locally; sunset visits may be busy. The skywalk is not located at the River Kwai Bridge.', 'ตรวจสอบบัตรเข้า กฎเรื่องรองเท้า และเวลาเปิดบริการ ช่วงเย็นอาจมีคนมาก สกายวอล์คไม่ได้อยู่ที่สะพานข้ามแม่น้ำแคว', '请核对门票、鞋履要求和开放时段；日落时较热门，天空步道并不位于桂河大桥。'],
    map: 'Kanchanaburi Skywalk Thailand',
  },
  {
    slug: 'pak-phraek-heritage-street', name: ['Pak Phraek Heritage Street', 'ถนนปากแพรก', '帕帕勒历史老街'],
    story: ['Historic shophouses and streets around Pak Phraek reveal Kanchanaburi’s trading-town identity beyond its well-known WWII landmarks.', 'อาคารพาณิชย์เก่าและถนนปากแพรกสะท้อนประวัติเมืองค้าขายของกาญจนบุรีนอกเหนือจากสถานที่สงครามโลก', 'Pak Phraek 一带老店屋展现了北碧府作为贸易城镇的一面，让旅行不局限于二战遗址。'],
    visit: ['Explore slowly on foot, look at architectural details without entering private properties, and consider combining the walk with the nearby town centre.', 'เดินชมช้า ๆ สังเกตรายละเอียดอาคารโดยไม่เข้าเขตบ้านส่วนบุคคล และจัดร่วมกับเส้นทางในตัวเมือง', '适合慢步观察建筑细节，不要擅入私人房屋；可与市中心步行路线串联。'],
    map: 'Pak Phraek Road Heritage Street Kanchanaburi',
  },
  {
    slug: 'river-kwai-bridge-station', name: ['River Kwai Bridge Railway Station', 'สถานีสะพานแควใหญ่', '桂河大桥火车站'],
    story: ['This small stop serves the active railway close to the famous bridge. The station and the landmark are related but are not interchangeable map pins.', 'สถานีรถไฟขนาดเล็กนี้อยู่ใกล้สะพานที่รถไฟยังวิ่งผ่าน สถานีกับตัวสะพานเป็นคนละจุดบนแผนที่', '这座小车站服务于仍运营的铁路，距大桥不远；车站与桥体是两个不同的地图地点。'],
    visit: ['Check the timetable and platform instructions before travelling; avoid standing on the railway to take photographs.', 'ตรวจสอบตารางรถไฟและคำแนะนำชานชาลาก่อนเดินทาง อย่ายืนบนรางเพื่อถ่ายรูป', '先核对列车时刻和站台指示；不要站在轨道上拍摄。'],
    map: 'River Kwai Bridge Railway Station Kanchanaburi',
  },
  {
    slug: 'kanchanaburi-railway-station', name: ['Kanchanaburi Railway Station', 'สถานีรถไฟกาญจนบุรี', '北碧府火车站'],
    story: ['The town station is an important rail access point for visitors arriving from Bangkok and continuing toward the River Kwai Bridge and Nam Tok.', 'สถานีรถไฟกาญจนบุรีเป็นจุดสำคัญสำหรับผู้โดยสารจากกรุงเทพฯ ที่จะต่อไปสะพานข้ามแม่น้ำแควและน้ำตก', '这座市区火车站是从曼谷抵达北碧府、继续前往桂河大桥和 Nam Tok 的重要铁路节点。'],
    visit: ['Do not confuse it with River Kwai Bridge station. Compare your ticket destination, departure station and return train before booking onward travel.', 'อย่าสับสนกับสถานีสะพานแควใหญ่ ตรวจสอบสถานีบนตั๋ว จุดขึ้นรถ และเที่ยวกลับก่อนวางแผนต่อรถ', '不要与桂河大桥站混淆，预订前逐一核实车票目的地、上车站和返程列车。'],
    map: 'Kanchanaburi Railway Station Thailand',
  },
  {
    slug: 'erawan-national-park', name: ['Erawan National Park', 'อุทยานแห่งชาติเอราวัณ', '爱侣湾国家公园'],
    story: [
      'Erawan National Park in Si Sawat District protects forested limestone hills, streams and the celebrated multi-level Erawan Waterfall. The park is a natural landscape destination, distinct from the wartime railway memorials around the bridge.',
      'อุทยานแห่งชาติเอราวัณในอำเภอศรีสวัสดิ์ดูแลพื้นที่ป่าภูเขาหินปูน ลำธาร และน้ำตกเอราวัณหลายชั้น เป็นแหล่งธรรมชาติที่ต่างจากอนุสรณ์ประวัติศาสตร์ทางรถไฟใกล้สะพาน',
      '爱侣湾国家公园位于北碧府 Si Sawat 县，保护石灰岩山地、森林、溪流及著名的多层爱侣湾瀑布。这里是自然保护区，与桂河大桥周边的战时铁路纪念地性质不同。',
    ],
    visit: [
      'Allow at least half a day for the journey, park entrance and waterfall trail. Start early, use suitable footwear, carry water and obey posted limits on swimming and access to upper levels; check park notices during heavy rain.',
      'ควรเผื่ออย่างน้อยครึ่งวันสำหรับการเดินทาง จุดเข้าอุทยาน และเส้นทางเดินชมน้ำตก เริ่มแต่เช้า สวมรองเท้าที่เหมาะ พกน้ำ และทำตามประกาศเรื่องการเล่นน้ำหรือการขึ้นชั้นสูง โดยเฉพาะช่วงฝนตกหนัก',
      '建议至少留出半天处理往返交通、入园及瀑布步道。尽量早出发，穿防滑鞋并携带饮水，遵守各层瀑布的游泳及通行告示；大雨期间尤其应核查开放情况。',
    ],
    map: 'Erawan National Park Si Sawat Kanchanaburi Thailand',
  },
  {
    slug: 'bridge-photography-guide', name: ['Best photo spots at the River Kwai Bridge', 'จุดถ่ายภาพสะพานข้ามแม่น้ำแคว', '桂河大桥摄影机位'],
    story: ['Railway arches, riverside approaches and the slow-moving train offer different compositions. The most meaningful photographs also show how the structure sits in its landscape.', 'โครงเหล็ก ทางเข้าริมน้ำ และขบวนรถไฟที่วิ่งช้าให้ภาพหลายแบบ ภาพที่เห็นสะพานกับภูมิทัศน์ช่วยเล่าเรื่องสถานที่', '钢桁架、河岸入口与缓行列车适合不同构图；把桥与周边河谷一同纳入画面，更能表达历史地景。'],
    visit: ['Photograph from public viewing areas and never step onto tracks for a shot. Morning and late-afternoon light can be gentler; check weather before going.', 'ถ่ายจากจุดชมวิวที่อนุญาต ไม่ลงไปยืนบนราง แสงเช้าหรือบ่ายแก่เหมาะกับภาพและควรดูอากาศก่อนออกเดินทาง', '只在公共安全位置拍摄，绝不为取景站上铁轨；清晨与傍晚光线通常较柔和，出发前看天气。'],
  },
  {
    slug: 'bridge-walking-safety', name: ['Walking the bridge safely', 'การเดินบนสะพานอย่างปลอดภัย', '桂河大桥步行安全指南'],
    story: ['The historic bridge is still part of an operational railway. Open sleepers, exposed edges and train movements make this different from an ordinary pedestrian bridge.', 'สะพานประวัติศาสตร์ยังเป็นทางรถไฟใช้งานจริง หมอนรองราง ช่องว่าง และขบวนรถทำให้ไม่เหมือนสะพานคนเดินทั่วไป', '这座历史桥仍有列车运行，枕木间隙、临空边缘及列车活动使其不同于普通人行桥。'],
    visit: ['Follow posted instructions and staff directions, supervise children, wear closed-toe shoes and move to permitted safe areas when a train approaches.', 'ทำตามป้ายและคำแนะนำเจ้าหน้าที่ ดูแลเด็ก ใส่รองเท้าหุ้มส้น และไปยังพื้นที่ปลอดภัยที่กำหนดเมื่อรถไฟมา', '遵循现场告示与工作人员指引，看护儿童、穿包趾鞋，列车接近时前往允许停留的安全位置。'],
  },
  {
    slug: 'death-railway-history-guide', name: ['Death Railway history explained', 'ประวัติรถไฟสายมรณะฉบับเข้าใจง่าย', '死亡铁路历史导览'],
    story: ['The wartime Thailand–Burma Railway was built under Japanese military direction using Allied prisoners of war and large numbers of Asian labourers under coercive conditions.', 'ทางรถไฟไทย–พม่าสร้างในสงครามภายใต้การควบคุมของกองทัพญี่ปุ่น โดยใช้แรงงานเชลยศึกฝ่ายสัมพันธมิตรและแรงงานเอเชียจำนวนมากในสภาพบังคับ', '战时泰缅铁路由日军主导建造，盟军战俘与大量亚洲劳工在强制性条件下参与修筑。'],
    visit: ['Begin with a museum, then see the bridge, cemetery and a surviving section of track. Distinguish documented history from the fictionalised events of the famous film.', 'เริ่มจากพิพิธภัณฑ์ แล้วชมสะพาน สุสาน และช่วงรางที่ยังเหลือ แยกประวัติจริงออกจากเรื่องแต่งในภาพยนตร์ชื่อดัง', '建议先看博物馆，再走访桥、公墓及仍存的铁路线；注意区分历史事实与电影改编情节。'],
  },
  {
    slug: 'river-kwai-film-vs-history', name: ['The River Kwai film versus real history', 'ภาพยนตร์สะพานข้ามแม่น้ำแควกับประวัติจริง', '《桂河大桥》电影与真实历史'],
    story: ['The celebrated 1957 film popularised the name, but its plot and bridge construction scenes are dramatized. The actual bridge and railway belong to the wider history of forced labour.', 'ภาพยนตร์ปี 1957 ทำให้ชื่อสะพานโด่งดัง แต่เนื้อเรื่องและฉากสร้างสะพานถูกดัดแปลง ส่วนประวัติจริงเกี่ยวข้องกับแรงงานบังคับจำนวนมาก', '1957 年电影让桂河大桥闻名世界，但剧情和建桥情节经过戏剧化处理；真实历史涉及更广泛的强迫劳动。'],
    visit: ['Use the film as a starting question, not an archival source. Compare it with the Thailand–Burma Railway Centre and recognised memorial records.', 'ใช้ภาพยนตร์เป็นจุดเริ่มต้นของคำถาม ไม่ใช่หลักฐานประวัติศาสตร์ และเทียบกับข้อมูลศูนย์รถไฟไทย–พม่าและอนุสรณ์สถาน', '可把电影作为提问的起点，而非历史证据；应与泰缅铁路中心和纪念机构档案对照。'],
  },
  {
    slug: 'bangkok-day-trip-itinerary', name: ['Bangkok to River Kwai: one-day itinerary', 'เที่ยวสะพานข้ามแม่น้ำแควจากกรุงเทพฯ วันเดียว', '曼谷往返桂河大桥一日游'],
    story: ['A one-day trip works best when focused on the bridge, one historical museum and the war cemetery. Trying to add distant waterfalls can make the day rushed.', 'ทริปวันเดียวจากกรุงเทพฯ ควรเน้นสะพาน พิพิธภัณฑ์หนึ่งแห่ง และสุสาน หากเพิ่มน้ำตกไกล ๆ อาจเร่งรีบเกินไป', '从曼谷一日往返宜集中安排大桥、一处战史馆与战争公墓，强行加入远处瀑布容易赶路。'],
    visit: ['Start early, decide between road transport and limited railway services, and protect time for the return journey. Check current departures before setting out.', 'ออกเช้า เลือกรถยนต์หรือรถไฟที่มีเที่ยวจำกัด และกันเวลาเผื่อขากลับ ตรวจสอบเที่ยวรถล่าสุดก่อนเดินทาง', '尽早出发，比较公路与班次有限的铁路，并为返程留足缓冲；务必查当日时刻。'],
  },
  {
    slug: 'kanchanaburi-two-day-itinerary', name: ['Two days in Kanchanaburi', 'เที่ยวกาญจนบุรี 2 วัน', '北碧府两日行程'],
    story: ['Two days allow one day for the bridge, cemetery and museums, then a second day for either a railway trip toward Nam Tok or a waterfall excursion.', 'สองวันแบ่งวันแรกชมสะพาน สุสาน และพิพิธภัณฑ์ วันถัดไปเลือกรถไฟไปน้ำตกหรือทริปน้ำตกธรรมชาติ', '两日可以将第一天留给大桥、公墓与博物馆，第二天选择铁路至 Nam Tok 或瀑布自然路线。'],
    visit: ['Stay in or near Kanchanaburi town for easy transfers. Choose one major out-of-town goal per day and leave flexibility for weather or train changes.', 'พักในตัวเมืองหรือใกล้เมืองเพื่อเดินทางง่าย เลือกจุดนอกเมืองหลักวันละแห่ง และเผื่อเวลาอากาศหรือรถไฟเปลี่ยน', '建议住在北碧府市区方便换乘，每天只设一个主要郊外目标，预留天气和列车调整空间。'],
  },
  {
    slug: 'river-kwai-family-guide', name: ['River Kwai Bridge with children', 'เที่ยวสะพานข้ามแม่น้ำแควกับเด็ก', '亲子游桂河大桥'],
    story: ['Children may enjoy seeing the train, but the operational railway and difficult wartime history call for extra planning and age-appropriate explanations.', 'เด็กอาจสนุกกับการดูรถไฟ แต่รางที่ใช้งานจริงและประวัติสงครามอันหนักหน่วงต้องวางแผนและอธิบายให้เหมาะกับวัย', '孩子可能喜欢看火车，但运营中的轨道及沉重的战争历史都需要额外规划和适龄讲解。'],
    visit: ['Hold younger children close near the tracks, choose safe riverside views, carry water and set a short, flexible museum visit according to age.', 'ดูแลเด็กเล็กใกล้รางอย่างใกล้ชิด เลือกจุดชมวิวริมแม่น้ำที่ปลอดภัย พกน้ำ และปรับเวลาพิพิธภัณฑ์ให้เหมาะกับวัย', '铁轨附近务必牵好儿童，选择安全河岸观景点、携带饮水，按年龄调整博物馆参观时长。'],
  },
  {
    slug: 'river-kwai-rainy-season', name: ['River Kwai Bridge in the rainy season', 'สะพานข้ามแม่น้ำแควช่วงฤดูฝน', '桂河大桥雨季游览'],
    story: ['Rain can change river levels, visibility and footing around the bridge. A rainy-day visit can still work when plans leave room for indoor exhibits.', 'ฝนทำให้ระดับน้ำ ทัศนวิสัย และพื้นทางเดินบริเวณสะพานเปลี่ยนไป เที่ยวได้หากเตรียมพิพิธภัณฑ์เป็นแผนสำรอง', '降雨会改变河流水位、能见度与桥边步行条件；安排室内展馆作为备用活动会更从容。'],
    visit: ['Check forecasts and local warnings, avoid slippery railway surfaces and do not approach flooded riverbanks. Keep museum hours available as a backup.', 'ดูพยากรณ์และประกาศในพื้นที่ หลีกเลี่ยงพื้นรางลื่นและตลิ่งน้ำท่วม พร้อมตรวจเวลาเปิดพิพิธภัณฑ์สำรอง', '查看预报与当地警示，避开湿滑铁轨及涨水河岸，并预先记录博物馆营业信息。'],
  },
  {
    slug: 'river-kwai-accessibility', name: ['Accessible visit to River Kwai Bridge', 'การเที่ยวสะพานข้ามแม่น้ำแควสำหรับผู้มีข้อจำกัดการเคลื่อนไหว', '桂河大桥无障碍游览'],
    story: ['An active heritage rail bridge with uneven sleepers is not equivalent to a barrier-free promenade. The riverside viewing areas may offer a more practical alternative.', 'สะพานรถไฟเก่ามีหมอนรองรางและพื้นไม่สม่ำเสมอ ไม่ใช่ทางเดินไร้อุปสรรค จุดชมวิวริมแม่น้ำอาจเหมาะกว่า', '老铁路桥枕木间隔且高低不平，不等同于无障碍步道；河岸观景区可能是更实际的选择。'],
    visit: ['Contact the venue or local visitor service about current ramps and accessible toilets; inspect the approach before committing to crossing.', 'สอบถามเจ้าหน้าที่ท้องถิ่นเรื่องทางลาดและห้องน้ำที่เข้าถึงได้ และตรวจทางเข้าก่อนตัดสินใจข้ามสะพาน', '提前向当地服务方确认坡道和无障碍厕所，决定上桥前先检查实际通行条件。'],
  },
  {
    slug: 'river-kwai-parking-transport', name: ['Parking and local transport near the bridge', 'ที่จอดรถและการเดินทางรอบสะพานข้ามแม่น้ำแคว', '桂河大桥停车与市内交通'],
    story: ['Visitors reach the bridge by rail, taxi, songthaew and private vehicle. Parking and drop-off space around the landmark can be crowded on holidays.', 'นักท่องเที่ยวมาได้ด้วยรถไฟ แท็กซี่ สองแถว หรือรถส่วนตัว พื้นที่จอดและรับส่งใกล้สะพานอาจแน่นในวันหยุด', '可乘火车、出租车、双条车或自驾抵达；节假日桥边停车及上下客区域可能拥挤。'],
    visit: ['Set navigation to the bridge itself, not the town railway station, and verify a legal parking place on arrival. Do not block railway or emergency access.', 'ตั้งแผนที่ไปตัวสะพาน ไม่ใช่สถานีรถไฟในเมือง และหาที่จอดที่อนุญาตเมื่อถึง ห้ามกีดขวางทางรถไฟและทางฉุกเฉิน', '导航目的地应为桥体而非市区火车站；到达后寻找合法车位，不堵塞铁路及紧急通道。'],
  },
  {
    slug: 'river-kwai-food-nearby', name: ['Where to eat near the River Kwai Bridge', 'ร้านอาหารใกล้สะพานข้ามแม่น้ำแคว', '桂河大桥周边餐饮'],
    story: ['Riverside eateries and small shops around the bridge are convenient for a break after walking. Menus, prices and opening days change, so avoid relying on old listings.', 'ร้านอาหารริมน้ำและร้านเล็ก ๆ รอบสะพานเหมาะกับการพักหลังเดินชม แต่เมนู ราคา และวันเปิดอาจเปลี่ยนได้', '桥边河景餐馆与小店适合步行后的休息，不过菜单、价格和营业日可能变化，不能只依赖旧清单。'],
    visit: ['Compare current menus and recent local reviews, ask about spice levels and carry cash for smaller stalls. Keep the war memorial visit respectful.', 'เช็กเมนูและรีวิวใหม่ ถามระดับความเผ็ด และพกเงินสดสำหรับร้านเล็ก ๆ ระหว่างเที่ยวสถานที่รำลึกควรสำรวม', '查看近期菜单和当地评价，询问辣度，小摊可准备现金；参观纪念设施时保持庄重。'],
  },
  {
    slug: 'kanchanaburi-night-market', name: ['Kanchanaburi Night Market', 'ตลาดโต้รุ่งกาญจนบุรี', '北碧府夜市'],
    story: ['Night-market food gives visitors an evening option after museums close. The market is in town rather than on the historic bridge itself.', 'ตลาดโต้รุ่งเป็นทางเลือกมื้อเย็นหลังพิพิธภัณฑ์ปิด อยู่ในตัวเมือง ไม่ใช่บนสะพานประวัติศาสตร์', '夜市适合博物馆闭馆后的晚餐时光，它位于市区，而不是历史铁桥上。'],
    visit: ['Check the current market location and trading hours, as local stalls can change. Consider a taxi back to accommodation after dark.', 'ตรวจสอบตำแหน่งตลาดและเวลาเปิดล่าสุด เพราะร้านค้าอาจเปลี่ยน และเตรียมรถกลับที่พักในช่วงค่ำ', '请确认夜市当前地点与营业时间，摊位可能更替；夜间可安排车辆回住宿处。'],
    map: 'Kanchanaburi Night Market Thailand',
  },
  {
    slug: 'kanchanaburi-riverside-stay', name: ['Where to stay along the River Kwai', 'พักที่ไหนริมแม่น้ำแคว', '桂河河畔住宿选择'],
    story: ['Town-centre hotels suit rail travellers and museum visits, while more remote river lodges trade transport convenience for scenery and quiet.', 'ที่พักในเมืองสะดวกสำหรับรถไฟและพิพิธภัณฑ์ ส่วนที่พักริมน้ำนอกเมืองได้วิวและความสงบแต่เดินทางไกลกว่า', '市中心酒店适合铁路与博物馆行程；较远的河畔旅宿以风景和宁静换取交通便利性。'],
    visit: ['Before booking, check the exact riverbank location, night-time transfers, road access and whether the property can arrange station pickup.', 'ก่อนจองตรวจฝั่งแม่น้ำที่พัก การเดินทางกลางคืน ทางเข้ารถยนต์ และบริการรับจากสถานี', '预订前核实具体河岸位置、夜间交通、道路通达及是否提供车站接送。'],
  },
  {
    slug: 'river-kwai-bridge-faq', name: ['River Kwai Bridge practical questions', 'คำถามเที่ยวสะพานข้ามแม่น้ำแคว', '桂河大桥实用问答'],
    story: ['The key decisions are where the bridge is, how long to stay, whether a train will cross during your visit, and which nearby museum best matches your interests.', 'คำถามหลักคือสะพานอยู่ที่ไหน ควรใช้เวลากี่ชั่วโมง จะมีรถไฟผ่านหรือไม่ และพิพิธภัณฑ์ไหนเหมาะกับความสนใจ', '出发前最常见的问题是桥的定位、停留时间、是否能遇到火车以及该选哪座附近展馆。'],
    visit: ['Allow roughly one to two hours at the bridge and more for museums. Train running times can change; confirm with the railway rather than planning around an old screenshot.', 'เผื่อเวลาเดินชมสะพานประมาณหนึ่งถึงสองชั่วโมง และเพิ่มเวลาถ้าเข้าพิพิธภัณฑ์ ตรวจสอบรถไฟกับการรถไฟ ไม่อิงภาพตารางเก่า', '单看大桥可留约一至两小时，参观展馆需增加时间；火车时刻会变，应以铁路最新信息为准。'],
  },
  {
    slug: 'death-railway-train-tickets', name: ['Death Railway train tickets and stations', 'ตั๋วรถไฟสายมรณะและสถานีขึ้นรถ', '死亡铁路车票及上车站'],
    story: ['Ordinary services, weekend excursions and private tours are different products. Routes, boarding points and ticket terms must be checked separately.', 'รถไฟปกติ รถนำเที่ยวสุดสัปดาห์ และทัวร์เอกชนเป็นบริการคนละแบบ เส้นทาง สถานีขึ้น และเงื่อนไขตั๋วต้องตรวจแยกกัน', '普通列车、周末观光车和私人旅行团并非同一产品，路线、上车点与票务条款应分别确认。'],
    visit: ['Use the State Railway of Thailand as the first stop for current services. Verify whether your ticket ends at Kanchanaburi, River Kwai Bridge or Nam Tok.', 'ใช้ข้อมูลการรถไฟแห่งประเทศไทยตรวจเที่ยวล่าสุด และดูให้แน่ใจว่าตั๋วไปกาญจนบุรี สะพานแควใหญ่ หรือสถานีน้ำตก', '先查泰国国家铁路的当前服务，再确认车票终点是北碧府站、桂河大桥站还是 Nam Tok。'],
  },
  {
    slug: 'bridge-sunrise-sunset', name: ['Sunrise and sunset at the bridge', 'ชมแสงเช้าและเย็นที่สะพานข้ามแม่น้ำแคว', '桂河大桥日出日落'],
    story: ['Low-angle light brings out the steel silhouette and reflections on the river, but seasonal clouds and the river level alter the result.', 'แสงมุมต่ำทำให้เห็นเงาโครงเหล็กและภาพสะท้อนน้ำชัดขึ้น แต่เมฆตามฤดูและระดับน้ำทำให้ภาพต่างกัน', '低角度日光能勾勒钢桥轮廓与水面倒影，但季节性云量和河水高度会改变实际效果。'],
    visit: ['Arrive while there is daylight to identify safe viewpoints. Do not walk the track in darkness to chase a photograph; check local sunset and weather times.', 'ไปถึงก่อนมืดเพื่อเลือกจุดชมที่ปลอดภัย อย่าเดินบนรางในความมืดเพื่อถ่ายรูป และเช็กเวลาพระอาทิตย์ตกกับอากาศ', '应在天亮时先找到安全机位，切勿摸黑走铁轨追拍；核对当日日落和天气。'],
  },
  {
    slug: 'bridge-history-walking-route', name: ['Half-day history walk in Kanchanaburi', 'เส้นทางเดินประวัติศาสตร์ครึ่งวันกาญจนบุรี', '北碧府半日战史步行路线'],
    story: ['A focused history route links the Bridge over the River Kwai with the Thailand–Burma Railway Centre and Don Rak cemetery, using local transport between the bridge and central town.', 'เส้นทางประวัติศาสตร์เชื่อมสะพาน ศูนย์รถไฟไทย–พม่า และสุสานดอนรัก โดยใช้รถท้องถิ่นระหว่างสะพานกับตัวเมือง', '战史半日线可串联桂河大桥、泰缅铁路中心和 Don Rak 公墓，桥与市中心之间建议使用当地交通。'],
    visit: ['Start at the museum for context, visit the cemetery quietly, then ride to the bridge. Avoid assuming all three are immediately adjacent on foot.', 'เริ่มจากพิพิธภัณฑ์ เข้าอนุสรณ์อย่างสำรวม แล้วนั่งรถไปสะพาน อย่าคิดว่าทั้งสามแห่งเดินติดกัน', '先在博物馆补足背景、安静参观公墓，再搭车去大桥；三处并非紧挨着的步行景点。'],
  },
];

const nearbyAttractionLinks: Record<string, string[]> = {
  'thailand-burma-railway-centre': ['kanchanaburi-war-cemetery','chungkai-war-cemetery','pak-phraek-heritage-street'],
  'kanchanaburi-war-cemetery': ['thailand-burma-railway-centre','chungkai-war-cemetery','jeath-war-museum'],
  'jeath-war-museum': ['thailand-burma-railway-centre','kanchanaburi-war-cemetery','kanchanaburi-skywalk'],
  'hellfire-pass': ['nam-tok-station','sai-yok-noi-waterfall','tham-krasae-railway'],
  'tham-krasae-railway': ['nam-tok-station','hellfire-pass','sai-yok-noi-waterfall'],
  'nam-tok-station': ['tham-krasae-railway','sai-yok-noi-waterfall','hellfire-pass'],
  'chungkai-war-cemetery': ['kanchanaburi-war-cemetery','thailand-burma-railway-centre','jeath-war-museum'],
  'erawan-waterfall': ['erawan-national-park','sai-yok-noi-waterfall','sai-yok-national-park'],
  'erawan-national-park': ['erawan-waterfall','sai-yok-national-park','mueang-sing-historical-park'],
  'sai-yok-noi-waterfall': ['nam-tok-station','sai-yok-national-park','tham-krasae-railway'],
  'sai-yok-national-park': ['sai-yok-noi-waterfall','hellfire-pass','erawan-national-park'],
  'mueang-sing-historical-park': ['tham-krasae-railway','wat-tham-suea','wat-ban-tham'],
  'wat-tham-suea': ['wat-ban-tham','mueang-sing-historical-park','kanchanaburi-skywalk'],
  'wat-ban-tham': ['wat-tham-suea','mueang-sing-historical-park','kanchanaburi-skywalk'],
  'kanchanaburi-skywalk': ['pak-phraek-heritage-street','kanchanaburi-railway-station','jeath-war-museum'],
  'pak-phraek-heritage-street': ['kanchanaburi-skywalk','kanchanaburi-railway-station','thailand-burma-railway-centre'],
  'river-kwai-bridge-station': ['kanchanaburi-railway-station','thailand-burma-railway-centre','tham-krasae-railway'],
  'kanchanaburi-railway-station': ['river-kwai-bridge-station','kanchanaburi-skywalk','kanchanaburi-war-cemetery'],
  'kanchanaburi-night-market': ['pak-phraek-heritage-street','kanchanaburi-skywalk','kanchanaburi-railway-station'],
};

const guideExtra: Record<string, Record<TopicLang, string>> = {
  'bridge-photography-guide': { en: "For a wide frame, photograph from a public riverside approach and include the bridge piers, water and train only when safely visible. A closer frame can isolate the steel trusses without stepping onto tracks; avoid blocking visitors.", th: "ถ่ายภาพมุมกว้างจากพื้นที่สาธารณะริมแม่น้ำให้เห็นเสาสะพาน ผิวน้ำและรถไฟเมื่อปลอดภัย ส่วนภาพใกล้เน้นโครงเหล็กโดยไม่ลงไปบนรางและไม่กีดขวางผู้อื่น", zh: "广角画面可从公共河岸入口纳入桥墩、水面及安全距离内可见的列车；近景则聚焦钢桁架结构，无须踏入轨道，也不要挡住其他游客。" },
  'bridge-walking-safety': { en: "The bridge is a working railway, not a standard pedestrian promenade. Pay attention to gaps, sleepers, warning sounds and instructions, and use designated riverside viewing areas if you cannot walk steadily.", th: "สะพานเป็นทางรถไฟที่ยังใช้งาน ไม่ใช่ทางเดินทั่วไป ระวังช่องว่าง ไม้หมอน เสียงเตือนและคำสั่งเจ้าหน้าที่ หากเดินไม่มั่นคงควรชมจากจุดริมแม่น้ำที่จัดไว้", zh: "大桥仍有列车运营，并非普通步行栈道。留意枕木间隙、警示声与工作人员指令；行动不稳者可选择河岸指定观景区域。" },
  'death-railway-history-guide': { en: "Distinguish the wartime construction of the Thailand–Burma Railway from the later history of the bridge and its representation in film. Read accounts of Allied prisoners and Asian forced labourers together; visit the railway centre or a memorial to connect the record with individuals.", th: "ควรแยกประวัติการสร้างทางรถไฟไทย–พม่าในสงครามออกจากเรื่องสะพานในเวลาต่อมาและภาพยนตร์ อ่านเรื่องเชลยสัมพันธมิตรควบคู่แรงงานเอเชีย และแวะศูนย์เรียนรู้หรืออนุสรณ์เพื่อเข้าใจชีวิตผู้คน", zh: "阅读时应区分战时泰缅铁路的修建、桥梁后来的变化与电影叙事，并同时关注盟军战俘和亚洲强迫劳工的经历；可在铁路中心和纪念地继续查阅人物资料。" },
  'river-kwai-film-vs-history': { en: "The 1957 film is a work of fiction, not an on-site documentary. Compare its story with museum maps, memorial records and the actual location of the bridge before treating any scene as historical fact.", th: "ภาพยนตร์ปี 1957 เป็นเรื่องแต่ง ไม่ใช่สารคดีจากสถานที่จริง ควรเปรียบเทียบเรื่องในหนังกับแผนที่พิพิธภัณฑ์ บันทึกอนุสรณ์ และที่ตั้งสะพานก่อนเชื่อว่าเหตุการณ์ในภาพยนตร์เกิดขึ้นจริง", zh: "1957年电影属于艺术创作，并非实地纪录片。应将剧情与博物馆地图、纪念档案及桥梁实际位置对照，不宜把电影情节直接当作史实。" },
  'bangkok-day-trip-itinerary': { en: "Choose a realistic departure and return transport before adding stops. A bridge visit, one interpretive museum and Don Rak cemetery already make a meaningful day; adding distant waterfalls can force rushed transfers.", th: "เลือกเที่ยวรถไปกลับที่ทำได้จริงก่อนเพิ่มสถานที่ สะพาน พิพิธภัณฑ์หนึ่งแห่งและสุสานดอนรักก็เป็นทริปหนึ่งวันที่มีเนื้อหา หากเพิ่มน้ำตกไกลอาจต้องเร่งเดินทาง", zh: "先确定可行的曼谷往返班次，再安排站点。大桥、一个铁路历史展馆与 Don Rak 公墓已足够构成充实的一日游；远郊瀑布可能使交通过于仓促。" },
  'kanchanaburi-two-day-itinerary': { en: "Keep town history visits on the first day and a single out-of-town route on the second. Do not assume the waterfalls, Hellfire Pass and Erawan are on one short loop; check accommodation and last return options.", th: "วันแรกเน้นแหล่งประวัติศาสตร์ในเมือง วันถัดไปเลือกเส้นทางนอกเมืองหนึ่งสาย อย่าคิดว่าน้ำตก ช่องเขาขาด และเอราวัณอยู่ในวงรอบสั้นเดียวกัน ตรวจที่พักและรถกลับเที่ยวสุดท้าย", zh: "第一天集中参观市区的战争历史地点，第二天只选一条郊外线路。地狱火隘口、赛育方向与爱侣湾并非一条轻松短环线，需核对住宿及末班返程交通。" },
  'river-kwai-family-guide': { en: "Explain to children in advance that the bridge is an active railway and memorial landscape. Watch trains from a safe public viewpoint, keep children within reach near rails and choose age-appropriate museum interpretation.", th: "บอกเด็กก่อนว่าสะพานเป็นทางรถไฟใช้งานและพื้นที่ประวัติศาสตร์ ชมรถไฟจากจุดสาธารณะที่ปลอดภัย ดูแลเด็กใกล้ชิดเมื่ออยู่ใกล้ราง และเลือกเนื้อหาพิพิธภัณฑ์ให้เหมาะกับวัย", zh: "提前告诉孩子这里既是运营铁路，也是战争纪念场所。建议在安全的公共观景点看火车，靠近轨道时始终看护儿童，并按年龄选择博物馆讲解深度。" },
  'river-kwai-rainy-season': { en: "Rain can leave access paths and railway surfaces slippery. Carry a light rain layer, avoid photographing from exposed rail structures and keep a museum or indoor exhibit as an alternative when showers intensify.", th: "ฝนทำให้ทางเดินและพื้นทางรถไฟลื่น พกเสื้อกันฝน อย่าถ่ายภาพจากโครงทางรถไฟที่เปิดโล่ง และเตรียมพิพิธภัณฑ์เป็นแผนสำรองเมื่อฝนแรง", zh: "雨水会使步行通道和铁路构件湿滑。建议携带轻便雨具，不在暴露的轨道结构上取景；遇到强降雨可改为室内博物馆行程。" },
  'river-kwai-accessibility': { en: "Old railway sleepers and uneven gaps make the bridge itself unsuitable as a step-free route. Review accessible approaches on the riverbank and contact venues about toilets, ramps, drop-off areas and companion assistance.", th: "ไม้หมอนและช่องว่างบนสะพานเก่าทำให้ไม่ใช่เส้นทางไร้ขั้นบันได ควรเลือกจุดชมริมฝั่งและสอบถามเรื่องห้องน้ำ ทางลาด จุดลงรถและผู้ช่วยจากสถานที่ก่อนมา", zh: "老桥枕木与不平整间隙不适合作为无障碍步道。可优先考察河岸观景点，并向场地咨询坡道、洗手间、上下客点及陪同协助条件。" },
  'river-kwai-parking-transport': { en: "Parking and pick-up points near the bridge may change during busy weekends or events. Follow on-site traffic directions, do not stop over railway approaches and set the map destination to the bridge rather than Kanchanaburi town station.", th: "จุดจอดและรับส่งใกล้สะพานอาจเปลี่ยนในวันหยุดหรือเทศกาล ทำตามการจัดการจราจรในพื้นที่ อย่าจอดกีดขวางทางรถไฟ และตั้งปลายทางเป็นตัวสะพานไม่ใช่สถานีในเมือง", zh: "周末和活动日桥边停车、上下客位置可能调整。请遵循现场交通引导，不在铁路入口停车，地图目的地应选桥梁而非北碧府市中心车站。" },
  'river-kwai-food-nearby': { en: "Decide whether to eat by the bridge or in Kanchanaburi town before travelling; riverside views and town-market choices serve different needs. Compare recent menus, payment options, spice preferences and return transport.", th: "ตัดสินใจก่อนว่าจะกินใกล้สะพานหรือในเมือง ร้านริมน้ำกับตลาดมีบรรยากาศต่างกัน ตรวจเมนูล่าสุด วิธีจ่ายเงิน ระดับความเผ็ด และรถกลับ", zh: "先决定在桥边河景餐厅还是市区用餐；两者在景观、价格与交通上各有取舍。查看近期菜单、付款方式、辣度选择及返程交通。" },
  'kanchanaburi-riverside-stay': { en: "The word riverside alone does not tell you how far a hotel lies from the bridge. Check the property's actual bank, road access and transfer options; compare town hotels if your itinerary depends on trains and museums.", th: "คำว่าริมแม่น้ำไม่ได้บอกระยะทางถึงสะพาน ตรวจฝั่งแม่น้ำจริง ทางเข้าและรถรับส่งของที่พัก หากเน้นรถไฟและพิพิธภัณฑ์ให้เทียบโรงแรมในเมือง", zh: "“河畔住宿”并不代表步行可到大桥。须核对旅宿所在河岸、道路入口与接驳选择；如果行程重点是火车站和博物馆，市区住宿可能更便捷。" },
  'river-kwai-bridge-faq': { en: "Separate three questions: where to view the bridge, whether a train is running that day, and which memorial sites suit your interests. The bridge itself can be a short visit, but the broader historical route needs more time.", th: "แยกคำถามเรื่องจุดชมสะพาน รถไฟที่วิ่งในวันนั้น และสถานที่รำลึกที่เหมาะกับความสนใจ การชมสะพานใช้เวลาไม่นานแต่เส้นทางประวัติศาสตร์ใช้เวลามากกว่า", zh: "把三个问题分开考虑：从哪里看桥、当天是否有列车经过、哪些纪念馆适合自己的兴趣。单看大桥可以较短，但完整历史路线需要更多时间。" },
  'death-railway-train-tickets': { en: "Regular local trains, special excursion services and organised tours may have different boarding locations and rules. Verify the train number, date, seat arrangement and end station with the State Railway of Thailand before purchasing.", th: "รถไฟท้องถิ่น ขบวนท่องเที่ยวพิเศษและทัวร์อาจมีจุดขึ้นและเงื่อนไขต่างกัน ตรวจเลขขบวน วันที่ ที่นั่งและสถานีปลายทางกับการรถไฟแห่งประเทศไทยก่อนซื้อ", zh: "普通列车、特别观光列车和旅行团可能有不同的上车站及票务规则。购票前通过泰国国家铁路局核对车次、日期、座位安排与终点站。" },
  'bridge-sunrise-sunset': { en: "Low-angle light brings out the steel trusses and reflections, but clouds and rain change conditions quickly. Arrive while there is daylight, stay on public viewpoints and leave enough time to return before darkness.", th: "แสงมุมต่ำช่วยเน้นโครงเหล็กและเงาสะท้อน แต่เมฆฝนทำให้สภาพเปลี่ยนเร็ว ควรมาถึงก่อนมืด อยู่ในจุดชมที่เปิดให้ใช้ และเผื่อเวลากลับ", zh: "低角度日光能突出钢桁架及水面倒影，但云雨会迅速改变效果。请在天黑前抵达，只在公共观景点停留，并预留返程时间。" },
  'bridge-history-walking-route': { en: "The museum and Don Rak cemetery sit close together, while the bridge requires a separate town transfer. A sensible sequence is museum first for context, cemetery second for remembrance, and bridge last for the physical railway setting.", th: "พิพิธภัณฑ์กับสุสานดอนรักอยู่ใกล้กัน แต่การไปสะพานต้องเดินทางต่อในเมือง ลำดับที่เหมาะคือเริ่มพิพิธภัณฑ์ ไปสุสานอย่างสำรวม แล้วชมสะพานเป็นจุดสุดท้าย", zh: "泰缅铁路中心与 Don Rak 公墓相距较近，但前往大桥仍需要市内交通。可先在博物馆了解背景、再安静参观公墓，最后到大桥观察铁路遗迹。" },
};

const langs: TopicLang[] = ['en', 'th', 'zh'];
export const attractionSlugs = new Set(places.filter((place) => Boolean(place.map)).map((place) => place.slug));
const localeIndex = (lang: TopicLang) => langs.indexOf(lang);

export const expansionTopics: TopicContent[] = places.map((p, index) => {
  const detail = attractionNotes[p.slug];
  const photoSlugs = new Set([
    'thailand-burma-railway-centre', 'kanchanaburi-war-cemetery', 'jeath-war-museum',
    'hellfire-pass', 'tham-krasae-railway', 'nam-tok-station', 'chungkai-war-cemetery',
    'erawan-waterfall', 'erawan-national-park', 'sai-yok-noi-waterfall', 'sai-yok-national-park',
    'mueang-sing-historical-park', 'wat-tham-suea', 'wat-ban-tham', 'kanchanaburi-skywalk',
    'pak-phraek-heritage-street', 'river-kwai-bridge-station', 'kanchanaburi-railway-station',
  ]);
  const value = <T>(fn: (lang: TopicLang, i: number) => T): Record<TopicLang, T> =>
    Object.fromEntries(langs.map((lang) => [lang, fn(lang, localeIndex(lang))])) as Record<TopicLang, T>;
  const titleSuffix = { en: ' | River Kwai & Kanchanaburi Guide', th: ' | คู่มือกาญจนบุรี', zh: '｜北碧府旅游指南' };
  const heads = {
    context: { en: 'Why this stop matters', th: 'ทำไมจึงควรแวะที่นี่', zh: '为什么值得了解' },
    visit: { en: 'How to plan your visit', th: 'วางแผนการเดินทาง', zh: '如何安排游览' },
    route: { en: 'Combine it with the River Kwai Bridge', th: 'จัดเส้นทางร่วมกับสะพานข้ามแม่น้ำแคว', zh: '与桂河大桥如何串联' },
  };
  const route = {
    en: p.map ? 'Check the exact location on the dedicated map below. Compare travel time from the bridge and leave enough time for your return; outlying attractions may need a separate trip.' : 'Start at the bridge for orientation, then use the related location and transport guides to build a realistic route. Do not plan around unconfirmed train departures.',
    th: p.map ? 'ตรวจสอบตำแหน่งจากแผนที่เฉพาะด้านล่าง เทียบเวลาเดินทางจากสะพานและเผื่อขากลับ เพราะบางจุดต้องจัดเป็นทริปแยก' : 'เริ่มจากสะพานเพื่อดูพื้นที่ แล้วอ่านคู่มือที่ตั้งและการเดินทางประกอบ อย่าวางแผนโดยใช้เวลารถไฟที่ยังไม่ยืนยัน',
    zh: p.map ? '请用下方该地点的专属地图核对位置，比较从大桥出发的交通时间并留足返程；偏远景点可能需要单独一程。' : '先在大桥熟悉环境，再结合本站地图与交通指南规划可行路线；不要依据未经核对的列车时刻安排行程。',
  };
  return {
    slug: p.slug,
    mapQuery: p.map,
    steward: detail?.steward,
    image: p.slug === 'erawan-national-park' ? '/nearby/erawan-waterfall.jpg' : photoSlugs.has(p.slug) ? `/nearby/${p.slug}.jpg` : undefined,
    title: value((lang, i) => p.name[i] + titleSuffix[lang]),
    h1: value((_, i) => p.name[i]),
    description: value((lang, i) => (p.story[i] + ' ' + p.visit[i]).slice(0, lang === 'en' ? 158 : 145)),
    intro: value((_, i) => p.story[i]),
    sections: value((lang, i) => [
      ...(detail ? [
        { heading: heads.context[lang], body: detail.features[lang] },
        { heading: { en: 'What to photograph and notice', th: 'จุดสังเกตและมุมถ่ายภาพ', zh: '观察重点与摄影机位' }[lang], body: detail.photo[lang] },
      ] : []),
      ...(guideExtra[p.slug] ? [{ heading: { en: 'Practical details for this guide', th: 'รายละเอียดที่ควรรู้ก่อนเดินทาง', zh: '这篇指南的实用安排' }[lang], body: guideExtra[p.slug][lang] }] : []),
      { heading: heads.visit[lang], body: p.visit[i] },
      { heading: heads.route[lang], body: route[lang] },
    ]),
    faq: value((lang, i) => [
      {
        q: { en: `What should I know before visiting ${p.name[0]}?`, th: `ควรรู้อะไรก่อนเที่ยว${p.name[1]}?`, zh: `参观${p.name[2]}前需要知道什么？` }[lang],
        a: p.visit[i],
      },
      {
        q: { en: 'Can I visit this together with the River Kwai Bridge?', th: 'เที่ยวพร้อมสะพานข้ามแม่น้ำแควได้ไหม?', zh: '能与桂河大桥安排在同一天吗？' }[lang],
        a: route[lang],
      },
    ]),
    related: (index < 18 || p.slug === 'kanchanaburi-night-market') ? [...(nearbyAttractionLinks[p.slug] ?? []), 'history', 'location-map', 'visiting-guide', 'train-guide'] : ['location-map', 'visiting-guide', 'bangkok-to-river-kwai-bridge', 'history'],
  };
});
