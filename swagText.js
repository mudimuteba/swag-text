function swag(str) {
    let swagword = "";
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "a":
          swagword += "@";
          break;
        case "l":
          swagword += "1";
          break;
        case "e":
          swagword += "3";
          break;
        case "o":
          swagword += "0";
          break;
        case "i":
          swagword += "!";
          break;
        case "s":
          swagword += "$";
          break;
        case "t":
          swagword += "+"; 
          break;
          case "c":
              swagword += "©";
              break;
        default:
          swagword += str[i];
      }
    }
    return swagword;
  }
  console.log(swag("today is a good day, yes cool right"));