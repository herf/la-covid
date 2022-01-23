$( document ).ready(function() {
    var data = {
				    "content": { 
		
			 		   "count": "2,467,797",

                                           "death": "28,417",

                                           "dailycount": "39,117",

                                           "dailydeath": "72",

                                           "date": "01/22",
					   "info": "through 6:00pm 01/21/2022",

                                           "testingaverage": "238,382",

                                           "peopletested": "10,848,534",

                                           "positivity": "17.61%", 

                                           "hospitalizations": "4,698",
                                           "datehospitalizations": "01/21"
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



