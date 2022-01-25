$( document ).ready(function() {
    var data = {
				    "content": { 
		
			 		   "count": "2,519,778",

                        "death": "28,507",

                        "dailycount": "25,784",

                        "dailydeath": "27",

                        "date": "01/24",
						"info": "through 6:00pm 01/23/2022",

                        "testingaverage": "213,924",

                        "peopletested": "10,910,550",

                    	"positivity": "17.34%", 

                    	"hospitalizations": "4,573",
                    	"datehospitalizations": "01/23"
					}       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.datehospitalizations);
				$('#cse').html(content.info);	
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



