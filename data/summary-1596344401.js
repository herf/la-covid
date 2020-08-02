$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "190,693",
				            "death": "4,669" ,
				            "dailycount": "2,303",
				            "dailydeath": "50" ,
				            "date":"08/01" ,
				            "info":"through 8:00pm 07/31/2020" ,
				            
							"testingaverage":"16,178" ,
							"peopletested":"1,778,763" ,
							"positivity":"9.8%" ,
							"hospitalizations":"1,904" ,                    
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
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);			


});



