import whitePishtan from "../../project/img/maps/white-pishtan-map.jpg"
import bronz from "../../project/img/maps/bronz-rikma-map.jpg"
import greenDots from "../../project/img/maps/green-dots-map.jpg"
import map1 from "../../project/img/maps/map1.jpg"
import map2 from "../../project/img/maps/map2.jpg"
import map3 from "../../project/img/maps/map3.jpg"
import map4 from "../../project/img/maps/map4.jpg"
import map5 from "../../project/img/maps/map5.jpg"
import map6 from "../../project/img/maps/map6.jpg"
import map7 from "../../project/img/maps/map7.jpg"
import map8 from "../../project/img/maps/map8.jpg"
import nisMenta from "../../project/img/maps/nis-menta.jpg"
import pichBlue from "../../project/img/maps/pich-blue-map.jpg"
import mokaPishtan from "../../project/img/maps/pishtan-moka-map.jpg"
import pninaPishtan from "../../project/img/maps/pishtan-pnina-map.jpg"

const inititalState = [{
    id: 100,
    name: "פשתן לבן",
    qty: 10,
    img: whitePishtan,
    price: 230,
    description: "מפה קלאסית לבנה וחגיגית במרקם פשתן",
},
{
    id: 101,
    name: "ריקמת ברונז",
    qty: 50,
    img: bronz,
    price: 239,
    description: "מפה בהירה עם ריקמת ברונז פרחים מובלטת. מפה מיוחדת ואהובה",
},
{
    id: 102,
    name: "דוטס",
    qty: 68,
    img: greenDots,
    price: 189,
    description: "מפה שובבה עם קריצה צבעונית ומרעננת",
},
{
    id: 103,
    name: "דאבל",
    qty: 21,
    img: map1,
    price: 239,
    description: "מפה מעניינת, משלבת מס' גוונים עם סיומת ייחודית",
},
{
    id: 104,
    name: "חלבית בוהקת",
    qty: 90,
    img: map4,
    price: 239,
    description: "מפה נסיכותית, בוהקת בלובנה",
},
{
    id: 105,
    name: "לימונדה",
    qty: 26,
    img: map2,
    price: 156,
    description: "מפה מקורית ומרעננת. מתאימה לשולחן המטבח",
},
{
    id: 106,
    name: "מפת השבת",
    qty: 70,
    img: map3,
    price: 195,
    description: "מפה קלאסית, לבנה וחגיגית שמשתלבת הייטב עם כל עיצוב",
},
{
    id: 107,
    name: "לוקסור מוקה",
    qty: 4,
    img: map7,
    price: 170,
    description: "מפה בגווני המוקה- קפה. חורפית והומוגנית",
},
{
    id: 108,
    name: "איקס רוז",
    qty: 50,
    img: map5,
    price: 239,
    description: "מפה מיחדת עם אשליית תלת מימד וטקסוטרה מחליפת צבעים",
},
{
    id: 109,
    name: "לבן תיפורים",
    qty: 50,
    img: map6,
    price: 239,
    description: "מפה לבנה עם תיפורים אינסופיים. מיוחדת!!!",
},
{
    id: 110,
    name: "פרינס זהב",
    qty: 50,
    img: map8,
    price: 239,
    description: "מפה עדינה ונסיכותית עם תיפורי מעוינים- פרחים מוזהבים",
},
{
    id: 112,
    name: "פשתן מוקה",
    qty: 50,
    img: mokaPishtan,
    price: 119,
    description: "מפה במרקם פשתני בגוון מוקה עדין",
},
{
    id: 113,
    name: "כתמי פיצ'",
    qty: 50,
    img: pichBlue,
    price: 239,
    description: "מפה בגוונים חמימים- פיצ' אדמדם עם ניצוצי תכלת עדינים. מפה עם אמירה",
},
{
    id: 114,
    name: "ניס מנטה",
    qty: 6,
    img: nisMenta,
    price: 220,
    description: "מפה במרקם גלי בגווני מנטה זהב. מיוחדת ואצילית",
},
{
    id: 115,
    name: "פשן פנינה",
    qty: 50,
    img: pninaPishtan,
    price: 239,
    description: "מפה עדינה ומיוחדת בגוון פנינה זוהר",
}];

const mapReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "PURCHASEMAPS": {
            if (state.find((e) => e.id === action.playload.id)) {
                state.find((e) => e.id === action.playload.id).qty -= action.playload.items;
            } return [...state]
        }
    }
    return state;
}
export default mapReducer;