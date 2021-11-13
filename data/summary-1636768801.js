$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "1,509,073",




			"death": "26,838",



			"dailycount": "1,344",




			"dailydeath": "25",



			"date": "11/12",
			"info": "through 6:00pm 11/11/2021",


			"testingaverage": "137,819",


			"peopletested": "9,222,168",

			"positivity": "1.06%",

			"hospitalizations": "633",
			"datehospitalizations": "11/10"



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



