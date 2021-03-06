$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,200,120", 


								"death": "21,910", 


								"dailycount": "2,110", 


								"dailydeath": "144", 

								"date":"03/05" ,
								"info":"through 6:00pm 03/04/2021" ,
								
								//update M-F only with same info as above,
								"datem":"03/05" ,
								"infom":"through 6:00pm 03/04/2021" ,
								
								"testingaverage":"49,372" , 
								"peopletested":"5,875,919" , 
								"positivity":"2.60%" ,	
								"hospitalizations":"1,341" 
									
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



