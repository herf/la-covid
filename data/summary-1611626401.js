$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,079,396", 

								"death": "15,303", 

								"dailycount": "6,642", 

								"dailydeath": "43", 

								"date":"01/25" ,
								"info":"through 6:00pm 01/24/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/25" ,
								"infom":"through 6:00pm 01/24/2021" ,
								
								"testingaverage":"84,363" ,
								"peopletested":"5,395,322" ,
								"positivity":"13.80%" ,		
								"hospitalizations":"6,486"									
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



