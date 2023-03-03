
import a1 from "../../project/img/accessories/accessories1.jpg"
import a2 from "../../project/img/accessories/accessories2.jpg"
import a3 from "../../project/img/accessories/accessories3.jpg"
import a4 from "../../project/img/accessories/accessories4.jpg"
import a5 from "../../project/img/accessories/accessories5.jpg"
import a6 from "../../project/img/accessories/accessories6.jpg"
import a7 from "../../project/img/accessories/accessories7.jpg"
import a8 from "../../project/img/accessories/accessories8.jpg"
import a9 from "../../project/img/accessories/accessories9.jpg"
import a10 from "../../project/img/accessories/accessories10.jpg"
import a12 from "../../project/img/accessories/accessories12.jpg"
import a13 from "../../project/img/accessories/accessories13.jpg"
import a14 from "../../project/img/accessories/accessories14.jpg"
import a15 from "../../project/img/accessories/accessories15.jpg"
import a16 from "../../project/img/accessories/accessories16.jpg"
import a17 from "../../project/img/accessories/accessories17.jpg"
import a18 from "../../project/img/accessories/accessories18.jpg"
import a19 from "../../project/img/accessories/accessories19.jpg"
import a20 from "../../project/img/accessories/accessories19.jpg"
import a22 from "../../project/img/accessories/flower1.jpg"
import a23 from "../../project/img/accessories/flower2.jpg"
import a24 from "../../project/img/accessories/flower3.jpg"
import a25 from "../../project/img/accessories/flower4.jpg"
import a26 from "../../project/img/accessories/havak1.jpg"
import a27 from "../../project/img/accessories/havak-kvarz.jpg"
import a28 from "../../project/img/accessories/havak-shakuf.jpg"
import a29 from "../../project/img/accessories/havak-shakuf-2.jpg"
import a30 from "../../project/img/accessories/havak-tavas.jpg"
import a31 from "../../project/img/accessories/pamps-shamenet.jpg"
import a32 from "../../project/img/accessories/playsmet1.jpg"
import a33 from "../../project/img/accessories/yuta-playsmet.jpg"
import a34 from "../../project/img/accessories/glass1.jpg"

