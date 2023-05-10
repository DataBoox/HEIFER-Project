import moment from "moment";
import { parse } from 'tldts';
import { variables } from './variables';



export const filterWordCount = (name: string, count: number = 2) => {
    let splitNames = name.split(" ").filter(text => text.length);
    return (splitNames.length > count) ? splitNames.slice(0, count).join(" ") : name;
}

export const Greeting = () => {
    let presentTime = new Date();
    let hrs = presentTime.getHours();
    if (hrs < 12) {
        return "Good morning";
    } else if (hrs >= 12 && hrs < 17) {
        return "Good afternoon";
    } else return "Good evening";
};

export function sterilizeNumber(text: string): string {
    let value = parseInt(text.replace(/[^0-9]/g, ''));
    return (value) ? value.toString() : '';
}

export const heatCheck = (dob: string) => {
    const today = moment().format("YYYY-MM-DD");
    const maturityDate = moment(dob).add(6, 'months').format("YYYY-MM-DD");
    return {
        mature: today > maturityDate,
        maturityDate: maturityDate,
        formattedDate: moment(maturityDate).format("dddd, Do MMM YYYY")
    }
}

export const randomString = (length: number = 16, chars: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

export const timeReference = (prefix?: string, suffix?: string, separator: string = '_') => {
    const prefixString = (Boolean(prefix) ? (prefix + separator) : '');
    const suffixString = (Boolean(suffix) ? (separator + suffix) : '');

    return prefixString + (new Date()).getTime().toString() + suffixString;
}


export const maxItems = (data: any[] = [], count?: number) => {
    if (count && count <= data.length) return data.slice(0, count)
    return data;
}

export const getSubDomain = (defaultDomain?: string) => {
    const subdomain = parse(window.location.href).subdomain;
    let selSubDomain = (subdomain && subdomain.length > 1) ? subdomain : defaultDomain;
    if (selSubDomain && variables.invalidSubDomains.includes(selSubDomain)) return undefined;
    return selSubDomain;
}

export const redirectTo = (address: string) => {
    window.location.href = address;
    return;
}

export const convertObjectToURLParams = (data: any) => {
    const params = Object.keys(data).map(key => {
        const rc = data[key];
        if(rc !== undefined && rc !== null){
            return `${key}=${encodeURIComponent(rc)}`;
        }
    }).join('&');
    console.log(params)
    return params;
}