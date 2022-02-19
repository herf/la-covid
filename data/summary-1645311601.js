$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,780,323",

			"death": "30,300",

			"dailycount": "3,221",

			"dailydeath": "85",


			"date": "02/19",
			"info": "through 6:00pm 02/18/2022",

			"testingaverage": "150,024",

			"peopletested": "11,343,592",

			"positivity": "3.37%",

			"hospitalizations": "1,502",
			"datehospitalizations": "02/18"


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