const inititalState =[
    {
        id: 301,
        name: "מנקה פירורים",
        qty: 47,
        img: a2,
        price: 45,
        description: "מנקה ומסיר פירורים מהמפה. מאושר לשימוש בשבת. פרקטי במיוחד",
    },
    {
        id: 302,
        name: "מעמד מעץ לנרות",
        qty: 40,
        img: a3,
        price: 16,
        description: "מעמד דמוי עץ לנרות. מיחוד",
    },
    {
        id: 304,
        name: "מעמד שקוף לנרות",
        qty: 38,
        img: a5,
        price: 23,
        description: "מעמד שקוף דמוי גביע לנרות. אלגנטי ופרקטי",
    },
    {
        id: 308,
        name: "נרות אוירה",
        qty: 400,
        img: a9,
        price: 12,
        description: "נרות אוירה עבים בצבעים דרמטיים מעושנים",
    },
    {
        id: 310,
        name: "מלחוי ופלדייטש",
        qty: 370,
        img: a12,
        price: 90,
        description: ", מתאימים מאוד לעיצוב כפרי מלחייה ופלפלייה עם מכסה שעם",
    },
    {
        id: 307,
        name: "אגרטל מבחנה",
        qty: 48,
        img: a8,
        price: 80,
        description: "מעמד נמוך שקוף, מתאים לפרחים חיים ומיובשים",
    },
    {
        id: 309,
        name: "סט ורוד",
        qty: 180,
        img: a10,
        price: 180,
        description: "3 אגרטלים שקופים- ורודים, עדינים במיוחד",
    },
    {
        id: 311,
        name: "אגרטל סישארפ",
        qty: 56,
        img: a13,
        price: 69,
        description: "אגרטל נמוך עם חור במרכזו. מקורי!",
    },
    {
        id: 312,
        name: "אגרטל נאמפיי",
        qty: 23,
        img: a14,
        price: 69,
        description: "אגרטל שמנת מעוצב כראש שום",
    },
    {
        id: 313,
        name: "אגרטל ג'אווה",
        qty: 56,
        img: a15,
        price: 69,
        description: "אגרטל מבחנה שקוף עם מרכז צר ורדרד",
    },
    {
        id: 314,
        name: "ארגטל מונגו דיבי",
        qty: 34,
        img: a16,
        price: 69,
        description: "אגרטל חרס קלאסי בצבעים נייטרלים",
    },
    {
        id: 315,
        name: "סכו''ם ריאקט רוזגולד",
        qty: 89,
        img: a17,
        price: 270,
        description: "סכו''ם רוזגולד לא שגרתי",
    },
    {
        id: 306,
        name: "סכו''ם ריאקט כסוף",
        qty: 145,
        img: a7,
        price: 270,
        description: "סכו''ם כסוף ולא שיגרתי",
    },
    {
        id: 316,
        name: "כוסות אסקיואל",
        qty: 300,
        img: a18,
        price: 9,
        description: "כוס מעניינת עם תחתית מעויין בגוון ירקרק",
    },
    {
        id: 303,
        name: "זר לאונרדו",
        qty: 89,
        img: a4,
        price: 35,
        description: "זר מלאכותי בדמוי צמחי בר ירוקים ומרעננים",
    },
    {
        id: 300,
        name: "זר ג'סקוב",
        qty: 46,
        img: a1,
        price: 35,
        description: "זר פרחים בגוון עץ טבעי, משתלב בכל עריכה",
    },
    {
        id: 319,
        name: "זר פולסטאק",
        qty: 78,
        img: a22,
        price: 35,
        description: "פרחים מלאכותיים דמוי כותנה. חגיגי",
    },
    {
        id: 320,
        name: "זר ליונל",
        qty: 23,
        img: a23,
        price: 35,
        description: "פרחים מלאכותיים דמוי רקפות מיובשות",
    },
    {
        id: 321,
        name: "זר אריאל",
        qty: 5,
        img: a24,
        price: 35,
        description: "פרחים מלאכותיים ורודים קטנטנים",
    },
    {
        id: 322,
        name: "זר גיתית",
        qty: 29,
        img: a25,
        price: 35,
        description: "פרחים מלאכותיים דמוי גיבסניות ורודות",
    },
    {
        id: 329,
        name: "פאמפס שמנת",
        qty: 30,
        img: a31,
        price: 17,
        description: "פאמפס עדינים ורכים מכותנה איכותית",
    },
    // {
    //     id: 323,
    //     name: "כוסות סי פלוס פלוס",
    //     qty: 45,
    //     img: a20,
    //     price: 9,
    //     description: "כוסות זכוכית אציליות",
    // },
    {
        id: 317,
        name: "כוסות נרסיסו",
        qty: 80,
        img: a19,
        price: 9,
        description: "כוסות זכוכית אציליות עם פס מוזהב",
    },
    {
        id: 324,
        name: "חבק לינוקס",
        qty: 100,
        img: a27,
        price: 20,
        description: "חבק עדין ומיוחד בשיבוץ אבני סברובסקי",
    },
    {
        id: 325,
        name: "חבק ווינדוס",
        qty: 100,
        img: a28,
        price: 16,
        description: "חבק בסגנון טבעת בשיבוץ אבן קוורץ",
    },
    {
        id: 326,
        name: "חבק מאק",
        qty: 90,
        img: a29,
        price: 10,
        description: "חבק מרובע שקוף. פרקטי במיוחד",
    },
    {
        id: 327,
        name: "חבק אובונטו אובונטו",
        qty: 70,
        img: a26,
        price: 10,
        description: "חבק טבעת חלולה שקופה, אופציה לנעיצת פרח",
    },
    {
        id: 328,
        name: "חבק טווס",
        qty: 40,
        img: a30,
        price: 20,
        description: "חבק עדין וצבעוני, עשוי מחרוזי זכוכית איכותיים",
    },
    {
        id: 305,
        name: "פלייסמט ניצוצות",
        qty: 28,
        img: a6,
        price: 12,
        description: "פלייסמט יוקרתי בגוון זהוב. מקפיץ כל עריכה. מתאים במיוחד למפה חלקה",
    },
    {
        id: 330,
        name: "פלייסמט קש",
        qty: 57,
        img: a32,
        price: 12,
        description: "פלייסמט כפרי מקש, פרום בצדדים",
    },
    {
        id: 331,
        name: "פלייסמט יוטא",
        qty: 290,
        img: a33,
        price: 12,
        description: "פלייסמט מבד יוטה עם קשרים אלגנטיים בצדדים",
    },
];

const accessoriesReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "PURCHASEACCESSORIES": {
            if (state.find((e) => e.id === action.playload.id)) {
                state.find((e) => e.id === action.playload.id).qty -= action.playload.items;
            } return [...state]
        }
    }
    return state;
}
export default accessoriesReducer;
