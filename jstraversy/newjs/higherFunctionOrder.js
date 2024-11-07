const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


  //for each

  companies.forEach(function(Company){
    console.log(Company.category);
    
  })

  //filtetr

 // const candrink=ages.filter(function(age){
 //   if(age>22){
 //       return true;
 //   }
 // })
 //// console.log(candrink);
//
 //const candrink=ages.filter(age=>age>22);
 //console.log(candrink);
 // 
 //const retailcompanies=companies.filter(company=>company.category==='Retail');
 //console.log(retailcompanies);
//
 //const techcompany=companies.filter(company=>company.category==='Technology');
 //console.log(techcompany);


 const strating=companies.filter(company=>company.start>2010);
 console.log(strating);
 

 //map( we just create a  whole new array for this )

 //const test=companies.map(function(company){
 //   return company.name;
 //})
//
 //console.log(test);
 
//
 //const test=companies.map(comapnt=>comapnt.name);
 //console.log(test);
 

 const test2=companies.map(company=>company.category);
 console.log(test2);



 //sort

 //const sortedcompany=companies.sort(function(c1,c2){
 //   if(c1.start>c2.start){return 1;
//
 //   }
 //   else{return -1;}
 //})
//
 //console.log(sortedcompany);
 //

 const sortedcompany=companies.sort((a,b)=>a.start>b.start?1:-1);
 console.log(sortedcompany);

 //reduce 

 //const totalAges=ages.reduce(function(total,age){
 // return total+age;
 //},0);
 //console.log(totalAges);

 const totalAges=ages.reduce((total,age)=>total+age,0);
 console.log(totalAges);
 