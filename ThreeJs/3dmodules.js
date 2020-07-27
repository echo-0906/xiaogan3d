// 存放所有引入项目中的模型
/** ***************************************************************** */
//模型材质信息
var planeMat, RackMat, RackMat2, CargoMat, LineMat, RollTexture, RollMat,CargoMat2;//CargoMat2别的货物引入地图需要的变量
//库区信息
var storageZoneSize = 0, storageZoneList = [];
//货架信息
var shelfSize = 0, shelfList = [];
//货位信息
var storageUnitSize = 0, storageUnitList = [];
//货物信息
var cargoSize = 0, cargoList = [], CargosExist;
//创建库区对象
function storageZone(StorageZoneId,StorageZoneName,
    coordinateX,coordinateZ,
    width,length,
    textColor,fontSize,textposition)
{
this.StorageZoneId=StorageZoneId;
this.StorageZoneName=StorageZoneName;
this.coordinateX=coordinateX;
this.coordinateZ=coordinateZ;
this.width=width;
this.length=length;
this.textColor=textColor;
this.fontSize=fontSize;
this.textposition=textposition;
}

// //根据库区编码获取库区对象
// function getStorageZoneById(StorageZoneId) {
//     for(var i = 0; i < storageZoneSize; i++){
//         if(storageZoneList[i].StorageZoneId == StorageZoneId){
//             return storageZoneList[i];
//         }
//     }
// }
//创建货架对象
function shelf(storageZoneId, shelfId, shelfName,
    planeLength, planeWidth, planeHeight,
    holderLength, holderWidth, holderHeight,
    positionX, positionY, positionZ,
    layerNum, columnNum) {
    this.storageZoneId = storageZoneId;
    this.shelfId = shelfId;
    this.shelfName = shelfName;
    this.planeLength = planeLength;
    this.planeWidth = planeWidth;
    this.planeHeight = planeHeight;
    this.holderLength = holderLength;
    this.holderWidth = holderWidth;
    this.holderHeight = holderHeight;
    this.positionX = positionX;
    this.positionY = positionY;
    this.positionZ = positionZ;
    this.layerNum = layerNum;
    this.columnNum = columnNum;
}
//创建货物对象*************************************************
function cargo(batchNo, prodBatchNo, inBatchNo,
    matId, matClassId, matName,
    qty, qtyUom, qty2,
    warehouseId, storageZoneId, storageUnitId,
    positionX , positionY , positionZ,
    length , width , height)
{
this.batchNo=batchNo;
this.prodBatchNo=prodBatchNo;
this.inBatchNo=inBatchNo;
this.matId=matId;
this.matClassId=matClassId;
this.matName=matName;
this.qtyUom=qtyUom;
this.qty2=qty2;
this.warehouseId=warehouseId;
this.storageZoneId=storageZoneId;
this.storageUnitId=storageUnitId;
this.positionX=positionX;
this.positionY=positionY;
this.positionZ=positionZ;
this.length=length;
this.width=width;
this.height=height;
}

// //根据货架编码获取货架对象
// function getShelfById(shelfId) {
//     for (var i = 0; i < shelfSize; i++) {
//         if (shelfList[i].shelfId == shelfId) {
//             return shelfList[i];
//         }
//     }
// }

//创建货位对象
function storageUnit(storageZoneId, shelfId, shelfName,
    inLayerNum, inColumnNum,
    positionX, positionY, positionZ, storageUnitId,storageUnitName) {
    this.storageZoneId = storageZoneId;
    this.shelfId = shelfId;
    this.shelfName = shelfName;
    this.inLayerNum = inLayerNum;
    this.inColumnNum = inColumnNum;
    this.positionX = positionX;
    this.positionY = positionY;
    this.positionZ = positionZ;
    this.storageUnitId = storageUnitId;
    this.storageUnitName=storageUnitName;
}
//根据货架编码获取货架对象
function getShelfById(shelfId,shelfName) {
    for(var i = 0; i < shelfSize; i++){
        if(shelfList[i].shelfId == shelfId&&shelfList[i].shelfName == shelfName){
            return shelfList[i];
        }
    }
}
//根据货架ID、层数、列数获取货位对象
function getStorageUnitById(storageZoneId,shelfId, shelfName,inLayerNum, inColumnNum) {
    for (var i = 0; i < storageUnitSize; i++) {
        if (storageUnitList[i].shelfId== shelfId && storageUnitList[i].inLayerNum == inLayerNum && storageUnitList[i].shelfName ==inColumnNum && storageUnitList[i].storageUnitName == shelfName&& storageUnitList[i].storageZoneId ==storageZoneId) { return storageUnitList[i];//因为列被shelname占用，所以用shelfName这个变量代替
        }
    }
}

