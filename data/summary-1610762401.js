$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "989,928", 
								"death": "13,489" ,
								"dailycount": "15,051", 
								"dailydeath": "258" ,
								"date":"01/15" ,
								"info":"through 6:00pm 01/14/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/15" ,
								"infom":"through 6:00pm 01/14/2021" ,
								
								"testingaverage":"108,803" , 
								"peopletested":"5,154,148" ,
								"positivity":"17.80%" ,		
								"hospitalizations":"7,715"		
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



