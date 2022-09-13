let question = document.querySelector('.question');
let answerOne = document.querySelector('.answer-one');
let answerTwo = document.querySelector('.answer-two');
let answerThree = document.querySelector('.answer-three');
let answerFour = document.querySelector('.answer-four');
let answerAll = [answerOne, answerTwo, answerThree, answerFour];
let go = document.querySelector('.start');
let main = document.querySelector('main');
let startGame = document.querySelector('.start-game');
let gameOver = document.querySelector('.end');
let gameRestart = document.querySelector('#restart');
let gameOverText = document.querySelector('#end-text');
let level = document.getElementsByClassName('level');
let done = document.querySelectorAll('.correct');
// Подсказки (50/50; Звонок другу; Помощь зала)
let fiveFive = document.querySelector('.five-five');
let call = document.querySelector('.call');
let hallHelp = document.querySelector('.hall-help');
// Время
let timesObj = document.querySelector('.times');
let times = document.getElementById('times_ss');

let count = 0;
let countLevel = 15;

let questionAll = [ 
    {question: 'Из какого фильма Прекрасный принц?', answer: ['Золушка', 'Русалочка', 'Спящая красавица', 'Мулан'], answerTrue: 0, info: 'У прекрасного принца нет имени'},
    {question: 'Из какой страны родом Джастин Бибер?', answer: ['Канада', 'США', 'Франция', 'Англия'], answerTrue: 0, info:'Он также говорит на французском и английском языках, поскольку он родом из Онтарио, франко-канадской провинции.'},
    {question: 'В сиквеле какого праздничного фильма снялся Дональд Трамп?', answer: ['Один дома', 'Один дома 2: Затерянный в Нью-Йорке', 'Ричи Рич', 'Маленькие негодяи'], answerTrue: 1, info: 'Дональд Трамп сыграл эпизодическую роль в фильме “Один дома 2: Затерянный в Нью-Йорке”, который вышел на экраны в 1992 году.'},
    {question: 'Какой герой мультфильма живет в ананасе под водой?', answer: ['Камбала', 'Немо', 'Рик и Морти', 'Губка Боб Квадратные Штаны'], answerTrue: 3, info: 'Губка Боб Квадратные Штаны - американский мультипликационный персонаж, созданный преподавателем морских наук и аниматором Стивеном Хилленбургом для компании Nickelodeon.'},
    {question: 'Что является национальным животным Шотландии?', answer: ['Лошадь', 'Единорог', 'Волк', 'Корова'], answerTrue: 1, info: 'Глубокая связь Шотландии с единорогом берет свое начало в кельтской культуре. Согласно кельтской мифологии, единороги олицетворяют невинность и чистоту, а также ассоциируются с рыцарством, гордостью и смелостью.'},
    {question: 'В каком известном романе фигурировали Джо, Мег, Бет и Эми Марч?', answer: ['Убить пересмешника', 'Том Сойер', 'Маленькие женщины', 'Моби Дик'], answerTrue: 2, info: 'Персонажи Мэг, Бет и Эми Марч были основаны на сестрах автора “Маленьких женщин” Луизы Мэй Олкотт.'},
    {question: 'Какая страна производит больше всего кофе в мире?', answer: ['Колумбия', 'Индонезия', 'Бразилия', 'Вьетнам'], answerTrue: 2, info: 'Бразилия производит около трети всего кофе в мире.'},
    {question: 'Как называются четыре Факультета Хогвартса?', answer: ['Гриффиндор, Пуффендуй, Когтевран и Слизерин', 'Грифон, Ворон, Слон и Змея', 'Север, Восток, Запад и Юг', 'Красный, Синий, Зеленый и Оранжевый'], answerTrue: 0, info: 'Сортировочная шляпа говорит, к какому дому Хогвартса должны принадлежать ученики.'},
    {question: 'Какой вкус у Куантро?', answer: ['Базилика', 'Лимона', 'Ванили', 'Апельсина'], answerTrue: 3, info: 'Куантро - это ликер с апельсиновым вкусом, который впервые был продан в 1875 году.'},
    {question: 'Как называется колокол часов Вестминстерского дворца в Лондоне?', answer: ['Биг Бен', 'Броненосец', 'Калабаш', 'Мумия'], answerTrue: 0, info: 'Ночью циферблат часов и колокольня Биг-Бена подсвечиваются.'},
    {question: 'Кого поцеловала Мадонна на Video Music Awards в 2003 году?', answer: ['Дженнифер Лопес и Шакира', 'Бритни Спирс и Джанет Джексон', 'Бритни Спирс и Кристину Агилеру', 'Кристину Агилеру и Кайли Миноуг'], answerTrue: 2, info: 'Камера переключилась на реакцию Джастина Тимберлейка во время поцелуя Кристины с Мадонной.'},
    {question: 'Какой безалкогольный напиток первым был взят в космос?', answer: ['Пепси', 'Фанта', 'Кока-Кола', 'Снапл'], answerTrue: 2, info: 'Кока-Кола стала первым безалкогольным напитком, который можно было употреблять в космосе, когда 12 июля 1985 года астронавты на борту космического челнока “Челленджер” испытали “космическую банку Кока-Колы”.'},
    {question: 'Сколько весит костюм Чубакки?', answer: ['3.6 кг', '7.7 кг', '2.7 кг', '6.8 кг'], answerTrue: 0, info: 'Питер Уильям Мэйхью сыграл персонажа Чубакку в фильме “Звездные войны”.'},
    {question: 'Кто написал знаменитый дневник, скрываясь от нацистов в Амстердаме?', answer: ['Анна Франк', 'Бриджит Джонс', 'Мария Кюри', 'Хелен Келлер'], answerTrue: 0, info: 'Анна называла свой дневник “Дневник Анны Франк”.'},
    {question: 'Что означает термин “пиано”?', answer: ['В бодром темпе', 'В мягком темпе', 'В умеренно медленном темпе', 'В быстром темпе'], answerTrue: 1, info: 'Пиано определяется как уровень звука при негромком исполнении музыки.'}
];