// //根据库位编码获取货位对象
// function getStorageUnitByUnitId(storageUnitId,storageUnitName) {
//     for (var i = 0; i < storageUnitSize; i++) {
//         if (storageUnitList[i].storageUnitId == storageUnitId&&storageUnitList[i].storageUnitName == storageUnitName) {
//             return storageUnitList[i];
//         }
//     }
// }
//region 货架货位

/** 放置单层货架 */
/** x,y,z 整个模型在场景中的位置 */
/** plane_x,plane_y,plane_z 货架板面的长高宽 */
/** holder_x,holder_y,holder_z 货架支架的长高宽 */
/** scene,name,num 要添加的场景,货架的名字,单层货架的库位数量 */
function addRack(x,y,z,plane_x,plane_y,plane_z,holder_x,holder_y,holder_z,scene,name,num,hjname) {
    var plane = new THREE.BoxGeometry( plane_x, plane_y, plane_z/num );
    var gz = [];
    for(var i = 0; i < num; i++){
        gz.push( z+325+ plane_x/num/2 + (plane_x/num)*i*2 );//货架和货物面板定位更改处
        var obj = new THREE.Mesh( plane, RackMat );
        obj.position.set( gz[i], y+20, x) ;//面板和支架得位置距离
        var msg = name+"$"+(GET_COLUMN_NUM() - i);
        var namemsg = hjname;
        // var storageUnitId = msg.split("$")[1] + "$" + msg.split("$")[3] + "$" + msg.split("$")[4];
        var storageUnitId =msg.split("$")[1] + "$" + msg.split("$")[2] + "$" + msg.split("$")[3];
        var storageUnitName = namemsg
        //添加货位
        var storageUnit_obj = new storageUnit(
            msg.split("$")[0],
            msg.split("$")[1],
            msg.split("$")[2],
            msg.split("$")[3],
            msg.split("$")[4],
             x, y, gz[i], storageUnitId,storageUnitName);
        storageUnitList.push(storageUnit_obj);
        storageUnitSize++;
        obj.name = "货位"+"$"+msg
        +"货位号"+"$"+hjname;
        scene.add(obj);
    }

    var holder = new THREE.BoxGeometry( holder_x, holder_y, holder_z );
    var obj2 = new THREE.Mesh( holder, RackMat2 );
    var obj3 = new THREE.Mesh( holder, RackMat2 );
    var obj4 = new THREE.Mesh( holder, RackMat2 );
    var obj5 = new THREE.Mesh( holder, RackMat2 );
//四个支架得位置偏移
    obj2.position.set(z+plane_x*2+holder_x*2,y+holder_y/2-plane_y/2,x+plane_z/4+holder_z);
    obj3.position.set(z+plane_x*2+holder_x*2,y+holder_y/2-plane_y/2,x-plane_z/4+holder_z);
    obj4.position.set(z+plane_x*4+holder_x*4,y+holder_y/2-plane_y/2,x+plane_z/4);
    obj5.position.set(z+plane_x*4+holder_x*4,y+holder_y/2-plane_y/2,x-plane_z/4);
    scene.add(obj2);scene.add(obj3);scene.add(obj4);scene.add(obj5);
}

/** 放置一叠货架 */
/** stack_num 货架的叠数 */
function addStackOfRack(x,y,z,plane_x,plane_y,plane_z,holder_x,holder_y,holder_z,scene,name,num,stack_num,hjname) {
    for(var i = 0; i < stack_num; i++){
        //根据y轴方向的值来改变每层之间的高度
        addRack(x,y*(i+1),z,plane_x,plane_y,plane_z,holder_x,holder_y,holder_z,scene,name+"$"+(i+1),num,hjname);
    }
    return false
}

/** 根据货架配置添加货架即摆放货架在仓库的位置 */
function addShelf(scene) {
    var shelf_list = GET_SHELF_LIST();
    shelfSize = shelf_list.length;
    for(var i = 0; i < shelfSize; i++){
        var shelf_obj = new shelf(shelf_list[i].StorageZoneId,
            shelf_list[i].shelfId,
            shelf_list[i].shelfName,
            PLANE_LENGTH,PLANE_WIDTH,PLANE_HEIGHT,
            HOLDER_LENGTH,HOLDER_WIDTH,HOLDER_HEIGHT,
            shelf_list[i].x,
            shelf_list[i].y*4,//货板之间的空隙
            shelf_list[i].z,
            LAYER_NUM,COLUMN_NUM);
        shelfList.push(shelf_obj);
    }

    for(var i = 0;i < shelfSize; i++){
        addStackOfRack(shelfList[i].positionX,
            shelfList[i].positionY,
            shelfList[i].positionZ,
            shelfList[i].planeLength,
            shelfList[i].planeHeight,
            shelfList[i].planeWidth,
            shelfList[i].holderLength,
            shelfList[i].holderHeight,
            shelfList[i].holderWidth,
            scene,
            shelfList[i].storageZoneId+"$"+shelfList[i].shelfId,
            shelfList[i].columnNum,
            shelfList[i].layerNum,
            shelfList[i].shelfName);
    }
}


