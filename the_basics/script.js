var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    amountsPaid: [],
    tipCalc: function(){
        for(i=0; i<this.bills.length; i++){
            if(this.bills[i] < 50){
                this.tip = this.bills[i] * (20/100);
                this.amountPaid = this.tip + this.bills[i];
                this.tips.push(this.tip);
                this.amountsPaid.push(this.amountPaid);
            }
            else if(this.bills[i] >= 50 && this.bills[i] < 200){
                this.tip = this.bills[i] * (15/100);
                this.amountPaid = this.tip + this.bills[i];
                this.tips.push(this.tip);
                this.amountsPaid.push(this.amountPaid);
            }else {
                this.tip = this.bills[i] * (10/100);
                this.amountPaid = this.tip + this.bills[i];
                this.tips.push(this.tip);
                this.amountsPaid.push(this.amountPaid);
            }
        }
    }
}

john.tipCalc();
console.log(john);

var mark = {
    bills: [77, 5, 110, 45],
    tips: [],
    amountsPaid: [],
    tipCalc: function(){
        for(i=0; i<this.bills.length; i++){
            if(this.bills[i] < 100){
                this.tip = this.bills[i] * (20/100);
                this.amountPaid = this.tip + this.bills[i];
                this.tips.push(this.tip);
                this.amountsPaid.push(this.amountPaid);
            }
            else if(this.bills[i] >= 100 && this.bills[i] < 300){
                this.tip = this.bills[i] * (10/100);
                this.amountPaid = this.tip + this.bills[i];
                this.tips.push(this.tip);
                this.amountsPaid.push(this.amountPaid);
            }else {
                this.tip = this.bills[i] * (25/100);
                this.amountPaid = this.tip + this.bills[i];
                this.tips.push(this.tip);
                this.amountsPaid.push(this.amountPaid);
            }
        }
    }
}
mark.tipCalc();
console.log(mark);

function averageTip(tipsArray){
    var sum = 0;
    for(i=0; i<tipsArray.length; i++){
        sum += tipsArray[i];
    }
    var avg = sum / tipsArray.length;
    return avg;
}

if (averageTip(mark.tips) > averageTip(john.tips)){
    console.log("Mark's tips are more the that of John's tip. " + " Mark tipped an average of " + averageTip(mark.tips) + " while John tipped an average of " + averageTip(john.tips));
}else if(averageTip(mark.tips) < averageTip(john.tips)){
    console.log("John's tips are more the that of Mark's tip. " + " John tipped an average of " + averageTip(john.tips) + " while Mark tipped an average of " + averageTip(mark.tips));
}
