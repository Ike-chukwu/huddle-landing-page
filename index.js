const counts = document.querySelectorAll('header .box-container .box h2')


counts.forEach(count => {
    count.innerHTML = '0'
    
    function counter(){
        let c = +count.innerHTML
        const target = +count.getAttribute('data')
        const increament =  Math.floor(target/200)
        
        if( c < target){
            count.innerHTML = Math.ceil(c + increament)
            setTimeout(counter, 10)
        }
        else if (c === target)
        {
            if(target === 1400){
                count.innerHTML = `1.4k`
            }
            else if(target === 2000000){
                count.innerHTML = `2m`
            }
        }
    }

    counter()

})