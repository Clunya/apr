/* 
    * Вычисление даты Пасхи текущего года и разницы между датами. 
    * Разница - соответствует количеству седмиц прошедших от Пасхи до текущего момента.
    *   Подробное описание смотри в ./doc
*/
var massDays = ['0', 'ВОСРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

var pashalia = {

    // Пасхалия, где месяц -03 это апрель, -04 май и тд
    'year2015': [03, 12], 'year2016': [04, 01], 'year2017': [03, 16], 'year2018': [03, 08], 'year2019': [03, 28], 'year2020': [03, 19], 'year2021': [04, 02], 'year2022': [03, 24], 'year2023': [03, 16], 'year2024': [04, 05], 'year2025': [03, 20], 'year2026': [03, 12], 'year2027': [04, 02], 'year2028': [03, 16], 'year2029': [03, 08], 'year2030': [03, 28], 'year2031': [03, 13], 'year2032': [04, 02], 'year2033': [03, 24], 'year2034': [03, 09], 'year2035': [03, 29], 'year2036': [03, 20], 'year2037': [03, 05], 'year2038': [03, 025]
};

/**
 * Константа DMS, експонента - это один день в миллисекундах.
 */
DMS = 864E5
/**
 * timebox - переменная для значения текущей даты
 */
timeBox = new Date();
/**
 * Инкремент текущего дня. Приводим номер дня к привычному счичлению от единицы.
 */
var numDay = timeBox.getDay() + 1;
/**
 * Дата прошедшей Пасхи
 */
var dataPashi = "Пасхи нет";
/**
 * Соотвествено, здесь дата следущей Пасхи.
 */
var dataPashiNext = "ДАТЫ СЛЕДУЮЩЕЙ ПАСХИ НЕТ";
/**
 * Конкатенация для имен директорий в URL.
 * Префикс + текущий год.
 */
var curentYearPrefics = "year" + timeBox.getFullYear();
/**
 * Конкатенация для имен директорий в URL.
 * Префикс + следущий год.
 */
var curentYearPreficsNext = "year" + (timeBox.getFullYear() + 1);

/**
 * Проверка текущего дня относительно даты Пасхи для текущего года.
 * Требуется уточнить в каком положении относительно (до или после) Пасхи текущего года находится текущий день, и в зависимости от этого инициализировать переменные:
 * dataPashi и  dataNextPashi.
 */
if (
    timeBox >= new Date(timeBox.getFullYear(), pashalia[curentYearPrefics][0], pashalia[curentYearPrefics][1])
    // && 
    // Date.now() > new Date(timeBox.getFullYear(), 0, 1) 
) {
    // curentYearPrefics = "year" + (timeBox.getFullYear());
    dataPashi = new Date((timeBox.getFullYear()), pashalia[curentYearPrefics][0], pashalia[curentYearPrefics][1]);
    curentYearPreficsNext = "year" + (timeBox.getFullYear() + 1);
    dataPashiNext = new Date((timeBox.getFullYear() + 1), pashalia[curentYearPreficsNext][0], pashalia[curentYearPreficsNext][1]);

    // console.log('================true================');
    console.log("Год и дата прошедшей Пасхи: " + dataPashi.toString().slice(0, 15));
    console.log("Год и дата ===СЛЕДУЩЕЙ=== Пасхи: " + dataPashiNext.toString().slice(0, 16));
    // console.log('====================================');

}

else {
    /**
     * В данном блоке инициализируется дата прошедшей Пасхи. Это дата текушего Пасхального Богослужебного года и начало его отсчета в седмицах.
     * @var: dataPashi
     */
    oldYearPasha = "year" + (timeBox.getFullYear() - 1);
    dataPashi = new Date(timeBox.getFullYear() - 1, pashalia[oldYearPasha][0], pashalia[oldYearPasha][1]);

    // console.log('==============else==================');
    console.log("Год и дата прошедшей Пасхи: " + dataPashi.toString().slice(0, 15));
    // console.log('====================================');
}


/* 
    Вычисление разницы между текущем временем
    и датой прошедшей Пасхи. Обрезка значения до целого.
    Это будет текущая седмица Богослужебного года.
    ----------------------------------------------------
*/
var sedmica = (Math.trunc((timeBox - dataPashi) / DMS / 7)) + 1;



/**
 * Количество седмиц Пасхального года
 */
var allSedmica = (Math.trunc((dataPashiNext - dataPashi) / DMS / 7)) + 1;

    console.log("От Пасхи " + timeBox.getFullYear() + " года и до Пасхи " + (timeBox.getFullYear() + 1) + " года случается " + "/// " + (allSedmica - 1) + " ///" + " седмиц.");


/**
 * Вычисление Воздвиженской отступки.
 */
function otstupkaVozdvijjenie() {
    timeBoxVozdvijjenie = new Date(timeBox.getFullYear(), 8, 27);
    sedmicaVozdvijjenie = (Math.trunc((timeBoxVozdvijjenie - dataPashi) / DMS / 7) -6);
    console.warn("=-=-=-=-=-=-=-=", sedmicaVozdvijjenie)
    
    /**
     * Значение переменной `otstupkaV` получает число, которое равно количеству седмиц превыщающих число 17. 
     * Чтения Евангелия после Пасхи расчитано на 17-седмиц и далее должно быть начато Евангелие от Луки, в первую Неделю (Воскресенье), после праздника Воздвижения Креста. Переменная `otstupkaV` показывает превышение числа 17. Это превышение и будет отступкой для повторных чтений до праздника Воздвижения.
     * 
     */
    var otstupkaV = sedmica - (sedmicaVozdvijjenie - 17);
    var prestupkaV = sedmica;
    // var norm = sedmicaVozdvijjenie + (17 - sedmicaVozdvijjenie);


    /**
     * Проверка текущей седмицы относительно праздника Воздвижения Креста. Какое значение имеет текущая седмица по отношению к числу 17.
     * 
     */
    if (timeBox >= timeBoxVozdvijjenie & sedmica > sedmicaVozdvijjenie & sedmica > 17) {
        return otstupkaV;


        // return console.log("\n\n Воздвиженье уже было по Пасхе в " + sedmicaVozdvijjenie + " седмице: " + timeBoxVozdvijjenie);
    }

    else if (timeBox >= timeBoxVozdvijjenie & sedmica < sedmicaVozdvijjenie & sedmica > 17) {
        return prestupkaV;

        // console.log(prestupkaV + timeBoxVozdvijjenie + "\n Воздвиженье еще будет на " + sedmicaVozdvijjenie + " седмице: " + timeBoxVozdvijjenie);
    }

    else return 0
    // console.log("!!! ВОЗДВИЖЕНИЯ ЕЩЕ НЕ БЫЛО !!!" + timeBoxVozdvijjenie + sedmicaVozdvijjenie);

    // return sedmica;
}

console.log("\n=-=-=-=-=-=-=\n Страница Апракоса-Евангелия с учетом отступки и преступки\n " + "http://clunya.github.io/html/APRACOS/" + otstupkaVozdvijjenie() + "/" + (numDay) + ".html\n\n");


// Адрес-заголовок на текущие чтение с учетом отступки и преступки


/* 
    Сборка ссылки на id-элемент текущего дня
    -------------------------------------------
*/
var linkToCurrentSeed = '<a href="' + ('#seed' + sedmica + '"') + ' title="Сегодня : ' + massDays[numDay] + '">' + sedmica + '</a>';


/* 
    Триггер класса seeddayON
    -------------------------
    */
function seeddayON() {

    document.getElementById("date2").innerHTML = linkToCurrentSeed;

    //  формирование id для элемента
    var a = "seedday-" + sedmica + "-" + numDay;

    // document.getElementById("date3").innerHTML =massDays[numDay];

    // ИСКЛЮЧЕНИЕ НУЖНО СОЗДАТЬ
    try {

        var b = document.getElementById(a).className += "ON";

    } catch (error) {

        // alert('Сработало исключение : ' + error.stack + " для элемента " + b);
        document.getElementById("date4").innerHTML = "Отсутствуют данные текущей седмицы"
    }

    return a
}


function seedON() {


    var a = "seed" + sedmica;

    // document.getElementById("date3").innerHTML =massDays[numDay];

    var b = document.getElementById(a).className += " " + "colorBlock";

    console.log('================== : ' + b);

    return a
}

// функция гласа Октоиха
// sedmica = 6;
var sedmicaPyatidesyatnici = undefined;
var glas = undefined;

function glasSedmici(sedmica) {

    glasSedmici = {
        "1": 8, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7,
        "9": 8, "10": 1, "11": 2, "12": 3, "13": 4, "14": 5, "15": 6, "16": 7,
        "17": 8, "18": 1, "19": 2, "20": 3, "21": 4, "22": 5, "23": 6, "24": 7,
        "25": 8, "26": 1, "27": 2, "28": 3, "29": 4, "30": 5, "31": 6, "32": 7,
        "33": 8, "34": 1, "35": 2, "36": 3, "37": 4, "38": 5, "39": 6, "40": 7,
        "41": 8, "42": 1, "43": 2, "44": 3, "45": 4, "46": 5, "47": 6, "48": 7,
        "49": 8, "50": 1, "51": 2, "52": 3, "53": 4, "54": 5, "55": 6, "56": 7,
        "57": 8, "58": 1, "59": 2, "60": 3, "61": 4, "62": 5, "63": 6, "64": 7,
        "65": 8,

    }

    if (sedmica) {
        return glasSedmici[sedmica];
    }
    else return "невнятный";
}

function seedPyatidesyatnica() {
    // получает текущую седмицу и вычитает из нее семь пасхальных седмиц
    if (sedmica > 7) {
        // glas = ;
        sedmicaPyatidesyatnici = (sedmica - 7);
        // return sedmicaPyatidesyatnici;
        document.getElementById("date3").innerHTML = "По Пятидесятнице";
        document.getElementById("date4").innerHTML = '<a href="' + ('#seed' + sedmica + '"') + ' title="Сегодня : ' + massDays[numDay] + '">' + sedmicaPyatidesyatnici + '</a>';
        document.getElementById("date5").innerHTML = "Глас " + glasSedmici(sedmica);


    }


    else {

        glas = glasSedmici(sedmica);
        sedmicaPyatidesyatnici = "Сейчас идет счет седмиц от Пасхи до Пятидесятницы";
        document.getElementById("date3").className += "PlusUngles";
        document.getElementById("date3").innerHTML = sedmicaPyatidesyatnici;
        document.getElementById("date4").className += "blockOFF";
    }
}
