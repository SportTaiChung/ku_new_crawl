import json
import unittest
import action as Action
import datetime
import time
from upload import init_session, upload_data

testFirstData = '{"action":"cst","sport":11,"mode":2,"type":1,"menu":{"list":[{"type":54,"count":[2]},{"type":11,"count":[11,5,0,0,0,0,1]},{"type":12,"count":[2,1,0,0,0]},{"type":14,"count":[1,0,0,0]},{"type":16,"count":[3,2,2,0]},{"type":21,"count":[3,3,2,0]}]},"ally":[["11_8455_0_2","白俄羅斯西區聯賽",130031000,11,11],["11_6935_0_2","白俄羅斯區域聯賽A",130032000,11,11],["11_6622_98_2","ACL足球 - 2X10分鐘",140001010,11,11],["11_6370_99_2","RPL男子足球 - 2X12分鐘",140008011,11,11],["11_6445_99_2","德國甲組業餘LFL男子足球 - 2X12分鐘",800014011,11,11],["11_6488_98_2","USSR男子足球 - 2X10分鐘",800021010,11,11],["11_6685_100_2","俄羅斯大學男子足球 - 2X15分鐘",800033012,11,11],["11_7001_98_2","MLS足球 - 2X10分鐘",800045010,11,11],["11_7043_98_2","白俄羅斯SHORT足球聯賽I - 2X10分鐘",800050010,11,11],["11_7958_99_2","APL足球 - 2X12分鐘",800055011,11,11]],"allyIndex":["11_8455_0_2","11_6935_0_2","11_6622_98_2","11_6370_99_2","11_6445_99_2","11_6488_98_2","11_6685_100_2","11_7001_98_2","11_7043_98_2","11_7958_99_2"],"game":[["112590589","11_8455_0_2",["宇宙明斯克"],["阿里昂斯"],"","",[""],[""],1,"2022/06/06 11:30","2022/06/06 12:31:23","3","","3",0,1,"2022/06/06","5088FB8C9552F769",0,"45",1],["112590609","11_6935_0_2",["平斯克"],["新波洛茨克"],"","",[""],[""],1,"2022/06/06 12:40","2022/06/06 12:47:19","1","","",0,1,"2022/06/07","23B8FD572BB6311D",0,"45",1],["112590613","11_6622_98_2",["巴黎聖日門-ACL"],["祖雲達斯-ACL"],"","",[""],[""],1,"2022/06/06 12:50","2022/06/06 12:49:51","1","","",0,1,"2022/06/07","047667DE6A356F65",0,"10",1],["112590606","11_6370_99_2",["莫斯科火車頭業餘"],["莫斯科斯巴達業餘"],"","",[""],[""],1,"2022/06/06 12:28","2022/06/06 12:42:11","3","","",0,1,"2022/06/07","2D68BB50759A88FB",0,"12",1],["112590602","11_6445_99_2",["波鴻業餘"],["柏林迪那摩業餘"],"","",[""],[""],1,"2022/06/06 12:23","2022/06/06 12:44:35","3","","",0,1,"2022/06/07","C759875A97575D5F",0,"12",1],["112590605","11_6445_99_2",["漢堡業餘"],["拜仁慕尼黑業餘"],"","",[""],[""],1,"2022/06/06 12:30","2022/06/06 12:42:11","3","","",0,1,"2022/06/07","9C75A917B3548FCA",0,"12",1],["112590612","11_6488_98_2",["烏克蘭業餘"],["哈薩克斯坦業餘"],"","",[""],[""],1,"2022/06/06 12:48","2022/06/06 12:49:31","1","","",0,1,"2022/06/07","3D24F026CCDBCDAD",0,"10",1],["112590611","11_6685_100_2",["歷史學院"],["經濟學院"],"","",[""],[""],1,"2022/06/06 12:40","2022/06/06 12:44:11","1","","",0,1,"2022/06/07","6FCF0A2431C6F9CC",0,"15",1],["112590610","11_7001_98_2",["華盛頓特區聯業餘"],["明尼蘇達聯業餘"],"","",[""],[""],1,"2022/06/06 12:40","2022/06/06 12:49:38","3","","",0,1,"2022/06/07","4A4418D68C154976",0,"10",1],["112590608","11_7043_98_2",["斯莫列維奇業餘"],["特蘭斯邁業餘"],"","",[""],[""],1,"2022/06/06 12:36","2022/06/06 12:46:33","3","","",0,1,"2022/06/07","0329EEE31A898611",0,"10",1],["112590600","11_7958_99_2",["查爾頓業餘"],["西布朗業餘"],"","",[""],[""],1,"2022/06/06 12:30","2022/06/06 12:43:11","3","","",0,1,"2022/06/07","F3542E922DD2B9CE",0,"12",1]],"score": {"112590589":["2","3","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,12,"2","3"],"112590609":["0","0","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,25,"0","0"],"112590613":["0","1","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,16,"0","1"],"112590606":["2","6","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,0,"2","6"],"112590602":["1","4","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,2,"1","4"],"112590605":["1","2","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,0,"1","2"],"112590612":["2","1","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,16,"2","1"],"112590611":["2","0","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,16,"2","0"],"112590610":["0","2","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,8,"0","2"],"112590608":["5","3","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,8,"5","3"],"112590600":["3","4","","",[],[],0,0,["0","0","0","0","0","0"],["0","0","0","0","0","0"],0,0,"3","4"]},"odds":[["112590589",["11001","2","3","0701","07",1,0,10,"",1,0,0,"1","","2",""],["11001","2","3","0702","07",1,0,10,"",0,0,0,"1","","2",""],["11001","2","3","0703","07",1,0,10,"",1,0,0,"1","","2",""],["11001","2","3","0704","07",1,0,10,"",0,0,0,"1","","2",""],["11001","2","3","0705","07",1,0,10,"",0,0,0,"1","","2",""],["11002","2","3","0701","07",1,0,10,"",1,0,0,"1","","2",""],["11002","2","3","0702","07",1,0,10,"",1,0,0,"1","","2",""],["11002","2","3","0703","07",1,0,10,"",1,0,0,"1","","2",""],["11002","2","3","0704","07",1,0,10,"",1,0,0,"1","","2",""],["11002","2","3","0705","07",1,0,10,"",1,0,0,"1","","2",""],["11003","2","3","0701","07",1,0,10,"",1,0,0,"1","","2","","3",""]],["112590609",["11001","0","0","0703","07",1,0,10,"250",1,0,0,"1",1.190,"2",0.690],["11101","0","0","0701","07",1,0,10,"0",1,0,0,"1",1.060,"2",0.800],["11101","0","0","0702","07",1,0,10,"250",0,0,0,"1",0.780,"2",1.070],["11001","0","0","0701","07",1,0,10,"250",0,0,0,"1",0.860,"2",0.990],["11001","0","0","0702","07",1,0,10,"0",1,0,0,"1",1.030,"2",0.820],["11001","0","0","0704","07",1,0,10,"750",0,0,0,"1",0.600,"2",1.330],["11001","0","0","0705","07",1,0,10,"750",1,0,0,"1",1.610,"2",0.480],["11002","0","0","0701","07",1,0,10,"7500",1,0,0,"1",0.910,"2",0.940],["11002","0","0","0702","07",1,0,10,"7750",1,0,0,"1",1.060,"2",0.790],["11002","0","0","0705","07",1,0,10,"7000",1,0,0,"1",0.610,"2",1.320],["11003","0","0","0701","07",1,0,10,"0",1,0,0,"1",1.290,"2",1.056,"3",5.330],["11101","0","0","0703","07",1,0,10,"250",1,0,0,"1",1.350,"2",0.600],["11101","0","0","0704","07",1,0,10,"750",0,0,0,"1",0.440,"2",1.730],["11101","0","0","0705","07",1,0,10,"750",1,0,0,"1",2.190,"2",0.340],["11102","0","0","0701","07",1,0,10,"3250",1,0,0,"1",1.020,"2",0.830],["11102","0","0","0703","07",1,0,10,"3500",1,0,0,"1",1.260,"2",0.650],["11102","0","0","0704","07",1,0,10,"2750",1,0,0,"1",0.580,"2",1.390],["11102","0","0","0705","07",1,0,10,"3750",1,0,0,"1",1.580,"2",0.490],["11103","0","0","0701","07",1,0,10,"0",1,0,0,"1",1.540,"2",1.230,"3",2.990],["11002","0","0","0703","07",1,0,10,"7250",1,0,0,"1",0.760,"2",1.100],["11002","0","0","0704","07",1,0,10,"8000",1,0,0,"1",1.250,"2",0.650],["11102","0","0","0702","07",1,0,10,"3000",1,0,0,"1",0.760,"2",1.110]],["112590613",["11001","0","1","0701","07",1,0,14,"",1,0,0,"1","","2",""],["11001","0","1","0702","07",1,0,14,"",1,0,0,"1","","2",""],["11001","0","1","0703","07",1,0,14,"",0,0,0,"1","","2",""],["11002","0","1","0701","07",1,0,14,"",1,0,0,"1","","2",""],["11002","0","1","0702","07",1,0,14,"",1,0,0,"1","","2",""],["11002","0","1","0703","07",1,0,14,"",1,0,0,"1","","2",""],["11003","0","1","0701","07",1,0,14,"",1,0,0,"1","","2","","3",""],["11101","0","1","0701","07",1,0,14,"",1,0,0,"1","","2",""],["11101","0","1","0702","07",1,0,14,"",1,0,0,"1","","2",""],["11101","0","1","0703","07",1,0,14,"",0,0,0,"1","","2",""],["11102","0","1","0701","07",1,0,14,"",1,0,0,"1","","2",""],["11102","0","1","0702","07",1,0,14,"",1,0,0,"1","","2",""],["11102","0","1","0703","07",1,0,14,"",1,0,0,"1","","2",""],["11103","0","1","0701","07",1,0,14,"",1,0,0,"1","","2","","3",""]],["112590602",["11001","1","4","0702","07",1,0,12,"",1,0,0,"1","","2",""],["11002","1","4","0702","07",1,0,12,"",1,0,0,"1","","2",""]],["112590612",["11001","2","1","0701","07",1,0,12,"0",1,0,0,"1",0.920,"2",0.920],["11001","2","1","0702","07",1,0,12,"250",1,0,0,"1",1.050,"2",0.810],["11001","2","1","0703","07",1,0,12,"250",0,0,0,"1",0.810,"2",1.050],["11101","2","1","0701","07",1,0,12,"0",1,0,0,"1",0.920,"2",0.920],["11002","2","1","0701","07",1,0,12,"14500",1,0,0,"1",1.040,"2",0.800],["11002","2","1","0702","07",1,0,12,"14250",1,0,0,"1",0.910,"2",0.940],["11002","2","1","0703","07",1,0,12,"14750",1,0,0,"1",1.160,"2",0.710],["11003","2","1","0701","07",1,0,12,"0",1,0,0,"1",0.656,"2",1.820,"3",7.190],["11101","2","1","0702","07",1,0,12,"250",1,0,0,"1",1.160,"2",0.720],["11101","2","1","0703","07",1,0,12,"250",0,0,0,"1",0.720,"2",1.160],["11102","2","1","0701","07",1,0,12,"7000",1,0,0,"1",0.930,"2",0.910],["11102","2","1","0702","07",1,0,12,"7250",1,0,0,"1",1.170,"2",0.700],["11102","2","1","0703","07",1,0,12,"7500",1,0,0,"1",1.430,"2",0.500],["11103","2","1","0701","07",1,0,12,"0",1,0,0,"1",0.540,"2",3.100,"3",4.300]],["112590611",["11101","2","0","0702","07",1,0,12,"0",1,0,0,"1",1.270,"2",0.640],["11001","2","0","0701","07",1,0,12,"250",0,0,0,"1",0.860,"2",0.990],["11001","2","0","0702","07",1,0,12,"0",1,0,0,"1",1.060,"2",0.800],["11001","2","0","0703","07",1,0,12,"500",0,0,0,"1",0.680,"2",1.170],["11002","2","0","0701","07",1,0,12,"7750",1,0,0,"1",1.110,"2",0.750],["11002","2","0","0702","07",1,0,12,"7500",1,0,0,"1",0.940,"2",0.920],["11002","2","0","0703","07",1,0,12,"8000",1,0,0,"1",1.360,"2",0.540],["11003","2","0","0701","07",1,0,12,"0",1,0,0,"1",0.295,"2",4.730,"3",6.510],["11101","2","0","0701","07",1,0,12,"250",0,0,0,"1",0.790,"2",1.070],["11102","2","0","0701","07",1,0,12,"3500",1,0,0,"1",0.920,"2",0.920],["11103","2","0","0701","07",1,0,12,"0",1,0,0,"1",0.075,"2",16.000,"3",7.660],["11102","2","0","0702","07",1,0,12,"3750",1,0,0,"1",1.200,"2",0.680],["11101","2","0","0703","07",1,0,12,"500",0,0,0,"1",0.500,"2",1.470],["11102","2","0","0703","07",1,0,12,"4000",1,0,0,"1",1.800,"2",0.350]],["112590610",["11001","0","2","0701","07",1,0,12,"0",1,0,0,"1",0.870,"2",0.980],["11001","0","2","0702","07",1,0,12,"250",1,0,0,"1",1.340,"2",0.590],["11001","0","2","0703","07",1,0,12,"250",0,0,0,"1",0.500,"2",1.460],["11002","0","2","0701","07",1,0,12,"3500",1,0,0,"1",0.990,"2",0.860],["11002","0","2","0702","07",1,0,12,"3750",1,0,0,"1",1.330,"2",0.580],["11002","0","2","0703","07",1,0,12,"3250",1,0,0,"1",0.620,"2",1.270],["11003","0","2","0701","07",1,0,12,"0",1,0,0,"1",9.000,"2",0.048,"3",9.000]],["112590608",["11001","5","3","0701","07",1,0,12,"0",1,0,0,"1",0.930,"2",0.930],["11001","5","3","0702","07",1,0,12,"250",1,0,0,"1",1.480,"2",0.490],["11001","5","3","0703","07",1,0,12,"250",0,0,0,"1",0.490,"2",1.480],["11002","5","3","0701","07",1,0,12,"9250",1,0,0,"1",0.970,"2",0.880],["11002","5","3","0702","07",1,0,12,"9500",1,0,0,"1",1.370,"2",0.570],["11002","5","3","0703","07",1,0,12,"9000",1,0,0,"1",0.510,"2",1.520],["11003","5","3","0701","07",1,0,12,"0",1,0,0,"1",0.020,"2",9.000,"3",9.000]]],"ballIndex":[100,54,53,27,26,52,51,11,12,13,14,15,19,16,17,22,23,21,20,18,28,24],"limit":{"101":{"10001":{"obl":"10","gbm":"3000","cwm":"1000000","enable":1}},"112":{"11001":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11002":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11003":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11004":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11011":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11012":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11013":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11014":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11015":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11016":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11021":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11022":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11023":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11024":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11061":{"obl":"100","gbm":"15000","cwm":"3000000","enable":1,"obm":"15000"},"11062":{"obl":"100","gbm":"15000","cwm":"3000000","enable":1,"obm":"15000"},"11063":{"obl":"100","gbm":"15000","cwm":"3000000","enable":1,"obm":"15000"},"11064":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11065":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11066":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11067":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11068":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11069":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11070":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11071":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11101":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11102":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11103":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11104":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11111":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11112":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11113":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11114":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11115":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11116":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11121":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11122":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11123":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11124":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11161":{"obl":"100","gbm":"15000","cwm":"3000000","enable":1,"obm":"15000"},"11162":{"obl":"100","gbm":"15000","cwm":"3000000","enable":1,"obm":"15000"},"11164":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11165":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11167":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11201":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11202":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11203":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11204":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11211":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11212":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11213":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11214":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11221":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11222":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11223":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11224":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11231":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11232":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11233":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11234":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11241":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11242":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11243":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11244":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11251":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11252":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11253":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11254":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11301":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11302":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11303":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11304":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11311":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11312":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11313":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11314":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11321":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11322":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11323":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11324":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11331":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11332":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11333":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11334":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11341":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11342":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11343":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11344":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11351":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11352":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11353":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11354":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11401":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11402":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11403":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11404":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11411":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11412":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11413":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11414":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11421":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11422":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11423":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11424":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11431":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11432":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11433":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11434":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11441":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11442":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11443":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11444":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11451":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11452":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11453":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11454":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11501":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11502":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11503":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11504":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11505":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11506":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11507":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11531":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11551":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11552":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11553":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11554":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11556":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11557":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11571":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11572":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11574":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11576":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11577":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11601":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11602":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11603":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11604":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11605":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11701":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11702":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11703":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11711":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11712":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"},"11713":{"obl":"100","gbm":"15000","cwm":"0","enable":1,"obm":"15000"}},"default":{"10001":{"obl":"10","gbm":"3000","cwm":"1000000","enable":1}}},"zdCount":11,"coin":5,"module":0,"mtv":178,"dc":2,"stick":1,"date":"2022/06/06 12:54:48","group":0,"sn":20797948000}'

