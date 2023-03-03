import bronzRikma from "../../project/img/napking/bronz-rikma-napking.jpg"
import geometry from "../../project/img/napking/geometry-napking.jpg"
import hedpes from "../../project/img/napking/hedpes-napking.jpg"
import n4 from "../../project/img/napking/napking4.jpg"
import n1 from "../../project/img/napking/napkins1.jpg"
import n3 from "../../project/img/napking/napkins3.jpg"
import pichBlue from "../../project/img/napking/pich-blue-napking.jpg"
import pishtanMoka from "../../project/img/napking/pishtan-moka-napking.jpg"
import royal from "../../project/img/napking/royal-napking.jpg"
import vanilla from "../../project/img/napking/vanilla-napking.jpg"
import xRose from "../../project/img/napking/x-rose-napking.jpg"

const inititalState = [{
    id: 200,
    name: "רקמת ברונז",
    qty: 10,
    img: bronzRikma,
    price: 230,
    description: "מפית בהירה עם רקמת ברונז פרחים מובלטת. קיימת גם מפה תואמת",
},
{
    id: 201,
    name: "גיאומטרי לבן",
    qty: 10,
    img: geometry,
    price: 230,
    description: "מפית לבנה עם טקסטורה גיאומטרית לבנה. שיקית ומיוחדת",
},
{
    id: 202,
    name: "מפית בהדפס אישי",
    qty: 10,
    img: hedpes,
    price: 230,
    description: "חדש!!! מפית בהדפס אישי - צרו איתנו קשר להדפסת מפיות מדליקות הנושאות את שם משפחתכם ",
},
{
    id: 203,
    name: "שיבולים",
    qty: 10,
    img: n4,
    price: 10,
    description: "מפית קיצית ומעניינת. מתאימה למפה חלקה",
},
{
    id: 204,
    name: "טורקית",
    qty: 40,
    img: n1,
    price: 13,
    description: "מפית צבעונית ומקושקשת. משדרגת פלאים מפה חלקה ומקפיצה את מראה השולחן",
},
{
    id: 205,
    name: "לבן תיפורים",
    qty: 10,
    img: n3,
    price: 230,
    description: "מפית לבנה עם תיפורים אינסופיים. קיימת גם מפה תואמת",
},
{
    id: 206,
    name: "כתמי פיצ'",
    qty: 10,
    img: pichBlue,
    price: 9,
    description: "מפית בגוונים חמימים- פיצ' אדמדם עם ניצוצי תכלת עדינים. קיימת מפה תואמת",
},
{
    id: 207,
    name: "פשתן מוקה",
    qty: 10,
    img: pishtanMoka,
    price: 230,
    description: "מית במרקם פשתני בגוון מוקה עדין. קיימת מפה תואמת",
},
{
    id: 208,
    name: "רויאל",
    qty: 100,
    img: royal,
    price: 16,
    description: "מפית לבנה עם תיפורים מוזהבים. יוקרתית במיוחד",
},
{
    id: 209,
    name: "ונילה",
    qty: 10,
    img: vanilla,
    price: 12,
    description: "מפית לבנה בוהקת עם תיפורים לבנים. אצילית",
},
{
    id: 210,
    name: "איקס רוז",
    qty: 10,
    img: xRose,
    price: 15,
    description: "מפית מיוחדת עם אשליית תלת מימד וטקסטורה מחליפת צבעים. קיימת גם מפה תואמת",
},
];

const napkingReducer = (state = inititalState, action) => {
    switch (action.type) {
        case "PURCHASENAPKINGS": {
            if (state.find((e) => e.id === action.playload.id)) {
                state.find((e) => e.id === action.playload.id).qty -= action.playload.items;
            } return  [...state ]
        }
    }
    return state;
}
export default napkingReducer;