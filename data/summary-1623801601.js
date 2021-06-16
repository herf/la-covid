$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
                                "count": "1,246,619",

								"death": "24,416",
								"dailycount": "210",
								"dailydeath": "6",
								"date":"06/15" ,
								"info":"through 6:00pm 06/14/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/15" ,
								"infom":"through 6:00pm 06/14/2021" ,

								"testingaverage":"58,429",

								"peopletested":"6,908,370",

								"positivity":"0.40%" ,
								"hospitalizations":"218" 



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