// {question: '', answer: ['', '', '', ''], answerTrue: , info: ''},

function timer() {
    times.innerHTML--;
    if(times.innerHTML == 0) {
        end();
    } else {
        setTimeout(timer, 1000);
    }
}

function timerReset() {
    if (times.innerHTML <= 0) {
        times.innerHTML = '60';
        timer();
    } else {
        times.innerHTML = '60';
    }
}

function start() {
    timer();
    renderAnswers();
    chooseAnswer();
}

function end() {
    main.style.display = 'none';
    gameOver.style.display = 'flex';
    count = 0;
    countLevel = 15;
    gameRestart.addEventListener('click', () => {
        main.style.display = 'flex';
        gameOver.style.display = 'none';
        for (let i = 0; i < level[0].children.length; i++) {
            const element = level[0].children[i];
            element.style.background = '';
            element.style.color = '';
        }
        for (let i = 0; i < done.length; i++) {
            const element = done[i];
            element.innerHTML = '';
        }
        renderAnswers();
        timerReset();
    })
}

function renderAnswers() {
    if ((count >= 0) && (count < 15)) {
        const element = questionAll[count];
        question.innerHTML = `<p>${element.question}</p>`;
        answerAll[0].innerHTML = `<p><span>• A.</span> ${element.answer[0]}</p>`;
        answerAll[1].innerHTML = `<p><span>• B.</span> ${element.answer[1]}</p>`;
        answerAll[2].innerHTML = `<p><span>• C.</span> ${element.answer[2]}</p>`;
        answerAll[3].innerHTML = `<p><span>• D.</span> ${element.answer[3]}</p>`;
        for (let i = 0; i < level[0].children.length; i++) {
            const element = level[0].children[i];
            element.style.background = '';
            element.style.color = '';
        }
        level[0].children[countLevel].style.background = 'orangered';
        level[0].children[countLevel].style.color = 'white';
    }
}

function chooseAnswer() {
    answerAll.forEach(function(elem, index) {
        elem.addEventListener('click', function() {
            if(index != questionAll[count].answerTrue) {
                end();
            } else {
                done[countLevel].innerHTML = '<div class="done"></div>';
                count++;
                countLevel--;
                timerReset();
            }
            renderAnswers();
        })   
    });
}

// function help() {

// }

startGame.addEventListener('click', () => {
    go.style.display = 'none';
    main.style.display = 'flex';
    start();
});


