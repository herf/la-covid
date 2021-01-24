$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,064,887", 

								"death": "15,162", 

								"dailycount": "10,537", 

								"dailydeath": "269", 

								"date":"01/23" ,
								"info":"through 6:00pm 01/22/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/22" ,
								"infom":"through 6:00pm 01/21/2021" ,
								
								"testingaverage":"92,819" ,
								"peopletested":"5,354,788" ,
								"positivity":"14.20%" ,		
								"hospitalizations":"6,881"									
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



