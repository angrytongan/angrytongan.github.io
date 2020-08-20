'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

const results = [
    { id: 43117686, date: '2020-04-01' },
    { id: 44040753, date: '2020-05-01' },
    { id: 44857244, date: '2020-06-03' },
];

const strokedata_tt20 = [{"id":44857244,"data":[{"p":1234,"t":29},{"p":1150,"t":55},{"p":1142,"t":86},{"p":1160,"t":112},{"p":1160,"t":137},{"p":1157,"t":163},{"p":1124,"t":189},{"p":1141,"t":215},{"p":1139,"t":240},{"p":1140,"t":266},{"p":1145,"t":292},{"p":1155,"t":318},{"p":1159,"t":343},{"p":1157,"t":369},{"p":1157,"t":395},{"p":1157,"t":421},{"p":1140,"t":446},{"p":1155,"t":472},{"p":1154,"t":498},{"p":1156,"t":524},{"p":1158,"t":549},{"p":1157,"t":580},{"p":1152,"t":606},{"p":1143,"t":632},{"p":1154,"t":658},{"p":1152,"t":684},{"p":1151,"t":709},{"p":1151,"t":730},{"p":1151,"t":756},{"p":1167,"t":787},{"p":1161,"t":813},{"p":1148,"t":838},{"p":1144,"t":864},{"p":1155,"t":890},{"p":1155,"t":916},{"p":1150,"t":941},{"p":1155,"t":967},{"p":1146,"t":993},{"p":1151,"t":1019},{"p":1165,"t":1050},{"p":1167,"t":1075},{"p":1153,"t":1101},{"p":1153,"t":1127},{"p":1149,"t":1153},{"p":1151,"t":1179},{"p":1139,"t":1204},{"p":1145,"t":1230},{"p":1147,"t":1261},{"p":1147,"t":1282},{"p":1140,"t":1307},{"p":1141,"t":1333},{"p":1137,"t":1359},{"p":1151,"t":1385},{"p":1156,"t":1411},{"p":1151,"t":1436},{"p":1143,"t":1462},{"p":1149,"t":1488},{"p":1150,"t":1514},{"p":1156,"t":1539},{"p":1152,"t":1570},{"p":1152,"t":1591},{"p":1147,"t":1617},{"p":1155,"t":1643},{"p":1158,"t":1673},{"p":1158,"t":1694},{"p":1155,"t":1720},{"p":1150,"t":1746},{"p":1155,"t":1771},{"p":1152,"t":1797},{"p":1158,"t":1823},{"p":1159,"t":1849},{"p":1161,"t":1875},{"p":1160,"t":1900},{"p":1153,"t":1926},{"p":1146,"t":1952},{"p":1144,"t":1978},{"p":1145,"t":2003},{"p":1145,"t":2029},{"p":1157,"t":2055},{"p":1164,"t":2081},{"p":1173,"t":2107},{"p":1154,"t":2132},{"p":1153,"t":2163},{"p":1153,"t":2189},{"p":1146,"t":2215},{"p":1142,"t":2241},{"p":1147,"t":2267},{"p":1150,"t":2292},{"p":1157,"t":2318},{"p":1155,"t":2344},{"p":1153,"t":2370},{"p":1149,"t":2395},{"p":1145,"t":2421},{"p":1149,"t":2447},{"p":1152,"t":2473},{"p":1152,"t":2498},{"p":1155,"t":2524},{"p":1150,"t":2550},{"p":1159,"t":2576},{"p":1164,"t":2602},{"p":1164,"t":2627},{"p":1164,"t":2653},{"p":1165,"t":2684},{"p":1165,"t":2705},{"p":1155,"t":2730},{"p":1163,"t":2756},{"p":1163,"t":2787},{"p":1158,"t":2812},{"p":1158,"t":2838},{"p":1161,"t":2864},{"p":1146,"t":2890},{"p":1156,"t":2915},{"p":1159,"t":2941},{"p":1147,"t":2967},{"p":1164,"t":2993},{"p":1163,"t":3018},{"p":1154,"t":3044},{"p":1148,"t":3070},{"p":1133,"t":3095},{"p":1150,"t":3121},{"p":1150,"t":3142},{"p":1145,"t":3167},{"p":1149,"t":3193},{"p":1140,"t":3219},{"p":1153,"t":3245},{"p":1148,"t":3270},{"p":1140,"t":3296},{"p":1139,"t":3322},{"p":1144,"t":3347},{"p":1144,"t":3368},{"p":1140,"t":3394},{"p":1141,"t":3419},{"p":1143,"t":3445},{"p":1146,"t":3471},{"p":1148,"t":3496},{"p":1155,"t":3522},{"p":1159,"t":3548},{"p":1147,"t":3573},{"p":1147,"t":3594},{"p":1140,"t":3619},{"p":1142,"t":3645},{"p":1141,"t":3671},{"p":1141,"t":3691},{"p":1150,"t":3717},{"p":1146,"t":3743},{"p":1147,"t":3769},{"p":1159,"t":3794},{"p":1160,"t":3820},{"p":1158,"t":3851},{"p":1158,"t":3871},{"p":1157,"t":3902},{"p":1162,"t":3928},{"p":1175,"t":3953},{"p":1178,"t":3979},{"p":1178,"t":4005},{"p":1165,"t":4031},{"p":1155,"t":4056},{"p":1156,"t":4082},{"p":1165,"t":4108},{"p":1158,"t":4134},{"p":1140,"t":4159},{"p":1157,"t":4185},{"p":1154,"t":4211},{"p":1140,"t":4236},{"p":1137,"t":4262},{"p":1137,"t":4283},{"p":1133,"t":4309},{"p":1132,"t":4334},{"p":1136,"t":4360},{"p":1146,"t":4385},{"p":1140,"t":4411},{"p":1145,"t":4437},{"p":1145,"t":4463},{"p":1148,"t":4488},{"p":1142,"t":4514},{"p":1146,"t":4540},{"p":1149,"t":4566},{"p":1145,"t":4592},{"p":1150,"t":4618},{"p":1153,"t":4643},{"p":1152,"t":4669},{"p":1152,"t":4694},{"p":1162,"t":4720},{"p":1160,"t":4746},{"p":1161,"t":4771},{"p":1161,"t":4792},{"p":1165,"t":4818},{"p":1160,"t":4848},{"p":1160,"t":4869},{"p":1150,"t":4895},{"p":1155,"t":4920},{"p":1153,"t":4946},{"p":1169,"t":4972},{"p":1162,"t":4997},{"p":1153,"t":5023},{"p":1154,"t":5049},{"p":1156,"t":5075},{"p":1147,"t":5100},{"p":1146,"t":5126},{"p":1149,"t":5152},{"p":1149,"t":5172},{"p":1150,"t":5198},{"p":1160,"t":5223},{"p":1148,"t":5249},{"p":1159,"t":5275},{"p":1164,"t":5301},{"p":1161,"t":5327},{"p":1156,"t":5352},{"p":1159,"t":5378},{"p":1158,"t":5404},{"p":1164,"t":5429},{"p":1164,"t":5455},{"p":1151,"t":5481},{"p":1150,"t":5507},{"p":1143,"t":5532},{"p":1137,"t":5558},{"p":1137,"t":5584},{"p":1137,"t":5604},{"p":1150,"t":5630},{"p":1147,"t":5656},{"p":1152,"t":5682},{"p":1140,"t":5707},{"p":1148,"t":5733},{"p":1147,"t":5759},{"p":1156,"t":5784},{"p":1151,"t":5810},{"p":1155,"t":5836},{"p":1151,"t":5861},{"p":1151,"t":5882},{"p":1150,"t":5907},{"p":1157,"t":5933},{"p":1151,"t":5959},{"p":1152,"t":5985},{"p":1158,"t":6010},{"p":1165,"t":6036},{"p":1166,"t":6062},{"p":1166,"t":6083},{"p":1153,"t":6108},{"p":1150,"t":6134},{"p":1150,"t":6160},{"p":1153,"t":6185},{"p":1153,"t":6206},{"p":1163,"t":6232},{"p":1162,"t":6258},{"p":1165,"t":6283},{"p":1172,"t":6309},{"p":1177,"t":6335},{"p":1177,"t":6355},{"p":1154,"t":6381},{"p":1141,"t":6407},{"p":1148,"t":6432},{"p":1157,"t":6458},{"p":1156,"t":6484},{"p":1166,"t":6510},{"p":1167,"t":6535},{"p":1169,"t":6561},{"p":1166,"t":6587},{"p":1166,"t":6607},{"p":1166,"t":6633},{"p":1171,"t":6659},{"p":1170,"t":6684},{"p":1179,"t":6710},{"p":1178,"t":6736},{"p":1183,"t":6762},{"p":1183,"t":6782},{"p":1189,"t":6813},{"p":1189,"t":6834},{"p":1168,"t":6859},{"p":1150,"t":6890},{"p":1158,"t":6916},{"p":1166,"t":6941},{"p":1166,"t":6967},{"p":1167,"t":6993},{"p":1168,"t":7018},{"p":1165,"t":7044},{"p":1170,"t":7070},{"p":1172,"t":7095},{"p":1169,"t":7121},{"p":1169,"t":7142},{"p":1184,"t":7168},{"p":1184,"t":7193},{"p":1156,"t":7219},{"p":1149,"t":7245},{"p":1164,"t":7271},{"p":1164,"t":7291},{"p":1165,"t":7317},{"p":1162,"t":7342},{"p":1168,"t":7368},{"p":1154,"t":7394},{"p":1149,"t":7420},{"p":1159,"t":7445},{"p":1155,"t":7471},{"p":1159,"t":7497},{"p":1159,"t":7522},{"p":1159,"t":7543},{"p":1149,"t":7569},{"p":1155,"t":7595},{"p":1158,"t":7620},{"p":1158,"t":7641},{"p":1156,"t":7667},{"p":1156,"t":7692},{"p":1164,"t":7718},{"p":1164,"t":7744},{"p":1159,"t":7770},{"p":1152,"t":7795},{"p":1152,"t":7816},{"p":1161,"t":7842},{"p":1164,"t":7867},{"p":1155,"t":7893},{"p":1157,"t":7919},{"p":1157,"t":7939},{"p":1169,"t":7965},{"p":1184,"t":7991},{"p":1171,"t":8016},{"p":1171,"t":8037},{"p":1172,"t":8063},{"p":1158,"t":8088},{"p":1151,"t":8114},{"p":1149,"t":8140},{"p":1149,"t":8160},{"p":1140,"t":8186},{"p":1155,"t":8212},{"p":1155,"t":8232},{"p":1146,"t":8258},{"p":1140,"t":8284},{"p":1140,"t":8304},{"p":1134,"t":8330},{"p":1150,"t":8356},{"p":1152,"t":8382},{"p":1152,"t":8402},{"p":1157,"t":8428},{"p":1155,"t":8454},{"p":1143,"t":8479},{"p":1143,"t":8500},{"p":1160,"t":8526},{"p":1153,"t":8546},{"p":1137,"t":8572},{"p":1150,"t":8598},{"p":1152,"t":8624},{"p":1152,"t":8644},{"p":1153,"t":8670},{"p":1149,"t":8695},{"p":1155,"t":8721},{"p":1170,"t":8747},{"p":1165,"t":8773},{"p":1165,"t":8793},{"p":1174,"t":8819},{"p":1162,"t":8845},{"p":1163,"t":8870},{"p":1163,"t":8891},{"p":1160,"t":8917},{"p":1142,"t":8942},{"p":1140,"t":8963},{"p":1143,"t":8989},{"p":1165,"t":9014},{"p":1165,"t":9035},{"p":1149,"t":9061},{"p":1132,"t":9087},{"p":1132,"t":9107},{"p":1135,"t":9133},{"p":1122,"t":9153},{"p":1129,"t":9179},{"p":1140,"t":9205},{"p":1143,"t":9225},{"p":1143,"t":9251},{"p":1136,"t":9277},{"p":1136,"t":9297},{"p":1140,"t":9323},{"p":1133,"t":9349},{"p":1146,"t":9375},{"p":1146,"t":9395},{"p":1139,"t":9421},{"p":1145,"t":9447},{"p":1145,"t":9467},{"p":1139,"t":9493},{"p":1144,"t":9518},{"p":1144,"t":9539},{"p":1139,"t":9565},{"p":1139,"t":9585},{"p":1145,"t":9611},{"p":1141,"t":9637},{"p":1141,"t":9657},{"p":1143,"t":9683},{"p":1143,"t":9703},{"p":1140,"t":9729},{"p":1129,"t":9750},{"p":1133,"t":9775},{"p":1154,"t":9801},{"p":1154,"t":9822},{"p":1145,"t":9847},{"p":1145,"t":9868},{"p":1185,"t":9888},{"p":1185,"t":9909},{"p":1352,"t":9935},{"p":1352,"t":9955},{"p":1334,"t":9981},{"p":1277,"t":10007},{"p":1277,"t":10027},{"p":1216,"t":10053},{"p":1190,"t":10079},{"p":1195,"t":10104},{"p":1195,"t":10125},{"p":1204,"t":10151},{"p":1204,"t":10171},{"p":1216,"t":10197},{"p":1197,"t":10222},{"p":1197,"t":10243},{"p":1198,"t":10269},{"p":1189,"t":10295},{"p":1189,"t":10315},{"p":1180,"t":10341},{"p":1192,"t":10367},{"p":1172,"t":10387},{"p":1182,"t":10408},{"p":1190,"t":10434},{"p":1182,"t":10454},{"p":1136,"t":10480},{"p":1136,"t":10501},{"p":1142,"t":10526},{"p":1142,"t":10546},{"p":1139,"t":10572},{"p":1149,"t":10593},{"p":1152,"t":10619},{"p":1152,"t":10639},{"p":1146,"t":10665},{"p":1146,"t":10685},{"p":1150,"t":10711},{"p":1150,"t":10732},{"p":1141,"t":10753},{"p":1128,"t":10778},{"p":1131,"t":10799},{"p":1126,"t":10824},{"p":1118,"t":10850},{"p":1118,"t":10871},{"p":1128,"t":10897},{"p":1126,"t":10922},{"p":1126,"t":10943},{"p":1125,"t":10968},{"p":1111,"t":10994},{"p":1111,"t":11015},{"p":1117,"t":11040},{"p":1122,"t":11066},{"p":1122,"t":11086},{"p":1130,"t":11112},{"p":1132,"t":11133},{"p":1131,"t":11158},{"p":1121,"t":11184},{"p":1121,"t":11205},{"p":1138,"t":11230},{"p":1138,"t":11251},{"p":1140,"t":11276},{"p":1140,"t":11297},{"p":1145,"t":11323},{"p":1145,"t":11343},{"p":1123,"t":11369},{"p":1123,"t":11390},{"p":1137,"t":11415},{"p":1137,"t":11436},{"p":1147,"t":11456},{"p":1145,"t":11482},{"p":1145,"t":11503},{"p":1129,"t":11529},{"p":1129,"t":11549},{"p":1137,"t":11575},{"p":1137,"t":11595},{"p":1151,"t":11621},{"p":1151,"t":11642},{"p":1141,"t":11662},{"p":1069,"t":11688},{"p":1044,"t":11709},{"p":1041,"t":11735},{"p":1041,"t":11755},{"p":1029,"t":11781},{"p":1029,"t":11801},{"p":1045,"t":11827},{"p":1045,"t":11848},{"p":1025,"t":11874},{"p":1025,"t":11894},{"p":1036,"t":11915},{"p":1042,"t":11941},{"p":1045,"t":11961},{"p":1037,"t":11987}]},{"id":44040753,"data":[{"p":1196,"t":29},{"p":1153,"t":55},{"p":1189,"t":80},{"p":1201,"t":106},{"p":1173,"t":132},{"p":1146,"t":157},{"p":1168,"t":183},{"p":1164,"t":214},{"p":1173,"t":240},{"p":1167,"t":266},{"p":1167,"t":291},{"p":1170,"t":317},{"p":1168,"t":343},{"p":1168,"t":368},{"p":1174,"t":394},{"p":1182,"t":420},{"p":1179,"t":446},{"p":1170,"t":471},{"p":1169,"t":497},{"p":1190,"t":523},{"p":1184,"t":548},{"p":1177,"t":574},{"p":1184,"t":605},{"p":1185,"t":631},{"p":1190,"t":656},{"p":1187,"t":682},{"p":1165,"t":708},{"p":1165,"t":733},{"p":1166,"t":759},{"p":1183,"t":785},{"p":1172,"t":810},{"p":1170,"t":836},{"p":1167,"t":862},{"p":1170,"t":887},{"p":1176,"t":913},{"p":1176,"t":939},{"p":1186,"t":965},{"p":1188,"t":990},{"p":1194,"t":1016},{"p":1169,"t":1042},{"p":1175,"t":1067},{"p":1180,"t":1093},{"p":1172,"t":1118},{"p":1174,"t":1144},{"p":1169,"t":1170},{"p":1163,"t":1196},{"p":1156,"t":1221},{"p":1150,"t":1247},{"p":1162,"t":1273},{"p":1163,"t":1298},{"p":1170,"t":1324},{"p":1174,"t":1349},{"p":1168,"t":1375},{"p":1159,"t":1401},{"p":1165,"t":1427},{"p":1169,"t":1452},{"p":1170,"t":1478},{"p":1179,"t":1509},{"p":1178,"t":1534},{"p":1172,"t":1560},{"p":1171,"t":1586},{"p":1175,"t":1611},{"p":1179,"t":1637},{"p":1182,"t":1663},{"p":1188,"t":1688},{"p":1188,"t":1709},{"p":1161,"t":1740},{"p":1161,"t":1760},{"p":1161,"t":1786},{"p":1168,"t":1812},{"p":1171,"t":1837},{"p":1173,"t":1863},{"p":1181,"t":1889},{"p":1182,"t":1914},{"p":1189,"t":1940},{"p":1193,"t":1966},{"p":1182,"t":1997},{"p":1180,"t":2022},{"p":1178,"t":2048},{"p":1190,"t":2074},{"p":1181,"t":2099},{"p":1181,"t":2120},{"p":1164,"t":2146},{"p":1176,"t":2171},{"p":1170,"t":2197},{"p":1172,"t":2223},{"p":1174,"t":2249},{"p":1177,"t":2274},{"p":1183,"t":2300},{"p":1172,"t":2325},{"p":1169,"t":2351},{"p":1177,"t":2377},{"p":1179,"t":2403},{"p":1177,"t":2429},{"p":1188,"t":2454},{"p":1198,"t":2480},{"p":1188,"t":2506},{"p":1167,"t":2531},{"p":1171,"t":2557},{"p":1174,"t":2583},{"p":1176,"t":2609},{"p":1170,"t":2634},{"p":1171,"t":2660},{"p":1171,"t":2686},{"p":1175,"t":2711},{"p":1186,"t":2737},{"p":1168,"t":2763},{"p":1164,"t":2789},{"p":1164,"t":2809},{"p":1167,"t":2835},{"p":1168,"t":2860},{"p":1168,"t":2886},{"p":1160,"t":2912},{"p":1157,"t":2938},{"p":1150,"t":2963},{"p":1159,"t":2989},{"p":1166,"t":3015},{"p":1166,"t":3035},{"p":1170,"t":3061},{"p":1180,"t":3087},{"p":1177,"t":3112},{"p":1173,"t":3138},{"p":1158,"t":3164},{"p":1165,"t":3189},{"p":1155,"t":3215},{"p":1161,"t":3241},{"p":1161,"t":3262},{"p":1179,"t":3287},{"p":1177,"t":3313},{"p":1175,"t":3339},{"p":1165,"t":3364},{"p":1165,"t":3385},{"p":1165,"t":3410},{"p":1180,"t":3436},{"p":1184,"t":3462},{"p":1171,"t":3488},{"p":1171,"t":3513},{"p":1171,"t":3534},{"p":1173,"t":3560},{"p":1170,"t":3585},{"p":1172,"t":3611},{"p":1164,"t":3637},{"p":1161,"t":3662},{"p":1161,"t":3683},{"p":1163,"t":3709},{"p":1166,"t":3735},{"p":1162,"t":3760},{"p":1164,"t":3786},{"p":1176,"t":3812},{"p":1176,"t":3837},{"p":1176,"t":3858},{"p":1170,"t":3884},{"p":1154,"t":3910},{"p":1162,"t":3935},{"p":1162,"t":3956},{"p":1167,"t":3982},{"p":1172,"t":4008},{"p":1172,"t":4028},{"p":1167,"t":4054},{"p":1173,"t":4079},{"p":1186,"t":4105},{"p":1176,"t":4126},{"p":1169,"t":4151},{"p":1166,"t":4177},{"p":1180,"t":4203},{"p":1166,"t":4228},{"p":1179,"t":4254},{"p":1163,"t":4280},{"p":1163,"t":4300},{"p":1165,"t":4326},{"p":1154,"t":4352},{"p":1160,"t":4378},{"p":1153,"t":4403},{"p":1153,"t":4424},{"p":1157,"t":4450},{"p":1156,"t":4475},{"p":1156,"t":4501},{"p":1156,"t":4522},{"p":1151,"t":4547},{"p":1145,"t":4573},{"p":1145,"t":4594},{"p":1148,"t":4619},{"p":1148,"t":4645},{"p":1149,"t":4671},{"p":1149,"t":4691},{"p":1153,"t":4717},{"p":1156,"t":4742},{"p":1160,"t":4768},{"p":1160,"t":4789},{"p":1159,"t":4815},{"p":1150,"t":4841},{"p":1159,"t":4866},{"p":1159,"t":4887},{"p":1158,"t":4912},{"p":1153,"t":4938},{"p":1154,"t":4964},{"p":1154,"t":4984},{"p":1151,"t":5010},{"p":1150,"t":5036},{"p":1144,"t":5062},{"p":1142,"t":5087},{"p":1142,"t":5108},{"p":1144,"t":5133},{"p":1158,"t":5159},{"p":1173,"t":5185},{"p":1172,"t":5210},{"p":1166,"t":5236},{"p":1166,"t":5262},{"p":1165,"t":5288},{"p":1159,"t":5313},{"p":1172,"t":5339},{"p":1171,"t":5365},{"p":1154,"t":5390},{"p":1147,"t":5416},{"p":1147,"t":5437},{"p":1149,"t":5463},{"p":1151,"t":5489},{"p":1162,"t":5514},{"p":1162,"t":5535},{"p":1149,"t":5560},{"p":1151,"t":5586},{"p":1149,"t":5612},{"p":1149,"t":5632},{"p":1157,"t":5658},{"p":1149,"t":5684},{"p":1153,"t":5710},{"p":1153,"t":5730},{"p":1144,"t":5756},{"p":1145,"t":5782},{"p":1145,"t":5802},{"p":1141,"t":5828},{"p":1144,"t":5853},{"p":1150,"t":5879},{"p":1159,"t":5905},{"p":1149,"t":5930},{"p":1162,"t":5956},{"p":1160,"t":5982},{"p":1159,"t":6008},{"p":1159,"t":6029},{"p":1161,"t":6054},{"p":1143,"t":6080},{"p":1146,"t":6106},{"p":1150,"t":6131},{"p":1150,"t":6152},{"p":1155,"t":6178},{"p":1150,"t":6203},{"p":1150,"t":6224},{"p":1145,"t":6249},{"p":1142,"t":6275},{"p":1142,"t":6296},{"p":1142,"t":6322},{"p":1141,"t":6347},{"p":1141,"t":6368},{"p":1138,"t":6393},{"p":1140,"t":6419},{"p":1153,"t":6445},{"p":1151,"t":6470},{"p":1151,"t":6491},{"p":1154,"t":6517},{"p":1151,"t":6542},{"p":1143,"t":6568},{"p":1143,"t":6589},{"p":1149,"t":6614},{"p":1141,"t":6640},{"p":1141,"t":6661},{"p":1135,"t":6686},{"p":1146,"t":6712},{"p":1146,"t":6733},{"p":1150,"t":6758},{"p":1144,"t":6784},{"p":1144,"t":6805},{"p":1134,"t":6830},{"p":1138,"t":6856},{"p":1142,"t":6882},{"p":1142,"t":6902},{"p":1145,"t":6928},{"p":1134,"t":6954},{"p":1134,"t":6974},{"p":1156,"t":7000},{"p":1150,"t":7026},{"p":1150,"t":7046},{"p":1152,"t":7072},{"p":1146,"t":7098},{"p":1146,"t":7118},{"p":1151,"t":7144},{"p":1142,"t":7170},{"p":1142,"t":7190},{"p":1142,"t":7216},{"p":1137,"t":7242},{"p":1139,"t":7267},{"p":1139,"t":7288},{"p":1150,"t":7314},{"p":1148,"t":7339},{"p":1148,"t":7360},{"p":1153,"t":7386},{"p":1162,"t":7411},{"p":1154,"t":7432},{"p":1148,"t":7457},{"p":1146,"t":7483},{"p":1146,"t":7504},{"p":1142,"t":7529},{"p":1137,"t":7555},{"p":1137,"t":7576},{"p":1137,"t":7601},{"p":1133,"t":7622},{"p":1140,"t":7647},{"p":1140,"t":7673},{"p":1140,"t":7694},{"p":1150,"t":7720},{"p":1145,"t":7745},{"p":1145,"t":7766},{"p":1149,"t":7792},{"p":1149,"t":7812},{"p":1151,"t":7838},{"p":1143,"t":7864},{"p":1152,"t":7890},{"p":1152,"t":7910},{"p":1148,"t":7936},{"p":1169,"t":7962},{"p":1173,"t":7987},{"p":1156,"t":8013},{"p":1161,"t":8039},{"p":1161,"t":8059},{"p":1166,"t":8085},{"p":1159,"t":8111},{"p":1153,"t":8136},{"p":1132,"t":8162},{"p":1132,"t":8182},{"p":1129,"t":8208},{"p":1136,"t":8234},{"p":1144,"t":8259},{"p":1144,"t":8280},{"p":1132,"t":8306},{"p":1132,"t":8326},{"p":1141,"t":8352},{"p":1141,"t":8372},{"p":1145,"t":8398},{"p":1153,"t":8424},{"p":1153,"t":8444},{"p":1135,"t":8470},{"p":1135,"t":8490},{"p":1143,"t":8516},{"p":1157,"t":8542},{"p":1157,"t":8562},{"p":1158,"t":8588},{"p":1164,"t":8614},{"p":1156,"t":8640},{"p":1156,"t":8660},{"p":1156,"t":8686},{"p":1159,"t":8711},{"p":1156,"t":8737},{"p":1156,"t":8758},{"p":1158,"t":8783},{"p":1151,"t":8809},{"p":1136,"t":8835},{"p":1136,"t":8855},{"p":1137,"t":8881},{"p":1156,"t":8907},{"p":1155,"t":8932},{"p":1155,"t":8953},{"p":1164,"t":8978},{"p":1167,"t":9004},{"p":1174,"t":9030},{"p":1164,"t":9056},{"p":1162,"t":9081},{"p":1162,"t":9102},{"p":1157,"t":9127},{"p":1161,"t":9153},{"p":1154,"t":9179},{"p":1154,"t":9205},{"p":1154,"t":9225},{"p":1147,"t":9251},{"p":1158,"t":9277},{"p":1158,"t":9297},{"p":1161,"t":9323},{"p":1174,"t":9349},{"p":1185,"t":9374},{"p":1169,"t":9400},{"p":1169,"t":9421},{"p":1170,"t":9446},{"p":1181,"t":9472},{"p":1184,"t":9498},{"p":1162,"t":9524},{"p":1162,"t":9544},{"p":1152,"t":9570},{"p":1148,"t":9596},{"p":1148,"t":9616},{"p":1142,"t":9642},{"p":1160,"t":9668},{"p":1160,"t":9688},{"p":1159,"t":9714},{"p":1156,"t":9740},{"p":1156,"t":9760},{"p":1152,"t":9786},{"p":1142,"t":9812},{"p":1142,"t":9833},{"p":1138,"t":9858},{"p":1138,"t":9879},{"p":1140,"t":9905},{"p":1138,"t":9930},{"p":1138,"t":9951},{"p":1133,"t":9976},{"p":1133,"t":9997},{"p":1142,"t":10023},{"p":1155,"t":10048},{"p":1155,"t":10069},{"p":1152,"t":10094},{"p":1152,"t":10120},{"p":1149,"t":10146},{"p":1149,"t":10166},{"p":1144,"t":10192},{"p":1154,"t":10212},{"p":1146,"t":10238},{"p":1161,"t":10264},{"p":1168,"t":10290},{"p":1168,"t":10310},{"p":1171,"t":10336},{"p":1162,"t":10362},{"p":1162,"t":10382},{"p":1164,"t":10408},{"p":1165,"t":10434},{"p":1174,"t":10459},{"p":1174,"t":10480},{"p":1163,"t":10506},{"p":1161,"t":10531},{"p":1161,"t":10552},{"p":1143,"t":10578},{"p":1124,"t":10603},{"p":1150,"t":10629},{"p":1150,"t":10650},{"p":1159,"t":10675},{"p":1149,"t":10701},{"p":1149,"t":10722},{"p":1136,"t":10747},{"p":1136,"t":10768},{"p":1135,"t":10794},{"p":1162,"t":10819},{"p":1162,"t":10840},{"p":1111,"t":10866},{"p":1097,"t":10891},{"p":1102,"t":10917},{"p":1102,"t":10938},{"p":1102,"t":10964},{"p":1111,"t":10989},{"p":1111,"t":11010},{"p":1116,"t":11036},{"p":1101,"t":11061},{"p":1099,"t":11087},{"p":1099,"t":11107},{"p":1104,"t":11133},{"p":1104,"t":11154},{"p":1113,"t":11179},{"p":1108,"t":11205},{"p":1108,"t":11225},{"p":1116,"t":11251},{"p":1097,"t":11277},{"p":1097,"t":11297},{"p":1109,"t":11323},{"p":1116,"t":11349},{"p":1116,"t":11369},{"p":1122,"t":11395},{"p":1128,"t":11416},{"p":1040,"t":11441},{"p":1040,"t":11462},{"p":1035,"t":11488},{"p":1033,"t":11508},{"p":1044,"t":11534},{"p":1063,"t":11560},{"p":1063,"t":11580},{"p":1064,"t":11606},{"p":1049,"t":11631},{"p":1049,"t":11652},{"p":1056,"t":11678},{"p":1056,"t":11698},{"p":1053,"t":11724},{"p":1055,"t":11749},{"p":1055,"t":11770},{"p":1068,"t":11796},{"p":1068,"t":11816},{"p":1053,"t":11842},{"p":1053,"t":11863},{"p":1059,"t":11888},{"p":1059,"t":11909},{"p":1057,"t":11935},{"p":1057,"t":11955},{"p":1052,"t":11981}]},{"id":43117686,"data":[{"p":1237,"t":28},{"p":1188,"t":54},{"p":1188,"t":74},{"p":1133,"t":100},{"p":1133,"t":121},{"p":1136,"t":146},{"p":1157,"t":172},{"p":1161,"t":198},{"p":1161,"t":218},{"p":1152,"t":244},{"p":1161,"t":270},{"p":1161,"t":291},{"p":1165,"t":316},{"p":1166,"t":342},{"p":1167,"t":368},{"p":1175,"t":393},{"p":1175,"t":414},{"p":1183,"t":439},{"p":1180,"t":465},{"p":1180,"t":485},{"p":1169,"t":511},{"p":1185,"t":537},{"p":1185,"t":558},{"p":1186,"t":583},{"p":1180,"t":609},{"p":1180,"t":629},{"p":1190,"t":655},{"p":1190,"t":681},{"p":1198,"t":706},{"p":1198,"t":727},{"p":1193,"t":753},{"p":1167,"t":778},{"p":1167,"t":799},{"p":1181,"t":824},{"p":1188,"t":850},{"p":1188,"t":871},{"p":1185,"t":896},{"p":1198,"t":922},{"p":1207,"t":948},{"p":1207,"t":968},{"p":1200,"t":994},{"p":1197,"t":1020},{"p":1197,"t":1040},{"p":1198,"t":1066},{"p":1190,"t":1091},{"p":1172,"t":1117},{"p":1172,"t":1138},{"p":1162,"t":1163},{"p":1170,"t":1189},{"p":1170,"t":1210},{"p":1178,"t":1235},{"p":1187,"t":1261},{"p":1174,"t":1287},{"p":1174,"t":1307},{"p":1172,"t":1333},{"p":1186,"t":1359},{"p":1186,"t":1379},{"p":1184,"t":1405},{"p":1180,"t":1431},{"p":1178,"t":1456},{"p":1178,"t":1477},{"p":1176,"t":1502},{"p":1181,"t":1528},{"p":1181,"t":1549},{"p":1182,"t":1574},{"p":1195,"t":1600},{"p":1174,"t":1626},{"p":1174,"t":1646},{"p":1178,"t":1672},{"p":1169,"t":1698},{"p":1169,"t":1718},{"p":1179,"t":1744},{"p":1164,"t":1770},{"p":1164,"t":1791},{"p":1165,"t":1816},{"p":1165,"t":1837},{"p":1169,"t":1863},{"p":1179,"t":1888},{"p":1179,"t":1909},{"p":1174,"t":1934},{"p":1169,"t":1955},{"p":1165,"t":1981},{"p":1173,"t":2006},{"p":1170,"t":2032},{"p":1170,"t":2053},{"p":1168,"t":2078},{"p":1161,"t":2104},{"p":1167,"t":2130},{"p":1167,"t":2150},{"p":1171,"t":2176},{"p":1175,"t":2202},{"p":1175,"t":2222},{"p":1172,"t":2248},{"p":1176,"t":2274},{"p":1176,"t":2295},{"p":1171,"t":2320},{"p":1185,"t":2341},{"p":1185,"t":2367},{"p":1185,"t":2387},{"p":1170,"t":2413},{"p":1164,"t":2439},{"p":1164,"t":2459},{"p":1171,"t":2485},{"p":1185,"t":2511},{"p":1185,"t":2532},{"p":1184,"t":2557},{"p":1186,"t":2583},{"p":1184,"t":2609},{"p":1184,"t":2630},{"p":1192,"t":2655},{"p":1182,"t":2681},{"p":1182,"t":2702},{"p":1174,"t":2727},{"p":1180,"t":2748},{"p":1167,"t":2774},{"p":1168,"t":2800},{"p":1168,"t":2820},{"p":1165,"t":2846},{"p":1156,"t":2867},{"p":1169,"t":2892},{"p":1174,"t":2913},{"p":1167,"t":2939},{"p":1171,"t":2965},{"p":1171,"t":2985},{"p":1172,"t":3011},{"p":1172,"t":3032},{"p":1173,"t":3057},{"p":1173,"t":3083},{"p":1173,"t":3104},{"p":1172,"t":3130},{"p":1178,"t":3155},{"p":1178,"t":3176},{"p":1174,"t":3202},{"p":1174,"t":3228},{"p":1174,"t":3248},{"p":1171,"t":3274},{"p":1178,"t":3300},{"p":1175,"t":3326},{"p":1175,"t":3346},{"p":1181,"t":3372},{"p":1180,"t":3398},{"p":1189,"t":3424},{"p":1189,"t":3444},{"p":1185,"t":3470},{"p":1178,"t":3496},{"p":1183,"t":3522},{"p":1183,"t":3542},{"p":1189,"t":3568},{"p":1178,"t":3594},{"p":1178,"t":3614},{"p":1185,"t":3640},{"p":1184,"t":3666},{"p":1180,"t":3692},{"p":1180,"t":3712},{"p":1191,"t":3738},{"p":1189,"t":3764},{"p":1178,"t":3784},{"p":1172,"t":3810},{"p":1180,"t":3836},{"p":1182,"t":3857},{"p":1175,"t":3882},{"p":1171,"t":3908},{"p":1171,"t":3929},{"p":1180,"t":3955},{"p":1179,"t":3980},{"p":1166,"t":4006},{"p":1166,"t":4027},{"p":1157,"t":4047},{"p":1163,"t":4073},{"p":1169,"t":4099},{"p":1169,"t":4120},{"p":1186,"t":4145},{"p":1185,"t":4171},{"p":1172,"t":4197},{"p":1172,"t":4218},{"p":1183,"t":4243},{"p":1183,"t":4264},{"p":1170,"t":4290},{"p":1183,"t":4315},{"p":1183,"t":4336},{"p":1180,"t":4362},{"p":1174,"t":4388},{"p":1174,"t":4408},{"p":1170,"t":4434},{"p":1170,"t":4455},{"p":1173,"t":4481},{"p":1168,"t":4506},{"p":1163,"t":4527},{"p":1149,"t":4553},{"p":1147,"t":4578},{"p":1166,"t":4604},{"p":1166,"t":4625},{"p":1168,"t":4651},{"p":1171,"t":4671},{"p":1167,"t":4697},{"p":1175,"t":4723},{"p":1175,"t":4744},{"p":1180,"t":4769},{"p":1174,"t":4795},{"p":1174,"t":4816},{"p":1180,"t":4841},{"p":1180,"t":4862},{"p":1170,"t":4888},{"p":1170,"t":4908},{"p":1174,"t":4934},{"p":1184,"t":4960},{"p":1184,"t":4981},{"p":1184,"t":5006},{"p":1184,"t":5027},{"p":1172,"t":5053},{"p":1177,"t":5079},{"p":1177,"t":5099},{"p":1181,"t":5125},{"p":1168,"t":5146},{"p":1174,"t":5171},{"p":1174,"t":5197},{"p":1174,"t":5218},{"p":1162,"t":5244},{"p":1169,"t":5264},{"p":1165,"t":5290},{"p":1178,"t":5316},{"p":1178,"t":5336},{"p":1171,"t":5362},{"p":1171,"t":5383},{"p":1184,"t":5409},{"p":1184,"t":5429},{"p":1180,"t":5455},{"p":1180,"t":5475},{"p":1171,"t":5501},{"p":1171,"t":5522},{"p":1166,"t":5548},{"p":1170,"t":5568},{"p":1175,"t":5594},{"p":1173,"t":5620},{"p":1173,"t":5640},{"p":1186,"t":5666},{"p":1186,"t":5687},{"p":1191,"t":5713},{"p":1191,"t":5733},{"p":1178,"t":5759},{"p":1178,"t":5780},{"p":1165,"t":5805},{"p":1165,"t":5826},{"p":1171,"t":5852},{"p":1171,"t":5873},{"p":1173,"t":5898},{"p":1183,"t":5919},{"p":1174,"t":5945},{"p":1181,"t":5965},{"p":1185,"t":5991},{"p":1198,"t":6017},{"p":1198,"t":6038},{"p":1188,"t":6063},{"p":1177,"t":6089},{"p":1177,"t":6110},{"p":1173,"t":6135},{"p":1173,"t":6156},{"p":1176,"t":6182},{"p":1180,"t":6203},{"p":1165,"t":6228},{"p":1184,"t":6254},{"p":1184,"t":6275},{"p":1176,"t":6300},{"p":1176,"t":6321},{"p":1180,"t":6347},{"p":1194,"t":6373},{"p":1194,"t":6393},{"p":1173,"t":6419},{"p":1173,"t":6440},{"p":1174,"t":6465},{"p":1174,"t":6486},{"p":1170,"t":6512},{"p":1170,"t":6533},{"p":1177,"t":6558},{"p":1177,"t":6579},{"p":1167,"t":6605},{"p":1167,"t":6625},{"p":1167,"t":6651},{"p":1167,"t":6672},{"p":1154,"t":6698},{"p":1154,"t":6718},{"p":1157,"t":6739},{"p":1172,"t":6765},{"p":1173,"t":6785},{"p":1177,"t":6811},{"p":1179,"t":6832},{"p":1160,"t":6857},{"p":1164,"t":6878},{"p":1159,"t":6904},{"p":1159,"t":6924},{"p":1163,"t":6945},{"p":1161,"t":6971},{"p":1161,"t":6991},{"p":1173,"t":7017},{"p":1173,"t":7038},{"p":1176,"t":7058},{"p":1162,"t":7084},{"p":1162,"t":7105},{"p":1166,"t":7131},{"p":1166,"t":7151},{"p":1174,"t":7177},{"p":1174,"t":7200},{"p":1189,"t":7223},{"p":1189,"t":7244},{"p":1164,"t":7265},{"p":1171,"t":7290},{"p":1175,"t":7311},{"p":1178,"t":7337},{"p":1166,"t":7363},{"p":1166,"t":7383},{"p":1176,"t":7409},{"p":1176,"t":7430},{"p":1162,"t":7455},{"p":1162,"t":7476},{"p":1164,"t":7502},{"p":1164,"t":7522},{"p":1163,"t":7543},{"p":1165,"t":7569},{"p":1168,"t":7589},{"p":1167,"t":7615},{"p":1171,"t":7636},{"p":1163,"t":7662},{"p":1172,"t":7687},{"p":1172,"t":7708},{"p":1177,"t":7734},{"p":1177,"t":7754},{"p":1170,"t":7780},{"p":1170,"t":7801},{"p":1165,"t":7827},{"p":1165,"t":7847},{"p":1162,"t":7873},{"p":1162,"t":7894},{"p":1164,"t":7919},{"p":1164,"t":7940},{"p":1170,"t":7966},{"p":1170,"t":7986},{"p":1168,"t":8012},{"p":1168,"t":8033},{"p":1172,"t":8059},{"p":1172,"t":8079},{"p":1162,"t":8105},{"p":1162,"t":8126},{"p":1173,"t":8151},{"p":1173,"t":8172},{"p":1161,"t":8198},{"p":1161,"t":8219},{"p":1184,"t":8244},{"p":1184,"t":8265},{"p":1169,"t":8285},{"p":1167,"t":8311},{"p":1172,"t":8332},{"p":1168,"t":8358},{"p":1171,"t":8383},{"p":1171,"t":8404},{"p":1171,"t":8430},{"p":1171,"t":8456},{"p":1171,"t":8476},{"p":1160,"t":8502},{"p":1160,"t":8523},{"p":1157,"t":8548},{"p":1157,"t":8569},{"p":1157,"t":8590},{"p":1147,"t":8615},{"p":1150,"t":8636},{"p":1156,"t":8662},{"p":1165,"t":8682},{"p":1163,"t":8708},{"p":1163,"t":8729},{"p":1160,"t":8755},{"p":1160,"t":8775},{"p":1172,"t":8801},{"p":1172,"t":8822},{"p":1174,"t":8847},{"p":1176,"t":8868},{"p":1164,"t":8894},{"p":1174,"t":8920},{"p":1174,"t":8940},{"p":1167,"t":8966},{"p":1167,"t":8987},{"p":1158,"t":9012},{"p":1158,"t":9033},{"p":1159,"t":9054},{"p":1163,"t":9079},{"p":1166,"t":9100},{"p":1162,"t":9126},{"p":1177,"t":9146},{"p":1173,"t":9172},{"p":1171,"t":9198},{"p":1171,"t":9219},{"p":1169,"t":9244},{"p":1169,"t":9265},{"p":1176,"t":9291},{"p":1176,"t":9312},{"p":1180,"t":9337},{"p":1180,"t":9358},{"p":1173,"t":9384},{"p":1179,"t":9404},{"p":1174,"t":9430},{"p":1176,"t":9451},{"p":1174,"t":9476},{"p":1169,"t":9502},{"p":1169,"t":9523},{"p":1181,"t":9549},{"p":1181,"t":9569},{"p":1160,"t":9595},{"p":1160,"t":9616},{"p":1169,"t":9641},{"p":1176,"t":9662},{"p":1175,"t":9688},{"p":1175,"t":9708},{"p":1179,"t":9734},{"p":1185,"t":9755},{"p":1180,"t":9781},{"p":1173,"t":9806},{"p":1173,"t":9827},{"p":1165,"t":9853},{"p":1165,"t":9873},{"p":1161,"t":9899},{"p":1161,"t":9920},{"p":1170,"t":9946},{"p":1166,"t":9971},{"p":1166,"t":9992},{"p":1169,"t":10018},{"p":1169,"t":10038},{"p":1176,"t":10064},{"p":1176,"t":10085},{"p":1178,"t":10111},{"p":1173,"t":10136},{"p":1173,"t":10157},{"p":1166,"t":10183},{"p":1166,"t":10203},{"p":1166,"t":10229},{"p":1166,"t":10250},{"p":1164,"t":10276},{"p":1164,"t":10296},{"p":1157,"t":10317},{"p":1159,"t":10343},{"p":1177,"t":10363},{"p":1188,"t":10389},{"p":1151,"t":10410},{"p":1151,"t":10430},{"p":1156,"t":10456},{"p":1156,"t":10477},{"p":1161,"t":10497},{"p":1163,"t":10523},{"p":1163,"t":10544},{"p":1159,"t":10564},{"p":1153,"t":10590},{"p":1163,"t":10611},{"p":1154,"t":10636},{"p":1154,"t":10657},{"p":1144,"t":10678},{"p":1137,"t":10704},{"p":1140,"t":10724},{"p":1165,"t":10750},{"p":1165,"t":10771},{"p":1160,"t":10796},{"p":1160,"t":10817},{"p":1156,"t":10843},{"p":1143,"t":10863},{"p":1136,"t":10889},{"p":1140,"t":10910},{"p":1132,"t":10935},{"p":1132,"t":10956},{"p":1155,"t":10982},{"p":1155,"t":11003},{"p":1164,"t":11028},{"p":1164,"t":11049},{"p":1137,"t":11070},{"p":1138,"t":11095},{"p":1143,"t":11116},{"p":1148,"t":11142},{"p":1151,"t":11162},{"p":1155,"t":11188},{"p":1143,"t":11209},{"p":1159,"t":11235},{"p":1159,"t":11255},{"p":1165,"t":11276},{"p":1156,"t":11301},{"p":1156,"t":11322},{"p":1159,"t":11343},{"p":1159,"t":11369},{"p":1159,"t":11389},{"p":1159,"t":11415},{"p":1104,"t":11436},{"p":1104,"t":11456},{"p":1087,"t":11477},{"p":1081,"t":11498},{"p":1085,"t":11518},{"p":1087,"t":11544},{"p":1087,"t":11565},{"p":1093,"t":11585},{"p":1090,"t":11606},{"p":1083,"t":11631},{"p":1093,"t":11652},{"p":1093,"t":11673},{"p":1082,"t":11693},{"p":1084,"t":11714},{"p":1082,"t":11735},{"p":1072,"t":11755},{"p":1033,"t":11776},{"p":1012,"t":11797},{"p":1001,"t":11817},{"p":993,"t":11838},{"p":1003,"t":11858},{"p":983,"t":11879},{"p":981,"t":11900},{"p":977,"t":11920},{"p":977,"t":11936},{"p":984,"t":11956},{"p":998,"t":11977}]}];

