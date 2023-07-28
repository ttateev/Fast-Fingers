let wordsArr = ['հայրենիք', 'ծաղիկ', 'ժամացույց', 'ստեղնաշար', 'համակարգիչ', 'ըմբշամարտիկ', 'պղնձամոլիբդեն', 'կատար', 'ստորոտ', 'եզակի', 'բարձրորակ', 
'հանդերձանք', 'բարիք', 'ուսանող', 'թութակ', 'մրջյուն', 'ժողովուրդ', 'փետուր', 'արցունք', 'արտասահման', 'արտերկիր', 
'օվկիանոս', 'արտացոլանք', 'սիրամարգ', 'արվարձան', 'քայլարշավ', 'արճիճ', 'արծաթագույն', 'լաբիրինթոս', 'լաջվարդ', 'վայելչակազմ', 
'տագնապահար', 'վայրկենասլաք', 'տեսակարար', 'տաղտկալից', 'լաստանավ', 'պատժիչ', 'տիեզերագնաց', 'պատրվակ', 'լռություն', 'զուգահեռ', 
'յուրօրինակ', 'լեռնազանգված', 'յուրովի', 'պիտակավորում', 'ընձուղտ', 'յուղամատիտ', 'պարթևահասակ', 'զարդատուփ', 'ըմբոստ', 'ընթացիկ',
'դաժան', 'ծաղկեփունջ', 'սոճի', 'դաշնամուր', 'հազվագյուտ', 'մատչելի', 'դժկամ', 'սահուն', 'ռադիոաղբյուր', 'շաբաթօրյակ',
'ոստյուն', 'թատերաբեմ', 'ձիարշավարան', 'ջրաշուշան', 'րոպեաչափ', 'ռեակցիա', 'ոգելից', 'շեշտ', 'ցածրահարկ', 'անկոտրում',
'շրշյուն', 'ցուցահանդես', 'ցրտաշունչ', 'ջեռուցիչ', 'ղողանջ', 'դաշտամուկ', 'ողկույզ', 'ջրհեղեղ', 'ցիտրուս', 'ռեալիզմ',
'չարախոհ', 'սարահարթ', 'ոխակալ', 'ցեղակից', 'փայտփորիկ', 'խմիչք', 'ոսկեհեր', 'դրացի', 'փայլուն', 'չափազանցություն',
'փոխադրամիջոց', 'չակերտ', 'փափկասուն', 'չեզոք', 'դատախազ', 'ձեռնարկատեր', 'ռոք', 'շահութաբեր', 'էական', 'գնացք',
"տաբաթ","տագնապալից","տադիցիա","տաբատ","տագնապախռով","տաեբոլոր","տաբատագործ","տագնապածով","տաղ","տաբատակալ",
"սաամական","սագակտուց","սադափագործ","սգերգ","սուրհանդակ","սելավ","սիլիկաթթու","սիկային","սիմինդ","սեթևեթանք", 
"պաթոլոգիա","պախարակում","պակաս","պահ","պահանջ","պահեստ","պահառու","պահեստատեղ","պահընկեր","պահո",
"ժակետ","ժամադիր","ժամամուտ","ժուժկալ","ժպիտ","ժխոր","ժուժկալ","ժապավենել","ժանդարմ","ժայռապինդ", 
"պաթոլոգիա","պախարակում","պակաս","պահ","պահանջ","պահեստ","պահառու","պահեստատեղ","պահընկեր","պահո",
"ժակետ","ժամամուտ","ժուժկալ","ժպիտ","ժխոր","ժմեժում","ժապավենել","ժանդարմ","ադամանդափայլ","ազնվապետականություն",
"ակնարկություն","աղջամուղջ","ամիրապետություն","անագագործ","անարդյունավետ","անզավակություն","առյուծակերպ","արտոնություն","խաղահրապարակ","խցանում",
"խտրականություն","խուսափողական","խորշոմապատել","խորամանկ","խոսքակույտ","խոշորապատիվ","խինդածիծաղ","խափանություն","մագաղաթ", "մագիստրոս", 
"մագնեզիա", "մազակալ", "մակաբույծ", "մրցամարտ", "մրաթաթախ", "մրգանույշ", "մտահույզ", "մսագունդ", "մուննաթ", "նաժիշտ",
"կենցաղ", "նախատինք",  "նավատորմիկ","նրբերշիկ", "նրբաբարո", "նրբազգա", "նպարակել", "նորակոչ", "նոթագրում", "դամբարան", 
"դիմախաղ", "դաշնակահար", "դաշտեզր", "դեգերուն", "դեղամիջոց", "դժխեմություն", "դժվարանցելի", "դրամատուրգ", "դրոշմ", "թափառական", 
"թավիշ", "թարմություն", "թերաճ", "թթվածին", "թիկնաթոռ", "թղթատար", "թնդյուն", "թողարկիչ", "թրթուր", "ցպահանջ"]