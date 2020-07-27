/**
 * 这是模型的静态常量配置
 * 和货架的配置（一般要从数据库读取，这里仅做演示）
 * @author 谢宁, Created on 2020-01-07
 */
/** ***************************************************************** */

var PLANE_LENGTH = 140;  //货架板面长度
var PLANE_WIDTH = 200;   //货架板面宽度
var PLANE_HEIGHT = 2;   //货架板面高度
var HOLDER_LENGTH = 4;  //支架长度
var HOLDER_WIDTH = 6;   //支架宽度
var HOLDER_HEIGHT = 110; //支架高度
var LAYER_NUM = 4;      //货架层数
var COLUMN_NUM = 2;     //货架每层列数
var BOX_SIZE = 64;      //货物的大小(立方体)

//货架数组
var shelf_list = new Array();
// ******************库存西右区域*********************
// 第一排
shelf_list.push({StorageZoneId:'W2',shelfId:'01',shelfName:'1',x:-1550,y:27,z:-2500});
shelf_list.push({StorageZoneId:'W2',shelfId:'01',shelfName:'2',x:-1550,y:27,z:-2200});
shelf_list.push({StorageZoneId:'W2',shelfId:'01',shelfName:'3',x:-1550,y:27,z:-1900});
shelf_list.push({StorageZoneId:'W2',shelfId:'01',shelfName:'4',x:-1550,y:27,z:-1600});
shelf_list.push({StorageZoneId:'W2',shelfId:'01',shelfName:'5',x:-1550,y:27,z:-1300});
shelf_list.push({StorageZoneId:'W2',shelfId:'01',shelfName:'6',x:-1550,y:27,z:-1000});
shelf_list.push({StorageZoneId:'W2',shelfId:'01',shelfName:'7',x:-1550,y:27,z:-700});
shelf_list.push({StorageZoneId:'W2',shelfId:'01',shelfName:'8',x:-1550,y:27,z:-400});
// 第二排
shelf_list.push({StorageZoneId:'W2',shelfId:'02',shelfName:'1',x:-1000,y:27,z:-2500});
shelf_list.push({StorageZoneId:'W2',shelfId:'02',shelfName:'2',x:-1000,y:27,z:-2200});
shelf_list.push({StorageZoneId:'W2',shelfId:'02',shelfName:'3',x:-1000,y:27,z:-1900});
shelf_list.push({StorageZoneId:'W2',shelfId:'02',shelfName:'4',x:-1000,y:27,z:-1600});
shelf_list.push({StorageZoneId:'W2',shelfId:'02',shelfName:'5',x:-1000,y:27,z:-1300});
shelf_list.push({StorageZoneId:'W2',shelfId:'02',shelfName:'6',x:-1000,y:27,z:-1000});
shelf_list.push({StorageZoneId:'W2',shelfId:'02',shelfName:'7',x:-1000,y:27,z:-700});
shelf_list.push({StorageZoneId:'W2',shelfId:'02',shelfName:'8',x:-1000,y:27,z:-400});
// 第三排
shelf_list.push({StorageZoneId:'W2',shelfId:'03',shelfName:'1',x:-800,y:27,z:-2500});
shelf_list.push({StorageZoneId:'W2',shelfId:'03',shelfName:'2',x:-800,y:27,z:-2200});
shelf_list.push({StorageZoneId:'W2',shelfId:'03',shelfName:'3',x:-800,y:27,z:-1900});
shelf_list.push({StorageZoneId:'W2',shelfId:'03',shelfName:'4',x:-800,y:27,z:-1600});
shelf_list.push({StorageZoneId:'W2',shelfId:'03',shelfName:'5',x:-800,y:27,z:-1300});
shelf_list.push({StorageZoneId:'W2',shelfId:'03',shelfName:'6',x:-800,y:27,z:-1000});
shelf_list.push({StorageZoneId:'W2',shelfId:'03',shelfName:'7',x:-800,y:27,z:-700});
shelf_list.push({StorageZoneId:'W2',shelfId:'03',shelfName:'8',x:-800,y:27,z:-400});
// 第四排
shelf_list.push({StorageZoneId:'W2',shelfId:'04',shelfName:'1',x:-200,y:27,z:-2500});
shelf_list.push({StorageZoneId:'W2',shelfId:'04',shelfName:'2',x:-200,y:27,z:-2200});
shelf_list.push({StorageZoneId:'W2',shelfId:'04',shelfName:'3',x:-200,y:27,z:-1900});
shelf_list.push({StorageZoneId:'W2',shelfId:'04',shelfName:'4',x:-200,y:27,z:-1600});
shelf_list.push({StorageZoneId:'W2',shelfId:'04',shelfName:'5',x:-200,y:27,z:-1300});
shelf_list.push({StorageZoneId:'W2',shelfId:'04',shelfName:'6',x:-200,y:27,z:-1000});
shelf_list.push({StorageZoneId:'W2',shelfId:'04',shelfName:'7',x:-200,y:27,z:-700});
shelf_list.push({StorageZoneId:'W2',shelfId:'04',shelfName:'8',x:-200,y:27,z:-400});
// 第五排
shelf_list.push({StorageZoneId:'W2',shelfId:'05',shelfName:'1',x:0,y:27,z:-2500});
shelf_list.push({StorageZoneId:'W2',shelfId:'05',shelfName:'2',x:0,y:27,z:-2200});
shelf_list.push({StorageZoneId:'W2',shelfId:'05',shelfName:'3',x:0,y:27,z:-1900});
shelf_list.push({StorageZoneId:'W2',shelfId:'05',shelfName:'4',x:0,y:27,z:-1600});
shelf_list.push({StorageZoneId:'W2',shelfId:'05',shelfName:'5',x:0,y:27,z:-1300});
shelf_list.push({StorageZoneId:'W2',shelfId:'05',shelfName:'6',x:0,y:27,z:-1000});
shelf_list.push({StorageZoneId:'W2',shelfId:'05',shelfName:'7',x:0,y:27,z:-700});
shelf_list.push({StorageZoneId:'W2',shelfId:'05',shelfName:'8',x:0,y:27,z:-400});
// 第六排
shelf_list.push({StorageZoneId:'W2',shelfId:'06',shelfName:'1',x:700,y:27,z:-2500});
shelf_list.push({StorageZoneId:'W2',shelfId:'06',shelfName:'2',x:700,y:27,z:-2200});
shelf_list.push({StorageZoneId:'W2',shelfId:'06',shelfName:'3',x:700,y:27,z:-1900});
shelf_list.push({StorageZoneId:'W2',shelfId:'06',shelfName:'4',x:700,y:27,z:-1600});
shelf_list.push({StorageZoneId:'W2',shelfId:'06',shelfName:'5',x:700,y:27,z:-1300});
shelf_list.push({StorageZoneId:'W2',shelfId:'06',shelfName:'6',x:700,y:27,z:-1000});
shelf_list.push({StorageZoneId:'W2',shelfId:'06',shelfName:'7',x:700,y:27,z:-700});
shelf_list.push({StorageZoneId:'W2',shelfId:'06',shelfName:'8',x:700,y:27,z:-400});
// 第七排
shelf_list.push({StorageZoneId:'W2',shelfId:'07',shelfName:'1',x:900,y:27,z:-2500});
shelf_list.push({StorageZoneId:'W2',shelfId:'07',shelfName:'2',x:900,y:27,z:-2200});
shelf_list.push({StorageZoneId:'W2',shelfId:'07',shelfName:'3',x:900,y:27,z:-1900});
shelf_list.push({StorageZoneId:'W2',shelfId:'07',shelfName:'4',x:900,y:27,z:-1600});
shelf_list.push({StorageZoneId:'W2',shelfId:'07',shelfName:'5',x:900,y:27,z:-1300});
shelf_list.push({StorageZoneId:'W2',shelfId:'07',shelfName:'6',x:900,y:27,z:-1000});
shelf_list.push({StorageZoneId:'W2',shelfId:'07',shelfName:'7',x:900,y:27,z:-700});
shelf_list.push({StorageZoneId:'W2',shelfId:'07',shelfName:'8',x:900,y:27,z:-400});
// 第八排
shelf_list.push({StorageZoneId:'W2',shelfId:'08',shelfName:'1',x:1500,y:27,z:-2500});
shelf_list.push({StorageZoneId:'W2',shelfId:'08',shelfName:'2',x:1500,y:27,z:-2200});
shelf_list.push({StorageZoneId:'W2',shelfId:'08',shelfName:'3',x:1500,y:27,z:-1900});
shelf_list.push({StorageZoneId:'W2',shelfId:'08',shelfName:'4',x:1500,y:27,z:-1600});
shelf_list.push({StorageZoneId:'W2',shelfId:'08',shelfName:'5',x:1500,y:27,z:-1300});
shelf_list.push({StorageZoneId:'W2',shelfId:'08',shelfName:'6',x:1500,y:27,z:-1000});
shelf_list.push({StorageZoneId:'W2',shelfId:'08',shelfName:'7',x:1500,y:27,z:-700});
shelf_list.push({StorageZoneId:'W2',shelfId:'08',shelfName:'8',x:1500,y:27,z:-400});
// ******************库存西左号区域*********************
// 第一排
shelf_list.push({StorageZoneId:'W1',shelfId:'01',shelfName:'1',x:-1550,y:27,z:-5400});
shelf_list.push({StorageZoneId:'W1',shelfId:'01',shelfName:'2',x:-1550,y:27,z:-5100});
shelf_list.push({StorageZoneId:'W1',shelfId:'01',shelfName:'3',x:-1550,y:27,z:-4800});
shelf_list.push({StorageZoneId:'W1',shelfId:'01',shelfName:'4',x:-1550,y:27,z:-4500});
shelf_list.push({StorageZoneId:'W1',shelfId:'01',shelfName:'5',x:-1550,y:27,z:-4200});
shelf_list.push({StorageZoneId:'W1',shelfId:'01',shelfName:'6',x:-1550,y:27,z:-3900});
shelf_list.push({StorageZoneId:'W1',shelfId:'01',shelfName:'7',x:-1550,y:27,z:-3600});
shelf_list.push({StorageZoneId:'W1',shelfId:'01',shelfName:'8',x:-1550,y:27,z:-3300});

