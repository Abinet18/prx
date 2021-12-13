const fs=require('fs');
const csv=`ALB,AL,Albania,sqi,sq,Albanian,yyyy-MM-dd
ARE,AE,United Arab Emirates,ara,ar,Arabic,dd/MM/yyyy
ARG,AR,Argentina,spa,es,Spanish,dd/MM/yyyy
AUS,AU,Australia,eng,en,English,d/MM/yyyy
AUT,AT,Austria,deu,de,German,dd.MM.yyyy
BEL,BE,Belgium,fra,fr,French,d/MM/yyyy
BEL,BE,Belgium,nld,nl,Dutch,d/MM/yyyy
BGR,BG,Bulgaria,bul,bg,Bulgarian,yyyy-M-d
BHR,BH,Bahrain,ara,ar,Arabic,dd/MM/yyyy
BIH,BA,Bosnia and Herzegovina,srp,sr,Serbian,yyyy-MM-dd
BLR,BY,Belarus,bel,be,Belarusian,d.M.yyyy
BOL,BO,Bolivia,spa,es,Spanish,dd-MM-yyyy
BRA,BR,Brazil,por,pt,Portuguese,dd/MM/yyyy
CAN,CA,Canada,fra,fr,French,yyyy-MM-dd
CAN,CA,Canada,eng,en,English,dd/MM/yyyy
CHE,CH,Switzerland,deu,de,German,dd.MM.yyyy
CHE,CH,Switzerland,fra,fr,French,dd.MM.yyyy
CHE,CH,Switzerland,ita,it,Italian,dd.MM.yyyy
CHL,CL,Chile,spa,es,Spanish,dd-MM-yyyy
CHN,CN,China,zho,zh,Chinese,yyyy-M-d
COL,CO,Colombia,spa,es,Spanish,d/MM/yyyy
CRI,CR,Costa Rica,spa,es,Spanish,dd/MM/yyyy
CYP,CY,Cyprus,ell,el,Greek,dd/MM/yyyy
CZE,CZ,Czech Republic,ces,cs,Czech,d.M.yyyy
DEU,DE,Germany,deu,de,German,dd.MM.yyyy
DNK,DK,Denmark,dan,da,Danish,dd-MM-yyyy
DOM,DO,Dominican Republic,spa,es,Spanish,MM/dd/yyyy
DZA,DZ,Algeria,ara,ar,Arabic,dd/MM/yyyy
ECU,EC,Ecuador,spa,es,Spanish,dd/MM/yyyy
EGY,EG,Egypt,ara,ar,Arabic,dd/MM/yyyy
ESP,ES,Spain,spa,es,Spanish,d/MM/yyyy
ESP,ES,Spain,cat,ca,Catalan,dd/MM/yyyy
EST,EE,Estonia,est,et,Estonian,d.MM.yyyy
FIN,FI,Finland,fin,fi,Finnish,d.M.yyyy
FRA,FR,France,fra,fr,French,dd/MM/yyyy
GBR,GB,United Kingdom,eng,en,English,dd/MM/yyyy
GRC,GR,Greece,ell,el,Greek,d/M/yyyy
GTM,GT,Guatemala,spa,es,Spanish,d/MM/yyyy
HKG,HK,Hong Kong,zho,zh,Chinese,yyyy年M月d日
HND,HN,Honduras,spa,es,Spanish,MM-dd-yyyy
HRV,HR,Croatia,hrv,hr,Croatian,dd.MM.yyyy.
HUN,HU,Hungary,hun,hu,Hungarian,yyyy.MM.dd.
IDN,ID,Indonesia,ind,in,Indonesian,dd/MM/yyyy
IND,IN,India,hin,hi,Hindi,३/६/१२
IND,IN,India,eng,en,English,d/M/yyyy
IRL,IE,Ireland,gle,ga,Irish,dd/MM/yyyy
IRL,IE,Ireland,eng,en,English,dd/MM/yyyy
IRQ,IQ,Iraq,ara,ar,Arabic,dd/MM/yyyy
ISL,IS,Iceland,isl,is,Icelandic,d.M.yyyy
ISR,IL,Israel,heb,iw,Hebrew,dd/MM/yyyy
ITA,IT,Italy,ita,it,Italian,dd/MM/yyyy
JOR,JO,Jordan,ara,ar,Arabic,dd/MM/yyyy
JPN,JP,Japan,jpn,ja,Japanese,yyyy/MM/dd
JPN,JP,Japan,jpn,ja,Japanese,H24.MM.dd
KOR,KR,South Korea,kor,ko,Korean,yyyy. M. d
KWT,KW,Kuwait,ara,ar,Arabic,dd/MM/yyyy
LBN,LB,Lebanon,ara,ar,Arabic,dd/MM/yyyy
LBY,LY,Libya,ara,ar,Arabic,dd/MM/yyyy
LTU,LT,Lithuania,lit,lt,Lithuanian,yyyy.M.d
LUX,LU,Luxembourg,fra,fr,French,dd/MM/yyyy
LUX,LU,Luxembourg,deu,de,German,dd.MM.yyyy
LVA,LV,Latvia,lav,lv,Latvian,yyyy.d.M
MAR,MA,Morocco,ara,ar,Arabic,dd/MM/yyyy
MEX,MX,Mexico,spa,es,Spanish,d/MM/yyyy
MKD,MK,Macedonia,mkd,mk,Macedonian,d.M.yyyy
MLT,MT,Malta,eng,en,English,dd/MM/yyyy
MLT,MT,Malta,mlt,mt,Maltese,dd/MM/yyyy
MNE,ME,Montenegro,srp,sr,Serbian,d.M.yyyy.
MYS,MY,Malaysia,msa,ms,Malay,dd/MM/yyyy
NIC,NI,Nicaragua,spa,es,Spanish,MM-dd-yyyy
NLD,NL,Netherlands,nld,nl,Dutch,d-M-yyyy
NOR,NO,Norway,nor,no,Norwegian,dd.MM.yyyy
NOR,NO,Norway,nor,no,Norwegian,dd.MM.yyyy
NZL,NZ,New Zealand,eng,en,English,d/MM/yyyy
OMN,OM,Oman,ara,ar,Arabic,dd/MM/yyyy
PAN,PA,Panama,spa,es,Spanish,MM/dd/yyyy
PER,PE,Peru,spa,es,Spanish,dd/MM/yyyy
PHL,PH,Philippines,eng,en,English,M/d/yyyy
POL,PL,Poland,pol,pl,Polish,dd.MM.yyyy
PRI,PR,Puerto Rico,spa,es,Spanish,MM-dd-yyyy
PRT,PT,Portugal,por,pt,Portuguese,dd-MM-yyyy
PRY,PY,Paraguay,spa,es,Spanish,dd/MM/yyyy
QAT,QA,Qatar,ara,ar,Arabic,dd/MM/yyyy
ROU,RO,Romania,ron,ro,Romanian,dd.MM.yyyy
RUS,RU,Russia,rus,ru,Russian,dd.MM.yyyy
SAU,SA,Saudi Arabia,ara,ar,Arabic,dd/MM/yyyy
SCG,CS,Serbia and Montenegro,srp,sr,Serbian,d.M.yyyy.
SDN,SD,Sudan,ara,ar,Arabic,dd/MM/yyyy
SGP,SG,Singapore,zho,zh,Chinese,dd/MM/yyyy
SGP,SG,Singapore,eng,en,English,M/d/yyyy
SLV,SV,El Salvador,spa,es,Spanish,MM-dd-yyyy
SRB,RS,Serbia,srp,sr,Serbian,d.M.yyyy.
SVK,SK,Slovakia,slk,sk,Slovak,d.M.yyyy
SVN,SI,Slovenia,slv,sl,Slovenian,d.M.yyyy
SWE,SE,Sweden,swe,sv,Swedish,yyyy-MM-dd
SYR,SY,Syria,ara,ar,Arabic,dd/MM/yyyy
THA,TH,Thailand,tha,th,Thai,d/M/2555
THA,TH,Thailand,tha,th,Thai,๓/๖/๒๕๕๕
TUN,TN,Tunisia,ara,ar,Arabic,dd/MM/yyyy
TUR,TR,Turkey,tur,tr,Turkish,dd.MM.yyyy
TWN,TW,Taiwan,zho,zh,Chinese,yyyy/M/d
UKR,UA,Ukraine,ukr,uk,Ukrainian,dd.MM.yyyy
URY,UY,Uruguay,spa,es,Spanish,dd/MM/yyyy
USA,US,United States,eng,en,English,M/d/yyyy
USA,US,United States,spa,es,Spanish,M/d/yyyy
VEN,VE,Venezuela,spa,es,Spanish,dd/MM/yyyy
VNM,VN,Vietnam,vie,vi,Vietnamese,dd/MM/yyyy
YEM,YE,Yemen,ara,ar,Arabic,dd/MM/yyyy
ZAF,ZA,South Africa,eng,en,English,yyyy/MM/dd`;

let lines=csv.split('\n');
let uniqueVals=new Set();
lines.forEach(l=> {
    let lineVals=l.split(',');
    uniqueVals.add(lineVals[lineVals.length-1].trim());
});

let dateFormats=Array.from(uniqueVals);

fs.createWriteStream('./dateFormats.json').write(
    `${dateFormats.length} - ${JSON.stringify(dateFormats)}`,
  );