$( document ).ready(function() {
    var data = {
				    "content": { 
		
			 		   "count": "2,540,075",

                        "death": "28,540",

                        "dailycount": "18,822",

                        "dailydeath": "36",

                        "date": "01/25",
						"info": "through 6:00pm 01/24/2022",

                        "testingaverage": "219,333",

                        "peopletested": "10,928,638",

                    	"positivity": "16.61%", 

                    	"hospitalizations": "4,554",
                    	"datehospitalizations": "01/24"
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



