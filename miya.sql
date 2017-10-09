/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : miya

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-09 20:01:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(2) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `name` varchar(255) NOT NULL COMMENT '商品名字',
  `price` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `pianyi_price` decimal(10,2) DEFAULT NULL COMMENT '优惠后的价格',
  `imgurl` varchar(255) DEFAULT NULL COMMENT '图片路径',
  `qty` int(11) DEFAULT NULL COMMENT '数量',
  `description` varchar(255) DEFAULT NULL COMMENT '描述',
  `brand` varchar(255) DEFAULT NULL COMMENT '品牌',
  `add-time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '商品添加的时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('19', '盗版洗衣液', '86.00', '39.00', 'img/bwb.jpg', '20', '花王 Merries 纸尿裤NB90片*2', ' 花王 Merries', '2017-10-07 13:55:20');
INSERT INTO `list` VALUES ('25', '疯狂纸尿裤', '213.00', '346.00', 'img/hwllk.jpg', '20', '花王 Merries 【包邮包税】纸尿裤M64*5 （11kg）', ' 花王 Merries', '2017-10-08 15:00:29');
INSERT INTO `list` VALUES ('15', '杯具熊儿童保温杯', '238.00', '119.00', 'img/bwb3.jpg', '20', '花王 Merries 【包邮包税】纸尿裤S88*2 （4-8kg）', ' 杯具熊 BEDDY BEAR', '2017-10-07 13:55:20');
INSERT INTO `list` VALUES ('16', '好奇铂金纸尿裤S96片', '198.00', '95.00', 'img/bwb2.jpg', '20', '花王 Merries 纸尿裤S82片*2包 （4-8kg）', ' 花王 Merries', '2017-10-07 13:55:20');
INSERT INTO `list` VALUES ('23', '尿', '215.00', '344.00', 'img/huawang4.jpg', '20', '花王 Merries 【包邮包税】纸尿裤M64*3 （9kg）', ' 花王 Merries', '2017-10-08 15:00:29');
INSERT INTO `list` VALUES ('24', '裤', '214.00', '345.00', 'img/huawang5.jpg', '20', '花王 Merries 【包邮包税】纸尿裤M64*4 （10kg）', ' 花王 Merries', '2017-10-08 15:00:29');
INSERT INTO `list` VALUES ('17', '宽口硅胶奶瓶 250ml 绿色', '256.00', '158.00', 'img/bwb4.jpg', '20', '花王 Merries 纸尿裤 S82片 *4包', ' 花王 Merries', '2017-10-07 13:55:20');
INSERT INTO `list` VALUES ('22', '纸', '216.00', '343.00', 'img/huawang3.jpg', '20', '花王 Merries 【包邮包税】纸尿裤M64*2 （8kg）', ' 花王 Merries', '2017-10-08 15:00:29');
INSERT INTO `list` VALUES ('18', '五个小卡车湿巾80片*9', '315.00', '99.00', 'img/bwb5.jpg', '20', '花王 Merries 【包邮包税】纸尿裤 M64 （6-11kg）', ' 花王 Merries', '2017-10-07 13:55:20');
INSERT INTO `list` VALUES ('20', '疯', '218.00', '341.00', 'img/huawang1.jpg', '20', '花王 Merries 【包邮包税】纸尿裤M64 （6kg）', ' 花王 Merries', '2017-10-08 15:00:29');
INSERT INTO `list` VALUES ('21', '狂', '217.00', '342.00', 'img/huawang2.jpg', '20', '花王 Merries 【包邮包税】纸尿裤M64*1 （7kg）', ' 花王 Merries', '2017-10-08 15:00:29');

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT '' COMMENT '帐号',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `addtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES ('1', '4334343', null, '2017-10-08 01:04:34');
INSERT INTO `register` VALUES ('2', '4334343', null, '2017-10-08 01:06:03');
INSERT INTO `register` VALUES ('3', 'laohuang', null, '2017-10-08 01:06:20');
INSERT INTO `register` VALUES ('4', '111', '698d51a19d8a121ce581499d7b701668', '2017-10-08 01:11:14');
INSERT INTO `register` VALUES ('5', '123', 'b59c67bf196a4758191e42f76670ceba', '2017-10-08 01:13:20');
INSERT INTO `register` VALUES ('6', '12', '202cb962ac59075b964b07152d234b70', '2017-10-08 10:55:56');
INSERT INTO `register` VALUES ('7', '11', '698d51a19d8a121ce581499d7b701668', '2017-10-08 11:00:03');
INSERT INTO `register` VALUES ('8', '1111', '698d51a19d8a121ce581499d7b701668', '2017-10-08 11:09:44');
INSERT INTO `register` VALUES ('9', '111111', '96e79218965eb72c92a549dd5a330112', '2017-10-08 18:09:32');
