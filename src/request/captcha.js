export function getCaptcha_Redis_key() {
    return localStorage.Captcha_Redis_key
}

export function setCaptcha_Redis_key(captcha_Redis_key) {
    return localStorage.Captcha_Redis_key = captcha_Redis_key
}

export function removeCaptcha_Redis_key() {
    return localStorage.removeItem('Captcha_Redis_key')
}