class MessageParser {

    constructor( target, context, msg, self){
        this.target = target;
        this.context = context;
        this.msg = msg;
        this.self = self;
        
    }

     parseMessage(){
        if (this.self) { return; } // Ignore messages from the bot

        // Remove whitespace from chat message
        const commandName = this.msg.trim();
      
        // If the command is known, let's execute it
        if (commandName === '!dice') {
          const num = this.rollDice();
          console.log(`* Executed ${commandName} command`);
           var str = (this.target, `You rolled a ${num}`).toString();
          console.log(str)
           return(str);
          
        } else {
          console.log(`* Unknown command ${commandName}`);
        }
    }

    rollDice () {
        const sides = 6;
        return Math.floor(Math.random() * sides) + 1;
      }
}

module.exports = MessageParser;