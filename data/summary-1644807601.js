$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,761,870",

			"death": "29,902",

			"dailycount": "4,889",

			"dailydeath": "58",


			"date": "02/13",
			"info": "through 6:00pm 02/12/2022",

			"testingaverage": "162,537",

			"peopletested": "11,280,314",

			"positivity": "5.40%",

			"hospitalizations": "2,086",
			"datehospitalizations": "02/12"


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



