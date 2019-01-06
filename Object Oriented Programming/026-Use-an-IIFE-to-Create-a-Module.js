//

let funModule = (function(){
    return {
      isCuteMixin: function(obj) {
          obj.isCute = function() {
            return true;
          };
        },
  
      singMixin: function(obj) {
          obj.sing = function() {
            console.log("Singing to an awesome tune");
          };
        }
    }
  })();




/*

The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

motionModule.glideMixin(duck);
duck.glide();

*/