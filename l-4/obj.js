let users = {
    //  key          value
        firstName: 'Zakaria',
        lastName : 'sassi',
        age :26,
        isActive : false,
        printName: function (){
            console.log("this is zeko");
        },

        skils : [
            "web devoper",
            "mobile apps devolper",
            "ui ux designer",
            "content creator",
            "graphic designer",
            "web designer",
          ],

          books : {
              java : 2,
              js : 41,
              html:2,

          }

}



document.write(users.firstName + " " + users.lastName);
document.write(users.skils[0]);
document.write( users.books.java);
users.printName();


