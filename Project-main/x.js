//conter_section

document.addEventListener("DOMContentloaded", () => {
    function counter(id, start, end, duration){
        let obj= document.getElementById(id),
        current= start,
        range= end-start,
        increment= end>start? 1:-1,
        step= math.abs(math.floor(duration / range)),
        timer= setInterval(()=>{
            current+=increment;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);

            }
        }, step);
    }
    counter("count1",0,1000,3000);
    counter("count2",100,1000,3000);
    counter("count3",9,1000,3000);
});