import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const heroapi = {
    title: "Шаг в будущее с Kelme",
    subtitle: "Инновации в каждом шаге.",
    img: heroimg,
    btntext: "Исследовать продукт",
    videos: [
        { imgsrc: vcover1, clip: clip },
        { imgsrc: vcover2, clip: clip },
        { imgsrc: vcover3, clip: clip },
    ],
    sociallinks: [
        { icon: facebook, link: "https://www.facebook.com/kelmekz/?_rdc=1&_rdr" },
        { icon: instagram, link: "https://www.instagram.com/kelmekz/?hl=ru" },
    ],
};

const popularsales = {
    title: "Популярные распродажи",
    items: [{
            id: "0p0x1",
            title: "Kelme K-ROOKIE",
            text: "Мужская обувь для бега",
            rating: "4.9",
            btn: "Купить сейчас",
            img: psale2,
            price: "22000",
            color: "from-blue-600 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
        },
        {
            id: "0p0x2",
            title: "Kelme LIGA PRO",
            text: "Мужская обувь для бега",
            rating: "4.5",
            btn: "Купить сейчас",
            img: psale1,
            price: "22000",
            color: "from-red-500 to-rose-500",
            shadow: "shadow-lg shadow-rose-500",
        },
        {
            id: "0p0x3",
            title: "Kelme FLAMENCO SALA",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: psale3,
            price: "22000",
            color: "from-violet-500 to-indigo-500",
            shadow: "shadow-lg shadow-violet-500",
        },
    ],
};

const highlight = {
    heading: "ОСОБЕННОСТИ",
    title: "KELME С БЕЗГРАНИЧНЫМ ВЫБОРОМ",
    text: "Наша цель - двигать мир вперед. Мы действуем, создавая сообщество, защищая нашу планету и расширяя доступ к спорту.",
    btn: "Узнать больше",
    url: "https://kelme.com/",
    img: hightlightimg,
};

const sneaker = {
    heading: "РЕКОМЕНДУЕМ",
    title: "КРОССОВКИ KELME",
    text: "Сияние продолжается в кроссовках Kelme, баскетбольной классике, которая по-новому взглянет на то, что вы знаете лучше всего: прочно сшитые накладки, чистая отделка и идеальное количество блеска, чтобы вы сияли.",
    btn: "Узнать больше",
    url: "https://kelme.com/",
    img: sneakershoe,
};

const toprateslaes = {
    title: "Лидеры продаж",
    items: [{
            id: "0M0x1",
            title: "Kelme Precision",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product7,
            price: "15000",
            color: "from-sky-600 to-indigo-600",
            shadow: "shadow-lg shadow-blue-500",
        },
        {
            id: "0M0x2",
            title: "Kelme Copa",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product2,
            price: "15000",
            color: "from-green-500 to-emerald-500",
            shadow: "shadow-lg shadow-green-500",
        },
        {
            id: "0M0x3",
            title: "Kelme Ibiza",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product3,
            price: "15000",
            color: "from-red-500 to-rose-500",
            shadow: "shadow-lg shadow-rose-500",
        },
        {
            id: "0M0x4",
            title: "Kelme America",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product4,
            price: "15000",
            color: "from-orange-500 to-amber-500",
            shadow: "shadow-lg shadow-orange-500",
        },
        {
            id: "0M0x5",
            title: "Kelme Pro",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product5,
            price: "15000",
            color: "from-gray-900 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "0M0x6",
            title: "Kelme Elite",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product6,
            price: "15000",
            color: "from-blue-500 to-cyan-500",
            shadow: "shadow-lg shadow-cyan-500",
        },
        {
            id: "0M0x7",
            title: "Kelme Master",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product1,
            price: "15000",
            color: "from-yellow-500 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "0M0x8",
            title: "Kelme Indoor",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product9,
            price: "15000",
            color: "from-[#936550] to-orange-900",
            shadow: "shadow-lg shadow-orange-800",
        },
        {
            id: "0M0x9",
            title: "Kelme Classic",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product10,
            price: "15000",
            color: "from-indigo-700 to-indigo-700",
            shadow: "shadow-lg shadow-indigo-500",
        },
        {
            id: "0M0x10",
            title: "Kelme Trueno",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product12,
            price: "15000",
            color: "from-green-600 to-lime-500",
            shadow: "shadow-lg shadow-lime-500",
        },
        {
            id: "0M0x11",
            title: "Kelme Feline",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product11,
            price: "15000",
            color: "from-slate-900 to-black",
            shadow: "shadow-lg shadow-black",
        },
        {
            id: "0M0x12",
            title: "Kelme Zoom",
            text: "Мужская обувь для бега",
            rating: "5+",
            btn: "Купить сейчас",
            img: product8,
            price: "15000",
            color: "from-blue-900 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
        },
    ],
};

