new Vue({
    el: "#container",
    data: {
    principal: null,
    rate: null,
    number: null,
    time: null
    },
    methods: {
        result(){
            let partOne = (1 + ((this.rate/100)/this.number));
            let partTwo= this.number * this.time;
            let partThree = Math.pow(partOne, partTwo);
        
            const compoundInterest = this.principal * partThree;

            if((partOne = "") && (partTwo = "") && (partThree = "")){
                return compoundInterest="";
            }else{
                return (compoundInterest).toFixed(2);
            };
        }
    }
});