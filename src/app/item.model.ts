export interface Item {
    itemName: string,
    itemDesc: string,
    configration: ConfigItem[]
}
export interface ConfigItem {
    lable: string,
    Name: string,
    price: number,
    desc: string,
    'blade Count'?:string 
}