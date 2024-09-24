import article01 from './../image/sa-pict.png'
import article02 from './../image/articles/etwas_zusammen_planen.jpg'
import article03 from './../image/articles/temporal_praepositionnen.jpg'

const actualArticles = [
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
    }
    ];

export {actualArticles};