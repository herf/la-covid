$( document ).ready(function() {
    var data = {
				    "content": { 
		
			 		   "count": "2,494,097",

                        "death": "28,480",

                        "dailycount": "26,354",

                        "dailydeath": "63",

                        "date": "01/23",
						"info": "through 6:00pm 01/22/2022",

                        "testingaverage": "235,131",

                        "peopletested": "10,871,507",

                    	"positivity": "17.47%", 

                    	"hospitalizations": "4,568",
                    	"datehospitalizations": "01/22"
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



