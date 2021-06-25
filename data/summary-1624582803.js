$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,248,415",

								"death": "24,465",

								"dailycount": "314",
								"dailydeath": "10",
								"date":"06/24" ,
								"info":"through 6:00pm 06/23/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/24" ,
								"infom":"through 6:00pm 06/23/2021" ,

								"testingaverage":"35,861",

								"peopletested":"6,982,451",

								"positivity":"0.68%" , 
								"hospitalizations":"234" 

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
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#dte_m').html(content.datem);
				$('#cse_m').html(content.infom);
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