// 第二排
shelf_list.push({StorageZoneId:'W1',shelfId:'02',shelfName:'1',x:-1000,y:27,z:-5400});
shelf_list.push({StorageZoneId:'W1',shelfId:'02',shelfName:'2',x:-1000,y:27,z:-5100});
shelf_list.push({StorageZoneId:'W1',shelfId:'02',shelfName:'3',x:-1000,y:27,z:-4800});
shelf_list.push({StorageZoneId:'W1',shelfId:'02',shelfName:'4',x:-1000,y:27,z:-4500});
shelf_list.push({StorageZoneId:'W1',shelfId:'02',shelfName:'5',x:-1000,y:27,z:-4200});
shelf_list.push({StorageZoneId:'W1',shelfId:'02',shelfName:'6',x:-1000,y:27,z:-3900});
shelf_list.push({StorageZoneId:'W1',shelfId:'02',shelfName:'7',x:-1000,y:27,z:-3600});
shelf_list.push({StorageZoneId:'W1',shelfId:'02',shelfName:'8',x:-1000,y:27,z:-3300});
// 第三排
shelf_list.push({StorageZoneId:'W1',shelfId:'03',shelfName:'1',x:-800,y:27,z:-5400});
shelf_list.push({StorageZoneId:'W1',shelfId:'03',shelfName:'2',x:-800,y:27,z:-5100});
shelf_list.push({StorageZoneId:'W1',shelfId:'03',shelfName:'3',x:-800,y:27,z:-4800});
shelf_list.push({StorageZoneId:'W1',shelfId:'03',shelfName:'4',x:-800,y:27,z:-4500});
shelf_list.push({StorageZoneId:'W1',shelfId:'03',shelfName:'5',x:-800,y:27,z:-4200});
shelf_list.push({StorageZoneId:'W1',shelfId:'03',shelfName:'6',x:-800,y:27,z:-3900});
shelf_list.push({StorageZoneId:'W1',shelfId:'03',shelfName:'7',x:-800,y:27,z:-3600});
shelf_list.push({StorageZoneId:'W1',shelfId:'03',shelfName:'8',x:-800,y:27,z:-3300});
// 第四排
shelf_list.push({StorageZoneId:'W1',shelfId:'04',shelfName:'1',x:-200,y:27,z:-5400});
shelf_list.push({StorageZoneId:'W1',shelfId:'04',shelfName:'2',x:-200,y:27,z:-5100});
shelf_list.push({StorageZoneId:'W1',shelfId:'04',shelfName:'3',x:-200,y:27,z:-4800});
shelf_list.push({StorageZoneId:'W1',shelfId:'04',shelfName:'4',x:-200,y:27,z:-4500});
shelf_list.push({StorageZoneId:'W1',shelfId:'04',shelfName:'5',x:-200,y:27,z:-4200});
shelf_list.push({StorageZoneId:'W1',shelfId:'04',shelfName:'6',x:-200,y:27,z:-3900});
shelf_list.push({StorageZoneId:'W1',shelfId:'04',shelfName:'7',x:-200,y:27,z:-3600});
shelf_list.push({StorageZoneId:'W1',shelfId:'04',shelfName:'8',x:-200,y:27,z:-3300});
// 第五排
shelf_list.push({StorageZoneId:'W1',shelfId:'05',shelfName:'1',x:0,y:27,z:-5400});
shelf_list.push({StorageZoneId:'W1',shelfId:'05',shelfName:'2',x:0,y:27,z:-5100});
shelf_list.push({StorageZoneId:'W1',shelfId:'05',shelfName:'3',x:0,y:27,z:-4800});
shelf_list.push({StorageZoneId:'W1',shelfId:'05',shelfName:'4',x:0,y:27,z:-4500});
shelf_list.push({StorageZoneId:'W1',shelfId:'05',shelfName:'5',x:0,y:27,z:-4200});
shelf_list.push({StorageZoneId:'W1',shelfId:'05',shelfName:'6',x:0,y:27,z:-3900});
shelf_list.push({StorageZoneId:'W1',shelfId:'05',shelfName:'7',x:0,y:27,z:-3600});
shelf_list.push({StorageZoneId:'W1',shelfId:'05',shelfName:'8',x:0,y:27,z:-3300});
// 第六排
shelf_list.push({StorageZoneId:'W1',shelfId:'06',shelfName:'1',x:700,y:27,z:-5400});
shelf_list.push({StorageZoneId:'W1',shelfId:'06',shelfName:'2',x:700,y:27,z:-5100});
shelf_list.push({StorageZoneId:'W1',shelfId:'06',shelfName:'3',x:700,y:27,z:-4800});
shelf_list.push({StorageZoneId:'W1',shelfId:'06',shelfName:'4',x:700,y:27,z:-4500});
shelf_list.push({StorageZoneId:'W1',shelfId:'06',shelfName:'5',x:700,y:27,z:-4200});
shelf_list.push({StorageZoneId:'W1',shelfId:'06',shelfName:'6',x:700,y:27,z:-3900});
shelf_list.push({StorageZoneId:'W1',shelfId:'06',shelfName:'7',x:700,y:27,z:-3600});
shelf_list.push({StorageZoneId:'W1',shelfId:'06',shelfName:'8',x:700,y:27,z:-3300});
// 第七排
shelf_list.push({StorageZoneId:'W1',shelfId:'07',shelfName:'1',x:900,y:27,z:-5400});
shelf_list.push({StorageZoneId:'W1',shelfId:'07',shelfName:'2',x:900,y:27,z:-5100});
shelf_list.push({StorageZoneId:'W1',shelfId:'07',shelfName:'3',x:900,y:27,z:-4800});
shelf_list.push({StorageZoneId:'W1',shelfId:'07',shelfName:'4',x:900,y:27,z:-4500});
shelf_list.push({StorageZoneId:'W1',shelfId:'07',shelfName:'5',x:900,y:27,z:-4200});
shelf_list.push({StorageZoneId:'W1',shelfId:'07',shelfName:'6',x:900,y:27,z:-3900});
shelf_list.push({StorageZoneId:'W1',shelfId:'07',shelfName:'7',x:900,y:27,z:-3600});
shelf_list.push({StorageZoneId:'W1',shelfId:'07',shelfName:'8',x:900,y:27,z:-3300});
// 第八排
shelf_list.push({StorageZoneId:'W1',shelfId:'08',shelfName:'1',x:1500,y:27,z:-5400});
shelf_list.push({StorageZoneId:'W1',shelfId:'08',shelfName:'2',x:1500,y:27,z:-5100});
shelf_list.push({StorageZoneId:'W1',shelfId:'08',shelfName:'3',x:1500,y:27,z:-4800});
shelf_list.push({StorageZoneId:'W1',shelfId:'08',shelfName:'4',x:1500,y:27,z:-4500});
shelf_list.push({StorageZoneId:'W1',shelfId:'08',shelfName:'5',x:1500,y:27,z:-4200});
shelf_list.push({StorageZoneId:'W1',shelfId:'08',shelfName:'6',x:1500,y:27,z:-3900});
shelf_list.push({StorageZoneId:'W1',shelfId:'08',shelfName:'7',x:1500,y:27,z:-3600});
shelf_list.push({StorageZoneId:'W1',shelfId:'08',shelfName:'8',x:1500,y:27,z:-3300});
// ******************8库东左区域*********************
// 第一排
shelf_list.push({StorageZoneId:'E1',shelfId:'01',shelfName:'1',x:-1550,y:27,z:2000});
shelf_list.push({StorageZoneId:'E1',shelfId:'01',shelfName:'2',x:-1550,y:27,z:1650});
shelf_list.push({StorageZoneId:'E1',shelfId:'01',shelfName:'3',x:-1550,y:27,z:1300});
shelf_list.push({StorageZoneId:'E1',shelfId:'01',shelfName:'4',x:-1550,y:27,z:950});
shelf_list.push({StorageZoneId:'E1',shelfId:'01',shelfName:'5',x:-1550,y:27,z:600});
shelf_list.push({StorageZoneId:'E1',shelfId:'01',shelfName:'6',x:-1550,y:27,z:250});
// 第二排
shelf_list.push({StorageZoneId:'E1',shelfId:'02',shelfName:'1',x:-1000,y:27,z:2000});
shelf_list.push({StorageZoneId:'E1',shelfId:'02',shelfName:'2',x:-1000,y:27,z:1650});
shelf_list.push({StorageZoneId:'E1',shelfId:'02',shelfName:'3',x:-1000,y:27,z:1300});
shelf_list.push({StorageZoneId:'E1',shelfId:'02',shelfName:'4',x:-1000,y:27,z:950});
shelf_list.push({StorageZoneId:'E1',shelfId:'02',shelfName:'5',x:-1000,y:27,z:600});
shelf_list.push({StorageZoneId:'E1',shelfId:'02',shelfName:'6',x:-1000,y:27,z:250});
// 第三排
shelf_list.push({StorageZoneId:'E1',shelfId:'03',shelfName:'1',x:-800,y:27,z:2000});
shelf_list.push({StorageZoneId:'E1',shelfId:'03',shelfName:'2',x:-800,y:27,z:1650});
shelf_list.push({StorageZoneId:'E1',shelfId:'03',shelfName:'3',x:-800,y:27,z:1300});
shelf_list.push({StorageZoneId:'E1',shelfId:'03',shelfName:'4',x:-800,y:27,z:950});
shelf_list.push({StorageZoneId:'E1',shelfId:'03',shelfName:'5',x:-800,y:27,z:600});
shelf_list.push({StorageZoneId:'E1',shelfId:'03',shelfName:'6',x:-800,y:27,z:250});
// 第四排
shelf_list.push({StorageZoneId:'E1',shelfId:'04',shelfName:'1',x:-200,y:27,z:2000});
shelf_list.push({StorageZoneId:'E1',shelfId:'04',shelfName:'2',x:-200,y:27,z:1650});
shelf_list.push({StorageZoneId:'E1',shelfId:'04',shelfName:'3',x:-200,y:27,z:1300});
shelf_list.push({StorageZoneId:'E1',shelfId:'04',shelfName:'4',x:-200,y:27,z:950});
shelf_list.push({StorageZoneId:'E1',shelfId:'04',shelfName:'5',x:-200,y:27,z:600});
shelf_list.push({StorageZoneId:'E1',shelfId:'04',shelfName:'6',x:-200,y:27,z:250});
// 第五排
shelf_list.push({StorageZoneId:'E1',shelfId:'05',shelfName:'1',x:0,y:27,z:2000});
shelf_list.push({StorageZoneId:'E1',shelfId:'05',shelfName:'2',x:0,y:27,z:1650});
shelf_list.push({StorageZoneId:'E1',shelfId:'05',shelfName:'3',x:0,y:27,z:1300});
shelf_list.push({StorageZoneId:'E1',shelfId:'05',shelfName:'4',x:0,y:27,z:950});
shelf_list.push({StorageZoneId:'E1',shelfId:'05',shelfName:'5',x:0,y:27,z:600});
shelf_list.push({StorageZoneId:'E1',shelfId:'05',shelfName:'6',x:0,y:27,z:250});
// 第六排
shelf_list.push({StorageZoneId:'E1',shelfId:'06',shelfName:'1',x:700,y:27,z:2000});
shelf_list.push({StorageZoneId:'E1',shelfId:'06',shelfName:'2',x:700,y:27,z:1650});
shelf_list.push({StorageZoneId:'E1',shelfId:'06',shelfName:'3',x:700,y:27,z:1300});
shelf_list.push({StorageZoneId:'E1',shelfId:'06',shelfName:'4',x:700,y:27,z:950});
shelf_list.push({StorageZoneId:'E1',shelfId:'06',shelfName:'5',x:700,y:27,z:600});
shelf_list.push({StorageZoneId:'E1',shelfId:'06',shelfName:'6',x:700,y:27,z:250});
// 第七排 
shelf_list.push({StorageZoneId:'E1',shelfId:'07',shelfName:'1',x:900,y:27,z:2000});
shelf_list.push({StorageZoneId:'E1',shelfId:'07',shelfName:'2',x:900,y:27,z:1650});
shelf_list.push({StorageZoneId:'E1',shelfId:'07',shelfName:'3',x:900,y:27,z:1300});
shelf_list.push({StorageZoneId:'E1',shelfId:'07',shelfName:'4',x:900,y:27,z:950});
shelf_list.push({StorageZoneId:'E1',shelfId:'07',shelfName:'5',x:900,y:27,z:600});
shelf_list.push({StorageZoneId:'E1',shelfId:'07',shelfName:'6',x:900,y:27,z:250});
// 第八排
shelf_list.push({StorageZoneId:'E1',shelfId:'08',shelfName:'1',x:1500,y:27,z:2000});
shelf_list.push({StorageZoneId:'E1',shelfId:'08',shelfName:'2',x:1500,y:27,z:1650});
shelf_list.push({StorageZoneId:'E1',shelfId:'08',shelfName:'3',x:1500,y:27,z:1300});
shelf_list.push({StorageZoneId:'E1',shelfId:'08',shelfName:'4',x:1500,y:27,z:950});
shelf_list.push({StorageZoneId:'E1',shelfId:'08',shelfName:'5',x:1500,y:27,z:600});
shelf_list.push({StorageZoneId:'E1',shelfId:'08',shelfName:'6',x:1500,y:27,z:250});
// ******************8库存3号东左区域*********************
// 第六排
shelf_list.push({StorageZoneId:'E2',shelfId:'01',shelfName:'1',x:700,y:27,z:2900});
shelf_list.push({StorageZoneId:'E2',shelfId:'01',shelfName:'2',x:700,y:27,z:3210});
shelf_list.push({StorageZoneId:'E2',shelfId:'01',shelfName:'3',x:700,y:27,z:3520});
// 第七排
shelf_list.push({StorageZoneId:'E2',shelfId:'02',shelfName:'1',x:900,y:27,z:2900});
shelf_list.push({StorageZoneId:'E2',shelfId:'02',shelfName:'2',x:900,y:27,z:3210});
shelf_list.push({StorageZoneId:'E2',shelfId:'02',shelfName:'3',x:900,y:27,z:3520});
// 第八排
shelf_list.push({StorageZoneId:'E2',shelfId:'03',shelfName:'1',x:1500,y:27,z:2900});
shelf_list.push({StorageZoneId:'E2',shelfId:'03',shelfName:'2',x:1500,y:27,z:3210});
shelf_list.push({StorageZoneId:'E2',shelfId:'03',shelfName:'3',x:1500,y:27,z:3520});


function GET_PLANE_LENGTH(){
  return PLANE_LENGTH;
}

function GET_PLANE_WIDTH(){
  return PLANE_WIDTH;
}

function GET_PLANE_HEIGHT(){
  return PLANE_HEIGHT;
}

function GET_HOLDER_LENGTH(){
  return HOLDER_LENGTH;
}

function GET_HOLDER_WIDTH(){
  return HOLDER_WIDTH;
}

function GET_HOLDER_HEIGHT(){
  return HOLDER_HEIGHT;
}

function GET_LAYER_NUM(){
  return LAYER_NUM;
}

function GET_COLUMN_NUM(){
  return COLUMN_NUM;
}

function GET_BOX_SIZE(){
  return BOX_SIZE;
}

function GET_SHELF_LIST(){
  return shelf_list;
}
