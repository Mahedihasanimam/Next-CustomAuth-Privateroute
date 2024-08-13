import { NextResponse } from "next/server"

export default function middleware(req){
    let verify=localStorage.getItem('user')
    let url=req.url
    if(!verify){
        return NextResponse.redirect('/login')
    }
}