class TestActionMethods(unittest.TestCase):

    def test_IsSC(self):
        self.assertTrue(Action.IsSC('sc'))
        self.assertTrue(Action.IsSC('eu'))
        self.assertTrue(Action.IsSC('wd'))
        self.assertTrue(Action.IsSC('ch'))
        self.assertTrue(Action.IsSC('fi'))
        self.assertFalse(Action.IsSC('cs'))
        self.assertFalse(Action.IsSC('bx'))
        self.assertFalse(Action.IsSC('bb'))
        self.assertFalse(Action.IsSC('tt'))
        self.assertFalse(Action.IsSC('tn'))

    def test_AllyNameProcess(self):
        self.assertEqual(Action.AllyNameProcess("12_2423_0_2", "測試"), "測試")
        self.assertEqual(Action.AllyNameProcess("12_2423_0_1", "測試"), "測試")
        self.assertEqual(Action.AllyNameProcess("12_2423_0_3", "測試"), "測試 - 加時賽")

    def test_TransformStatus(self):
        self.assertEqual(Action.TransformStatus("sc", 60), "結束")
        self.assertEqual(Action.TransformStatus("sc", 1), "上半場")
        self.assertEqual(Action.TransformStatus("bb", 151), "50下")

    def test_addZero(self):
        self.assertEqual(Action.addZero(5, 2), "05")
        self.assertEqual(Action.addZero(11, 2), "11")

    #def test_TransformNumToPk(self):
        #self.assertEqual(Action.TransformNumToPk("12001", "1500"), "1.5")
        #self.assertEqual(Action.TransformNumToPk("12101", "1500"), "1.5")
        #self.assertEqual(Action.TransformNumToPk("12102", "117500"), "117.5")
        #self.assertEqual(Action.TransformNumToPk("12002", "238500"), "238.5")

    # def test_ActionFirst(self):
    #     global testFirstData
    #     testDecodeData = testFirstData.decode("utf-8")
    #     testJsonData = json.loads(testDecodeData)
    #     #print(testDecodeData)
    #     Action.ActionFirst(testJsonData)

    def test_onNext(self):
        self._upload_status = True
        mq_url = 'amqp://test:qwerasdf@211.75.222.147:5672/%2F?heartbeat=60&connection_attempts=3&retry_delay=3&socket_timeout=3'
        self.connection, self.channel = init_session(mq_url)

        f = open("raw.log", "r")
        Lines = f.readlines()

        for line in Lines :
            obj = json.loads(line)
            datetime_dt = datetime.datetime.today()
            datetime_dt = datetime_dt + datetime.timedelta(hours=8)
            datetime_str = datetime_dt.strftime("%Y/%m/%d %H:%M:%S")
            obj["date"] = datetime_str
            line = json.dumps(obj)
            gameOddsList, sportType = Action.onNext(line.encode("utf-8"))
            if not gameOddsList == None :
                if self.connection.is_closed or self.channel.is_closed or not self._upload_status:
                    if self.connection.is_open:
                        self.connection.close()
                    self.connection, self.channel = init_session(mq_url)

                print(gameOddsList)
                self._upload_status = upload_data(self.channel, gameOddsList, sportType)
                print(self._upload_status)

            time.sleep(1)
                   
    # def test_Upload(self):
    #     self._upload_status = True
    #     mq_url = 'amqp://test:qwerasdf@211.75.222.147:5672/%2F?heartbeat=60&connection_attempts=3&retry_delay=3&socket_timeout=3'
    #     self.connection, self.channel = init_session(mq_url)
    #     #testDecodeData = testFirstData.decode("utf-8")
    #     testDecodeData = testFirstData
    #     testJsonData = json.loads(testDecodeData)
    #     datetime_dt = datetime.datetime.today()
    #     datetime_dt = datetime_dt + datetime.timedelta(hours=8)
    #     datetime_str = datetime_dt.strftime("%Y-%m-%d %H:%M:%S")[:-3]
    #     testJsonData["date"] = datetime_str
    #     gameOddsList, sportType = Action.ActionFirst(testJsonData)

    #     if self.connection.is_closed or self.channel.is_closed or not self._upload_status:
    #         if self.connection.is_open:
    #             self.connection.close()
    #         self.connection, self.channel = init_session(mq_url)

    #     print(gameOddsList)
    #     self._upload_status = upload_data(self.channel, gameOddsList, sportType)
    #     print(self._upload_status)

if __name__ == '__main__':
    unittest.main()
'''
    def test_TransformRunTime(self):
        self.assertEqual(Action.TransformRunTime("sc", "-60"), "結束")
        self.assertEqual(Action.TransformRunTime("sc", "2022/05/30 00:09:08"), "09:00")
        self.assertEqual(Action.TransformRunTime("sc", ""), "")
        self.assertEqual(Action.TransformRunTime("tt", "-60"), "結束")
        self.assertEqual(Action.TransformRunTime("tn", "-60"), "結束")
        self.assertEqual(Action.TransformRunTime("bb", "-60"), "結束")
        self.assertEqual(Action.TransformRunTime("tn", "2022/05/30 00:09:08"), "09:08")
        self.assertEqual(Action.TransformRunTime("wp", "2022/05/30 00:09:08"), "09:08")
'''