/** 初始化材质信息 即仓库地上的黄色划线*/
function initMat() {
    planeMat = new THREE.MeshLambertMaterial();

    RackMat = new THREE.MeshLambertMaterial();
    RackMat2 = new THREE.MeshPhongMaterial({color:0x1C86EE});
    CargoMat = new THREE.MeshLambertMaterial();
    CargoMat2 = new THREE.MeshLambertMaterial();//将图片生成一个对象
    LineMat = new THREE.MeshLambertMaterial();

    new THREE.TextureLoader().load( './ThreeJs/images/plane.png', function( map ) {
        planeMat.map = map;
        planeMat.transparent = true;
        planeMat.opacity = 0.8;
        planeMat.needsUpdate = true;
    } );
    new THREE.TextureLoader().load( "./ThreeJs/images/zdy.jpg", function( map ) {//黄色面板
        RackMat.map = map;
        RackMat.needsUpdate = true;
    } );
    new THREE.TextureLoader().load( "./ThreeJs/images/Inkedbox_LI.jpg", function( map ) {//紫色布袋
        CargoMat.map = map;
        CargoMat.needsUpdate = true;
    } );
    new THREE.TextureLoader().load( "./ThreeJs/images/line.png", function( map ) {
        LineMat.map = map;
        LineMat.needsUpdate = true;
    } );
    new THREE.TextureLoader().load( "./ThreeJs/images/box.png", function( map ) {//棕色盒子
        CargoMat2.map = map;
        CargoMat2.needsUpdate = true;
    } );
}
//region 库区
/** 放置虚线框区域和库区名称 */
function addArea(x, z, width, length, scene, name, textColor, font_size, textposition) {
    var geometry = new THREE.PlaneGeometry(width, length);
    var obj = new THREE.Mesh(geometry, planeMat);
    obj.position.set(x, 1.5, z);
    obj.rotation.x = -Math.PI / 2.0;
    obj.name = "库区" + "$" + name.split("$")[1];
    scene.add(obj);
    new THREE.FontLoader().load('./ThreeJs/FZYaoTi_Regular.json', function (font) {
        ////加入立体文字
        var text = new THREE.TextGeometry(name.split("$")[1], {
            // 设定文字字体
            font: font,
            //尺寸
            size: font_size,
            //厚度
            height: 0.01
        });
        text.computeBoundingBox();
        //3D文字材质
        var m = new THREE.MeshStandardMaterial({ color: "#" + textColor });
        var mesh = new THREE.Mesh(text, m)
        if (textposition == "左对齐") {
            mesh.position.x = x - width / 2 + 10;
        } else if (textposition == "居中") {
            mesh.position.x = x - 15;
        } else if (textposition == "右对齐") {
            mesh.position.x = x + width / 2 - 100;
        }
        mesh.position.y = 1.3;
        mesh.position.z = z + length / 2 - 20;
        mesh.rotation.x = -Math.PI / 2.0;
        scene.add(mesh);
    });
}

//region 货物
/** 放置单个货物 */
function addCargo(x,y,z,box_x,box_y,box_z,scene,name,hjname) {
    var geometry = new THREE.BoxGeometry( box_x, box_y, box_z );
    var tab = 2;
        if(tab ==1){
            var obj = new THREE.Mesh( geometry, CargoMat2 );//将货物图片引入进来
            obj.position.set(x,y,z);
            obj.name = name+"$"+hjname;
            scene.add(obj);
        }else if(tab==2){
            var obj = new THREE.Mesh( geometry, CargoMat );//将货物图片引入进来
            obj.position.set(x,y,z);
            obj.name = name+"$"+hjname;
            scene.add(obj);
        }

}

/** 添加单个货位上的货物 */
function addOneUnitCargos(StorageZoneId,shelfId,shelfName,inLayerNum,inColumnNum,scene) {
    var storageUnit = getStorageUnitById(StorageZoneId,shelfId,shelfName,inLayerNum,inColumnNum);
    // var shelf = getShelfById(storageUnit.shelfId);
    var storageUnitid = storageUnit.storageUnitId;
    var storageUnitName = storageUnit.storageUnitName;
    var x = storageUnit.positionZ;
    var y = storageUnit.positionY + GET_BOX_SIZE() 
    var z = storageUnit.positionX;
    addCargo(x,y,z,GET_BOX_SIZE(),GET_BOX_SIZE(),GET_BOX_SIZE(),scene,"货物"+"$"+storageUnitid,"货架"+"$"+storageUnitName)
}
//endregion

// 对货物编号进行判断显示
var tab = 1;
if(tab = 1){


}else if(tab=2){
/** 添加单个货位上的货物 */


}