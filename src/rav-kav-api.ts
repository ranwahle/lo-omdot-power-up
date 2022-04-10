import fetch from 'node-fetch';

const lookupUrl = 'https://ravkavonline.co.il/api/ravkav/lookups/';

export interface Profile {
    name: string;
    hidden: boolean;
}

export async function getProfiles(): Promise<Profile[]> {
    const response = await fetch(lookupUrl);
    const data: any = await response.json();
    console.log('Rav Kav data', data);
    return (data.customer_profile as Profile[]).filter(p => !p.hidden);
}