export function validateEmail(email) {
    // regular expression for email validation
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return re.test(String(email).toLowerCase())
}