

function shows(){
    const drinks = ['Wine','Whiskey','Red Wine','Vodka','Rum','Champeign','Taquila'];
    const name = document.getElementById("input1").value;
    const age = document.getElementById("input2").value;
    const drink = document.getElementById("input3").value;
    const total = name+age+drink;
    if(age<=18){
         document.getElementById("shows0").innerHTML = "Sorry your are not an adult!!";
    }
    else{
        document.getElementById("shows0").innerHTML = "Name :" + name;
        document.getElementById("shows1").innerHTML = "Age :" + age;
        document.getElementById("shows2").innerHTML = "Your Drink :" + drink;
        document.getElementById("sugs").innerHTML = "Few More Suggestions";
        document.getElementById("suggs").innerHTML = drinks;
    }
    class bars{
        constructor(){
            this.items = [];
            this.count = 0;
        }
        push(){
            let elements = total;
            this.items[this.count]= elements;
            document.getElementById("datas").innerHTML = `Hi : ${elements}`;
            this.count += 1;
            return this.count -1;
        }
        peek(){
            if(this.count >= 0){
                document.getElementById("fatas").innerHTML = `People Visited ${this.count}`
                
            }
        }
        
    }
    const Bars = new bars();
    Bars.push();
    Bars.peek();
    
    
}
