import article01 from './../image/sa-pict.png'
import article02 from './../image/articles/etwas_zusammen_planen.jpg'
import article03 from './../image/articles/temporal_praepositionnen.jpg'
import article04 from './../image/articles/telc_b2_brief.jpg'
import article05 from './../image/articles/sagen_und_vorsilbe.jpg'

const articles = [
    {
        id:1,
        title:'Фрази для написання листів',
        description:'Пишемо листи німецькою для іспиту DTZ. Цей іспит охоплює декілька типів листів: лист для подачі документів на роботу, щодо оренди квартири чи якісь нюанси по квартирі, отримання інформації, лист - вибачення, вирішення робочих питань...',
        image:article01,
        category:'Prüfung',
        date:'Квітень 26',
        readTime:15,
        tags: ['A2','B1']
    },
        {id:2,
        title:'Etwas zusammen planen(DTZ B1)',
        description:'Щось планувати разом - це типове  завдання для іспитів В1. Якщо знати, як підійти до підготовки, Вам це завдання буде приносити лише задоволення) Тому якщо  Ви готуєтеся до іспиту і шукаєте фрази для діалогу - Ви обрали правильний лінк)\n' +
            'Los geht`s!',
        image:article02,
        category:'Prüfung',
        date:'Квітень 26',
        readTime:15,
        tags: ['B1']
    },
    {
        id:3,
        title:'Top 10 Temporalpräpositionen',
        description:'Temporalpräpositionen або прийменники часу - те, що ми потребуємо в повсякденному житті. Вживання прийменників завжди викликає складнощі, саме тому краще цю тему дробити і вчити порціями)',
        image:article03,
        category:['Grammatik'],
        date:'Квітень 26',
        readTime:15,
        tags: ['A1', 'A2']
    },
    {
        id:4,
        title:'Офіційний лист для іспиту Telc für Beruf B2 і не тільки',
        description:'Як писати офіційні  листи німецькою  для іспиту рівня В2? Звичайно, ідеальної пілюлі нема і потрібно багато тренуватися, але є фрази і структури, які можуть зробити процес приємнішим і легшим. І декілька порад, на що звернути увагу!',
        image:article04,
        category:'Prüfung',
        date:'Квітень 26',
        readTime:15,
        tags: ['B2']
    },
    {
        id:5,
        title:'Sagen і його приставки',
        description:'Приставки в німецькій мові відіграють важливе значення і інколи можуть повністю до невпізнанності змінити значення слова. Вчити такі слова краще в контексті і легше, коли в одному місці зібрані всі (або майже всі) варіанти.',
        image:article05,
        category:'Lexik',
        date:'Квітень 26',
        readTime:15,
        tags: ['A1', 'A2', 'B1']
    }
];

export {articles};