// Вопросы:
// 16. Кто написал эпическую поэму “Потерянный рай”?
// •	Генри Джеймс
// •	Джон Китс
// •	Джон Стейнбек
// •	Джон Мильтон
// Джон Мильтон
// “Потерянный рай” считается одной из величайших поэм на английском языке.
// 17. Из чего сделан самый крепкий дом в “Трех поросятах”?
// •	Кирпич
// •	Палочки
// •	Солома
// •	Бамбук
// Кирпич
// В оригинальной истории лиса пыталась попасть в дом из кирпичей через дымоход, но упала в горячую воду и ошпарилась насмерть.
// 18. Как называется маленький пластмассовый кусочек на конце шнурка?
// •	Строка
// •	Чехол
// •	Кружево
// •	Аглет
// Аглет
// Аглеты удерживают шнурок от распускания, и облегчают продевание шнурка в отверстия для шнурков.
// 19. Сколько длится мгновение?
// •	60 секунд
// •	90 секунд
// •	120 секунд
// •	180 секунд
// 90 секунд
// Термин “мгновение” был введен в обиход монахом восьмого века святым Бедой Достопочтенным, сообщает Science Focus. Он использовал его для описания промежутка времени в 90 секунд.
// 20. Какая игрушка была первой, которую рекламировали по телевидению?
// •	Барби
// •	Мистер Картофельная Голова
// •	Духовка с Легкой Выпечкой
// •	Ракетный Гонщик
// Мистер Картофельная Голова
// Мистер Картофельная Голова был впервые создан в 1952 году компанией, которая позже стала тем, что сейчас называется Hasbro, Inc. 30 апреля того же года игрушка появилась в первом рекламном ролике, адресованном не взрослым, а детям.
// 21. За какую страну играл Дэвид Бекхэм?
// •	Испания
// •	Бразилия
// •	США
// •	Англия
// Англия
// С 1992 по 2003 год он играл за команду “Манчестер Юнайтед” в Премьер-лиге.
// 22. Какой диснеевский персонаж в фильме “Русалочка” поет песню “Поцелуй девушку”?
// •	Камбала
// •	Себастьян
// •	Урсула
// •	Принц Эрик
// Себастьян
// Американский актер Сэмюэл Э. Райт, озвучивший Себастьяна, первоначально пел песню “Поцелуй девушку”.
// 23. В какой стране находится Прага?
// •	Испания
// •	Бразилия
// •	Чехия
// •	Англия
// Чехия
// Прага - столица Чехии.
// 24. Какая служба электронной почты принадлежит компании Microsoft?
// •	Outlook
// •	Yahoo Mail
// •	Gmail
// •	iCloud Mail
// Outlook
// Outlook заменил Hotmail.com, более старую систему веб-почты Microsoft.
// 25. Как назывался батончик “Сникерс” до его смены названия в 1990 году?
// •	Race
// •	Marathon
// •	Smile
// •	Sprint
// Marathon
// В Великобритании шоколадные батончики Snickers назывались батончиками Marathon. В 1990 году они были переименованы в Snickers, поскольку компания Mars, производитель шоколада, хотела быть последовательной в использовании названия Snickers по всему миру.
// 26. Какая самая маленькая планета в нашей Солнечной системе?
// •	Земля
// •	Венера
// •	Марс
// •	Меркурий
// Меркурий
// Меркурий немного больше земной Луны.
// 27. Кто был главой государства в Японии во время второй мировой войны?
// •	Император Хирохито
// •	Император Муцухито
// •	Император Акихито
// •	Император Ёсихито
// Император Хирохито
// Он был 124-м императором Японии.
// 28. Какое второе имя у Чендлера в ситкоме “Друзья”?
// •	Артур
// •	Бинг
// •	Мюриэл
// •	Джон
// Мюриэл
// В эпизоде “Свидание с Рейчел” было раскрыто второе имя Чендлера.
// 29. Какова длина олимпийского плавательного бассейна?
// •	25 метров
// •	50 метров
// •	60 метров
// •	40 метров
// 50 метров
// Бассейн олимпийского размера вмещает от 700 000 до 850 000 галлонов воды.
// 30. Сколько вкусовых рецепторов имеет средний человеческий язык?
// •	100
// •	1,000
// •	10,000
// •	100,000
// 10,000
// Средний язык имеет длину около 8 см.
// 31. Каким был первый полнометражный анимационный фильм?
// •	Покахонтас
// •	Белоснежка и семь гномов
// •	Русалочка
// •	Золушка
// Белоснежка и семь гномов
// Впервые он был выпущен в 1937 году.
// 32. Какого цвета была таблетка, которую принимает Нео в фильме “Матрица”?
// •	Красный
// •	Синий
// •	Зеленый
// •	Желтый
// Красный
// Принять красную таблетку означает узнать настоящую правду в “Матрице”.
// 33. За какой фильм Том Хэнкс получил свою первую номинацию на премию “Оскар”?
// •	Большой
// •	Форрест Гамп
// •	Аполлон 13
// •	Вам письмо
// Большой
// Фильм “Большой” вышел на экраны в 1988 году.
// 34. Кто сыграл детектива Рика Декарда в фильме “Бегущий по лезвию” (1982)?
// •	Джордж Клуни
// •	Ричард Гир
// •	Харрисон Форд
// •	Райан Гослинг
// Харрисон Форд
// Харрисон Форд повторил свою роль в сиквеле “Бегущий по лезвию 2049”, который вышел в 2017 году.
// 35. Этот признанный режиссер, лауреат премии “Оскар”, снял фильмы “Делай ноги”, “Бейб: Поросенок в городе” и “Безумный Макс: Дорога ярости”.
// •	Дэвид Линч
// •	Кристофер Нолан
// •	Стивен Спилберг
// •	Джордж Миллер
// Джордж Миллер
// Джордж был практикующим врачом, прежде чем стать режиссером.
// 36. Какие животные воспитывали Маугли в “Книге джунглей”?
// •	Лисы
// •	Приматы
// •	Волки
// •	Медведи
// Волки
// Автором книги “Книга джунглей” является Редьярд Киплинг.
// 37. В каком диснеевском фильме дебютировала Джули Эндрюс?
// •	Шрек
// •	Мэри Поппинс
// •	Дневники принцессы
// •	Звуки музыки
// Мэри Поппинс
// Фильм “Мэри Поппинс” вышел на экраны в 1964 году.
// 38. Кто является первой цветной женщиной, получившей премию “Оскар” за лучшую женскую роль?
// •	Виола Дэвис
// •	Керри Вашингтон
// •	Хэлли Берри
// •	Реджина Кинг
// Хэлли Берри
// Она получила “Оскар” за лучшую женскую роль в фильме “Бал монстров” 2001 года.
// 39. Радость, Страх, Гнев, Брезгливость and Печаль управляют чьими эмоциями в фильме “Головоломка”?
// •	Бонни
// •	Бу
// •	Энди
// •	Райли
// Райли
// Сценаристы консультировались с психологами и другими экспертами, чтобы научно обосновать то, как работает разум Райли.
// 40. Какой фильм, написанный, снятый и спродюсированный Джеймсом Кэмероном, стал самым кассовым фильмом своего времени?
// •	Титаник
// •	Аватар
// •	Терминатор
// •	Правдивая ложь
// Титаник
// В 1998 году он стал первым фильмом, который превысил общемировой кассовый сбор в 1 миллиард долларов.
// 41. Какой национальный вид спорта Канады?
// •	Боулинг
// •	Баскетбол
// •	Лакросс
// •	Футбол
// Лакросс
// Лакросс был объявлен национальным видом спорта Канады в 1859 году. Однако в 1994 году канадский парламент принял Закон о национальном спорте Канады, согласно которому лакросс стал национальным летним видом спорта, а хоккей - национальным зимним видом спорта.
// 42. Какой боксер был известен как “The Greatest” и “The People’s Champion”?
// •	Майк Тайсон
// •	Мухаммед Али
// •	Флойд Мейвезер
// •	Оскар Дела Хойя
// Мухаммед Али
// Он выиграл золотую медаль на Олимпийских играх 1960 года и стал первым боксером, трижды завоевавшим титул чемпиона в тяжелом весе.
// 43. Сколько минут длится матч по регби?
// •	Восемьдесят минут
// •	Тридцать минут
// •	Сто двадцать минут
// •	Шестьдесят минут
// Восемьдесят минут
// Игры регби делятся на 40-минутные таймы, с перерывом не более 15 минут в середине.
// 44. В какой стране были проведены первые Олимпийские игры?
// •	Италия
// •	Япония
// •	Греция
// •	Франция
// Греция
// Летние Олимпийские игры 1896 года, проходившие в Афинах, Греция, стали первыми международными Олимпийскими играми в современной истории.
// 45. Сколько игроков в бейсбольной команде?
// •	8 игроков
// •	9 игроков
// •	10 игроков
// •	11 игроков
// 9 игроков
// Девять игроков: питчер, кэтчер, первая база, вторая база, шортстоп, третья база, правый полевой, центральный полевой и левый полевой.
// 46. Какая единственная страна принимала участие во всех чемпионатах мира по футболу?
// •	Бразилия
// •	Англия
// •	Испания
// •	Аргентина
// Бразилия
// Бразилия также выигрывала Кубок мира пять раз.
// 47. Олимпийские игры проводятся каждые сколько лет?
// •	Шесть лет
// •	Четыре года
// •	Пять лет
// •	Семь лет
// Четыре года
// Олимпийские игры проводятся каждые четыре года в знак уважения к древним Олимпийским играм, которые проводились каждые четыре года в Олимпии.
// 48. В какой вид спорта, который играют на метлах в Гарри Поттере?
// •	Взрывающийся щелчок
// •	Скачки на крылатых лошадях
// •	КвадПод
// •	Квиддич
// Квиддич
// Квиддич - вымышленный вид спорта, придуманный писательницей Дж. К. Роулинг для книг о Гарри Поттере.
// 49. Сколько колец на олимпийском флаге?
// •	Семь
// •	Шесть
// •	Пять
// •	Четыре
// Пять
// Пять олимпийских колец представляют пять основных регионов мира - Африку, Америку, Азию, Европу и Океанию, и соединены между собой, символизируя дружбу, которую можно получить в результате этих международных соревнований.
// 50. Каков диаметр баскетбольного кольца в сантиметрах?
// •	45.72 см
// •	48.26 см
// •	43.18 см
// •	40.64 см
// 45.72 см
// Все баскетбольные кольца имеют диаметр 45.72 см.
// 51. Сколько было пилотируемых высадок на Луну?
// •	Восемь
// •	Пять
// •	Шесть
// •	Семь
// Шесть
// Шестью пилотируемыми посадками на Луну были Аполлон 11, 12, 14, 15, 16 и 17.
// 52. В каком году была подписана Декларация независимости США?
// •	1676
// •	1678
// •	1775
// •	1776
// 1776
// Декларация независимости США была подписана 2 августа 1776 года.
// 53. Когда пала Берлинская стена?
// •	1988
// •	1989
// •	1990
// •	1991
// 1989
// Берлинская стена пала 9 ноября 1989 года. Это ознаменовало падение “железного занавеса” и начало падения коммунизма в Восточной и Центральной Европе.
// 54. Каково было первоначальное название Нью-Йорка?
// •	Новый Амстердам
// •	Большое яблоко
// •	Имперский штат
// •	Готэм
// Новый Амстердам
// Новый Амстердам был голландским поселением 17 века, основанным на южной оконечности острова Манхэттен. В 1664 году англичане захватили Новый Амстердам и переименовали его в Нью-Йорк в честь герцога Йоркского.
// 55. Кто является пилотом, который успешно совершил аварийную посадку коммерческого самолета в реку Гудзон в 2009 году?
// •	Амелия Эрхарт
// •	Чарльз Е. Йегер
// •	Чесли “Салли” Салленбергер
// •	Чарльз А. Линдберг
// Чесли “Салли” Салленбергер
// Он благополучно совершил аварийную посадку на реке Гудзон после того, как его самолет влетел в стаю канадских гусей, и тем самым спас всех 155 человек, находившихся на борту.
// 56. Кто из отцов-основателей известен своей большой подписью на Декларации независимости Соединенных Штатов?
// •	Джордж Вашингтон
// •	Александр Гамильтон
// •	Бенджамин Франклин
// •	Джон Хэнкок
// Джон Хэнкок
// Он стал очень популярен в Массачусетсе, когда британские чиновники захватили его шлюп (парусное судно) Liberty в 1768 году и обвинили его в контрабанде (хотя в итоге обвинения были сняты).
// 57. Кто написал роман “Убить пересмешника”, опубликованный в 1960 году?
// •	Роберт Фрост
// •	Джон Стейнбек
// •	Харпер Ли
// •	Дж. Д. Сэлинджер
// Харпер Ли
// Харпер Ли опубликовала книгу “Убить пересмешника” в 1960 году.
// 58. Как долго длилась Столетняя война?
// •	116 лет
// •	100 лет
// •	50 лет
// •	101 год
// 116 лет
// Столетняя война, конфликт между Англией и Францией, на самом деле длилась 116 лет. Она началась в 1337 году и закончилась в 1453 году, хотя в течение этого времени были длительные периоды перемирия или незначительных боевых действий.
// 59. Какая страна является самой маленькой в мире?
// •	Мальта
// •	Мальдивы
// •	Ватикан
// •	Монако
// Ватикан
// Город Ватикан находится в окружении Рима, Италия, и является штаб-квартирой Римско-католической церкви.
// 60. Символом какого ресторана является клоун?
// •	Макдональдс
// •	Бургер Кинг
// •	KFC
// •	Маленькие Цезари
// Макдональдс
// Его зовут Рональд Макдональд.
// 61. Какое стихийное бедствие измеряется по шкале Рихтера?
// •	Торнадо
// •	Землетрясения
// •	Наводнения
// •	Ураган
// Землетрясения
// Шкала Рихтера измеряет силу землетрясений.
// 62. Какая планета находится ближе всего к Солнцу?
// •	Земля
// •	Марс
// •	Меркурий
// •	Венера
// Меркурий
// Поскольку Меркурий находится так близко к Солнцу, температура его поверхности может достигать 450 градусов Цельсия.
// 63. Из какого вещества состоят ногти?
// •	Серотонин
// •	Эпидермис
// •	Меланин
// •	Кератин
// Кератин
// Он защищает ногти от повреждений, делая их сильными и упругими.
// 64. Что означает термин ДНК?
// •	Дезоксирибонуклеарная кислота
// •	Дуорибонуклеиновая кислота
// •	Дуоксирибонуклеиновая кислота
// •	Дезоксирибонуклеиновая кислота
// Дезоксирибонуклеиновая кислота
// ДНК - это сложная молекула, которая содержит всю информацию, необходимую для создания и поддержания организма.
// 65. Кто был первым человеком, увидевшим луны Юпитера?
// •	Галилео Галилей
// •	Альберт Эйнштейн
// •	Исаак Ньютон
// •	Николай Коперник
// Галилео Галилей
// Он впервые использовал телескоп для наблюдения за ночным небом.
// 66. Кто была первой женщиной, получившей Нобелевскую премию в 1903 году?
// •	Перл Бак
// •	Розалинд Франклин
// •	Мария Кюри
// •	Джейн Аддамс
// Мари Кюри
// В том году Мари Кюри получила Нобелевскую премию по химии за дальнейшее исследование радия и полония.
// 67. “K” - это химический символ какого элемента?
// •	Хром
// •	Титан
// •	Водород
// •	Калий
// Калий
// Самое крупное промышленное использование калия - для удобрений.
// 68. Кто был первым человеком, побывавшим на Луне?
// •	Джеймс Б. Ирвин
// •	Пит Конрад
// •	Алан Шепард
// •	Нил Армстронг
// Нил Армстронг
// Он приземлился 20 июля 1969 года.
// 69. Как называются животные, которые питаются только растениями?
// •	Плотоядные
// •	Травоядные
// •	Всеядные
// •	Вегетарианец
// Травоядные
// Кролики, коровы, олени и зебры - травоядные.
// 70. Что это за животное - косатка?
// •	Тюлень
// •	Осьминог
// •	Акула
// •	Кит
// Кит
// Косаток также называют “китами-убийцами”.
// 71. Какой была дебютная песня Келли Кларксон?
// •	Because of You
// •	Since U Been Gone
// •	Miss Independent
// •	My Life Would Suck Without You
// Miss Independent
// Песня Miss Independent вошла в ее дебютный студийный альбом 2003 года Thankful.
// 72. Какой мегахит 80-х использовал The Weeknd в композиции Blinding Lights?
// •	Time After Time написанный Cyndi Lauper
// •	Edge of Seventeen написанный Stevie Nicks
// •	Take On Me написанный A-ha
// •	Got to Give It Up написанный Marvin Gaye
// Take On Me написанный A-ha
// Take on Me была впервые выпущена в 1985 году.
// 73. Где родилась Алиша Кис?
// •	Нью-Йорк
// •	Калифорния
// •	Техас
// •	Нью-Мексико
// Нью-Йорк
// Она родилась в нью-йоркском районе Hell’s Kitchen.
// 74. Какому исполнителю Super Bowl Halftime Show помешала танцующая акула?
// •	Дженнифер Лопес
// •	Джанет Джексон
// •	Кэти Перри
// •	Шакире
// Кэти Перри
// The Left Shark рядом с Кэти стала вирусной в то время.
// 75. В 2017 году как звали артистку, у которой было больше всего стримов на Spotify?
// •	Бейонсе
// •	Селена Гомес
// •	Тейлор Свифт
// •	Рианна
// Рианна
// Рианна известна благодаря песне Umbrella.
// 76. Сколько лет было уроженке Канады Аврил Лавин, когда она подписала свой первый контракт на запись?
// •	15 лет
// •	16 лет
// •	17 лет
// •	18 лет
// 16 лет
// Complicated был ее дебютным синглом.
// 77. Какая известная певица умерла от отравления алкоголем в 2011 году в возрасте 27 лет?
// •	Дженис Джоплин
// •	Селена
// •	Аалия
// •	Эми Уайнхаус
// Эми Уайнхаус
// Ее полное имя - Эми Джейд Уайнхаус.
// 78. Как Леди Гага ласково называет своих поклонников?
// •	Army
// •	Little Monsters
// •	Beliebers
// •	KatyCats
// Little Monsters
// Леди Гага - Мать-Монстр для своих Little Monsters.
// 79. Какой музыкальный продюсер продюсировал “Триллер” Майкла Джексона?
// •	Доктор Дре
// •	Джей-Зи
// •	Стиви Уандер
// •	Куинси Джонс
// Куинси Джонс
// Он также спродюсировал песню We are the World, которую Майкл Джексон написал в соавторстве с Лайонелом Ричи.
// 80. Из какой страны родом Шакира?
// •	Колумбия
// •	Аргентина
// •	Бразилия
// •	Испания
// Колумбия
// Она родилась в Барранкилье, Колумбия.
// 81. Что является столицей Австралии?
// •	Канберра
// •	Аделаида
// •	Сидней
// •	Мельбурн
// Канберра
// Этот город также называют “столицей буша” за обширные природные заповедники и окружающие горные хребты.
// 82. Какая страна является самой подверженной землетрясениям страной в мире?
// •	Малайзия
// •	Япония
// •	Корея
// •	Тайвань
// Япония
// Все японские мобильные телефоны оснащены системой оповещения о землетрясении, чтобы люди успели укрыться до начала землетрясения.
// 83. Как называется самый маленький океан?
// •	Северный Ледовитый океан
// •	Индийский океан
// •	Тихий океан
// •	Атлантический океан
// Северный Ледовитый океан
// Его размер составляет около 8% от размера Тихого океана.
// 84. Какая река протекает через Париж?
// •	Река Гудзон
// •	Река Рейн
// •	Река Сена
// •	Река Миссисипи
// Река Сена
// Река Сена протекает через Париж. Сена проходит 482 мили по территории Франции, начинаясь на северо-востоке Франции около Дижона и заканчиваясь у Ла-Манша.
// 85. Высота горы Эверест составляет 29 029 футов. Но знаете ли вы, какая страна претендует на эту всемирно известную достопримечательность?
// •	Колумбия
// •	Непал
// •	Швейцария
// •	Венесуэла
// Непал
// Непал граничит с Китаем на севере и Индией на востоке, юге и западе.
// 86. Какая единственная страна граничит с Великобританией?
// •	Швеция
// •	Германия
// •	Австрия
// •	Ирландия
// Ирландия
// Единственная сухопутная граница, соединяющая Великобританию с другой страной, проходит между Северной Ирландией и Республикой Ирландия.
// 87. Где находится “Испанская лестница”?
// •	Италия
// •	Испания
// •	Бразилия
// •	Австрия
// Италия
// Назначение Испанской лестницы заключалось в том, чтобы соединить испанское посольство Бурбонов с церковью Тринита-деи-Монти в Риме.
// 88. Сколько стран находится внутри Соединенного Королевства?
// •	Три
// •	Четыре
// •	Пять
// •	Шесть
// Четыре
// Англия, Уэльс, Шотландия и Северная Ирландия входят в состав Соединенного Королевства.
// 89. Какая страна имеет аббревиатуру “CH”?
// •	Китай
// •	Швейцария
// •	Куба
// •	Чили
// Швейцария
// CH означает латинские слова Confoederatio Helvetica, то есть Швейцарская Конфедерация.
// 90. Какой самый большой остров в мире?
// •	Исландия
// •	Финляндия
// •	Гренландия
// •	Ирландия
// Гренландия
// Это самый большой в мире остров, который не является континентом.
// 91. Кто играл королеву Елизавету II в первых двух сезонах сериала “Корона”?
// •	Оливия Колман
// •	Фелисити Джонс
// •	Ванесса Кирби
// •	Клэр Фой
// Клэр Фой
// Она играла роль королевы Елизаветы II в возрасте от 21 до 38 лет.
// 92. В каком телешоу участвуют Миранда Хоббс и Саманта Джонс?
// •	Девочки Гилмор
// •	Зачарованные
// •	Секс в большом городе
// •	С большой буквы
// Секс в большом городе
// К ним присоединились героини Кэрри Брэдшоу и Шарлотта Йорк.
// 93. Эми Полер, Роб Лоу и Крис Пратт работали вместе над каким американским комедийным сериалом?
// •	Субботним вечером в прямом эфире
// •	Западное крыло
// •	Офис
// •	Парки и зоны отдыха
// Парки и зоны отдыха
// Сериал “Парки и зоны отдыха” выходил в эфир в течение 7 сезонов.
// 94. Какова основная профессия Теда Мосби, главного героя фильма “Как я встретил вашу маму”?
// •	Архитектор
// •	Адвокат
// •	Банкир
// •	Врач
// Архитектор
// Тед Мосби - архитектор, а позже в сериале также становится профессором архитектуры.
// 95. Оливия Бенсон - главная героиня какой франшизы “Закон и порядок”?
// •	Закон и порядок: LA
// •	Закон и порядок: Настоящее преступление
// •	Закон и порядок: Специальный корпус
// •	Закон и порядок: Преступный умысел
// Закон и порядок: Специальный корпус
// Она является первой женщиной-детективом во всех франшизах “Закон и порядок”.
// 96. Кто из участников “Теории большого взрыва” имеет настоящую докторскую степень?
// •	Мелисса Раух
// •	Маим Биалик
// •	Джим Парсонс
// •	Кунал Найяр
// Маим Биалик
// В 2008 году Бялик получила степень доктора философии в области неврологии в Калифорнийском университете в Лос-Анджелесе (UCLA).
// 97. Какой автор написал книги “Игра престолов”?
// •	К. С. Льюис
// •	Джордж Р. Р. Мартин
// •	Дж. Р. Р. Толкиен
// •	Дж. К. Роулинг
// Джордж Р. Р. Мартин
// Он продолжает писать пятую книгу “Ветры зимы” из серии “Песнь льда и пламени”, на которой основан сериал “Игра престолов”.
// 98. Как зовут домашнюю обезьянку Росса в сериале “Друзья”?
// •	Малыш
// •	Лесси
// •	Марли
// •	Марсель
// Марсель
// Марсель был белоголовой обезьяной капуцином.
// 99. Какая актриса была голосом за кадром в фильме “Сплетница”?
// •	Кристен Стюарт
// •	Эми Адамс
// •	Кристен Белл
// •	Блейк Лайвли
// Кристен Белл
// Она также озвучивает Эльзу в диснеевском мультфильме “Frozen”.
// 100. Как называется тематическая песня “Теории большого взрыва”?
// •	The History of Everything - Barenaked Ladies
// •	California - Phantom Planet
// •	I Don’t Want to Wait - Paula Cole
// •	I’ll Be There For You - The Rembrandts
// The History of Everything
// The History of Everything - официальная тематическая песня сериала “Теория большого взрыва”. Она была записана канадской рок-группой Barenaked Ladies.
// 101. Какое животное находится под защитой закона в Риме?
// •	Курицы
// •	Собаки
// •	Кошки
// •	Львы
// Кошки
// Существует закон, который позволяет кошкам жить без помех в том месте, где они родились.
// 102. Какое млекопитающее известно самым мощным укусом в мире?
// •	Бегемот
// •	Аллигатор
// •	Лев
// •	Крокодил
// Бегемот
// Бегемот может открывать рот под углом 180 градусов.
// 103. Какая птица ассоциируется у вас с миром?
// •	Робин
// •	Страус
// •	Голубь
// •	Орел
// Голубь
// Голубей называют символом, определяющим присутствие Бога, согласно христианству.
// 104. Какая птица является единственной, которая может летать задом наперед?
// •	Попугай
// •	Колибри
// •	Ласточка
// •	Цапля
// Колибри
// Ее название происходит от жужжащего звука, который издают крылья при быстром биении.
// 105. Какое популярное морское существо обладает способностью клонировать себя?
// •	Осьминог
// •	Медуза
// •	Морской конек
// •	Кальмар
// Медуза
// Когда медузу разрезают пополам, она обладает способностью регенерировать свои клетки и создавать других медуз.
// 106. Какое самое быстрое сухопутное животное?
// •	Леопард
// •	Лев
// •	Тигр
// •	Гепард
// Гепард
// Гепард может развивать скорость до 70 миль в час.
// 107. Как называется самка оленя?
// •	Кобыла
// •	Свиноматка
// •	Курица
// •	Лань
// Лань
// Большую часть года лань проводит в одиночестве, пока не родятся ее детеныши.
// 108. В каком животном можно найти жемчуг?
// •	Крабы
// •	Устрицы
// •	Мидии
// •	Омары
// Устрицы
// Натуральный жемчуг встречается примерно в одной из каждых 10000 устриц.
// 109. Сколько костей у акул?
// •	Четыре
// •	Пять
// •	Ноль
// •	Десять
// Ноль
// Скелет акулы состоит из хряща, а не из костей.
// 110. Сколько рогов было у трицератопса?
// •	Четыре
// •	Пять
// •	Два
// •	Три
// Три
// Помимо трех рогов, узнаваемым трицератопса делает его огромный череп.