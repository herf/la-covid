$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "204,167" ,
				            "death": "4,918" ,
				            "dailycount": "3,116" ,
				            "dailydeath": "53" ,
				            "date":"08/07" ,
				            "info":"through 8:00pm 08/06/2020" ,
				            
							"testingaverage":"18,833" ,
							"peopletested":"1,893,259" ,
							"positivity":"7.8%" ,
							"hospitalizations":"1,680" ,                    
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



