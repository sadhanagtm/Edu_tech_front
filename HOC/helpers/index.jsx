import cookie from "cookie"

export function parseCookies(req) {
    console.log(document.cookie)
    return cookie.parse(req ? req.headers.cookie || "" :
     document.cookie)
}