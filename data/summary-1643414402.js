$( document ).ready(function() {
    var data = {
				    "content": { 
		
			 		   "count": "2,610,385",

                        "death": "28,816",

                        "dailycount": "23,796",

                        "dailydeath": "101",

                        "date": "01/28",
						"info": "through 6:00pm 01/27/2022",

                        "testingaverage": "211,988",

                        "peopletested": "11,005,995",

                    	"positivity": "15.06%", 

                    	"hospitalizations": "4,192",
                    	"datehospitalizations": "01/27"
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



