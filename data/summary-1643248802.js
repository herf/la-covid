$( document ).ready(function() {
    var data = {
				    "content": { 
		
			 		   "count": "2,560,768",

                        "death": "28,630",

                        "dailycount": "20,866",

                        "dailydeath": "91",

                        "date": "01/26",
						"info": "through 6:00pm 01/25/2022",

                        "testingaverage": "217,980",

                        "peopletested": "10,947,930",

                    	"positivity": "16.09%", 

                    	"hospitalizations": "4,534",
                    	"datehospitalizations": "01/25"
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



