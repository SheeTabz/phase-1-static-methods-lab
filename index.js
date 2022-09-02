class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-']+/g, ' ')
  }
  static titleize(string){
    let sentence = string.split(' ');
    return sentence.forEach(str => this.capitalize.join(' '));
  }
}
let name = Formatter.capitalize("job")
console.log(name)