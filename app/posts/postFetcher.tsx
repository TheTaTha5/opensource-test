import { json } from "stream/consumers";
import { IPosts } from "../interfaces/interface";
import { promises as fs } from 'fs';

export default async function postFetcher() {
    let res = await fetch('https://post-api.opensource-technology.com/api/posts?page=1' ,{cache: 'no-store'});
    let posts:IPosts = await res.json()
    return console.log(posts);
}