const tt20 = () => {
    const legend = [];
    const tooltip = [];
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];
    const dataZoom = [];

    tooltip.push({
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                formatter: (params) => {
                    return dateTime.ds2time(params.value);
                },
            },
            snap: true,
        },
        formatter: (params) => {
            return params.reduce((acc, val) => {
                acc += `${val.marker} ${val.seriesName}: ${dateTime.ds2time(val.value.p)}<br />`;
                return acc;
            }, '');
        },
    });

    dataZoom.push({
        type: 'slider',
        labelFormatter: (val) => dateTime.ds2time(val),
    });

    xAxis.push({
        type: 'time',
        name: 'Time',
        nameGap: 50,
        nameLocation: 'middle',
        min: 0,
        max: 12000, // 20:00
        axisLabel: {
            formatter: (val) => dateTime.ds2time(val),
        },
    });

    yAxis.push({
        type: 'value',
        name: 'Pace',
        nameGap: 45,
        nameLocation: 'middle',
        min: 'dataMin',
        max: 'dataMax',
        inverse: true,
        axisLabel: {
            formatter: (val) => dateTime.ds2time(val),
        },
    });

    results.forEach((r, i) => {
        dataset.push({
            dimensions: [ 't', 'p' ],
            source: strokedata_tt20.find((sd) => sd.id == r.id).data,
        });

        series.push({
            type: 'line',
            encode: {
                x: 't',
                y: 'p',
            },
            connectNulls: true,
            name: `Test ${i+1}`,
            datasetIndex: i,
            showSymbol: false,
            animation: false,
            tooltip: {
                formatter: (val) => {
                    console.log(val);
                },
            },
        });
    });

    legend.push({
        top: '10%',
    });

    return {
        legend,
        dataZoom,
        tooltip,
        xAxis,
        yAxis,
        series,
        dataset,
    }
};

export const strokedata = {
    tt20,
};
