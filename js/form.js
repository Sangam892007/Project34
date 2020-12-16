class Form{

    constructor(){
        this.input = createInput("Your pet's name");
        this.button = createButton("Time to take your dog home");
        this.greeting = createElement("h2");
        this.title = createElement("h2");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("Virtual Pet");
    this.title.position(displayWidth/2 - 50, 0);
    
    this.input.position(650 , 350 );
    this.button.position(640,380);
    this.button.mousePressed(()=>{
        gameState = 1;
    })
    }
    

}