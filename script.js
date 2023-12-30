function bgcolor() {
    let btn = document.getElementsByTagName('button')
    let x = Math.floor(Math.random() * 256000)
    console.log(x);
    document.body.style.background = `#${x}`
}