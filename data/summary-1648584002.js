$( document ).ready(function() {
    var data = {
				    "content": { 
		
			"count": "2,831,655",


			"death": "31,626",


			"dailycount": "541",


			"dailydeath": "7",



			"date": "03/29",
			"info": "through 6:00pm 03/28/2022",

			"testingaverage": "110,843",

			"peopletested": "11,675,439",

			"positivity": "0.67%",

			"hospitalizations": "321",
			"datehospitalizations": "03/28"

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



