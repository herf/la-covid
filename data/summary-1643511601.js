$( document ).ready(function() {
    var data = {
				    "content": { 
		
			 		   "count": "2,631,994",

                        "death": "28,886",

                        "dailycount": "21,709",

                        "dailydeath": "73",

                        "date": "01/29",
						"info": "through 6:00pm 01/28/2022",

                        "testingaverage": "209,215",

                        "peopletested": "11,033,571",

                    	"positivity": "14.67%", 

                    	"hospitalizations": "3,998",
                    	"datehospitalizations": "01/28"
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



