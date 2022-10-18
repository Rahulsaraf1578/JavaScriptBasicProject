function set(){
    let elements = document.getElementsByName('cssProperty');

    for(let i=0;i<elements.length;i++){
        let cssProperty = 
        elements[i].getAttribute('id');

        let cssValue=
        elements[i].value;

        let div=
        document.getElementById('modify');

        div.style[cssProperty] = cssValue;
        // console.log(div.style[i]);
    }
}

document.getElementById('set').addEventListener('click', set);
