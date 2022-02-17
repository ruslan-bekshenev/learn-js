function domainName(url){
  return url.replace(/.+\/\/|www.|\..+/g, '');
}

console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))
console.log(domainName("www.xakep.ru"))