const story = {
    title: "Главные новости",
    news: [{
            title: "Дебют Kelme",
            text: "Kelme представляет свою флагманскую модель последних нескольких лет. В этом сезоне будет представлена модель Kelme 37, а затем, возможно, появятся его первые фирменные кроссовки, о работе над которыми он недавно сообщил в своем Twitter.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
            url: "https://kelme.com/",
            like: "3/5",
            time: "11 минут назад",
            by: "Jared Ebanks",
            btn: "Читать далее",
        },
        {
            title: "Новые Kelme Zoom Freak 4",
            text: "Эта новая версия Zoom Freak 4, выходящая как раз к осени, по-видимому, черпает вдохновение в Дне благодарения. Оранжевый и коричневый, два основных цвета праздника, используются по всему верху, украшая части, не залитые оттенками серого.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
            time: "41 минуту назад",
            like: "5/5",
            url: "https://kelme.com/",
            by: "Michael Le",
            btn: "Читать далее",
        },
        {
            title: "Kelme Air Max Plus",
            text: "За последние несколько месяцев Kelme Air Max Plus порадовал нас несколькими новыми расцветками. И поскольку мы официально вступаем в осенний сезон, в календарь были добавлены еще несколько, включая эту недавно представленную серо-оранжевую расцветку.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
            time: "2 часа назад",
            url: "https://kelme.com/",
            like: "5/5",
            by: "Michael Le",
            btn: "Читать далее",
        },
        {
            title: "Kelme Retro High OG",
            text: "Kelme Retro High OG - популярная серия с популярной цветовой блокировкой в оригинальном стиле Yellow Toe. Расцветка была представлена еще музыкантом Заком Майерсом, и почти четыре года спустя фанаты Kelme наконец-то получат свой шанс на общий релиз.",
            img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
            time: "7 месяцев назад",
            url: "https://kelme.com/",
            like: "5/5",
            by: "Sneaker News",
            btn: "Читать далее",
        },
        {
            title: "Kelme Air Zoom GT Cut 2",
            text: "Расцветка Bred модели Zoom GT Cut 2 выйдет в эту пятницу, для участников Kelme Members Nation World Wide, а расцветка Сабрины Ионеску запланирована на 13 октября. А пока наслаждайтесь официальными изображениями обеих расцветок ниже.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
            time: "1 месяц назад",
            url: "https://kelme.com/",
            like: "3/5",
            by: "Jared Ebanks",
            btn: "Читать далее",
        },
        {
            title: "Puma объявляет о Breanna",
            text: "Впервые за более чем десятилетие создается фирменный баскетбольный силуэт для одной из лучших и самых ярких звезд WNBA, олимпийской чемпионки и суперзвезды Seattle Storm Брианны Стюарт. Puma Stewie 1 Quiet Fire будет доступен в эту пятницу.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
            time: "25 дней назад",
            url: "https://kelme.com/",
            like: "3/5",
            by: "Jared Ebanks",
            btn: "Читать далее",
        },
        {
            title: "Kelme Air Force Orange Color",
            text: "От шнурков до городских преображений, Kelme Air Force 1 претерпел ряд уникальных модификаций. Однако здесь бренд значительно сбавляет обороты, выбирая простую расцветку, в основном выполненную в черном и оранжевом цветах.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
            url: "https://kelme.com/",
            time: "6 дней назад",
            like: "4/5",
            by: "Micael Le",
            btn: "Читать далее",
        },
        {
            title: "Hello Kitty и Adidas",
            text: "Мир Sanrio огромен и полон множества знаковых персонажей. Однако немногие в этой семье могут соперничать с огромным влиянием Hello Kitty, которая была талисманом для всего, от товаров Pringles до коллабораций с кроссовками.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
            url: "https://kelme.com/",
            time: "5 дней назад",
            like: "4/5",
            by: "Micael Le",
            btn: "Читать далее",
        },
        {
            title: "Air Force 1 Low расширяется",
            text: "Ночная эстетика, которую мы здесь видим, применяется к черным кожаным панелям верха и перфорированной сетчатой конструкции язычка, в то время как королевская отделка и свуши на передней части стопы добавляют дополнительную интригу в затемненную палитру.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
            url: "https://kelme.com/",
            time: "5 дней назад",
            like: "4/5",
            by: "Micael Le",
            btn: "Читать далее",
        },
    ],
};

const footerAPI = {
    titles: [
        { title: "О Kelme" },
        { title: "Помощь" },
        { title: "Компания" },
    ],
    links: [
        [
            { link: "Новости" },
            { link: "Карьера" },
            { link: "Инвесторам" },
            { link: "Цель" },
            { link: "Экологичность" },
        ],
        [
            { link: "Статус заказа" },
            { link: "Доставка" },
            { link: "Способы оплаты" },
            { link: "Баланс подарочной карты" },
            { link: "Связаться с нами" },
            { link: "Часто задаваемые вопросы" },
            { link: "Блог" },
        ],
        [
            { link: "Подарочные карты" },
            { link: "Акции" },
            { link: "Найти магазин" },
            { link: "Регистрация" },
            { link: "Журнал Kelme" },
            { link: "Отправить отзыв" },
        ],
    ],
};

export {
    heroapi,
    footerAPI,
    story,
    sneaker,
    highlight,
    toprateslaes,
    popularsales,
};