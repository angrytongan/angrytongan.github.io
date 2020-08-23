'use strict';

import { dateTime } from '/yoe-year1-review/js/utils/datetime.js';

const strokeData = [
    {
        "id":40553854,
        "name":"8x500m",
        "data":[
            [{"p":1148,"t":97},{"p":1133,"t":117},{"p":1101,"t":143},{"p":1101,"t":164},{"p":1106,"t":189},{"p":1114,"t":210},{"p":1126,"t":235},{"p":1121,"t":261},{"p":1121,"t":282},{"p":1121,"t":307},{"p":1120,"t":328},{"p":1120,"t":354},{"p":1117,"t":374},{"p":1115,"t":400},{"p":1123,"t":426},{"p":1123,"t":446},{"p":1128,"t":472},{"p":1150,"t":498},{"p":1150,"t":518},{"p":1138,"t":544},{"p":1141,"t":570},{"p":1133,"t":595},{"p":1133,"t":616},{"p":1128,"t":641},{"p":1128,"t":667},{"p":1131,"t":693},{"p":1131,"t":714},{"p":1131,"t":739},{"p":1127,"t":765},{"p":1127,"t":791},{"p":1127,"t":811},{"p":1119,"t":837},{"p":1115,"t":863},{"p":1112,"t":888},{"p":1112,"t":909},{"p":1122,"t":935},{"p":1116,"t":960},{"p":1113,"t":986},{"p":1113,"t":1007},{"p":1104,"t":1033},{"p":1111,"t":1053},{"p":1104,"t":1079},{"p":1127,"t":1105},],
            [{"p":1108,"t":72},{"p":1108,"t":92},{"p":1118,"t":118},{"p":1124,"t":144},{"p":1124,"t":164},{"p":1136,"t":190},{"p":1130,"t":210},{"p":1118,"t":236},{"p":1128,"t":257},{"p":1126,"t":282},{"p":1124,"t":303},{"p":1118,"t":329},{"p":1107,"t":354},{"p":1107,"t":375},{"p":1124,"t":401},{"p":1136,"t":427},{"p":1136,"t":447},{"p":1129,"t":473},{"p":1124,"t":499},{"p":1127,"t":524},{"p":1132,"t":550},{"p":1132,"t":571},{"p":1129,"t":596},{"p":1121,"t":622},{"p":1126,"t":648},{"p":1140,"t":673},{"p":1124,"t":699},{"p":1130,"t":725},{"p":1130,"t":745},{"p":1132,"t":771},{"p":1125,"t":797},{"p":1134,"t":823},{"p":1122,"t":848},{"p":1124,"t":874},{"p":1124,"t":895},{"p":1119,"t":920},{"p":1120,"t":946},{"p":1131,"t":972},{"p":1134,"t":998},{"p":1134,"t":1023},{"p":1138,"t":1049},{"p":1127,"t":1074},{"p":1117,"t":1100},],
            [{"p":1121,"t":69},{"p":1108,"t":95},{"p":1119,"t":120},{"p":1118,"t":146},{"p":1114,"t":172},{"p":1114,"t":192},{"p":1099,"t":218},{"p":1110,"t":244},{"p":1115,"t":269},{"p":1115,"t":290},{"p":1110,"t":316},{"p":1107,"t":341},{"p":1122,"t":367},{"p":1115,"t":393},{"p":1115,"t":413},{"p":1106,"t":439},{"p":1112,"t":465},{"p":1109,"t":490},{"p":1098,"t":516},{"p":1111,"t":542},{"p":1111,"t":562},{"p":1117,"t":588},{"p":1123,"t":614},{"p":1128,"t":639},{"p":1144,"t":665},{"p":1139,"t":691},{"p":1139,"t":711},{"p":1138,"t":737},{"p":1143,"t":762},{"p":1148,"t":788},{"p":1147,"t":814},{"p":1125,"t":840},{"p":1132,"t":865},{"p":1133,"t":891},{"p":1135,"t":917},{"p":1125,"t":942},{"p":1127,"t":968},{"p":1125,"t":994},{"p":1126,"t":1020},{"p":1126,"t":1040},{"p":1127,"t":1066},{"p":1122,"t":1092},{"p":1128,"t":1117},],
            [{"p":1157,"t":72},{"p":1162,"t":97},{"p":1147,"t":123},{"p":1130,"t":149},{"p":1133,"t":175},{"p":1135,"t":200},{"p":1138,"t":226},{"p":1146,"t":252},{"p":1143,"t":277},{"p":1143,"t":298},{"p":1139,"t":324},{"p":1139,"t":349},{"p":1121,"t":375},{"p":1123,"t":401},{"p":1123,"t":427},{"p":1115,"t":452},{"p":1126,"t":478},{"p":1123,"t":504},{"p":1121,"t":529},{"p":1120,"t":555},{"p":1116,"t":581},{"p":1115,"t":606},{"p":1116,"t":632},{"p":1121,"t":658},{"p":1119,"t":689},{"p":1123,"t":715},{"p":1123,"t":740},{"p":1113,"t":766},{"p":1122,"t":792},{"p":1105,"t":818},{"p":1111,"t":843},{"p":1118,"t":874},{"p":1118,"t":900},{"p":1130,"t":926},{"p":1128,"t":951},{"p":1118,"t":977},{"p":1109,"t":1003},{"p":1106,"t":1028},{"p":1108,"t":1059},{"p":1108,"t":1085},{"p":1120,"t":1111},],
            [{"p":1148,"t":75},{"p":1146,"t":100},{"p":1126,"t":126},{"p":1126,"t":147},{"p":1121,"t":172},{"p":1114,"t":198},{"p":1126,"t":224},{"p":1130,"t":249},{"p":1130,"t":270},{"p":1123,"t":296},{"p":1121,"t":322},{"p":1128,"t":347},{"p":1113,"t":373},{"p":1123,"t":399},{"p":1128,"t":424},{"p":1128,"t":445},{"p":1122,"t":470},{"p":1124,"t":496},{"p":1136,"t":522},{"p":1129,"t":548},{"p":1128,"t":573},{"p":1130,"t":599},{"p":1129,"t":625},{"p":1129,"t":651},{"p":1137,"t":676},{"p":1137,"t":697},{"p":1117,"t":723},{"p":1122,"t":748},{"p":1134,"t":774},{"p":1134,"t":794},{"p":1121,"t":820},{"p":1114,"t":846},{"p":1114,"t":872},{"p":1101,"t":897},{"p":1121,"t":923},{"p":1123,"t":949},{"p":1125,"t":974},{"p":1125,"t":995},{"p":1121,"t":1020},{"p":1120,"t":1046},{"p":1131,"t":1072},{"p":1124,"t":1103},],
            [{"p":1136,"t":77},{"p":1136,"t":98},{"p":1132,"t":124},{"p":1110,"t":149},{"p":1100,"t":175},{"p":1113,"t":201},{"p":1135,"t":226},{"p":1116,"t":252},{"p":1116,"t":273},{"p":1114,"t":298},{"p":1123,"t":324},{"p":1121,"t":350},{"p":1118,"t":375},{"p":1120,"t":401},{"p":1129,"t":427},{"p":1127,"t":452},{"p":1131,"t":478},{"p":1125,"t":504},{"p":1128,"t":530},{"p":1111,"t":555},{"p":1110,"t":581},{"p":1113,"t":606},{"p":1126,"t":632},{"p":1132,"t":658},{"p":1129,"t":684},{"p":1118,"t":709},{"p":1118,"t":735},{"p":1118,"t":756},{"p":1118,"t":781},{"p":1117,"t":807},{"p":1118,"t":833},{"p":1118,"t":859},{"p":1121,"t":884},{"p":1121,"t":910},{"p":1118,"t":936},{"p":1118,"t":957},{"p":1117,"t":982},{"p":1112,"t":1008},{"p":1116,"t":1034},{"p":1119,"t":1060},{"p":1126,"t":1085},{"p":1124,"t":1111},],
            [{"p":1121,"t":71},{"p":1109,"t":97},{"p":1105,"t":123},{"p":1125,"t":148},{"p":1128,"t":174},{"p":1141,"t":200},{"p":1131,"t":226},{"p":1127,"t":251},{"p":1129,"t":277},{"p":1127,"t":303},{"p":1126,"t":328},{"p":1122,"t":354},{"p":1118,"t":379},{"p":1121,"t":405},{"p":1115,"t":431},{"p":1104,"t":457},{"p":1113,"t":482},{"p":1113,"t":508},{"p":1115,"t":534},{"p":1112,"t":559},{"p":1112,"t":585},{"p":1113,"t":611},{"p":1113,"t":631},{"p":1108,"t":657},{"p":1103,"t":683},{"p":1098,"t":709},{"p":1108,"t":734},{"p":1107,"t":760},{"p":1098,"t":786},{"p":1098,"t":812},{"p":1110,"t":837},{"p":1112,"t":863},{"p":1114,"t":889},{"p":1113,"t":914},{"p":1117,"t":940},{"p":1123,"t":966},{"p":1118,"t":991},{"p":1120,"t":1017},{"p":1118,"t":1043},{"p":1125,"t":1069},{"p":1130,"t":1094},{"p":1124,"t":1110},],
            [{"p":1085,"t":68},{"p":1055,"t":93},{"p":1056,"t":119},{"p":1056,"t":140},{"p":1035,"t":165},{"p":1035,"t":186},{"p":1023,"t":212},{"p":1023,"t":232},{"p":1035,"t":258},{"p":1033,"t":284},{"p":1033,"t":304},{"p":1037,"t":330},{"p":1037,"t":355},{"p":1037,"t":376},{"p":1042,"t":402},{"p":1042,"t":422},{"p":1038,"t":448},{"p":1037,"t":474},{"p":1040,"t":499},{"p":1040,"t":520},{"p":1021,"t":546},{"p":1021,"t":566},{"p":1014,"t":592},{"p":1014,"t":612},{"p":1032,"t":638},{"p":1037,"t":658},{"p":1031,"t":684},{"p":1041,"t":710},{"p":1041,"t":730},{"p":1025,"t":751},{"p":991,"t":771},{"p":984,"t":792},{"p":983,"t":813},{"p":986,"t":833},{"p":957,"t":854},{"p":957,"t":869},{"p":948,"t":890},{"p":934,"t":910},{"p":934,"t":926},{"p":912,"t":946},{"p":912,"t":962},{"p":920,"t":982},{"p":920,"t":997},]
        ],
    },
    {
        "id":41335805,
        "name":"6x3:00",
        "data":[
            [{"p":1094,"t":92},{"p":1067,"t":117},{"p":1070,"t":138},{"p":1090,"t":164},{"p":1089,"t":184},{"p":1075,"t":210},{"p":1091,"t":231},{"p":1093,"t":256},{"p":1099,"t":282},{"p":1099,"t":303},{"p":1087,"t":324},{"p":1091,"t":349},{"p":1082,"t":375},{"p":1082,"t":396},{"p":1093,"t":421},{"p":1093,"t":442},{"p":1084,"t":468},{"p":1078,"t":488},{"p":1080,"t":514},{"p":1088,"t":540},{"p":1111,"t":566},{"p":1111,"t":586},{"p":1090,"t":612},{"p":1090,"t":633},{"p":1090,"t":659},{"p":1085,"t":679},{"p":1082,"t":705},{"p":1079,"t":731},{"p":1079,"t":757},{"p":1079,"t":777},{"p":1097,"t":803},{"p":1097,"t":824},{"p":1087,"t":849},{"p":1101,"t":875},{"p":1101,"t":896},{"p":1104,"t":922},{"p":1092,"t":947},{"p":1092,"t":968},{"p":1101,"t":994},{"p":1110,"t":1019},{"p":1116,"t":1040},{"p":1106,"t":1066},{"p":1104,"t":1092},{"p":1097,"t":1117},{"p":1097,"t":1138},{"p":1114,"t":1164},{"p":1114,"t":1184},{"p":1101,"t":1210},{"p":1107,"t":1236},{"p":1107,"t":1257},{"p":1101,"t":1283},{"p":1101,"t":1303},{"p":1102,"t":1329},{"p":1102,"t":1350},{"p":1097,"t":1375},{"p":1097,"t":1396},{"p":1101,"t":1422},{"p":1111,"t":1442},{"p":1109,"t":1468},{"p":1110,"t":1494},{"p":1110,"t":1515},{"p":1101,"t":1540},{"p":1101,"t":1561},{"p":1090,"t":1587},{"p":1090,"t":1607},{"p":1088,"t":1633},{"p":1097,"t":1659},{"p":1097,"t":1679},{"p":1091,"t":1705},{"p":1091,"t":1726},{"p":1094,"t":1752},{"p":1083,"t":1772},{"p":1081,"t":1798},],
            [{"p":1113,"t":73},{"p":1113,"t":94},{"p":1091,"t":115},{"p":1088,"t":140},{"p":1088,"t":161},{"p":1080,"t":187},{"p":1080,"t":207},{"p":1079,"t":233},{"p":1092,"t":259},{"p":1092,"t":280},{"p":1071,"t":305},{"p":1083,"t":326},{"p":1081,"t":352},{"p":1103,"t":378},{"p":1095,"t":403},{"p":1095,"t":424},{"p":1097,"t":450},{"p":1101,"t":476},{"p":1101,"t":496},{"p":1096,"t":522},{"p":1087,"t":543},{"p":1090,"t":568},{"p":1085,"t":594},{"p":1085,"t":615},{"p":1090,"t":641},{"p":1099,"t":666},{"p":1099,"t":687},{"p":1098,"t":713},{"p":1098,"t":733},{"p":1105,"t":759},{"p":1105,"t":785},{"p":1105,"t":805},{"p":1107,"t":831},{"p":1118,"t":857},{"p":1118,"t":878},{"p":1098,"t":904},{"p":1103,"t":929},{"p":1103,"t":950},{"p":1110,"t":976},{"p":1106,"t":996},{"p":1106,"t":1022},{"p":1081,"t":1048},{"p":1112,"t":1074},{"p":1112,"t":1094},{"p":1114,"t":1120},{"p":1118,"t":1146},{"p":1118,"t":1166},{"p":1113,"t":1192},{"p":1088,"t":1218},{"p":1088,"t":1239},{"p":1096,"t":1264},{"p":1105,"t":1290},{"p":1105,"t":1311},{"p":1099,"t":1337},{"p":1101,"t":1362},{"p":1101,"t":1383},{"p":1099,"t":1409},{"p":1099,"t":1429},{"p":1098,"t":1455},{"p":1099,"t":1481},{"p":1099,"t":1502},{"p":1089,"t":1527},{"p":1089,"t":1548},{"p":1094,"t":1574},{"p":1108,"t":1600},{"p":1108,"t":1620},{"p":1092,"t":1646},{"p":1092,"t":1667},{"p":1095,"t":1692},{"p":1095,"t":1713},{"p":1098,"t":1739},{"p":1098,"t":1759},{"p":1101,"t":1785},],
            [{"p":1086,"t":67},{"p":1086,"t":88},{"p":1094,"t":109},{"p":1093,"t":134},{"p":1093,"t":155},{"p":1109,"t":181},{"p":1109,"t":201},{"p":1085,"t":227},{"p":1087,"t":253},{"p":1087,"t":273},{"p":1095,"t":299},{"p":1095,"t":320},{"p":1084,"t":346},{"p":1090,"t":366},{"p":1101,"t":392},{"p":1110,"t":418},{"p":1110,"t":438},{"p":1107,"t":464},{"p":1107,"t":485},{"p":1093,"t":511},{"p":1093,"t":531},{"p":1096,"t":557},{"p":1105,"t":583},{"p":1105,"t":603},{"p":1095,"t":629},{"p":1095,"t":650},{"p":1119,"t":676},{"p":1119,"t":696},{"p":1109,"t":722},{"p":1109,"t":743},{"p":1096,"t":768},{"p":1078,"t":789},{"p":1085,"t":814},{"p":1106,"t":835},{"p":1108,"t":861},{"p":1110,"t":886},{"p":1110,"t":907},{"p":1111,"t":933},{"p":1080,"t":958},{"p":1080,"t":979},{"p":1081,"t":1005},{"p":1087,"t":1031},{"p":1087,"t":1056},{"p":1087,"t":1077},{"p":1091,"t":1103},{"p":1094,"t":1123},{"p":1088,"t":1149},{"p":1090,"t":1174},{"p":1097,"t":1195},{"p":1098,"t":1221},{"p":1101,"t":1246},{"p":1096,"t":1267},{"p":1094,"t":1293},{"p":1085,"t":1318},{"p":1098,"t":1339},{"p":1097,"t":1365},{"p":1093,"t":1391},{"p":1091,"t":1416},{"p":1091,"t":1437},{"p":1086,"t":1463},{"p":1092,"t":1489},{"p":1092,"t":1509},{"p":1099,"t":1535},{"p":1108,"t":1561},{"p":1117,"t":1586},{"p":1095,"t":1612},{"p":1104,"t":1638},{"p":1104,"t":1658},{"p":1107,"t":1684},{"p":1106,"t":1710},{"p":1097,"t":1736},{"p":1083,"t":1761},{"p":1083,"t":1782},],
            [{"p":1079,"t":68},{"p":1092,"t":93},{"p":1092,"t":114},{"p":1075,"t":140},{"p":1075,"t":160},{"p":1072,"t":186},{"p":1083,"t":211},{"p":1083,"t":232},{"p":1078,"t":258},{"p":1084,"t":283},{"p":1091,"t":309},{"p":1087,"t":335},{"p":1087,"t":355},{"p":1094,"t":381},{"p":1088,"t":406},{"p":1098,"t":432},{"p":1098,"t":453},{"p":1089,"t":478},{"p":1114,"t":504},{"p":1114,"t":525},{"p":1104,"t":550},{"p":1108,"t":576},{"p":1101,"t":602},{"p":1101,"t":622},{"p":1110,"t":648},{"p":1108,"t":674},{"p":1102,"t":699},{"p":1107,"t":725},{"p":1107,"t":746},{"p":1096,"t":771},{"p":1101,"t":797},{"p":1104,"t":823},{"p":1101,"t":848},{"p":1101,"t":869},{"p":1108,"t":895},{"p":1101,"t":920},{"p":1104,"t":946},{"p":1104,"t":966},{"p":1109,"t":992},{"p":1112,"t":1018},{"p":1112,"t":1038},{"p":1107,"t":1064},{"p":1093,"t":1090},{"p":1103,"t":1116},{"p":1103,"t":1136},{"p":1104,"t":1162},{"p":1095,"t":1188},{"p":1095,"t":1208},{"p":1091,"t":1234},{"p":1098,"t":1260},{"p":1097,"t":1285},{"p":1097,"t":1306},{"p":1095,"t":1332},{"p":1085,"t":1357},{"p":1085,"t":1378},{"p":1091,"t":1403},{"p":1099,"t":1429},{"p":1099,"t":1450},{"p":1102,"t":1476},{"p":1085,"t":1502},{"p":1085,"t":1522},{"p":1087,"t":1548},{"p":1096,"t":1573},{"p":1096,"t":1594},{"p":1099,"t":1620},{"p":1092,"t":1645},{"p":1095,"t":1671},{"p":1095,"t":1692},{"p":1097,"t":1717},{"p":1093,"t":1743},{"p":1086,"t":1769},{"p":1105,"t":1794},],
            [{"p":1092,"t":66},{"p":1075,"t":91},{"p":1075,"t":112},{"p":1099,"t":138},{"p":1091,"t":163},{"p":1091,"t":184},{"p":1098,"t":210},{"p":1097,"t":236},{"p":1107,"t":261},{"p":1095,"t":287},{"p":1095,"t":308},{"p":1089,"t":334},{"p":1095,"t":359},{"p":1102,"t":385},{"p":1105,"t":411},{"p":1100,"t":437},{"p":1098,"t":463},{"p":1098,"t":483},{"p":1092,"t":509},{"p":1087,"t":535},{"p":1086,"t":561},{"p":1086,"t":581},{"p":1094,"t":607},{"p":1096,"t":633},{"p":1098,"t":658},{"p":1097,"t":684},{"p":1097,"t":705},{"p":1090,"t":731},{"p":1091,"t":756},{"p":1090,"t":782},{"p":1090,"t":803},{"p":1089,"t":829},{"p":1090,"t":854},{"p":1092,"t":880},{"p":1092,"t":901},{"p":1101,"t":926},{"p":1098,"t":952},{"p":1103,"t":978},{"p":1105,"t":1004},{"p":1105,"t":1024},{"p":1088,"t":1050},{"p":1085,"t":1076},{"p":1093,"t":1102},{"p":1103,"t":1128},{"p":1101,"t":1153},{"p":1102,"t":1179},{"p":1099,"t":1205},{"p":1099,"t":1226},{"p":1100,"t":1251},{"p":1104,"t":1277},{"p":1083,"t":1303},{"p":1083,"t":1323},{"p":1090,"t":1349},{"p":1096,"t":1375},{"p":1100,"t":1401},{"p":1100,"t":1421},{"p":1104,"t":1447},{"p":1102,"t":1473},{"p":1102,"t":1493},{"p":1090,"t":1519},{"p":1095,"t":1545},{"p":1095,"t":1566},{"p":1092,"t":1592},{"p":1095,"t":1612},{"p":1086,"t":1638},{"p":1103,"t":1664},{"p":1103,"t":1684},{"p":1110,"t":1710},{"p":1097,"t":1736},{"p":1097,"t":1757},{"p":1102,"t":1782},{"p":1141,"t":1825},],
            [{"p":1077,"t":69},{"p":1075,"t":94},{"p":1075,"t":115},{"p":1073,"t":136},{"p":1081,"t":161},{"p":1081,"t":182},{"p":1077,"t":202},{"p":1079,"t":228},{"p":1079,"t":249},{"p":1074,"t":270},{"p":1072,"t":295},{"p":1075,"t":316},{"p":1081,"t":342},{"p":1073,"t":362},{"p":1079,"t":388},{"p":1079,"t":409},{"p":1077,"t":435},{"p":1077,"t":455},{"p":1078,"t":481},{"p":1088,"t":501},{"p":1090,"t":527},{"p":1087,"t":548},{"p":1083,"t":573},{"p":1080,"t":594},{"p":1083,"t":620},{"p":1088,"t":645},{"p":1088,"t":666},{"p":1094,"t":691},{"p":1083,"t":712},{"p":1069,"t":738},{"p":1069,"t":758},{"p":1071,"t":779},{"p":1065,"t":805},{"p":1065,"t":825},{"p":1063,"t":846},{"p":1074,"t":872},{"p":1078,"t":892},{"p":1076,"t":918},{"p":1076,"t":938},{"p":1067,"t":959},{"p":1067,"t":985},{"p":1067,"t":1005},{"p":1084,"t":1026},{"p":1076,"t":1051},{"p":1076,"t":1072},{"p":1074,"t":1098},{"p":1074,"t":1118},{"p":1075,"t":1139},{"p":1078,"t":1165},{"p":1084,"t":1185},{"p":1082,"t":1211},{"p":1082,"t":1231},{"p":1077,"t":1252},{"p":1077,"t":1278},{"p":1077,"t":1298},{"p":1073,"t":1319},{"p":1085,"t":1344},{"p":1078,"t":1365},{"p":1078,"t":1386},{"p":1069,"t":1406},{"p":1061,"t":1427},{"p":1049,"t":1447},{"p":1052,"t":1468},{"p":1049,"t":1488},{"p":1025,"t":1509},{"p":1026,"t":1529},{"p":1034,"t":1550},{"p":1035,"t":1570},{"p":1068,"t":1596},{"p":1068,"t":1617},{"p":1073,"t":1637},{"p":1067,"t":1658},{"p":1072,"t":1678},{"p":1069,"t":1699},{"p":1067,"t":1720},{"p":1061,"t":1745},{"p":1061,"t":1766},{"p":1062,"t":1787},],
        ],
    },
];

const graph = (id) => {
    const xAxis = [];
    const yAxis = [];
    const series = [];
    const dataset = [];

    xAxis.push({
        type: 'time',
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    });
    yAxis.push({
        type: 'value',
        name: 'Pace',
        nameLocation: 'middle',
        inverse: true,
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        min: 'dataMin',
        max: 'dataMax',
    });

    const sd = strokeData.find((sd) => sd.id == id);
    sd.data.forEach((d, i) => {
        dataset.push({
            dimension: [ 'p', 't' ],
            source: d,
        });

        series.push({
            type: 'line',
            name: `Int ${i+1}`,
            encode: {
                x: 't',
                y: 'p',
            },
            datasetIndex: i,
            showSymbol: false,
            animation: false,
        });
    });

    return {
        legend: {
            type: 'scroll',
            top: '10%',
        },
        title: {
            subtext: sd.name,
            textAlign: 'center',
            left: 'middle',
            bottom: '10%',
        },
        xAxis,
        yAxis,
        dataset,
        series,
    };
};

export const intervalGraph = {
    workout_40553854: (workouts) => graph(40553854),
    workout_41335805: (workouts) => graph(41335805),
};
