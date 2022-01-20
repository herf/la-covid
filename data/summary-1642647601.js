$( document ).ready(function() {
    var data = {
				    "content": { 

		
			"count": "2,343,821",



			"death": "28,181",


			"dailycount": "31,018",


			"dailydeath": "59",

			"date": "01/19",
			"info": "through 6:00pm 01/18/2022",

			"testingaverage": "245,469",


			"peopletested": "10,725,954",

			"positivity": "19.14%",


			"hospitalizations": "4,799",
			"datehospitalizations": "01/18"


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



