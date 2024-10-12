import article01 from "../image/sa-pict.png";
import image01 from "../image/sa-pict.png";
import image02 from "../image/sa-pict.png";
import image03 from "../image/sa-pict.png";

const ArticleData = [
    {
        id: 1,
        title: 'Використання Vorgangspassiv в німецькій мові',
        image: article01,
        category: 'Grammatik',
        date: 'Квітень 26',
        readTime: 15,
        tags: ['A2', 'B1']
    }
]

const ArticleExercises = [
  {
    id: 1,
    title:'Тест 1',
    link: '#'
  },

  {
    id:2,
    title:'Тест 2',
    link: '#'
  }

]

const ArticleSuggested = [
  { id:1,
    image:image01,
    title:'Фрази для написання листів',
    link:'#'
  }, {
    id:2,
    image:image02,
    title:'Фрази для написання листів',
    link:'#'
  }, {
    id:3,
    image:image03,
    title:'Фрази для написання листів',
    link:'#'
  }
]

const ArticleContent = [
  {
    id: 1,
    title: 'Вступ',
    text: `
      Пасивні речення – це речення, де не вказана особа, яка виконує дію. Посуд миється. Робота робиться. Німецька вчиться. І в німецькій мові такі речення вживаються значно частіше, ніж в українській. Також ця граматика є обов’язковою від рівня А2.
      В німецькій мові є два різних пасивних стани:
      Vorgangspassiv (пасив процесу) і Zustandspassiv (пасив стану).
      Порівняйте:
    `,
    adds: [
      {
        position: 'end',
        index: 0,
        content: `
          <table id="table-1">
            <thead>
              <tr>
                <th>Vorgangspassiv</th>
                <th>Zustandspassiv</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Die Wäsche wird gewaschen.<br/><span>Білизна переться (процес)</span></td>
                <td>Die Wäsche ist gewaschen.<br/><span>Білизна випрана (стан)</span></td>
              </tr>
            </tbody>
          </table>`
      }
    ]
  },
  {
    id: 2,
    title: 'Вживання',
    text: `
      Vorgangspassiv використовується для вираження того, що дія вже відбулася, або той, хто виконав дію, не вказується, або знаходиться в тіні. Вона використовується тоді, коли дійсно важливим є сам факт події, а не той, хто її виконав.
      Для утворення Vorgangspassiv використовується дієслово "werden" у відповідній формі (залежно від особи та числа) і повний дієприкметник минулого часу (Partizip II) головного дієслова. Ось приклад:
    `,
    adds: [
      {
        position: 'end',
        index: 0,
        content: `
          <table id="table-2">
            <thead>
              <tr>
                <th>Оригінальне речення</th>
                <th>Vorgangspassiv</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Der Lehrer erklärt die Regel.<br/><span>Вчитель пояснює правило</span></td>
                <td>Die Regel wird vom Lehrer erklärt.<br/><span>Правило пояснюється вчителем</span></td>
              </tr>
            </tbody>
          </table>`
      }
    ]
  },
  {
    id: 3,
    title: 'Часові форми',
    text: `
      Vorgangspassiv використовується значно частіше і саме його вивчають на рівні А2. Passiv має всі часові форми, що і активний час, тобто Futur I und II, Präsens, Präteritum, Perfekt und Plusquamperfekt:
    `,
    adds: [
      {
        position: 'end',
        index: 0,
        content: `
          <table id="table-3">
            <thead>
              <tr>
                <th>Чаc</th>
                <th>Форма</th>
                <th>Приклад</th>
                <th>Переклад</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Präsens</td>
                <td>werden … Part II</td>
                <td>Das Haus wird gebaut.</td>
                <td>Будинок будується</td>
              </tr>
              <tr>
                <td>Präteritum</td>
                <td>wurde … Part II</td>
                <td>Das Haus wurde gebaut.</td>
                <td>Будинок будувався</td>
              </tr>
              <tr>
                <td>Perfekt</td>
                <td>ist … Part II worden</td>
                <td>Das Haus ist gebaut worden.</td>
                <td>Будинок будувався (часто вказує на завершену дію, офіційний стиль)</td>
              </tr>
              <tr>
                <td>Plusquamperfekt</td>
                <td>war … Part II worden</td>
                <td>Das Haus war gebaut worden.</td>
                <td>Будинок будувався (вживаємо, коли є дві дії в минулому і ця була раніше)</td>
              </tr>
            </tbody>
          </table>`
      }
    ]
  },
  {
    id: 4,
    title: 'Діюча особа',
    text: `
      Якщо ми хочемо ввести в речення діючу особу, то тут є наступні нюанси:
    `,
    adds: [
      {
        position: 'afterParagraph',
        index: 0,
        content: `
          <table id="table-4">
            <thead>
              <tr>
                <th>Конструкція</th>
                <th>Вживання</th>
                <th>Приклад</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>von + Dativ</td>
                <td>дію виконують люди, організації чи установи і погодні явища</td>
                <td>Die Regel wird vom Lehrer erklärt.<br/><span>Правило пояснюється вчителем.</span></td>
              </tr>
              <tr>
                <td>durch + Akkusativ</td>
                <td>дію виконують неживі істоти</td>
                <td>Das Kind wurde durch Lärm geweckt.<br/><span>Дитину розбудив шум.</span></td>
              </tr>
            </tbody>
          </table>`
      },
      {
        position: 'end',
        index: 0,
        content: `
          <p>Є ще ряд правил і нюансів з цієї граматики, але краще опрацьовувати все дозовано. Відкрийте
            будь-яку статтю німецькою і знайдіть декілька речень в Passiv або передивіться наші приклади:</p>
          <ul className="sentence-examples">
            <li>Die Hausaufgaben wurden gestern von den Schülern gemacht.<br/><span style="color: #7E7C7C;">Домашні завдання були зроблені учнями вчора.</span></li>
            <li>Die Straße wird nächste Woche von der Stadt renoviert.<br/><span style="color: #7E7C7C;">Дорога буде відремонтована містом наступного тижня.</span></li>
            <li>Die Präsentation wurde heute von mir vorbereitet.<br/><span style="color: #7E7C7C;">Презентація була підготовлена мною сьогодні.</span></li>
            <li>Die neuen Regelungen werden bald von der Regierung bekannt gegeben.<br/><span style="color: #7E7C7C;">Нові регуляції будуть скоро оголошені урядом.</span></li>
            <li>Das Konzert wurde gestern von der Band aufgeführt.<br/><span style="color: #7E7C7C;">Концерт був виконаний групою вчора.</span></li>
          </ul>`
      }
    ]
  }
];

export {ArticleData, ArticleContent, ArticleSuggested, ArticleExercises};