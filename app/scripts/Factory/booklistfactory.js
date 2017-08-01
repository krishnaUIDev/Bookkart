(function (angular) {
  'use strict';
  function BookService(){
    var BookList =
      [
        {
          "img url": "Voltsillam",
          "name": "Haywood",
          "price": 21,
          "Rating": 43,
          "binding": "com.woothemes.Y-Solowarm",
          "Relese": "9/5/2016"
        },
        {
          "img url": "Tresom",
          "name": "Clarice",
          "price": 68,
          "Rating": 88,
          "binding": "net.sourceforge.Lotlux",
          "Relese": "12/3/2016"
        },
        {
          "img url": "Home Ing",
          "name": "Emera",
          "price": 32,
          "Rating": 3,
          "binding": "com.sitemeter.Toughjoyfax",
          "Relese": "1/10/2017"
        },
        {
          "img url": "Overhold",
          "name": "Truman",
          "price": 42,
          "Rating": 44,
          "binding": "edu.illinois.Tempsoft",
          "Relese": "9/25/2016"
        },
        {
          "img url": "Fintone",
          "name": "Casar",
          "price": 42,
          "Rating": 99,
          "binding": "net.behance.Zathin",
          "Relese": "2/3/2017"
        },
        {
          "img url": "Rank",
          "name": "Benedick",
          "price": 10,
          "Rating": 83,
          "binding": "com.adobe.Sonair",
          "Relese": "2/12/2017"
        },
        {
          "img url": "Andalax",
          "name": "Emilia",
          "price": 51,
          "Rating": 73,
          "binding": "org.simplemachines.Ronstring",
          "Relese": "7/19/2016"
        },
        {
          "img url": "Toughjoyfax",
          "name": "Pall",
          "price": 59,
          "Rating": 64,
          "binding": "com.adobe.Fintone",
          "Relese": "3/23/2017"
        },
        {
          "img url": "Asoka",
          "name": "Ashly",
          "price": 40,
          "Rating": 22,
          "binding": "jp.geocities.Treeflex",
          "Relese": "1/28/2017"
        },
        {
          "img url": "Bytecard",
          "name": "Jaime",
          "price": 65,
          "Rating": 10,
          "binding": "com.linkedin.Sub-Ex",
          "Relese": "6/17/2017"
        },
        {
          "img url": "Otcom",
          "name": "Tabbatha",
          "price": 12,
          "Rating": 44,
          "binding": "com.tripod.Ventosanzap",
          "Relese": "6/29/2017"
        },
        {
          "img url": "Overhold",
          "name": "Ellwood",
          "price": 28,
          "Rating": 84,
          "binding": "io.pen.Zontrax",
          "Relese": "7/22/2016"
        },
        {
          "img url": "Ronstring",
          "name": "Chrotoem",
          "price": 99,
          "Rating": 60,
          "binding": "us.imageshack.Ronstring",
          "Relese": "11/4/2016"
        },
        {
          "img url": "Trippledex",
          "name": "Clemmy",
          "price": 10,
          "Rating": 20,
          "binding": "vu.de.Cookley",
          "Relese": "5/21/2017"
        },
        {
          "img url": "Andalax",
          "name": "Fabiano",
          "price": 46,
          "Rating": 63,
          "binding": "uk.co.bbc.Cardify",
          "Relese": "8/10/2016"
        },
        {
          "img url": "Y-Solowarm",
          "name": "Warden",
          "price": 100,
          "Rating": 96,
          "binding": "com.youtube.Voyatouch",
          "Relese": "1/20/2017"
        },
        {
          "img url": "Alpha",
          "name": "Dusty",
          "price": 81,
          "Rating": 59,
          "binding": "uk.ac.ox.Flexidy",
          "Relese": "12/13/2016"
        },
        {
          "img url": "Home Ing",
          "name": "Keene",
          "price": 92,
          "Rating": 1,
          "binding": "gov.fda.Zoolab",
          "Relese": "12/22/2016"
        },
        {
          "img url": "Andalax",
          "name": "Eolanda",
          "price": 42,
          "Rating": 45,
          "binding": "com.marketwatch.Tempsoft",
          "Relese": "7/15/2016"
        },
        {
          "img url": "Zaam-Dox",
          "name": "Reid",
          "price": 29,
          "Rating": 15,
          "binding": "cn.gov.miibeian.Zamit",
          "Relese": "12/21/2016"
        },
        {
          "img url": "Tin",
          "name": "Giacinta",
          "price": 97,
          "Rating": 48,
          "binding": "com.smugmug.Solarbreeze",
          "Relese": "11/12/2016"
        },
        {
          "img url": "Stringtough",
          "name": "Nollie",
          "price": 86,
          "Rating": 71,
          "binding": "com.indiatimes.Regrant",
          "Relese": "12/16/2016"
        },
        {
          "img url": "Vagram",
          "name": "Marilyn",
          "price": 93,
          "Rating": 73,
          "binding": "edu.cornell.Alpha",
          "Relese": "8/12/2016"
        },
        {
          "img url": "Sonair",
          "name": "Waly",
          "price": 33,
          "Rating": 77,
          "binding": "com.nature.Subin",
          "Relese": "11/1/2016"
        },
        {
          "img url": "Home Ing",
          "name": "Farra",
          "price": 50,
          "Rating": 80,
          "binding": "com.cyberchimps.Y-find",
          "Relese": "9/5/2016"
        },
        {
          "img url": "Bamity",
          "name": "Correna",
          "price": 66,
          "Rating": 98,
          "binding": "io.soup.Treeflex",
          "Relese": "5/26/2017"
        },
        {
          "img url": "Tres-Zap",
          "name": "Jean",
          "price": 27,
          "Rating": 24,
          "binding": "edu.cmu.Namfix",
          "Relese": "11/2/2016"
        },
        {
          "img url": "Veribet",
          "name": "Iggie",
          "price": 26,
          "Rating": 91,
          "binding": "com.apple.Cardguard",
          "Relese": "9/3/2016"
        },
        {
          "img url": "Alphazap",
          "name": "Jenelle",
          "price": 36,
          "Rating": 74,
          "binding": "de.t-online.Temp",
          "Relese": "9/11/2016"
        }
      ];
    return{
      getBooks: function () {
        return BookList;

      }
    };
  }
  BookService.$inject= [];


  angular.module('booklist.factory').factory('bookService',BookService);

})(window.angular || (window.angular = {}));
