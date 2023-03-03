export const purchaseMaps = (id, numOfItems)=>{
    return{
        type: "PURCHASEMAPS",
        playload: id, numOfItems
    }
}

export const purchaseNapkings = (id, numOfItems)=>{
    return{
        type: "PURCHASENAPKINGS",
        playload: id, numOfItems
    }
}

export const purchaseAccessoris = (id, numOfItems)=>{
    return{
        type: "PURCHASEACCESSORIES",
        playload: id, numOfItems
    }
}