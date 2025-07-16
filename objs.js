var time = {
    hour: 0,
    minute: 59,
    second: 59,
    print : function(){
        console.log(`${this.hour} : ${this.minute} : ${this.second}`)
    },
    increaseTime()
    {
        this.second += 1;
        if(this.second == 60)
        {
           this.minute += 1;
           this.second = 0;
        }
        if(this.minute == 60)
        {
           this.hour += 1;
           this.minute = 0
        }
    }
}

time.print();
time.increaseTime();
time.print();


var auto = {
    man : "Nissan",
    mod : "M5",
    year: 2015,
    av_sp: 20,
    print : function(){
        console.log(`Manufacture : ${this.man} \nModel : ${this.mod} \nYear : ${this.year} \nAverage speed(kph): ${this.av_sp}`)
    },
    countTime(len){
        time = len / this.av_sp;
        copy = time;
        if(time >= 4)
        {
            time += copy / 4;
        }
        console.log(`Time spent : ${time} hours`);
    }
}
auto.print();
auto.countTime(100);
