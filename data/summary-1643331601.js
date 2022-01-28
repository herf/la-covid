$( document ).ready(function() {
    var data = {
				    "content": { 
		
			 		   "count": "2,586,739",

                        "death": "28,715",

                        "dailycount": "26,010",

                        "dailydeath": "85",

                        "date": "01/27",
						"info": "through 6:00pm 01/26/2022",

                        "testingaverage": "215,948",

                        "peopletested": "10,979,534",

                    	"positivity": "15.60%", 

                    	"hospitalizations": "4,323",
                    	"datehospitalizations": "01/26"
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



